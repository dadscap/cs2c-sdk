import argparse
import sys
from pathlib import Path

import cs2cap
from cs2cap.rest import ApiException

EXAMPLES_ROOT = Path(__file__).resolve().parents[2]
if str(EXAMPLES_ROOT) not in sys.path:
    sys.path.insert(0, str(EXAMPLES_ROOT))

from _shared.auth import build_configuration, load_api_key  # noqa: E402
from _shared.items import require_item_id, resolve_catalog_items  # noqa: E402
from _shared.render import format_money, format_timestamp, render_table  # noqa: E402


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Combine /v1/sales and /v1/prices/history into a compact item report.",
    )
    parser.add_argument("--query", default="AK-47", help="Catalog substring query.")
    parser.add_argument("--item-type", default="Weapon", help="Exact item_type filter.")
    parser.add_argument("--count", type=int, default=3, help="Number of items to report.")
    return parser


def history_summary(items: list[cs2cap.PriceSnapshot]) -> tuple[int | None, int | None, int | None, str]:
    if not items:
        return None, None, None, "N/A"
    prices = [item.price for item in items]
    latest = max(items, key=lambda item: item.time)
    first = min(items, key=lambda item: item.time)
    momentum = ((latest.price - first.price) / first.price) * 100 if first.price else None
    momentum_text = f"{momentum:.2f}%" if momentum is not None else "N/A"
    return min(prices), max(prices), latest.price, momentum_text


def latest_sale(sales: list[cs2cap.SaleRecordDetail]) -> str:
    if not sales:
        return "N/A"
    latest = max(sales, key=lambda item: item.var_date)
    return f"{format_money(latest.price)} ({latest.provider}, {format_timestamp(latest.var_date)})"


def main() -> int:
    args = build_parser().parse_args()

    try:
        bearer_token = load_api_key("CS2C_API_KEY", start=Path(__file__))
    except RuntimeError as exc:
        print(str(exc), file=sys.stderr)
        return 1

    configuration = build_configuration(bearer_token)

    try:
        with cs2cap.ApiClient(configuration) as client:
            items_api = cs2cap.ItemsApi(client)
            prices_api = cs2cap.PricesApi(client)
            sales_api = cs2cap.SalesApi(client)

            selected_items = resolve_catalog_items(
                items_api,
                query=args.query,
                item_type=args.item_type,
                limit=max(args.count, 1),
            )[: args.count]
            if not selected_items:
                print("No catalog items matched the requested filters.")
                return 0

            rows: list[list[str]] = []
            for item in selected_items:
                item_id = require_item_id(item)
                sales = sales_api.list_recent_sales(item_id=item_id, currency="USD", limit=20)
                history = prices_api.price_history(item_id=item_id, currency="USD", limit=50)
                low, high, latest, momentum = history_summary(list(history.items))
                rows.append(
                    [
                        str(item_id),
                        item.market_hash_name,
                        latest_sale(list(sales.items)),
                        format_money(low),
                        format_money(high),
                        format_money(latest),
                        momentum,
                    ]
                )

    except ApiException as exc:
        print(f"API request failed: {exc}", file=sys.stderr)
        return 1

    print("Sales + price history report:")
    print(
        render_table(
            ["item_id", "item", "latest_sale", "hist_low", "hist_high", "hist_latest", "momentum"],
            rows,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
