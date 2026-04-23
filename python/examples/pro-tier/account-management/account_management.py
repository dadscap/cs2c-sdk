import argparse
import sys
from pathlib import Path

import cs2cap_sdk
from cs2cap_sdk.rest import ApiException

EXAMPLES_ROOT = Path(__file__).resolve().parents[2]
if str(EXAMPLES_ROOT) not in sys.path:
    sys.path.insert(0, str(EXAMPLES_ROOT))

from _shared.auth import build_configuration, load_api_key  # noqa: E402
from _shared.cleanup import CleanupRegistry  # noqa: E402
from _shared.items import collect_item_ids, resolve_catalog_items  # noqa: E402
from _shared.render import format_timestamp, render_table  # noqa: E402


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Create temporary watchlist and alert resources, then clean them up.",
    )
    parser.add_argument("--query", default="AK-47", help="Catalog substring query.")
    parser.add_argument(
        "--item-type",
        default="Weapon",
        help="Exact item_type filter for /v1/items.",
    )
    parser.add_argument(
        "--keep-resources",
        action="store_true",
        help="Keep created resources instead of deleting them in finally.",
    )
    return parser


def unwrap_watchlist_items(
    response: cs2cap_sdk.WatchlistCreateResponse,
) -> list[cs2cap_sdk.WatchlistItem]:
    actual = response.actual_instance
    if isinstance(actual, cs2cap_sdk.WatchlistItem):
        return [actual]
    if isinstance(actual, cs2cap_sdk.WatchlistBatchCreateResponse):
        return list(actual.items)
    raise ValueError(f"Unexpected watchlist create response type: {type(actual).__name__}")


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
            account_api = cs2cap_sdk.AccountApi(client)

            selected_items = resolve_catalog_items(
                items_api,
                query=args.query,
                item_type=args.item_type,
                limit=2,
            )[:2]
            if len(selected_items) < 2:
                print("Need at least 2 items to demonstrate the account workflows.")
                return 1

            item_ids = collect_item_ids(selected_items)
            watchlist_response = account_api.create_watchlist_entry_v1_account_watchlist_post(
                cs2cap_sdk.WatchlistCreateRequest(
                    cs2cap_sdk.WatchlistCreateBatchRequest(item_ids=item_ids)
                )
            )
            created_watchlist_items = unwrap_watchlist_items(watchlist_response)
            for item in created_watchlist_items:
                cleanup.add(
                    label=f"delete watchlist item {item.market_hash_name}",
                    callback=lambda item_id=item.item_id: (
                        account_api.delete_watchlist_entry_v1_account_watchlist_item_id_delete(  # noqa: E501
                            item_id
                        )
                    ),
                )

            alert = account_api.create_alert_route_v1_account_alerts_post(
                cs2cap_sdk.AlertCreateRequest(
                    item_id=item_ids[0],
                    kind="price_below",
                    threshold_value="10.00",
                    threshold_currency="USD",
                    is_enabled=False,
                )
            )
            cleanup.add(
                label=f"delete alert {alert.id}",
                callback=lambda alert_id=alert.id: (
                    account_api.delete_alert_route_v1_account_alerts_alert_id_delete(  # noqa: E501
                        alert_id
                    )
                ),
            )

            updated_alert = account_api.patch_alert_v1_account_alerts_alert_id_patch(
                alert.id,
                cs2cap_sdk.AlertUpdateRequest(
                    threshold_value="9.50",
                    is_enabled=False,
                ),
            )
            alerts = account_api.get_alerts_v1_account_alerts_get(limit=20)
            events = account_api.get_alert_event_history_v1_account_alerts_events_get(limit=10)
            watchlist = account_api.get_watchlist_v1_account_watchlist_get(limit=20)

    except ApiException as exc:
        print(f"API request failed: {exc}", file=sys.stderr)
        return 1
    finally:
        cleanup_results = cleanup.run()

    print("Created watchlist entries:")
    watchlist_rows = [
        [str(item.item_id), item.market_hash_name, format_timestamp(item.created_at)]
        for item in created_watchlist_items
    ]
    print(render_table(["item_id", "market_hash_name", "created_at"], watchlist_rows))
    print()

    print("Alert lifecycle:")
    print(f"- created_alert_id: {alert.id}")
    print(f"- updated_threshold: {updated_alert.threshold_value}")
    print(f"- enabled: {updated_alert.is_enabled}")
    print()

    print("Current alerts (/v1/account/alerts):")
    alert_rows = [
        [
            alert_row.id,
            alert_row.item.market_hash_name,
            alert_row.kind,
            alert_row.threshold_value,
            "yes" if alert_row.is_enabled else "no",
        ]
        for alert_row in alerts.alerts
    ]
    print(render_table(["alert_id", "item", "kind", "threshold", "enabled"], alert_rows))
    print()

    print("Current watchlist (/v1/account/watchlist):")
    watchlist_list_rows = [
        [str(item.item_id), item.market_hash_name, format_timestamp(item.created_at)]
        for item in watchlist.items
    ]
    print(render_table(["item_id", "market_hash_name", "created_at"], watchlist_list_rows))
    print()

    print("Recent alert events (/v1/account/alerts/events):")
    event_rows = [
        [
            event.id,
            event.item.market_hash_name,
            event.kind,
            event.triggered_value,
            format_timestamp(event.created_at),
        ]
        for event in events.events[:5]
    ]
    if event_rows:
        print(render_table(["event_id", "item", "kind", "value", "created_at"], event_rows))
    else:
        print("No alert events were returned for this account.")
    print()

    print("Cleanup summary:")
    cleanup_rows = [
        [result.label, "ok" if result.ok else "failed", result.detail] for result in cleanup_results
    ]
    print(render_table(["resource", "status", "detail"], cleanup_rows))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
