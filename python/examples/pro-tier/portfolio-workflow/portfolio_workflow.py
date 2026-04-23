import argparse
import sys
from datetime import UTC, datetime
from pathlib import Path

import cs2cap_sdk
from cs2cap_sdk.rest import ApiException

EXAMPLES_ROOT = Path(__file__).resolve().parents[2]
if str(EXAMPLES_ROOT) not in sys.path:
    sys.path.insert(0, str(EXAMPLES_ROOT))

from _shared.auth import build_configuration, load_api_key  # noqa: E402
from _shared.cleanup import CleanupRegistry  # noqa: E402
from _shared.items import collect_item_ids, resolve_catalog_items  # noqa: E402
from _shared.render import format_money, render_table  # noqa: E402


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Create, value, mutate, and delete a temporary portfolio.",
    )
    parser.add_argument("--query", default="AK-47", help="Catalog substring query.")
    parser.add_argument(
        "--item-type",
        default="Weapon",
        help="Exact item_type filter for /v1/items.",
    )
    parser.add_argument(
        "--import-from-steam",
        action="store_true",
        help="Also fetch Steam inventory and import one asset when possible.",
    )
    parser.add_argument(
        "--keep-resources",
        action="store_true",
        help="Keep the created portfolio instead of deleting it in finally.",
    )
    return parser


def main() -> int:
    args = build_parser().parse_args()
    cleanup = CleanupRegistry(keep_resources=args.keep_resources)

    try:
        bearer_token = load_api_key("CS2C_API_KEY", start=Path(__file__))
    except RuntimeError as exc:
        print(str(exc), file=sys.stderr)
        return 1

    configuration = build_configuration(bearer_token)

    try:
        with cs2cap_sdk.ApiClient(configuration) as client:
            items_api = cs2cap_sdk.ItemsApi(client)
            portfolio_api = cs2cap_sdk.PortfolioApi(client)
            inventory_api = cs2cap_sdk.InventoryApi(client)

            resolved_items = resolve_catalog_items(
                items_api,
                query=args.query,
                item_type=args.item_type,
                limit=2,
            )[:2]
            if len(resolved_items) < 2:
                print("Need at least 2 catalog items to demonstrate the portfolio flow.")
                return 1

            item_ids = collect_item_ids(resolved_items)
            portfolio = portfolio_api.create_portfolio_endpoint_v1_portfolio_post(
                cs2cap_sdk.PortfolioCreate(
                    name=f"SDK Example {datetime.now(UTC).strftime('%Y%m%d-%H%M%S')}"
                )
            )
            cleanup.add(
                label=f"delete portfolio {portfolio.id}",
                callback=lambda portfolio_id=portfolio.id: (
                    portfolio_api.delete_portfolio_endpoint_v1_portfolio_portfolio_id_delete(  # noqa: E501
                        portfolio_id
                    )
                ),
            )

            all_portfolios = portfolio_api.list_portfolios_endpoint_v1_portfolio_get()
            first_entry = (
                portfolio_api.add_portfolio_item_endpoint_v1_portfolio_portfolio_id_items_post(  # noqa: E501
                    portfolio.id,
                    cs2cap_sdk.PortfolioAddItemRequest(
                        item_id=item_ids[0],
                        quantity=2,
                    ),
                )
            )
            portfolio_api.add_portfolio_item_endpoint_v1_portfolio_portfolio_id_items_post(
                portfolio.id,
                cs2cap_sdk.PortfolioAddItemRequest(
                    item_id=item_ids[1],
                    quantity=1,
                ),
            )
            portfolio_items_before_removal = (
                portfolio_api.list_portfolio_items_endpoint_v1_portfolio_portfolio_id_items_get(
                    portfolio.id
                )
            )
            ad_hoc_value = portfolio_api.portfolio_value_v1_portfolio_value_post(
                cs2cap_sdk.PortfolioRequest(
                    items=[
                        cs2cap_sdk.PortfolioRequestItem(item_id=item_ids[0], quantity=2),
                        cs2cap_sdk.PortfolioRequestItem(item_id=item_ids[1], quantity=1),
                    ],
                    currency="USD",
                )
            )
            saved_value = (
                portfolio_api.saved_portfolio_value_endpoint_v1_portfolio_portfolio_id_value_get(  # noqa: E501
                    portfolio.id
                )
            )
            (
                portfolio_api.remove_portfolio_item_endpoint_v1_portfolio_portfolio_id_items_entry_id_delete(
                    portfolio.id,
                    first_entry.id,
                )
            )
            portfolio_items_after_removal = (
                portfolio_api.list_portfolio_items_endpoint_v1_portfolio_portfolio_id_items_get(
                    portfolio.id
                )
            )

            import_summary = None
            inventory_summary = None
            if args.import_from_steam:
                try:
                    steam_inventory = (
                        inventory_api.fetch_steam_inventory_endpoint_v1_inventory_steam_get()
                    )
                    inventory_summary = steam_inventory
                    if steam_inventory.data:
                        import_summary = portfolio_api.import_inventory_endpoint_v1_portfolio_portfolio_id_import_post(  # noqa: E501
                            portfolio.id,
                            cs2cap_sdk.PortfolioImportRequest(
                                asset_ids=[steam_inventory.data[0].assetid]
                            ),
                        )
                except ApiException as exc:
                    if exc.status == 403:
                        print(
                            "Steam inventory import skipped: this account does not have a linked Steam account."  # noqa: E501
                        )
                    else:
                        raise

    except ApiException as exc:
        print(f"API request failed: {exc}", file=sys.stderr)
        return 1
    finally:
        cleanup_results = cleanup.run()

    print("Portfolio list (/v1/portfolio):")
    portfolio_rows = [
        [entry.id, entry.name, str(entry.item_count)] for entry in all_portfolios.data[:10]
    ]
    print(render_table(["portfolio_id", "name", "item_count"], portfolio_rows))
    print()

    print("Saved portfolio items before removal:")
    before_rows = [
        [entry.id, entry.market_hash_name, str(entry.quantity), entry.source]
        for entry in portfolio_items_before_removal
    ]
    print(render_table(["entry_id", "market_hash_name", "qty", "source"], before_rows))
    print()

    print("Ad hoc valuation (/v1/portfolio/value):")
    ad_hoc_rows = [
        [
            item.market_hash_name,
            str(item.quantity),
            format_money(item.best_ask, ad_hoc_value.meta.currency),
            format_money(item.item_value, ad_hoc_value.meta.currency),
        ]
        for item in ad_hoc_value.data.line_items
    ]
    print(render_table(["item", "qty", "unit_price", "item_value"], ad_hoc_rows))
    print(f"Total: {format_money(ad_hoc_value.data.total_value, ad_hoc_value.meta.currency)}")
    print()

    print("Saved valuation (/v1/portfolio/{id}/value):")
    saved_rows = [
        [
            item.market_hash_name,
            str(item.quantity),
            format_money(item.best_ask, saved_value.meta.currency),
            format_money(item.item_value, saved_value.meta.currency),
        ]
        for item in saved_value.data.line_items
    ]
    print(render_table(["item", "qty", "unit_price", "item_value"], saved_rows))
    print(f"Total: {format_money(saved_value.data.total_value, saved_value.meta.currency)}")
    print()

    print("Removed entry result:")
    print("- ok: True")
    print(f"- removed_entry_id: {first_entry.id}")
    print()

    print("Saved portfolio items after removal:")
    after_rows = [
        [entry.id, entry.market_hash_name, str(entry.quantity), entry.source]
        for entry in portfolio_items_after_removal
    ]
    print(render_table(["entry_id", "market_hash_name", "qty", "source"], after_rows))
    print()

    if inventory_summary is not None:
        print("Steam inventory snapshot:")
        print(f"- total_count: {inventory_summary.total_count}")
        if inventory_summary.data:
            inv_rows = [
                [item.assetid, item.market_hash_name, str(item.quantity), item.name]
                for item in inventory_summary.data[:5]
            ]
            print(render_table(["assetid", "market_hash_name", "qty", "name"], inv_rows))
        else:
            print("No Steam inventory items were returned.")
        print()

    if import_summary is not None:
        print("Import result (/v1/portfolio/{id}/import):")
        print(f"- imported: {import_summary.imported}")
        print(f"- skipped: {import_summary.skipped}")
        print(f"- unresolved: {len(import_summary.unresolved)}")
        print()

    print("Cleanup summary:")
    cleanup_rows = [
        [result.label, "ok" if result.ok else "failed", result.detail] for result in cleanup_results
    ]
    print(render_table(["resource", "status", "detail"], cleanup_rows))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
