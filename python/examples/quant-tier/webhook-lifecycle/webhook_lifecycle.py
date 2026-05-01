import argparse
import sys
from pathlib import Path

import cs2cap
from cs2cap.rest import ApiException

EXAMPLES_ROOT = Path(__file__).resolve().parents[2]
if str(EXAMPLES_ROOT) not in sys.path:
    sys.path.insert(0, str(EXAMPLES_ROOT))

from _shared.auth import build_configuration, load_api_key, require_real_api_key  # noqa: E402
from _shared.cleanup import CleanupRegistry  # noqa: E402
from _shared.render import render_table  # noqa: E402


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Create, update, rotate, inspect, and delete a webhook.")
    parser.add_argument("--url", default="https://example.com/cs2cap-webhook", help="Destination URL.")
    parser.add_argument("--label", default="SDK example webhook", help="Temporary webhook label.")
    parser.add_argument("--keep-resources", action="store_true", help="Leave the created webhook active.")
    return parser


def main() -> int:
    args = build_parser().parse_args()
    cleanup = CleanupRegistry(keep_resources=args.keep_resources)

    try:
        bearer_token = load_api_key("CS2C_API_KEY", start=Path(__file__))
        require_real_api_key(bearer_token)
    except RuntimeError as exc:
        print(str(exc), file=sys.stderr)
        return 1

    configuration = build_configuration(bearer_token)

    try:
        with cs2cap.ApiClient(configuration) as client:
            webhooks_api = cs2cap.AccountWebhooksApi(client)
            before = webhooks_api.list_webhooks()
            created = webhooks_api.create_webhook(
                cs2cap.WebhookCreateRequest(label=args.label, url=args.url, is_active=False)
            )
            webhook_id = created.webhook.id
            cleanup.add("delete temporary webhook", lambda: webhooks_api.delete_webhook(webhook_id))
            updated = webhooks_api.update_webhook(
                webhook_id,
                cs2cap.WebhookUpdateRequest(label=f"{args.label} (updated)", is_active=False),
            )
            rotated = webhooks_api.rotate_webhook_secret(webhook_id)
            deliveries = webhooks_api.list_webhook_deliveries(limit=5)
            delivery_detail = (
                webhooks_api.get_webhook_delivery(deliveries.deliveries[0].id)
                if deliveries.deliveries
                else None
            )
            after = webhooks_api.list_webhooks()

    except ApiException as exc:
        print(f"API request failed: {exc}", file=sys.stderr)
        return 1
    finally:
        cleanup_results = cleanup.run()

    print("Webhook lifecycle (/v1/account/webhooks):")
    print(
        render_table(
            ["step", "webhook_id", "label", "active", "secret_last4"],
            [
                ["before_count", str(len(before.webhooks)), "N/A", "N/A", "N/A"],
                ["created", created.webhook.id, created.webhook.label, str(created.webhook.is_active), created.webhook.secret_last4],
                ["updated", updated.id, updated.label, str(updated.is_active), updated.secret_last4],
                ["rotated", rotated.webhook.id, rotated.webhook.label, str(rotated.webhook.is_active), rotated.webhook.secret_last4],
                ["after_count", str(len(after.webhooks)), "N/A", "N/A", "N/A"],
            ],
        )
    )
    print()
    print("Webhook deliveries (/v1/account/webhooks/deliveries):")
    print(f"- listed: {len(deliveries.deliveries)}")
    print(f"- detail_checked: {delivery_detail.id if delivery_detail else 'N/A'}")
    print()
    print("Cleanup summary:")
    print(render_table(["resource", "status", "detail"], [[r.label, "ok" if r.ok else "failed", r.detail] for r in cleanup_results]))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
