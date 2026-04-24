import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

import type {
  PortfolioImportResult,
  PortfolioItemOut,
  PortfolioListResponse,
  PortfolioResponse,
  PortfolioOut,
  SteamInventoryResponse,
} from "cs2cap";
import { InventoryApi, ItemsApi, PortfolioApi, ResponseError } from "cs2cap";

import { formatApiError } from "../../_shared/api.js";
import { buildConfiguration, loadApiKey } from "../../_shared/auth.js";
import { CleanupRegistry } from "../../_shared/cleanup.js";
import { collectItemIds, resolveCatalogItems } from "../../_shared/items.js";
import { formatMoney, renderTable } from "../../_shared/render.js";

const SCRIPT_PATH = fileURLToPath(import.meta.url);

function readOptions(): { query: string; itemType: string; importFromSteam: boolean; keepResources: boolean } {
  const { values } = parseArgs({
    options: {
      query: { type: "string" },
      "item-type": { type: "string" },
      "import-from-steam": { type: "boolean" },
      "keep-resources": { type: "boolean" },
    },
  });

  return {
    query: values.query ?? "AK-47",
    itemType: values["item-type"] ?? "Weapon",
    importFromSteam: values["import-from-steam"] ?? false,
    keepResources: values["keep-resources"] ?? false,
  };
}

async function main(): Promise<number> {
  const args = readOptions();
  const cleanup = new CleanupRegistry(args.keepResources);

  let bearerToken: string;
  try {
    bearerToken = loadApiKey("CS2C_API_KEY", SCRIPT_PATH);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    return 1;
  }

  const configuration = buildConfiguration(bearerToken);
  let portfolio: PortfolioOut | undefined;
  let allPortfolios: PortfolioListResponse | undefined;
  let firstEntry: PortfolioItemOut | undefined;
  let portfolioItemsBeforeRemoval: PortfolioItemOut[] | undefined;
  let adHocValue: PortfolioResponse | undefined;
  let savedValue: PortfolioResponse | undefined;
  let portfolioItemsAfterRemoval: PortfolioItemOut[] | undefined;
  let inventorySummary: SteamInventoryResponse | undefined;
  let importSummary: PortfolioImportResult | undefined;
  let cleanupResults: Awaited<ReturnType<CleanupRegistry["run"]>> = [];

  try {
    const itemsApi = new ItemsApi(configuration);
    const portfolioApi = new PortfolioApi(configuration);
    const inventoryApi = new InventoryApi(configuration);

    const resolvedItems = (
      await resolveCatalogItems(itemsApi, {
        query: args.query,
        itemType: args.itemType,
        limit: 2,
      })
    ).slice(0, 2);
    if (resolvedItems.length < 2) {
      console.log("Need at least 2 catalog items to demonstrate the portfolio flow.");
      return 1;
    }

    const itemIds = collectItemIds(resolvedItems);
    portfolio = await portfolioApi.createPortfolioEndpointV1PortfolioPost({
      portfolioCreate: {
        name: `SDK Example ${new Date().toISOString().replace(/[-:]/g, "").slice(0, 15)}`,
      },
    });
    cleanup.add(`delete portfolio ${portfolio.id}`, () =>
      portfolioApi.deletePortfolioEndpointV1PortfolioPortfolioIdDelete({
        portfolioId: portfolio!.id,
      }),
    );

    allPortfolios = await portfolioApi.listPortfoliosEndpointV1PortfolioGet();
    firstEntry = await portfolioApi.addPortfolioItemEndpointV1PortfolioPortfolioIdItemsPost({
      portfolioId: portfolio.id,
      portfolioAddItemRequest: {
        itemId: itemIds[0]!,
        quantity: 2,
      },
    });
    await portfolioApi.addPortfolioItemEndpointV1PortfolioPortfolioIdItemsPost({
      portfolioId: portfolio.id,
      portfolioAddItemRequest: {
        itemId: itemIds[1]!,
        quantity: 1,
      },
    });
    portfolioItemsBeforeRemoval =
      await portfolioApi.listPortfolioItemsEndpointV1PortfolioPortfolioIdItemsGet({
        portfolioId: portfolio.id,
      });
    adHocValue = await portfolioApi.portfolioValueV1PortfolioValuePost({
      portfolioRequest: {
        items: [
          { itemId: itemIds[0]!, quantity: 2 },
          { itemId: itemIds[1]!, quantity: 1 },
        ],
        currency: "USD",
      },
    });
    savedValue = await portfolioApi.savedPortfolioValueEndpointV1PortfolioPortfolioIdValueGet({
      portfolioId: portfolio.id,
    });
    await portfolioApi.removePortfolioItemEndpointV1PortfolioPortfolioIdItemsEntryIdDelete({
      portfolioId: portfolio.id,
      entryId: firstEntry.id,
    });
    portfolioItemsAfterRemoval =
      await portfolioApi.listPortfolioItemsEndpointV1PortfolioPortfolioIdItemsGet({
        portfolioId: portfolio.id,
      });

    if (args.importFromSteam) {
      try {
        inventorySummary = await inventoryApi.fetchSteamInventoryEndpointV1InventorySteamGet();
        if (inventorySummary.data.length > 0) {
          importSummary = await portfolioApi.importInventoryEndpointV1PortfolioPortfolioIdImportPost({
            portfolioId: portfolio.id,
            portfolioImportRequest: {
              assetIds: [inventorySummary.data[0]!.assetid],
            },
          });
        }
      } catch (error) {
        if (error instanceof ResponseError && error.response.status === 403) {
          console.log(
            "Steam inventory import skipped: this account does not have a linked Steam account.",
          );
        } else {
          throw error;
        }
      }
    }
  } catch (error) {
    console.error(await formatApiError(error));
    return 1;
  } finally {
    cleanupResults = await cleanup.run();
  }

  if (
    !portfolio ||
    !allPortfolios ||
    !firstEntry ||
    !portfolioItemsBeforeRemoval ||
    !adHocValue ||
    !savedValue ||
    !portfolioItemsAfterRemoval
  ) {
    return 1;
  }

  console.log("Portfolio list (/v1/portfolio):");
  console.log(
    renderTable(
      ["portfolio_id", "name", "item_count"],
      allPortfolios.data.slice(0, 10).map((entry) => [entry.id, entry.name, entry.itemCount]),
    ),
  );
  console.log();

  console.log("Saved portfolio items before removal:");
  console.log(
    renderTable(
      ["entry_id", "market_hash_name", "qty", "source"],
      portfolioItemsBeforeRemoval.map((entry) => [
        entry.id,
        entry.marketHashName,
        entry.quantity,
        entry.source,
      ]),
    ),
  );
  console.log();

  console.log("Ad hoc valuation (/v1/portfolio/value):");
  console.log(
    renderTable(
      ["item", "qty", "unit_price", "item_value"],
      adHocValue.data.lineItems.map((item) => [
        item.marketHashName,
        item.quantity,
        formatMoney(item.bestAsk, adHocValue.meta.currency),
        formatMoney(item.itemValue, adHocValue.meta.currency),
      ]),
    ),
  );
  console.log(`Total: ${formatMoney(adHocValue.data.totalValue, adHocValue.meta.currency)}`);
  console.log();

  console.log("Saved valuation (/v1/portfolio/{id}/value):");
  console.log(
    renderTable(
      ["item", "qty", "unit_price", "item_value"],
      savedValue.data.lineItems.map((item) => [
        item.marketHashName,
        item.quantity,
        formatMoney(item.bestAsk, savedValue.meta.currency),
        formatMoney(item.itemValue, savedValue.meta.currency),
      ]),
    ),
  );
  console.log(`Total: ${formatMoney(savedValue.data.totalValue, savedValue.meta.currency)}`);
  console.log();

  console.log("Removed entry result:");
  console.log("- ok: True");
  console.log(`- removed_entry_id: ${firstEntry.id}`);
  console.log();

  console.log("Saved portfolio items after removal:");
  console.log(
    renderTable(
      ["entry_id", "market_hash_name", "qty", "source"],
      portfolioItemsAfterRemoval.map((entry) => [
        entry.id,
        entry.marketHashName,
        entry.quantity,
        entry.source,
      ]),
    ),
  );
  console.log();

  if (inventorySummary) {
    console.log("Steam inventory snapshot:");
    console.log(`- total_count: ${inventorySummary.totalCount}`);
    if (inventorySummary.data.length > 0) {
      console.log(
        renderTable(
          ["assetid", "market_hash_name", "qty", "name"],
          inventorySummary.data.slice(0, 5).map((item) => [
            item.assetid,
            item.marketHashName,
            item.quantity,
            item.name,
          ]),
        ),
      );
    } else {
      console.log("No Steam inventory items were returned.");
    }
    console.log();
  }

  if (importSummary) {
    console.log("Import result (/v1/portfolio/{id}/import):");
    console.log(`- imported: ${importSummary.imported}`);
    console.log(`- skipped: ${importSummary.skipped}`);
    console.log(`- unresolved: ${importSummary.unresolved.length}`);
    console.log();
  }

  console.log("Cleanup summary:");
  console.log(
    renderTable(
      ["resource", "status", "detail"],
      cleanupResults.map((result) => [
        result.label,
        result.ok ? "ok" : "failed",
        result.detail,
      ]),
    ),
  );
  return 0;
}

void main().then((code) => {
  process.exitCode = code;
});
