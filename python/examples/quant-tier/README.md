# Quant Tier Examples

Use a quant-tier key for live streams and market-intelligence workflows.

- [`stream-prices-snapshot/stream_prices_snapshot.py`](stream-prices-snapshot/stream_prices_snapshot.py) - Read the full live prices stream.
- [`stream-bids-snapshot/stream_bids_snapshot.py`](stream-bids-snapshot/stream_bids_snapshot.py) - Read the full live bids stream.
- [`quant-signals-and-arbitrage/quant_signals_and_arbitrage.py`](quant-signals-and-arbitrage/quant_signals_and_arbitrage.py) - Review indicators and arbitrage opportunities.

## Run

Run from the `sdk-scripts/python/` directory with your virtual environment active:

```bash
python examples/quant-tier/stream-prices-snapshot/stream_prices_snapshot.py --max-lines 5000 --top 15
python examples/quant-tier/stream-bids-snapshot/stream_bids_snapshot.py --max-lines 5000 --top 15
python examples/quant-tier/quant-signals-and-arbitrage/quant_signals_and_arbitrage.py
```

`--max-lines` limits how many rows are read from the stream (use `0` to consume the full stream).
`--top` controls how many results are printed at the end.
