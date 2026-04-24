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
        description="Read-only workbench for free-tiers: items, prices, FX, and candles endpoints.",
    )
    parser.add_argument("--query", default="AK-47", help="Catalog substring query.")
    parser.add_argument(
        "--item-type",
        default="Weapon",
        help="Exact item_type filter for /v1/items.",
    )
    parser.add_argument(
        "--count",
        type=int,
        default=3,
        help="Number of resolved items to use in batch lookups.",
    )
    return parser


def call_or_skip(label: str, func):
    try:
        return func(), None
    except ApiException as exc:
        if exc.status == 403:
            return None, f"{label} skipped: {exc.body or exc.reason or 'forbidden'}"
        raise


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
            providers_api = cs2cap.ProvidersApi(client)
            fx_api = cs2cap.ForeignExchangeApi(client)
            prices_api = cs2cap.PricesApi(client)

            catalog_items = resolve_catalog_items(
                items_api,
                query=args.query,
                item_type=args.item_type,
                limit=max(args.count, 3),
            )
            selected_items = catalog_items[: args.count]
            if not selected_items:
                print("No catalog items matched the requested filters.")
                return 0

            item_ids = collect_item_ids(selected_items)
            primary_item = selected_items[0]

            providers, providers_note = call_or_skip(
                "Provider metadata",
                providers_api.list_providers_v1_providers_get,
            )
            fx_rates, fx_note = call_or_skip(
                "FX rates",
                fx_api.get_fx_rates_v1_fx_get,
            )
            price_rows = []
            price_notes = []
            for item in selected_items:
                if item.item_id is None:
                    continue

                price_page, price_note = call_or_skip(
                    f"Prices for {item.market_hash_name}",
                    lambda item_id=item.item_id: prices_api.list_prices_v1_prices_get(
                        item_id=item_id,
                        currency="USD",
                        limit=10,
                    ),
                )
                if price_note:
                    price_notes.append(price_note)
                if price_page is not None:
                    best_quote = (
                        min(price_page.items, key=lambda quote: quote.lowest_ask)
                        if price_page.items
                        else None
                    )
                    price_rows.append(
                        [
                            str(item.item_id),
                            item.market_hash_name,
                            format_money(best_quote.lowest_ask if best_quote else None),
                            best_quote.provider if best_quote else "N/A",
                        ]
                    )

            candles, candles_note = call_or_skip(
                "Price candles",
                lambda: prices_api.price_candles_v1_prices_candles_get(
                    item_id=item_ids[0],
                    interval="1d",
                    lookback="7d",
                    fill=False,
                    currency="USD",
                    limit=7,
                ),
            )
    except ApiException as exc:
        print(f"API request failed: {exc}", file=sys.stderr)
        return 1

    print("Resolved catalog items:")
    print(
        render_table(
            ["item_id", "market_hash_name", "rarity"],
            [
                [str(item.item_id), item.market_hash_name, item.rarity_name or "N/A"]
                for item in selected_items
            ],
        )
    )
    print()

    if providers is not None:
        provider_rows = []
        for provider in list(providers.values())[:5]:
            provider_rows.append(
                [
                    provider.key,
                    provider.market_type or "N/A",
                    "yes" if provider.features.has_buy_orders else "no",
                    "yes" if provider.features.has_recent_sales else "no",
                    provider.health.status,
                ]
            )
        print("Provider metadata sample (/v1/providers):")
        print(
            render_table(
                ["provider", "market_type", "buy_orders", "recent_sales", "health"],
                provider_rows,
            )
        )
        print()
    if providers_note:
        print(providers_note)
        print()

    if fx_rates is not None:
        fx_rows = [
            [currency, f"{fx_rates.rates[currency]:.4f}"]
            for currency in ["USD", "EUR", "GBP", "CNY"]
            if currency in fx_rates.rates
        ]
        print(f"FX snapshot timestamp: {fx_rates.timestamp or 'N/A'}")
        print(render_table(["currency", "usd_to_x"], fx_rows))
        print()
    if fx_note:
        print(fx_note)
        print()

    if price_rows:
        print("Prices (/v1/prices):")
        print(render_table(["item_id", "market_hash_name", "best_ask", "provider"], price_rows))
        print()
    for price_note in price_notes:
        print(price_note)
        print()

    if candles is not None:
        print(f"Candles for {primary_item.market_hash_name} (/v1/prices/candles):")
        candle_rows = [
            [
                format_timestamp(datetime.fromtimestamp(candle.t, tz=UTC)),
                format_money(candle.o),
                format_money(candle.c),
                str(candle.v),
            ]
            for candle in candles.data[-5:]
        ]
        print(render_table(["bucket", "open", "close", "volume"], candle_rows))
        print()
    if candles_note:
        print(candles_note)
        print()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
