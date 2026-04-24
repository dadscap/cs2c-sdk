import { fileURLToPath } from "node:url";

import type { BuyOrderItem, MarketItem, SaleRecordDetail } from "cs2cap";
import { BidsApi, ItemsApi, PricesApi, SalesApi } from "cs2cap";

import { formatApiError } from "../../_shared/api.js";
import { buildConfiguration, loadApiKey } from "../../_shared/auth.js";
import { requireItemId } from "../../_shared/items.js";
import {
  formatMoney,
  formatTimestamp,
  parseIso8601,
  renderTable,
} from "../../_shared/render.js";

const SCRIPT_PATH = fileURLToPath(import.meta.url);

function summarizePrices(prices: MarketItem[], currency = "USD"): string {
  if (prices.length === 0) {
    return "N/A";
  }

  const best = prices.reduce((current, item) =>
    item.lowestAsk < current.lowestAsk ? item : current,
  );
  return `${formatMoney(best.lowestAsk, currency)} (${best.provider})`;
}

function summarizeBids(bids: BuyOrderItem[], currency = "USD"): string {
  if (bids.length === 0) {
    return "N/A";
  }

  const best = bids.reduce((current, item) =>
    item.highestBid > current.highestBid ? item : current,
  );
  return `${formatMoney(best.highestBid, currency)} (${best.provider})`;
}

function summarizeSales(sales: SaleRecordDetail[], currency = "USD"): string {
  if (sales.length === 0) {
    return "N/A";
  }

  const latest = sales.reduce((current, item) =>
    parseIso8601(item.date).getTime() > parseIso8601(current.date).getTime() ? item : current,
  );
  return `${formatMoney(latest.price, currency)} (${latest.provider}, ${formatTimestamp(latest.date)})`;
}

async function main(): Promise<number> {
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
    const bidsApi = new BidsApi(configuration);
    const salesApi = new SalesApi(configuration);

    const itemsResponse = await itemsApi.listItemsV1ItemsGet({
      itemType: "Weapon",
      limit: 5,
    });

    const selectedItems = itemsResponse.items.slice(0, 5);
    if (selectedItems.length < 5) {
      console.error(`Expected at least 5 weapon items, got ${selectedItems.length}.`);
      return 1;
    }

    console.log("Selected market_hash_names from /v1/items:");
    for (const item of selectedItems) {
      console.log(`- ${item.marketHashName}`);
    }
    console.log();

    const rows: string[][] = [];
    for (const item of selectedItems) {
      const itemId = requireItemId(item);

      const pricesResponse = await pricesApi.listPricesV1PricesGet({
        itemId,
        currency: "USD",
        limit: 1000,
      });
      const bidsResponse = await bidsApi.listBidsV1BidsGet({
        itemId,
        currency: "USD",
        limit: 1000,
      });
      const salesResponse = await salesApi.listSalesV1SalesGet({
        itemId,
        currency: "USD",
        limit: 50,
      });

      rows.push([
        item.marketHashName,
        summarizePrices(pricesResponse.items),
        summarizeBids(bidsResponse.items),
        summarizeSales(salesResponse.items),
      ]);
    }

    console.log(
      renderTable(
        ["market_hash_name", "lowest_price", "highest_bid", "most_recent_sale"],
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
