import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

import { ItemsApi, MarketIntelligenceApi } from "cs2cap";

import { formatApiError } from "../../_shared/api.js";
import { buildConfiguration, loadApiKey } from "../../_shared/auth.js";
import { parseFloatOption, printHelpIfRequested } from "../../_shared/cli.js";
import { requireItemId, resolveCatalogItems } from "../../_shared/items.js";
import { formatDecimalMoney, formatPercent, renderTable } from "../../_shared/render.js";

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
  if (printHelpIfRequested("Usage: npm run example -- examples/quant-tier/quant-signals-and-arbitrage/quant_signals_and_arbitrage.ts [--query AK-47] [--item-type Weapon] [--min-spread-pct 1]")) {
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
    const itemsApi = new ItemsApi(configuration);
    const marketApi = new MarketIntelligenceApi(configuration);
    const resolved = await resolveCatalogItems(itemsApi, {
      query: args.query,
      itemType: args.itemType,
      limit: 1,
    });
    if (resolved.length === 0) {
      console.log("No catalog item matched the requested filters.");
      return 0;
    }

    const itemId = requireItemId(resolved[0]!);
    const indexes = await marketApi.getMarketCapIndexes({ groupBy: "item_type" });
    const arbitrage = await marketApi.getArbitrageOpportunities({
      limit: 10,
      minSpreadPct: args.minSpreadPct,
    });
    const indicators = await marketApi.getIndicators({
      itemId,
      interval: "1d",
      currency: "USD",
    });

    console.log("Market cap indexes (/v1/market/indexes):");
    console.log(
      renderTable(
        ["group", "marketcap", "items", "included", "excluded"],
        indexes.data.groups.slice(0, 8).map((group) => [
          group.group,
          formatDecimalMoney(group.marketcapUsd),
          group.itemCount,
          group.includedCount,
          group.excludedCount,
        ]),
      ),
    );
    console.log();

    console.log("Arbitrage candidates (/v1/market/arbitrage):");
    console.log(
      renderTable(
        ["item", "buy", "sell", "spread", "net_profit"],
        arbitrage.data.items.map((row) => [
          row.marketHashName,
          `${row.buyProvider} ${formatDecimalMoney(row.buyPriceUsd)}`,
          `${row.sellProvider} ${formatDecimalMoney(row.sellPriceUsd)}`,
          formatPercent(row.grossSpreadPct),
          formatDecimalMoney(row.netProfitUsd),
        ]),
      ),
    );
    console.log();

    const data = indicators.data;
    console.log(`Indicator signal for ${data.marketHashName} (/v1/market/indicators):`);
    console.log(
      renderTable(
        ["metric", "value"],
        [
          ["close", formatDecimalMoney(data.closePriceUsd)],
          ["RSI 14", data.momentum.rsi14 ?? "N/A"],
          ["MACD", data.momentum.macdLine ?? "N/A"],
          ["ATR 14", data.volatility.atr14 ?? "N/A"],
          ["VWAP", data.volume.vwap ?? "N/A"],
          ["candle_count", data.coverage.candleCount],
        ],
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
