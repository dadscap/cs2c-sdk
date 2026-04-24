from __future__ import annotations

import os
from pathlib import Path


def strip_quotes(value: str) -> str:
    if len(value) >= 2 and value[0] == value[-1] and value[0] in {"'", '"'}:
        return value[1:-1]
    return value


def find_repo_root(start: Path | None = None) -> Path:
    base = (start or Path(__file__)).resolve()
    for candidate in [base, *base.parents]:
        if (candidate / ".env.example").exists():
            return candidate
    raise RuntimeError("Could not locate the repo root from the current example path.")


def find_env_file(start: Path | None = None) -> Path:
    repo_root = find_repo_root(start)
    env_path = repo_root / ".env"
    if not env_path.exists():
        raise RuntimeError(f"No .env file found at {env_path}. Create it from .env.example first.")
    return env_path


def read_env_key(key_name: str, env_path: Path) -> str:
    for raw_line in env_path.read_text().splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        if key.strip() == key_name:
            cleaned = strip_quotes(value.strip())
            if cleaned:
                return cleaned
    raise RuntimeError(f"No {key_name} value found in {env_path}.")


def load_api_key(key_name: str, start: Path | None = None) -> str:
    override = os.environ.get("BEARER_TOKEN")
    if override:
        return override
    return read_env_key(key_name=key_name, env_path=find_env_file(start))


def build_configuration(access_token: str):
    import cs2cap

    return cs2cap.Configuration(access_token=access_token)


def require_real_api_key(access_token: str) -> None:
    if not access_token.startswith("sk_"):
        raise RuntimeError("This example requires a real sk_* API key, not a session token.")
