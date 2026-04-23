import sys
from pathlib import Path

import cs2cap_sdk
from cs2cap_sdk.rest import ApiException

EXAMPLES_ROOT = Path(__file__).resolve().parents[2]
if str(EXAMPLES_ROOT) not in sys.path:
    sys.path.insert(0, str(EXAMPLES_ROOT))

from _shared.auth import build_configuration, load_api_key  # noqa: E402
from _shared.items import require_item_id  # noqa: E402
from _shared.render import format_money, format_timestamp, parse_iso8601, render_table  # noqa: E402


def summarize_prices(
    prices: list[cs2cap_sdk.MarketItem],
    currency: str = "USD",
) -> str:
    if not prices:
        return "N/A"

    # The API returns one row per provider; we collapse that to the best ask.
    best = min(prices, key=lambda item: item.lowest_ask)
    return f"{format_money(best.lowest_ask, currency)} ({best.provider})"


def summarize_bids(
    bids: list[cs2cap_sdk.BuyOrderItem],
    currency: str = "USD",
) -> str:
    if not bids:
        return "N/A"

    # Bids are also provider-scoped, so take the strongest bid across providers.
    best = max(bids, key=lambda item: item.highest_bid)
    return f"{format_money(best.highest_bid, currency)} ({best.provider})"


def summarize_sales(
    sales: list[cs2cap_sdk.SaleRecordDetail],
    currency: str = "USD",
) -> str:
    if not sales:
        return "N/A"

    # Recent sales are event rows; pick the most recent sale and show its source.
    latest = max(sales, key=lambda item: parse_iso8601(item.var_date))
    timestamp = format_timestamp(parse_iso8601(latest.var_date))
    return f"{format_money(latest.price, currency)} ({latest.provider}, {timestamp})"


def main() -> int:
    try:
        bearer_token = load_api_key("CS2C_API_KEY", start=Path(__file__))
    except RuntimeError as exc:
        # Treat missing local config as a normal user error.
        print(str(exc), file=sys.stderr)
        return 1

    # Build one shared authenticated client for all requests in this example.
    configuration = build_configuration(bearer_token)

    try:
        with cs2cap_sdk.ApiClient(configuration) as client:
            # Keep each API surface explicit instead of hiding calls behind wrappers.
            items_api = cs2cap_sdk.ItemsApi(client)
            prices_api = cs2cap_sdk.PricesApi(client)
            bids_api = cs2cap_sdk.BidsApi(client)
            sales_api = cs2cap_sdk.SalesApi(client)

            # Start from the catalog so downstream calls can use canonical item IDs.
            items_response = items_api.list_items_v1_items_get(
                item_type="Weapon",
                limit=5,
            )

            selected_items = items_response.items[:5]
            if len(selected_items) < 5:
                print(
                    f"Expected at least 5 weapon items, got {len(selected_items)}.",
                    file=sys.stderr,
                )
                return 1

            print("Selected market_hash_names from /v1/items:")
            for item in selected_items:
                # Echo the chosen inputs before making the comparison calls.
                print(f"- {item.market_hash_name}")
            print()

            # Build one output row per selected catalog item.
            rows: list[list[str]] = []
            for item in selected_items:
                # Downstream endpoints are safest to call with canonical item IDs.
                item_id = require_item_id(item)

                # Intentionally omit `providers` so the API returns the full set of providers.
                prices_response = prices_api.list_prices_v1_prices_get(
                    item_id=item_id,
                    currency="USD",
                    limit=1000,
                )
                bids_response = bids_api.list_bids_v1_bids_get(
                    item_id=item_id,
                    currency="USD",
                    limit=1000,
                )
                sales_response = sales_api.list_sales_v1_sales_get(
                    item_id=item_id,
                    currency="USD",
                    limit=50,
                )

                # Collapse provider-level responses into a single comparison row.
                rows.append(
                    [
                        item.market_hash_name,
                        summarize_prices(prices_response.items),
                        summarize_bids(bids_response.items),
                        summarize_sales(sales_response.items),
                    ]
                )

    except ApiException as exc:
        # Keep network failures readable in a terminal-first example.
        print(f"API request failed: {exc}", file=sys.stderr)
        return 1

    # Print the final comparison as a plain text table.
    headers = [
        "market_hash_name",
        "lowest_price",
        "highest_bid",
        "most_recent_sale",
    ]
    print(render_table(headers, rows))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
