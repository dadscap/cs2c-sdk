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
from _shared.render import format_decimal_money, format_percent, render_table  # noqa: E402


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Resolve an item and print a market analytics report for it.",
    )
    parser.add_argument("--query", default="AK-47", help="Catalog substring query.")
    parser.add_argument(
        "--item-type",
        default="Weapon",
        help="Exact item_type filter for /v1/items.",
    )
    return parser


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
            market_api = cs2cap.MarketIntelligenceApi(client)

            resolved_items = resolve_catalog_items(
                items_api,
                query=args.query,
                item_type=args.item_type,
                limit=1,
            )
            if not resolved_items:
                print("No catalog item matched the requested filters.")
                return 0

            item = resolved_items[0]
            item_id = require_item_id(item)
            analytics_24h = market_api.get_item_analytics_v1_market_items_item_id_get(
                item_id,
                timeframe="24h",
            )
            analytics_7d = market_api.get_item_analytics_v1_market_items_item_id_get(
                item_id,
                timeframe="7d",
            )

    except ApiException as exc:
        print(f"API request failed: {exc}", file=sys.stderr)
        return 1

    print(f"Analytics item: {analytics_24h.data.market_hash_name}")
    if analytics_24h.data.phase:
        print(f"Phase: {analytics_24h.data.phase}")
    print()

    timeframe_rows = [
        [
            "24h",
            str(analytics_24h.data.summary.provider_count),
            format_decimal_money(analytics_24h.data.summary.best_ask_usd),
            format_decimal_money(analytics_24h.data.summary.best_bid_usd),
            format_percent(analytics_24h.data.summary.avg_spread_pct),
            str(analytics_24h.data.summary.total_volume_24h),
        ],
        [
            "7d",
            str(analytics_7d.data.summary.provider_count),
            format_decimal_money(analytics_7d.data.summary.best_ask_usd),
            format_decimal_money(analytics_7d.data.summary.best_bid_usd),
            format_percent(analytics_7d.data.summary.avg_spread_pct),
            str(analytics_7d.data.summary.total_volume_24h),
        ],
    ]
    print("Timeframe comparison:")
    print(
        render_table(
            ["timeframe", "providers", "best_ask", "best_bid", "avg_spread", "volume_24h"],
            timeframe_rows,
        )
    )
    print()

    print("Provider detail:")
    provider_rows = [
        [
            provider.provider,
            format_decimal_money(provider.ask_usd),
            format_decimal_money(provider.bid_usd),
            format_percent(provider.spread_pct),
            str(provider.volume_24h or 0),
            str(provider.ask_depth or 0),
        ]
        for provider in analytics_24h.data.providers
    ]
    print(
        render_table(
            ["provider", "ask", "bid", "spread", "vol_24h", "ask_depth"],
            provider_rows,
        )
    )
    print()

    coverage = analytics_24h.data.coverage
    print("Coverage diagnostics:")
    print(f"- provider_count: {coverage.provider_count}")
    print(f"- providers_with_volume: {coverage.providers_with_volume}")
    print(f"- providers_with_bid_side: {coverage.providers_with_bid_side}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
