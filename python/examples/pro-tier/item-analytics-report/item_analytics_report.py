import argparse
import sys
from pathlib import Path

import cs2cap
from cs2cap.rest import ApiException

EXAMPLES_ROOT = Path(__file__).resolve().parents[2]
if str(EXAMPLES_ROOT) not in sys.path:
    sys.path.insert(0, str(EXAMPLES_ROOT))

from _shared.auth import build_configuration, load_api_key  # noqa: E402
from _shared.render import format_decimal_money, format_percent, render_table  # noqa: E402


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Use /v1/market/items to select candidates, then inspect detail rows.",
    )
    parser.add_argument("--top", type=int, default=5, help="Number of snapshot rows to inspect.")
    return parser


def money(value: str | None) -> str:
    return format_decimal_money(value)


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
            market_api = cs2cap.MarketIntelligenceApi(client)
            snapshot = market_api.get_market_analytics_snapshot()
            candidates = sorted(
                snapshot.data.items,
                key=lambda item: item.summary.liquidity or 0,
                reverse=True,
            )[: max(args.top, 1)]
            details = [
                market_api.get_item_analytics(item.item_id).data
                for item in candidates
            ]

    except ApiException as exc:
        print(f"API request failed: {exc}", file=sys.stderr)
        return 1

    print("Market snapshot candidates (/v1/market/items):")
    print(
        render_table(
            ["rank", "item_id", "item", "liquidity", "ask", "bid", "spread"],
            [
                [
                    str(item.summary.rank or "N/A"),
                    str(item.item_id),
                    item.market_hash_name,
                    str(item.summary.liquidity or "N/A"),
                    money(item.summary.best_ask_usd),
                    money(item.summary.best_bid_usd),
                    format_percent(item.summary.avg_spread_pct),
                ]
                for item in candidates
            ],
        )
    )
    print()

    print("Detail coverage (/v1/market/items/{item_id}):")
    print(
        render_table(
            ["item_id", "providers", "volume_providers", "bid_side_providers", "provider_rows"],
            [
                [
                    str(detail.item_id),
                    str(detail.coverage.provider_count),
                    str(detail.coverage.providers_with_volume),
                    str(detail.coverage.providers_with_bid_side),
                    str(len(detail.providers)),
                ]
                for detail in details
            ],
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
