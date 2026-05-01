import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";

import type { PriceSnapshot, SaleRecordDetail } from "cs2cap";
import { ItemsApi, PricesApi, SalesApi } from "cs2cap";

import { formatApiError } from "../../_shared/api.js";
import { buildConfiguration, loadApiKey } from "../../_shared/auth.js";
import { parseIntegerOption, printHelpIfRequested } from "../../_shared/cli.js";
import { requireItemId, resolveCatalogItems } from "../../_shared/items.js";
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

function historySummary(items: PriceSnapshot[]): [number | undefined, number | undefined, number | undefined, string] {
  if (items.length === 0) {
    return [undefined, undefined, undefined, "N/A"];
  }
  const prices = items.map((item) => item.price);
  const latest = items.reduce((best, item) => (item.time > best.time ? item : best));
  const first = items.reduce((best, item) => (item.time < best.time ? item : best));
  const momentum = first.price ? ((latest.price - first.price) / first.price) * 100 : undefined;
  return [Math.min(...prices), Math.max(...prices), latest.price, momentum == null ? "N/A" : `${momentum.toFixed(2)}%`];
}

function latestSale(sales: SaleRecordDetail[]): string {
  if (sales.length === 0) {
    return "N/A";
  }
  const latest = sales.reduce((best, item) => (item.date > best.date ? item : best));
  return `${formatMoney(latest.price)} (${latest.provider}, ${formatTimestamp(latest.date)})`;
}

async function main(): Promise<number> {
  if (printHelpIfRequested("Usage: npm run example -- examples/pro-tier/sales-history-report/sales_history_report.ts [--query AK-47] [--item-type Weapon] [--count 3]")) {
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
    const salesApi = new SalesApi(configuration);
    const selectedItems = (await resolveCatalogItems(itemsApi, {
      query: args.query,
      itemType: args.itemType,
      limit: Math.max(args.count, 1),
    })).slice(0, args.count);
    if (selectedItems.length === 0) {
      console.log("No catalog items matched the requested filters.");
      return 0;
    }

    const rows: string[][] = [];
    for (const item of selectedItems) {
      const itemId = requireItemId(item);
      const sales = await salesApi.listRecentSales({ itemId, currency: "USD", limit: 20 });
      const history = await pricesApi.priceHistory({ itemId, currency: "USD", limit: 50 });
      const [low, high, latest, momentum] = historySummary(history.items);
      rows.push([
        String(itemId),
        item.marketHashName,
        latestSale(sales.items),
        formatMoney(low),
        formatMoney(high),
        formatMoney(latest),
        momentum,
      ]);
    }

    console.log("Sales + price history report:");
    console.log(
      renderTable(
        ["item_id", "item", "latest_sale", "hist_low", "hist_high", "hist_latest", "momentum"],
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
