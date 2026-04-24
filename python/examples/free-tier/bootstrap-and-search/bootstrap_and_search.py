import argparse
import sys
from pathlib import Path

import cs2cap_sdk
from cs2cap_sdk.rest import ApiException

EXAMPLES_ROOT = Path(__file__).resolve().parents[2]
if str(EXAMPLES_ROOT) not in sys.path:
    sys.path.insert(0, str(EXAMPLES_ROOT))

from _shared.auth import build_configuration, load_api_key  # noqa: E402
from _shared.render import render_table  # noqa: E402


def build_parser() -> argparse.ArgumentParser:
    # Keep the example configurable without changing the source file.
    parser = argparse.ArgumentParser(
        description="Free-tier item search example.",
    )
    parser.add_argument(
        "--item-type",
        default="Weapon",
        help="Exact item_type filter to send to /v1/items.",
    )
    parser.add_argument(
        "--query",
        default="AK-47",
        help="Optional substring query for market_hash_name.",
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=10,
        help="Maximum number of catalog items to print.",
    )
    return parser


def main() -> int:
    # Parse CLI overrides before touching the network.
    args = build_parser().parse_args()

    try:
        bearer_token = load_api_key("CS2C_API_KEY", start=Path(__file__))
    except RuntimeError as exc:
        # Surface local config errors without a traceback.
        print(str(exc), file=sys.stderr)
        return 1

    # The generated client handles Authorization header formatting for us.
    configuration = build_configuration(bearer_token)

    try:
        with cs2cap_sdk.ApiClient(configuration) as client:
            # Split APIs by surface so each call site stays explicit.
            items_api = cs2cap_sdk.ItemsApi(client)

            items_response = items_api.list_items_v1_items_get(
                item_type=args.item_type,
                q=args.query,
                limit=args.limit,
            )

    except ApiException as exc:
        # API errors are shown tersely because this is an example script.
        print(f"API request failed: {exc}", file=sys.stderr)
        return 1

    # Flatten the returned item models into plain strings for terminal output.
    rows: list[list[str]] = []
    for item in items_response.items:
        rows.append(
            [
                str(item.item_id) if item.item_id is not None else "N/A",
                item.market_hash_name,
                item.rarity_name or "N/A",
                item.collection or "N/A",
            ]
        )

    if not rows:
        # Exit cleanly when the search simply returned no matches.
        print("No items matched the provided search.")
        return 0

    # Render the final catalog sample as a simple terminal table.
    headers = ["item_id", "market_hash_name", "rarity", "collection"]
    print(render_table(headers, rows))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
