import type { ItemOut, ItemsApi } from "cs2cap-sdk";

export async function resolveCatalogItems(
  itemsApi: ItemsApi,
  options: {
    query?: string;
    itemType?: string;
    limit?: number;
  } = {},
): Promise<ItemOut[]> {
  const response = await itemsApi.listItemsV1ItemsGet({
    q: options.query,
    itemType: options.itemType,
    limit: options.limit ?? 10,
  });
  return [...response.items];
}

export function requireItemId(item: ItemOut): number {
  if (item.itemId == null) {
    throw new Error(`Item ${JSON.stringify(item.marketHashName)} did not include an itemId.`);
  }
  return item.itemId;
}

export function collectItemIds(items: Iterable<ItemOut>): number[] {
  return Array.from(items, requireItemId);
}
