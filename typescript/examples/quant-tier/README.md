# Quant Tier Examples

Use a quant-tier key for live streams and market-intelligence workflows.

- [`stream-prices-snapshot/stream_prices_snapshot.ts`](stream-prices-snapshot/stream_prices_snapshot.ts) - Read the full live prices stream.
- [`stream-bids-snapshot/stream_bids_snapshot.ts`](stream-bids-snapshot/stream_bids_snapshot.ts) - Read the full live bids stream.
- [`quant-signals-and-arbitrage/quant_signals_and_arbitrage.ts`](quant-signals-and-arbitrage/quant_signals_and_arbitrage.ts) - Review indicators and arbitrage opportunities.

## Run

Run from the `typescript/` directory after running `npm install`:

```bash
npm run example -- examples/quant-tier/stream-prices-snapshot/stream_prices_snapshot.ts --max-lines 5000 --top 15
npm run example -- examples/quant-tier/stream-bids-snapshot/stream_bids_snapshot.ts --max-lines 5000 --top 15
npm run example -- examples/quant-tier/quant-signals-and-arbitrage/quant_signals_and_arbitrage.ts
```

`--max-lines` limits how many rows are read from the stream (use `0` to consume the full stream).
`--top` controls how many results are printed at the end.
