# Free Tier Examples

Use a free-tier key to get started with catalog browsing and the read-only market-data endpoints available on that tier.

- [`bootstrap-and-search/bootstrap_and_search.py`](bootstrap-and-search/bootstrap_and_search.py) - Search the catalog.
- [`market-data-workbench/market_data_workbench.py`](market-data-workbench/market_data_workbench.py) - Review catalog, providers, FX, per-item `/v1/prices` lookups, and free-tier-compatible `/v1/prices/candles` requests (`interval=1d`, `fill=false`, `lookback` only).

## Run

Run from the `python/` directory after installing `cs2cap-sdk`:

```bash
python examples/free-tier/bootstrap-and-search/bootstrap_and_search.py
python examples/free-tier/market-data-workbench/market_data_workbench.py
```
