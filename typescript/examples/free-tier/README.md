# Free Tier Examples

Use a free-tier key to get started with catalog browsing and the market-data
endpoints available on that tier.

- [`bootstrap-and-search/bootstrap_and_search.ts`](bootstrap-and-search/bootstrap_and_search.ts) - Search the catalog.
- [`market-data-workbench/market_data_workbench.ts`](market-data-workbench/market_data_workbench.ts) - Review catalog, providers, FX, per-item `/v1/prices` lookups, and free-tier-compatible `/v1/prices/candles` requests (`interval=1d`, `fill=false`, `lookback` only).

## Run

Run from the `typescript/` directory after running `npm install`:

```bash
npm run example -- examples/free-tier/bootstrap-and-search/bootstrap_and_search.ts
npm run example -- examples/free-tier/market-data-workbench/market_data_workbench.ts
```
