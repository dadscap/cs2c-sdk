import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

import { ItemsApi, MarketIntelligenceApi } from "cs2cap";

import { formatApiError } from "../../_shared/api.js";
import { buildConfiguration, loadApiKey } from "../../_shared/auth.js";
import { requireItemId, resolveCatalogItems } from "../../_shared/items.js";
import {
  formatDecimalMoney,
  formatPercent,
  renderTable,
} from "../../_shared/render.js";

const SCRIPT_PATH = fileURLToPath(import.meta.url);

function readOptions(): { query: string; itemType: string } {
  const { values } = parseArgs({
    options: {
      query: { type: "string" },
      "item-type": { type: "string" },
    },
  });

  return {
    query: values.query ?? "AK-47",
    itemType: values["item-type"] ?? "Weapon",
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
    const marketApi = new MarketIntelligenceApi(configuration);

    const resolvedItems = await resolveCatalogItems(itemsApi, {
      query: args.query,
      itemType: args.itemType,
      limit: 1,
    });
    if (resolvedItems.length === 0) {
      console.log("No catalog item matched the requested filters.");
      return 0;
    }

    const item = resolvedItems[0]!;
    const itemId = requireItemId(item);
    const analytics24h = await marketApi.getItemAnalyticsV1MarketItemsItemIdGet({
      itemId,
      timeframe: "24h",
    });
    const analytics7d = await marketApi.getItemAnalyticsV1MarketItemsItemIdGet({
      itemId,
      timeframe: "7d",
    });

    console.log(`Analytics item: ${analytics24h.data.marketHashName}`);
    if (analytics24h.data.phase) {
      console.log(`Phase: ${analytics24h.data.phase}`);
    }
    console.log();

    console.log("Timeframe comparison:");
    console.log(
      renderTable(
        ["timeframe", "providers", "best_ask", "best_bid", "avg_spread", "volume_24h"],
        [
          [
            "24h",
            analytics24h.data.summary.providerCount,
            formatDecimalMoney(analytics24h.data.summary.bestAskUsd),
            formatDecimalMoney(analytics24h.data.summary.bestBidUsd),
            formatPercent(analytics24h.data.summary.avgSpreadPct),
            analytics24h.data.summary.totalVolume24h,
          ],
          [
            "7d",
            analytics7d.data.summary.providerCount,
            formatDecimalMoney(analytics7d.data.summary.bestAskUsd),
            formatDecimalMoney(analytics7d.data.summary.bestBidUsd),
            formatPercent(analytics7d.data.summary.avgSpreadPct),
            analytics7d.data.summary.totalVolume24h,
          ],
        ],
      ),
    );
    console.log();

    console.log("Provider detail:");
    console.log(
      renderTable(
        ["provider", "ask", "bid", "spread", "vol_24h", "ask_depth"],
        analytics24h.data.providers.map((provider) => [
          provider.provider,
          formatDecimalMoney(provider.askUsd),
          formatDecimalMoney(provider.bidUsd),
          formatPercent(provider.spreadPct),
          provider.volume24h ?? 0,
          provider.askDepth ?? 0,
        ]),
      ),
    );
    console.log();

    const coverage = analytics24h.data.coverage;
    console.log("Coverage diagnostics:");
    console.log(`- provider_count: ${coverage.providerCount}`);
    console.log(`- providers_with_volume: ${coverage.providersWithVolume}`);
    console.log(`- providers_with_bid_side: ${coverage.providersWithBidSide}`);
    return 0;
  } catch (error) {
    console.error(await formatApiError(error));
    return 1;
  }
}

void main().then((code) => {
  process.exitCode = code;
});
