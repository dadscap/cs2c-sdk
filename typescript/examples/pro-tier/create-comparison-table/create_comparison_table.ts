import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

import type { BatchBidItem, BatchBidsRequest } from "cs2cap";
import { BidsApi, PricesApi } from "cs2cap";

import { formatApiError, parseNdjsonLines } from "../../_shared/api.js";
import { buildConfiguration, loadApiKey, requireRealApiKey } from "../../_shared/auth.js";
import { parseIntegerOption, printHelpIfRequested } from "../../_shared/cli.js";
import { formatMoney, formatPercent, renderTable } from "../../_shared/render.js";

const SCRIPT_PATH = fileURLToPath(import.meta.url);

function readOptions(): { maxRows: number; top: number } {
  const { values } = parseArgs({
    options: {
      "max-rows": { type: "string" },
      top: { type: "string" },
    },
  });

  return {
    maxRows: parseIntegerOption(values["max-rows"], 500, "--max-rows"),
    top: parseIntegerOption(values.top, 8, "--top"),
  };
}

function numberValue(row: Record<string, unknown>, key: string): number | undefined {
  const value = row[key];
  return typeof value === "number" ? value : undefined;
}

function stringValue(row: Record<string, unknown>, key: string): string | undefined {
  const value = row[key];
  return typeof value === "string" ? value : undefined;
}

async function main(): Promise<number> {
  if (printHelpIfRequested("Usage: npm run example -- examples/pro-tier/create-comparison-table/create_comparison_table.ts [--max-rows 500] [--top 8]")) {
    return 0;
  }
  const args = readOptions();

  let bearerToken: string;
  try {
    bearerToken = loadApiKey("CS2C_API_KEY", SCRIPT_PATH);
    requireRealApiKey(bearerToken);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    return 1;
  }

  const configuration = buildConfiguration(bearerToken);

  try {
    const pricesApi = new PricesApi(configuration);
    const bidsApi = new BidsApi(configuration);

    const snapshot = await pricesApi.streamFullPricesSnapshot();
    const priceRows = parseNdjsonLines(snapshot, Math.max(args.maxRows, 1));
    const grouped = new Map<number, Array<Record<string, unknown>>>();
    const names = new Map<number, string>();

    for (const row of priceRows) {
      const itemId = numberValue(row, "item_id");
      const name = stringValue(row, "market_hash_name");
      if (itemId == null || name == null) {
        continue;
      }
      grouped.set(itemId, [...(grouped.get(itemId) ?? []), row]);
      names.set(itemId, name);
    }

    const itemIds = Array.from(grouped.keys()).slice(0, Math.max(args.top * 2, args.top));
    const bidResponse = await bidsApi.batchBidLookup({
      batchBidsRequest: { itemIds, currency: "USD" } satisfies BatchBidsRequest,
    });
    const bidsByItem = new Map<number, BatchBidItem>(
      bidResponse.items.map((item) => [item.itemId, item]),
    );

    const rows = itemIds.slice(0, args.top).map((itemId) => {
      const asks = grouped.get(itemId) ?? [];
      const bestAsk = asks.reduce<Record<string, unknown> | undefined>((best, row) => {
        const ask = numberValue(row, "lowest_ask") ?? Number.MAX_SAFE_INTEGER;
        const bestAskValue = best ? numberValue(best, "lowest_ask") ?? Number.MAX_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;
        return ask < bestAskValue ? row : best;
      }, undefined);
      const ask = bestAsk ? numberValue(bestAsk, "lowest_ask") : undefined;
      const bidItem = bidsByItem.get(itemId);
      const bestBid = bidItem?.quotes.reduce((best, quote) =>
        quote.highestBid > best.highestBid ? quote : best,
      );
      const bid = bestBid?.highestBid;
      const spreadPct = ask && bid ? ((ask - bid) / ask) * 100 : undefined;
      return [
        itemId,
        names.get(itemId) ?? "N/A",
        bestAsk ? stringValue(bestAsk, "provider") ?? "N/A" : "N/A",
        formatMoney(ask),
        bestBid?.provider ?? "N/A",
        formatMoney(bid),
        formatPercent(spreadPct),
        asks.reduce((total, row) => total + (numberValue(row, "quantity") ?? 0), 0),
      ];
    });

    console.log("Bulk price snapshot + batch bid spread report:");
    console.log(
      renderTable(
        ["item_id", "item", "ask_provider", "ask", "bid_provider", "bid", "spread", "ask_qty"],
        rows,
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
