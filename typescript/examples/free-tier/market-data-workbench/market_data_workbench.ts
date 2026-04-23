import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

import {
  ForeignExchangeApi,
  ItemsApi,
  PricesApi,
  ProvidersApi,
} from "cs2cap-sdk";

import { callOrSkip, formatApiError } from "../../_shared/api.js";
import { buildConfiguration, loadApiKey } from "../../_shared/auth.js";
import { parseIntegerOption } from "../../_shared/cli.js";
import { collectItemIds, resolveCatalogItems } from "../../_shared/items.js";
import {
  formatMoney,
  formatTimestamp,
  renderTable,
} from "../../_shared/render.js";

const SCRIPT_PATH = fileURLToPath(import.meta.url);

function readOptions(): { query: string; itemType: string; count: number } {
  const { values } = parseArgs({
    options: {
      query: { type: "string" },
      "item-type": { type: "string" },
      count: { type: "string" },
    },
  });

  return {
    query: values.query ?? "AK-47",
    itemType: values["item-type"] ?? "Weapon",
    count: parseIntegerOption(values.count, 3, "--count"),
  };
}

async function main(): Promise<number> {
  const args = readOptions();

  let bearerToken: string;
  try {
    bearerToken = loadApiKey("CS2C_API_KEY", SCRIPT_PATH);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    return 1;
  }

  const configuration = buildConfiguration(bearerToken);

  try {
    const itemsApi = new ItemsApi(configuration);
    const providersApi = new ProvidersApi(configuration);
    const fxApi = new ForeignExchangeApi(configuration);
    const pricesApi = new PricesApi(configuration);

    const catalogItems = await resolveCatalogItems(itemsApi, {
      query: args.query,
      itemType: args.itemType,
      limit: Math.max(args.count, 3),
    });
    const selectedItems = catalogItems.slice(0, args.count);

    if (selectedItems.length === 0) {
      console.log("No catalog items matched the requested filters.");
      return 0;
    }

    const itemIds = collectItemIds(selectedItems);
    const primaryItem = selectedItems[0]!;

    const { data: providers, note: providersNote } = await callOrSkip(
      "Provider metadata",
      () => providersApi.listProvidersV1ProvidersGet(),
    );
    const { data: fxRates, note: fxNote } = await callOrSkip("FX rates", () =>
      fxApi.getFxRatesV1FxGet(),
    );

    const priceRows: Array<Array<string | number>> = [];
    const priceNotes: string[] = [];

    for (const item of selectedItems) {
      if (item.itemId == null) {
        continue;
      }

      const { data: pricePage, note: priceNote } = await callOrSkip(
        `Prices for ${item.marketHashName}`,
        () =>
          pricesApi.listPricesV1PricesGet({
            itemId: item.itemId!,
            currency: "USD",
            limit: 10,
          }),
      );
      if (priceNote) {
        priceNotes.push(priceNote);
      }
      if (pricePage) {
        const bestQuote =
          pricePage.items.length > 0
            ? pricePage.items.reduce((best, quote) =>
                quote.lowestAsk < best.lowestAsk ? quote : best,
              )
            : null;

        priceRows.push([
          item.itemId,
          item.marketHashName,
          formatMoney(bestQuote?.lowestAsk),
          bestQuote?.provider ?? "N/A",
        ]);
      }

    }

    const { data: candles, note: candlesNote } = await callOrSkip("Price candles", () =>
      pricesApi.priceCandlesV1PricesCandlesGet({
        itemId: itemIds[0],
        interval: "1d",
        lookback: "7d",
        fill: false,
        currency: "USD",
        limit: 7,
      }),
    );
    console.log("Resolved catalog items:");
    console.log(
      renderTable(
        ["item_id", "market_hash_name", "rarity"],
        selectedItems.map((item) => [
          item.itemId ?? "N/A",
          item.marketHashName,
          item.rarityName ?? "N/A",
        ]),
      ),
    );
    console.log();

    if (providers) {
      const providerRows = Object.values(providers)
        .slice(0, 5)
        .map((provider) => [
          provider.key,
          provider.marketType ?? "N/A",
          provider.features.hasBuyOrders ? "yes" : "no",
          provider.features.hasRecentSales ? "yes" : "no",
          provider.health.status,
        ]);
      console.log("Provider metadata sample (/v1/providers):");
      console.log(
        renderTable(
          ["provider", "market_type", "buy_orders", "recent_sales", "health"],
          providerRows,
        ),
      );
      console.log();
    }
    if (providersNote) {
      console.log(providersNote);
      console.log();
    }

    if (fxRates) {
      const fxRows = ["USD", "EUR", "GBP", "CNY"]
        .filter((currency) => currency in fxRates.rates)
        .map((currency) => [currency, fxRates.rates[currency]!.toFixed(4)]);
      console.log(`FX snapshot timestamp: ${fxRates.timestamp ?? "N/A"}`);
      console.log(renderTable(["currency", "usd_to_x"], fxRows));
      console.log();
    }
    if (fxNote) {
      console.log(fxNote);
      console.log();
    }

    if (priceRows.length > 0) {
      console.log("Prices (/v1/prices):");
      console.log(
        renderTable(["item_id", "market_hash_name", "best_ask", "provider"], priceRows),
      );
      console.log();
    }
    for (const note of priceNotes) {
      console.log(note);
      console.log();
    }

    if (candles) {
      console.log(`Candles for ${primaryItem.marketHashName} (/v1/prices/candles):`);
      const candleRows = candles.data.slice(-5).map((candle) => [
        formatTimestamp(new Date(candle.t * 1000)),
        formatMoney(candle.o),
        formatMoney(candle.c),
        candle.v,
      ]);
      console.log(renderTable(["bucket", "open", "close", "volume"], candleRows));
      console.log();
    }
    if (candlesNote) {
      console.log(candlesNote);
      console.log();
    }

    return 0;
  } catch (error) {
    console.error(await formatApiError(error));
    return 1;
  }
}

void main().then((code) => {
  process.exitCode = code;
});
