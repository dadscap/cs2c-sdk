import argparse
import sys
from collections import defaultdict
from pathlib import Path
from typing import Any

import cs2cap
from cs2cap.rest import ApiException

EXAMPLES_ROOT = Path(__file__).resolve().parents[2]
if str(EXAMPLES_ROOT) not in sys.path:
    sys.path.insert(0, str(EXAMPLES_ROOT))

from _shared.api import parse_ndjson_lines  # noqa: E402
from _shared.auth import build_configuration, load_api_key, require_real_api_key  # noqa: E402
from _shared.render import format_money, format_percent, render_table  # noqa: E402


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Stream a bounded prices snapshot and enrich selected items with batch bids.",
    )
    parser.add_argument("--max-rows", type=int, default=500, help="Maximum NDJSON rows to parse.")
    parser.add_argument("--top", type=int, default=8, help="Number of spread rows to print.")
    return parser


def as_int(value: object) -> int | None:
    return value if isinstance(value, int) else None


def as_str(value: object) -> str | None:
    return value if isinstance(value, str) else None


def main() -> int:
    args = build_parser().parse_args()

    try:
        bearer_token = load_api_key("CS2C_API_KEY", start=Path(__file__))
        require_real_api_key(bearer_token)
    except RuntimeError as exc:
        print(str(exc), file=sys.stderr)
        return 1

    configuration = build_configuration(bearer_token)

    try:
        with cs2cap.ApiClient(configuration) as client:
            prices_api = cs2cap.PricesApi(client)
            bids_api = cs2cap.BidsApi(client)

            snapshot = prices_api.stream_full_prices_snapshot()
            price_rows = parse_ndjson_lines(snapshot, max_rows=max(args.max_rows, 1))

            grouped: dict[int, list[dict[str, Any]]] = defaultdict(list)
            names: dict[int, str] = {}
            for row in price_rows:
                item_id = as_int(row.get("item_id"))
                name = as_str(row.get("market_hash_name"))
                if item_id is None or name is None:
                    continue
                grouped[item_id].append(row)
                names[item_id] = name

            item_ids = list(grouped)[: max(args.top * 2, args.top)]
            bid_response = bids_api.batch_bid_lookup(
                cs2cap.BatchBidsRequest(item_ids=item_ids, currency="USD")
            )

    except ApiException as exc:
        print(f"API request failed: {exc}", file=sys.stderr)
        return 1

    bids_by_item: dict[int, cs2cap.BatchBidItem] = {
        item.item_id: item for item in bid_response.items
    }
    spread_rows: list[list[str]] = []
    for item_id in item_ids:
        asks = grouped[item_id]
        best_ask = min(asks, key=lambda row: as_int(row.get("lowest_ask")) or 10**12)
        ask = as_int(best_ask.get("lowest_ask"))
        bid_item = bids_by_item.get(item_id)
        best_bid = (
            max(bid_item.quotes, key=lambda quote: quote.highest_bid)
            if bid_item and bid_item.quotes
            else None
        )
        bid = best_bid.highest_bid if best_bid else None
        spread_pct = ((ask - bid) / ask) * 100 if ask and bid else None
        spread_rows.append(
            [
                str(item_id),
                names[item_id],
                as_str(best_ask.get("provider")) or "N/A",
                format_money(ask),
                best_bid.provider if best_bid else "N/A",
                format_money(bid),
                format_percent(spread_pct),
                str(sum(as_int(row.get("quantity")) or 0 for row in asks)),
            ]
        )

    print("Bulk price snapshot + batch bid spread report:")
    print(
        render_table(
            ["item_id", "item", "ask_provider", "ask", "bid_provider", "bid", "spread", "ask_qty"],
            spread_rows[: args.top],
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
