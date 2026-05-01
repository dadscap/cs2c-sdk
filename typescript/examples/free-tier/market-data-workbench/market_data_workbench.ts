import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

import type { MarketItem, PriceCandlesPage } from "cs2cap";
import { ItemsApi, PricesApi } from "cs2cap";

import { formatApiError } from "../../_shared/api.js";
import { buildConfiguration, loadApiKey } from "../../_shared/auth.js";
import { parseIntegerOption, printHelpIfRequested } from "../../_shared/cli.js";
import { collectItemIds, resolveCatalogItems } from "../../_shared/items.js";
import { formatMoney, formatTimestamp, renderTable } from "../../_shared/render.js";

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

function bestQuote(quotes: MarketItem[]): MarketItem | undefined {
  return quotes.reduce<MarketItem | undefined>(
    (best, quote) => (best == null || quote.lowestAsk < best.lowestAsk ? quote : best),
    undefined,
  );
}

function candleChange(candles: PriceCandlesPage): string {
  if (candles.data.length < 2) {
    return "N/A";
  }
  const first = candles.data[0]!;
  const last = candles.data.at(-1)!;
  if (!first.o) {
    return "N/A";
  }
  return `${(((last.c - first.o) / first.o) * 100).toFixed(2)}%`;
}

async function main(): Promise<number> {
  if (printHelpIfRequested("Usage: npm run example -- examples/free-tier/market-data-workbench/market_data_workbench.ts [--query AK-47] [--item-type Weapon] [--count 3]")) {
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
    const pricesApi = new PricesApi(configuration);

    const selectedItems = (await resolveCatalogItems(itemsApi, {
      query: args.query,
      itemType: args.itemType,
      limit: Math.max(args.count, 1),
    })).slice(0, args.count);
    if (selectedItems.length === 0) {
      console.log("No catalog items matched the requested filters.");
      return 0;
    }

    const itemIds = collectItemIds(selectedItems);
    const priceRows: string[][] = [];
    for (const item of selectedItems) {
      const quotes = await pricesApi.listPrices({
        itemId: item.itemId,
        currency: "USD",
        limit: 50,
      });
      const best = bestQuote(quotes.items);
      priceRows.push([
        String(item.itemId),
        item.marketHashName,
        formatMoney(best?.lowestAsk),
        best?.provider ?? "N/A",
        best?.quantity == null ? "N/A" : String(best.quantity),
      ]);
    }

    const primary = selectedItems[0]!;
    const candles = await pricesApi.priceCandles({
      itemId: itemIds[0],
      interval: "1d",
      lookback: "7d",
      fill: false,
      currency: "USD",
    });

    console.log("Starter market sheet:");
    console.log(renderTable(["item_id", "item", "best_ask", "provider", "qty"], priceRows));
    console.log();

    console.log(`Daily candles for ${primary.marketHashName} (/v1/prices/candles):`);
    console.log(
      renderTable(
        ["bucket", "open", "close", "volume"],
        candles.data.slice(-7).map((candle) => [
          formatTimestamp(new Date(candle.t * 1000)),
          formatMoney(candle.o),
          formatMoney(candle.c),
          String(candle.v),
        ]),
      ),
    );
    console.log();
    console.log(`7d open-to-close move: ${candleChange(candles)}`);
    return 0;
  } catch (error) {
    console.error(await formatApiError(error));
    return 1;
  }
}

void main().then((code) => {
  process.exitCode = code;
});
