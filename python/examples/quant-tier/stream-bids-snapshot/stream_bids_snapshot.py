import argparse
import json
import sys
from pathlib import Path

import cs2cap
from cs2cap.rest import ApiException

EXAMPLES_ROOT = Path(__file__).resolve().parents[2]
if str(EXAMPLES_ROOT) not in sys.path:
    sys.path.insert(0, str(EXAMPLES_ROOT))

from _shared.auth import build_configuration, load_api_key, require_real_api_key  # noqa: E402
from _shared.render import format_money, render_table  # noqa: E402
from _shared.streaming import decode_lines  # noqa: E402


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Stream the /v1/bids NDJSON snapshot stream.",
    )
    parser.add_argument(
        "--max-lines",
        type=int,
        default=5000,
        help="Maximum NDJSON rows to process. Use 0 to consume the full stream.",
    )
    parser.add_argument(
        "--top",
        type=int,
        default=15,
        help="Number of strongest bid rows to print after processing.",
    )
    parser.add_argument(
        "--provider",
        default=None,
        help="Optional local provider filter applied after decoding each row.",
    )
    return parser


def main() -> int:
    args = build_parser().parse_args()

    try:
        bearer_token = load_api_key("CS2C_API_KEY", start=Path(__file__))
        require_real_api_key(bearer_token)
    except RuntimeError as exc:
        print(str(exc), file=sys.stderr)
        return 1

    configuration = build_configuration(bearer_token)
    collected: list[cs2cap.BuyOrderItem] = []
    processed_lines = 0
    response = None

    try:
        with cs2cap.ApiClient(configuration) as client:
            bids_api = cs2cap.BidsApi(client)
            response = bids_api.stream_bids_snapshot_v1_bids_post_without_preload_content()

            for line in decode_lines(response):
                payload = json.loads(line)
                item = cs2cap.BuyOrderItem.from_dict(payload)
                processed_lines += 1

                if args.provider and item.provider != args.provider:
                    if args.max_lines and processed_lines >= args.max_lines:
                        break
                    continue

                collected.append(item)
                if args.max_lines and processed_lines >= args.max_lines:
                    break

    except ApiException as exc:
        print(f"API request failed: {exc}", file=sys.stderr)
        return 1
    finally:
        if response is not None:
            response.release_conn()
            response.close()

    if not collected:
        print("No rows were collected from the processed bids snapshot window.")
        return 0

    collected.sort(key=lambda item: item.highest_bid, reverse=True)
    top_rows = collected[: args.top]

    print("Snapshot summary:")
    print(f"- processed_lines: {processed_lines}")
    print(f"- collected_rows: {len(collected)}")
    print(f"- unique_providers: {len({item.provider for item in collected})}")
    if args.provider:
        print(f"- provider_filter: {args.provider}")
    print()

    rows = [
        [
            item.provider,
            str(item.item_id),
            item.market_hash_name,
            format_money(item.highest_bid),
            str(item.num_bids),
        ]
        for item in top_rows
    ]
    print(
        render_table(["provider", "item_id", "market_hash_name", "highest_bid", "num_bids"], rows)
    )  # noqa: E501
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
