from __future__ import annotations

from collections.abc import Callable
from dataclasses import dataclass

CleanupCallback = Callable[[], object]


@dataclass
class CleanupAction:
    label: str
    callback: CleanupCallback


@dataclass
class CleanupResult:
    label: str
    ok: bool
    detail: str


class CleanupRegistry:
    def __init__(self, keep_resources: bool = False) -> None:
        self.keep_resources = keep_resources
        self._actions: list[CleanupAction] = []

    def add(self, label: str, callback: CleanupCallback) -> None:
        self._actions.append(CleanupAction(label=label, callback=callback))

    def pending_count(self) -> int:
        return len(self._actions)

    def run(self) -> list[CleanupResult]:
        if self.keep_resources:
            return [
                CleanupResult(
                    label=action.label,
                    ok=True,
                    detail="kept (--keep-resources)",
                )
                for action in self._actions
            ]

        results: list[CleanupResult] = []
        while self._actions:
            action = self._actions.pop()
            try:
                response = action.callback()
                results.append(
                    CleanupResult(
                        label=action.label,
                        ok=True,
                        detail=f"ok ({type(response).__name__})",
                    )
                )
            except Exception as exc:  # pragma: no cover - exercised via tests with a stub
                results.append(
                    CleanupResult(
                        label=action.label,
                        ok=False,
                        detail=str(exc),
                    )
                )
        return results
