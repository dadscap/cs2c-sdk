import argparse
import json
import sys
from pathlib import Path

import cs2cap_sdk
from cs2cap_sdk.rest import ApiException

EXAMPLES_ROOT = Path(__file__).resolve().parents[2]
if str(EXAMPLES_ROOT) not in sys.path:
    sys.path.insert(0, str(EXAMPLES_ROOT))

from _shared.auth import build_configuration, load_api_key, require_real_api_key  # noqa: E402
from _shared.render import format_money, render_table  # noqa: E402
from _shared.streaming import decode_lines  # noqa: E402


def build_parser() -> argparse.ArgumentParser:
    # Expose the main stream limits and filters as CLI flags.
    parser = argparse.ArgumentParser(
        description="Stream the /v1/prices NDJSON snapshot stream.",
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
        help="Number of cheapest rows to print after processing.",
    )
    parser.add_argument(
        "--provider",
        default=None,
        help="Optional local provider filter applied after reading each row.",
    )
    return parser


def main() -> int:
    # Parse CLI limits before opening the live stream.
    args = build_parser().parse_args()

    try:
        bearer_token = load_api_key("CS2C_API_KEY", start=Path(__file__))
    except RuntimeError as exc:
        # Treat missing local config as a normal setup error.
        print(str(exc), file=sys.stderr)
        return 1

    # The stream requires a real API key, not a session token.
    try:
        require_real_api_key(bearer_token)
    except RuntimeError as exc:
        print(str(exc), file=sys.stderr)
        return 1

    # Reuse one authenticated client for the streaming request.
    configuration = build_configuration(bearer_token)

    collected: list[cs2cap_sdk.MarketItem] = []
    processed_lines = 0
    response = None

    try:
        with cs2cap_sdk.ApiClient(configuration) as client:
            prices_api = cs2cap_sdk.PricesApi(client)

            # Use the raw streaming variant so rows can be processed as they arrive.
            response = prices_api.stream_prices_snapshot_v1_prices_post_without_preload_content()

            for line in decode_lines(response):
                # Deserialize each NDJSON object into the generated model type.
                payload = json.loads(line)
                item = cs2cap_sdk.MarketItem.from_dict(payload)
                processed_lines += 1

                # Provider filtering happens locally because the endpoint is unfiltered.
                if args.provider and item.provider != args.provider:
                    if args.max_lines and processed_lines >= args.max_lines:
                        break
                    continue

                # Keep only the processed window, not the entire snapshot forever.
                collected.append(item)

                if args.max_lines and processed_lines >= args.max_lines:
                    break

    except ApiException as exc:
        # API failures are shown tersely because this is a terminal example.
        print(f"API request failed: {exc}", file=sys.stderr)
        return 1
    finally:
        if response is not None:
            # Always close the streaming connection explicitly.
            response.release_conn()
            response.close()

    if not collected:
        # Exit cleanly if the processed window produced no kept rows.
        print("No rows were collected from the processed snapshot window.")
        return 0

    # Sort by ask price so the summary highlights the cheapest observed rows.
    collected.sort(key=lambda item: item.lowest_ask)
    top_rows = collected[: args.top]

    # Print a small runtime summary before the table output.
    print("Snapshot summary:")
    print(f"- processed_lines: {processed_lines}")
    print(f"- collected_rows: {len(collected)}")
    print(f"- unique_providers: {len({item.provider for item in collected})}")
    if args.provider:
        print(f"- provider_filter: {args.provider}")
    print()

    # Show only the cheapest rows from the processed slice.
    headers = ["provider", "item_id", "market_hash_name", "lowest_ask", "quantity"]
    rows = [
        [
            item.provider,
            str(item.item_id),
            item.market_hash_name,
            format_money(item.lowest_ask),
            str(item.quantity),
        ]
        for item in top_rows
    ]
    print(render_table(headers, rows))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
