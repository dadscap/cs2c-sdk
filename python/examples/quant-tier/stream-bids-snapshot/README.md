# Stream Bids Snapshot

Read the live bids stream and print the strongest rows from the selected window.

The stream is NDJSON (one JSON object per line). This script reads up to `--max-lines` rows,
then prints the `--top` strongest bid entries.

## Tier

Quant

## Run

From the `sdk-scripts/python/` directory with your virtual environment active:

```bash
python examples/quant-tier/stream-bids-snapshot/stream_bids_snapshot.py
```

With flags:

```bash
python examples/quant-tier/stream-bids-snapshot/stream_bids_snapshot.py --max-lines 5000 --top 15
```

| Flag | Default | Description |
| --- | --- | --- |
| `--max-lines` | `5000` | Max rows to read before stopping. Use `0` to consume the full stream. |
| `--top` | `15` | Number of strongest bid rows to print at the end |
| `--provider` | _(all)_ | Filter results to a single provider name |
