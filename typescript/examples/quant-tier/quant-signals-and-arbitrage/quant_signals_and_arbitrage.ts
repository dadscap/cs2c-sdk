import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

import { ItemsApi, MarketIntelligenceApi } from "cs2cap-sdk";

import { formatApiError } from "../../_shared/api.js";
import { buildConfiguration, loadApiKey } from "../../_shared/auth.js";
import { parseFloatOption } from "../../_shared/cli.js";
import { requireItemId, resolveCatalogItems } from "../../_shared/items.js";
import {
  formatDecimalMoney,
  formatPercent,
  renderTable,
} from "../../_shared/render.js";

const SCRIPT_PATH = fileURLToPath(import.meta.url);

function readOptions(): { query: string; itemType: string; minSpreadPct: number } {
  const { values } = parseArgs({
    options: {
      query: { type: "string" },
      "item-type": { type: "string" },
      "min-spread-pct": { type: "string" },
    },
  });

  return {
    query: values.query ?? "AK-47",
    itemType: values["item-type"] ?? "Weapon",
    minSpreadPct: parseFloatOption(values["min-spread-pct"], 1.0, "--min-spread-pct"),
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
    const indicators = await marketApi.getIndicatorsV1MarketIndicatorsGet({
      itemId,
      interval: "1d",
      currency: "USD",
    });
    const arbitrage = await marketApi.getArbitrageOpportunitiesV1MarketArbitrageGet({
      limit: 10,
      minSpreadPct: args.minSpreadPct,
    });

    const indicatorData = indicators.data;
    console.log(`Indicator target: ${indicatorData.marketHashName}`);
    console.log(`- provider: ${indicatorData.provider}`);
    console.log(`- interval: ${indicatorData.interval}`);
    console.log(`- close_price: ${formatDecimalMoney(indicatorData.closePriceUsd)}`);
    console.log();

    console.log("Indicator sample:");
    console.log(
      renderTable(
        ["metric", "value"],
        [
          ["RSI 14", indicatorData.momentum.rsi14 ?? "N/A"],
          ["MACD line", indicatorData.momentum.macdLine ?? "N/A"],
          ["ATR 14", indicatorData.volatility.atr14 ?? "N/A"],
          [
            "Hist vol 20",
            indicatorData.volatility.historicalVolatility20 ?? "N/A",
          ],
          ["VWAP", indicatorData.volume.vwap ?? "N/A"],
          ["OBV", indicatorData.volume.obv ?? "N/A"],
        ],
      ),
    );
    console.log();

    console.log("Indicator coverage:");
    console.log(`- candle_count: ${indicatorData.coverage.candleCount}`);
    console.log(
      `- sufficient_for: ${indicatorData.coverage.sufficientFor?.join(", ") || "N/A"}`,
    );
    console.log(
      `- insufficient_for: ${indicatorData.coverage.insufficientFor?.join(", ") || "N/A"}`,
    );
    console.log();

    console.log("Arbitrage leaderboard:");
    console.log(
      renderTable(
        ["item", "buy_from", "sell_to", "buy", "sell", "spread", "net_profit"],
        arbitrage.data.items.map((row) => [
          row.marketHashName,
          row.buyProvider,
          row.sellProvider,
          formatDecimalMoney(row.buyPriceUsd),
          formatDecimalMoney(row.sellPriceUsd),
          formatPercent(row.grossSpreadPct),
          formatDecimalMoney(row.netProfitUsd),
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
