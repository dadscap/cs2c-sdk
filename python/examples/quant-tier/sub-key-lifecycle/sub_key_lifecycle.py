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
    parser = argparse.ArgumentParser(description="Create, inspect, update, reissue, and delete a Quant sub-key.")
    parser.add_argument("--name", default="SDK example sub-key", help="Temporary sub-key name.")
    parser.add_argument("--keep-resources", action="store_true", help="Leave the created key active.")
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
            keys_api = cs2cap.AccountAPIKeysApi(client)
            before = keys_api.list_sub_keys(limit=10)
            created = keys_api.create_sub_key(
                cs2cap.ChildAPIKeyCreateRequest(
                    name=args.name,
                    rate_requests_per_minute_override=60,
                )
            )
            key_id = created.key_info.id
            cleanup.add("delete temporary sub-key", lambda: keys_api.delete_sub_key(key_id))
            detail = keys_api.get_sub_key(key_id)
            updated = keys_api.update_sub_key(
                key_id,
                cs2cap.ChildAPIKeyUpdateRequest(name=f"{args.name} (updated)"),
            )
            reissued = keys_api.reissue_sub_key(key_id)
            after = keys_api.list_sub_keys(limit=10)

    except ApiException as exc:
        print(f"API request failed: {exc}", file=sys.stderr)
        return 1
    finally:
        cleanup_results = cleanup.run()

    print("Sub-key lifecycle (/v1/account/sub-keys):")
    print(
        render_table(
            ["step", "key_id", "prefix", "active", "requests_month"],
            [
                ["before_count", str(len(before.keys)), "N/A", "N/A", "N/A"],
                ["created", created.key_info.id, created.key_info.key_prefix, str(created.key_info.is_active), "0"],
                ["detail", detail.key.id, detail.key.key_prefix, str(detail.key.is_active), str(detail.requests_this_month)],
                ["updated", updated.key.id, updated.key.key_prefix, str(updated.key.is_active), str(updated.requests_this_month)],
                ["reissued", reissued.key_info.id, reissued.key_info.key_prefix, str(reissued.key_info.is_active), "0"],
                ["after_count", str(len(after.keys)), "N/A", "N/A", "N/A"],
            ],
        )
    )
    print()
    print("Cleanup summary:")
    print(render_table(["resource", "status", "detail"], [[r.label, "ok" if r.ok else "failed", r.detail] for r in cleanup_results]))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
