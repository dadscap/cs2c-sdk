from __future__ import annotations

from collections.abc import Iterable


def decode_lines(response) -> Iterable[str]:
    buffer = ""
    for chunk in response.stream(amt=65536, decode_content=True):
        text = chunk.decode("utf-8") if isinstance(chunk, bytes) else chunk
        buffer += text
        while "\n" in buffer:
            line, buffer = buffer.split("\n", 1)
            line = line.strip()
            if line:
                yield line

    tail = buffer.strip()
    if tail:
        yield tail
