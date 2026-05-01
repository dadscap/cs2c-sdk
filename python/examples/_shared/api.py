"""API call helpers shared across example scripts."""

from __future__ import annotations

import re
import json
from collections.abc import Callable
from typing import TypeVar

T = TypeVar("T")

from cs2cap.rest import ApiException

_WHITESPACE = re.compile(r"\s+")


def _compact(text: str) -> str:
    return _WHITESPACE.sub(" ", text).strip()


def format_api_error(exc: ApiException) -> str:
    """Return a compact, human-readable description of an ApiException."""
    detail = _compact(str(exc.body)) if exc.body else ""
    if detail:
        return f"API request failed ({exc.status}): {detail}"
    reason = exc.reason or "error"
    return f"API request failed ({exc.status} {reason})."


def call_or_skip(
    label: str,
    func: Callable[[], T],
) -> tuple[T | None, str | None]:
    """Call *func* and return its result, or skip gracefully on 403.

    Returns a ``(data, note)`` pair.  On success ``note`` is ``None``.
    On a 403 the data is ``None`` and ``note`` contains a skip message.
    Any other exception is re-raised.
    """
    try:
        return func(), None
    except ApiException as exc:
        if exc.status == 403:
            detail = _compact(str(exc.body)) if exc.body else ""
            reason = detail or exc.reason or "forbidden"
            return None, f"{label} skipped: {reason}"
        raise


def parse_ndjson_lines(payload: str, *, max_rows: int) -> list[dict[str, object]]:
    """Parse up to max_rows JSON objects from an NDJSON response body."""
    rows: list[dict[str, object]] = []
    for line in payload.splitlines():
        if len(rows) >= max_rows:
            break
        stripped = line.strip()
        if not stripped:
            continue
        value = json.loads(stripped)
        if isinstance(value, dict):
            rows.append(value)
    return rows
