import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

import { MarketIntelligenceApi } from "cs2cap";

import { formatApiError } from "../../_shared/api.js";
import { buildConfiguration, loadApiKey } from "../../_shared/auth.js";
import { parseIntegerOption, printHelpIfRequested } from "../../_shared/cli.js";
import { formatDecimalMoney, formatPercent, renderTable } from "../../_shared/render.js";

const SCRIPT_PATH = fileURLToPath(import.meta.url);

function readOptions(): { top: number } {
  const { values } = parseArgs({
    options: {
      top: { type: "string" },
    },
  });
  return { top: parseIntegerOption(values.top, 5, "--top") };
}

function money(value: string | null | undefined): string {
  return formatDecimalMoney(value);
}

async function main(): Promise<number> {
  if (printHelpIfRequested("Usage: npm run example -- examples/pro-tier/item-analytics-report/item_analytics_report.ts [--top 5]")) {
    return 0;
  }
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
    const marketApi = new MarketIntelligenceApi(configuration);
    const snapshot = await marketApi.getMarketAnalyticsSnapshot();
    const candidates = [...snapshot.data.items]
      .sort((left, right) => (right.summary.liquidity ?? 0) - (left.summary.liquidity ?? 0))
      .slice(0, Math.max(args.top, 1));
    const details = await Promise.all(
      candidates.map((item) => marketApi.getItemAnalytics({ itemId: item.itemId })),
    );

    console.log("Market snapshot candidates (/v1/market/items):");
    console.log(
      renderTable(
        ["rank", "item_id", "item", "liquidity", "ask", "bid", "spread"],
        candidates.map((item) => [
          item.summary.rank ?? "N/A",
          item.itemId,
          item.marketHashName,
          item.summary.liquidity ?? "N/A",
          money(item.summary.bestAskUsd),
          money(item.summary.bestBidUsd),
          formatPercent(item.summary.avgSpreadPct),
        ]),
      ),
    );
    console.log();

    console.log("Detail coverage (/v1/market/items/{item_id}):");
    console.log(
      renderTable(
        ["item_id", "providers", "volume_providers", "bid_side_providers", "provider_rows"],
        details.map((response) => [
          response.data.itemId,
          response.data.coverage.providerCount,
          response.data.coverage.providersWithVolume,
          response.data.coverage.providersWithBidSide,
          response.data.providers.length,
        ]),
      ),
    );
    return 0;
  } catch (error) {
    console.error(await formatApiError(error));
    return 1;
  }
}

void main().then((code) => {
  process.exitCode = code;
});
