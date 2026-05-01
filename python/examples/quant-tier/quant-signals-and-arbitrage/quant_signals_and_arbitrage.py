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
        description="Quant market-intelligence report from indexes, arbitrage, and indicators.",
    )
    parser.add_argument("--query", default="AK-47", help="Catalog substring query.")
    parser.add_argument("--item-type", default="Weapon", help="Exact item_type filter.")
    parser.add_argument("--min-spread-pct", type=float, default=1.0)
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

            item = resolve_catalog_items(
                items_api,
                query=args.query,
                item_type=args.item_type,
                limit=1,
            )[0]
            item_id = require_item_id(item)
            indexes = market_api.get_market_cap_indexes(group_by="item_type")
            arbitrage = market_api.get_arbitrage_opportunities(
                limit=10,
                min_spread_pct=args.min_spread_pct,
            )
            indicators = market_api.get_indicators(
                item_id=item_id,
                interval="1d",
                currency="USD",
            )

    except IndexError:
        print("No catalog item matched the requested filters.")
        return 0
    except ApiException as exc:
        print(f"API request failed: {exc}", file=sys.stderr)
        return 1

    print("Market cap indexes (/v1/market/indexes):")
    print(
        render_table(
            ["group", "marketcap", "items", "included", "excluded"],
            [
                [
                    group.group,
                    format_decimal_money(group.marketcap_usd),
                    str(group.item_count),
                    str(group.included_count),
                    str(group.excluded_count),
                ]
                for group in indexes.data.groups[:8]
            ],
        )
    )
    print()

    print("Arbitrage candidates (/v1/market/arbitrage):")
    print(
        render_table(
            ["item", "buy", "sell", "spread", "net_profit"],
            [
                [
                    row.market_hash_name,
                    f"{row.buy_provider} {format_decimal_money(row.buy_price_usd)}",
                    f"{row.sell_provider} {format_decimal_money(row.sell_price_usd)}",
                    format_percent(row.gross_spread_pct),
                    format_decimal_money(row.net_profit_usd),
                ]
                for row in arbitrage.data.items
            ],
        )
    )
    print()

    data = indicators.data
    print(f"Indicator signal for {data.market_hash_name} (/v1/market/indicators):")
    print(
        render_table(
            ["metric", "value"],
            [
                ["close", format_decimal_money(data.close_price_usd)],
                ["RSI 14", str(data.momentum.rsi_14 or "N/A")],
                ["MACD", str(data.momentum.macd_line or "N/A")],
                ["ATR 14", str(data.volatility.atr_14 or "N/A")],
                ["VWAP", str(data.volume.vwap or "N/A")],
                ["candle_count", str(data.coverage.candle_count)],
            ],
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
