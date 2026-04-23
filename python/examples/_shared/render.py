from __future__ import annotations

from collections.abc import Iterable
from datetime import datetime


def format_money(minor_units: int | None, currency: str = "USD") -> str:
    if minor_units is None:
        return "N/A"
    return f"{currency} {minor_units / 100:.2f}"


def format_decimal_money(value: str | None, currency: str = "USD") -> str:
    if value in {None, ""}:
        return "N/A"
    return f"{currency} {float(value):.2f}"


def format_percent(value: float | None) -> str:
    if value is None:
        return "N/A"
    return f"{value:.2f}%"


def parse_iso8601(value: str) -> datetime:
    return datetime.fromisoformat(value.replace("Z", "+00:00"))


def format_timestamp(value: datetime | str | None) -> str:
    if value is None:
        return "N/A"
    parsed = parse_iso8601(value) if isinstance(value, str) else value
    return parsed.strftime("%Y-%m-%d %H:%M UTC")


def render_table(headers: list[str], rows: list[list[str]]) -> str:
    widths = [
        max(len(str(cell)) for cell in [header, *[row[index] for row in rows]])
        for index, header in enumerate(headers)
    ]

    def render_row(values: Iterable[str]) -> str:
        return " | ".join(str(value).ljust(widths[index]) for index, value in enumerate(values))

    separator = "-+-".join("-" * width for width in widths)
    rendered_rows = [render_row(headers), separator]
    rendered_rows.extend(render_row(row) for row in rows)
    return "\n".join(rendered_rows)
