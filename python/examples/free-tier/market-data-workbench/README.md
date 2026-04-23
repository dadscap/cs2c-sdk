# Market Data Workbench

Explore the free-tier market-data endpoints in one read-only run: catalog search,
providers, FX, per-item `/v1/prices` lookups, and `/v1/prices/candles` with the
free-tier restrictions (`interval=1d`, `fill=false`, `lookback` only).

This script makes no writes — safe to run repeatedly.

## Tier

Free

## Run

From the `sdk-scripts/python/` directory with your virtual environment active:

```bash
python examples/free-tier/market-data-workbench/market_data_workbench.py
```
