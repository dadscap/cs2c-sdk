"""CLI argument parsing helpers shared across example scripts."""

from __future__ import annotations


def parse_integer_option(value: str | None, fallback: int, label: str) -> int:
    """Parse *value* as an integer, returning *fallback* when *value* is ``None``."""
    if value is None:
        return fallback
    try:
        return int(value, 10)
    except ValueError:
        raise ValueError(f"{label} must be an integer.") from None


def parse_float_option(value: str | None, fallback: float, label: str) -> float:
    """Parse *value* as a float, returning *fallback* when *value* is ``None``."""
    if value is None:
        return fallback
    try:
        return float(value)
    except ValueError:
        raise ValueError(f"{label} must be a number.") from None
