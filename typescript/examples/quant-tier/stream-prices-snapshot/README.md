# Stream Prices Snapshot

Read the live prices stream and print the cheapest rows from the selected window.

The stream is NDJSON (one JSON object per line). This script reads up to `--max-lines` rows,
then prints the `--top` cheapest entries.

## Tier

Quant

## Run

From the `sdk-scripts/typescript/` directory after completing setup:

```bash
npm run example -- examples/quant-tier/stream-prices-snapshot/stream_prices_snapshot.ts
```

With flags:

```bash
npm run example -- examples/quant-tier/stream-prices-snapshot/stream_prices_snapshot.ts --max-lines 5000 --top 15
```

| Flag | Default | Description |
| --- | --- | --- |
| `--max-lines` | `5000` | Max rows to read before stopping. Use `0` to consume the full stream. |
| `--top` | `15` | Number of cheapest rows to print at the end |
| `--provider` | _(all)_ | Filter results to a single provider name |
