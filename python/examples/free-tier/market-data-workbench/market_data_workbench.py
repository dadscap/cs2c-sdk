import argparse
import sys
from datetime import UTC, datetime
from pathlib import Path

import cs2cap
from cs2cap.rest import ApiException

EXAMPLES_ROOT = Path(__file__).resolve().parents[2]
if str(EXAMPLES_ROOT) not in sys.path:
    sys.path.insert(0, str(EXAMPLES_ROOT))

from _shared.auth import build_configuration, load_api_key  # noqa: E402
from _shared.items import collect_item_ids, resolve_catalog_items  # noqa: E402
from _shared.render import format_money, format_timestamp, render_table  # noqa: E402


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Build a free-tier starter market sheet from items, prices, and candles.",
    )
    parser.add_argument("--query", default="AK-47", help="Catalog substring query.")
    parser.add_argument("--item-type", default="Weapon", help="Exact item_type filter.")
    parser.add_argument("--count", type=int, default=3, help="Number of items to summarize.")
    return parser


def best_quote(quotes: list[cs2cap.MarketItem]) -> cs2cap.MarketItem | None:
    return min(quotes, key=lambda quote: quote.lowest_ask) if quotes else None


def candle_change(candles: cs2cap.PriceCandlesPage) -> str:
    if len(candles.data) < 2:
        return "N/A"
    first = candles.data[0]
    last = candles.data[-1]
    if not first.o:
        return "N/A"
    return f"{((last.c - first.o) / first.o) * 100:.2f}%"


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

            selected_items = resolve_catalog_items(
                items_api,
                query=args.query,
                item_type=args.item_type,
                limit=max(args.count, 1),
            )[: args.count]
            if not selected_items:
                print("No catalog items matched the requested filters.")
                return 0

            item_ids = collect_item_ids(selected_items)
            price_rows: list[list[str]] = []
            for item in selected_items:
                quotes = prices_api.list_prices(
                    item_id=item.item_id,
                    currency="USD",
                    limit=50,
                )
                best = best_quote(list(quotes.items))
                price_rows.append(
                    [
                        str(item.item_id),
                        item.market_hash_name,
                        format_money(best.lowest_ask if best else None),
                        best.provider if best else "N/A",
                        str(best.quantity) if best else "N/A",
                    ]
                )

            primary = selected_items[0]
            candles = prices_api.price_candles(
                item_id=item_ids[0],
                interval="1d",
                lookback="7d",
                fill=False,
                currency="USD",
            )

    except ApiException as exc:
        print(f"API request failed: {exc}", file=sys.stderr)
        return 1

    print("Starter market sheet:")
    print(render_table(["item_id", "item", "best_ask", "provider", "qty"], price_rows))
    print()

    print(f"Daily candles for {primary.market_hash_name} (/v1/prices/candles):")
    candle_rows = [
        [
            format_timestamp(datetime.fromtimestamp(candle.t, tz=UTC)),
            format_money(candle.o),
            format_money(candle.c),
            str(candle.v),
        ]
        for candle in candles.data[-7:]
    ]
    print(render_table(["bucket", "open", "close", "volume"], candle_rows))
    print()
    print(f"7d open-to-close move: {candle_change(candles)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
