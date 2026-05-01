from __future__ import annotations

from collections.abc import Iterable

import cs2cap


def resolve_catalog_items(
    items_api: cs2cap.ItemsApi,
    *,
    query: str | None = None,
    item_type: str | None = None,
    limit: int = 10,
) -> list[cs2cap.ItemOut]:
    response = items_api.list_items(
        q=query,
        item_type=item_type,
        limit=limit,
    )
    return list(response.items)


def require_item_id(item: cs2cap.ItemOut) -> int:
    if item.item_id is None:
        raise ValueError(f"Item {item.market_hash_name!r} did not include an item_id.")
    return item.item_id


def collect_item_ids(items: Iterable[cs2cap.ItemOut]) -> list[int]:
    return [require_item_id(item) for item in items]
