import argparse
import sys
from pathlib import Path

import cs2cap_sdk
from cs2cap_sdk.rest import ApiException

EXAMPLES_ROOT = Path(__file__).resolve().parents[2]
if str(EXAMPLES_ROOT) not in sys.path:
    sys.path.insert(0, str(EXAMPLES_ROOT))

from _shared.auth import build_configuration, load_api_key  # noqa: E402
from _shared.items import require_item_id, resolve_catalog_items  # noqa: E402
from _shared.render import format_decimal_money, format_percent, render_table  # noqa: E402


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Fetch quant-tier indicators for one item and the arbitrage leaderboard.",
    )
    parser.add_argument("--query", default="AK-47", help="Catalog substring query.")
    parser.add_argument(
        "--item-type",
        default="Weapon",
        help="Exact item_type filter for /v1/items.",
    )
    parser.add_argument(
        "--min-spread-pct",
        type=float,
        default=1.0,
        help="Minimum gross spread percentage for arbitrage results.",
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
        with cs2cap_sdk.ApiClient(configuration) as client:
            items_api = cs2cap_sdk.ItemsApi(client)
            market_api = cs2cap_sdk.MarketIntelligenceApi(client)

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
            indicators = market_api.get_indicators_v1_market_indicators_get(
                item_id=item_id,
                interval="1d",
                currency="USD",
            )
            arbitrage = market_api.get_arbitrage_opportunities_v1_market_arbitrage_get(
                limit=10,
                min_spread_pct=args.min_spread_pct,
            )

    except ApiException as exc:
        print(f"API request failed: {exc}", file=sys.stderr)
        return 1

    indicator_data = indicators.data
    print(f"Indicator target: {indicator_data.market_hash_name}")
    print(f"- provider: {indicator_data.provider}")
    print(f"- interval: {indicator_data.interval}")
    print(f"- close_price: {format_decimal_money(indicator_data.close_price_usd)}")
    print()

    indicator_rows = [
        ["RSI 14", str(indicator_data.momentum.rsi_14 or "N/A")],
        ["MACD line", str(indicator_data.momentum.macd_line or "N/A")],
        ["ATR 14", str(indicator_data.volatility.atr_14 or "N/A")],
        ["Hist vol 20", str(indicator_data.volatility.historical_volatility_20 or "N/A")],
        ["VWAP", str(indicator_data.volume.vwap or "N/A")],
        ["OBV", str(indicator_data.volume.obv or "N/A")],
    ]
    print("Indicator sample:")
    print(render_table(["metric", "value"], indicator_rows))
    print()

    print("Indicator coverage:")
    print(f"- candle_count: {indicator_data.coverage.candle_count}")
    print(f"- sufficient_for: {', '.join(indicator_data.coverage.sufficient_for or []) or 'N/A'}")
    print(
        f"- insufficient_for: {', '.join(indicator_data.coverage.insufficient_for or []) or 'N/A'}"
    )  # noqa: E501
    print()

    print("Arbitrage leaderboard:")
    arbitrage_rows = [
        [
            item.market_hash_name,
            item.buy_provider,
            item.sell_provider,
            format_decimal_money(item.buy_price_usd),
            format_decimal_money(item.sell_price_usd),
            format_percent(item.gross_spread_pct),
            format_decimal_money(item.net_profit_usd),
        ]
        for item in arbitrage.data.items
    ]
    print(
        render_table(
            ["item", "buy_from", "sell_to", "buy", "sell", "spread", "net_profit"],
            arbitrage_rows,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
