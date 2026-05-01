# Free Tier Examples

Use a free-tier key to get started with catalog browsing and read-only market data.

- [`bootstrap-and-search/bootstrap_and_search.ts`](bootstrap-and-search/bootstrap_and_search.ts) - Call `GET /v1/items/metadata` and `GET /v1/items`.
- [`market-data-workbench/market_data_workbench.ts`](market-data-workbench/market_data_workbench.ts) - Build a starter sheet from `GET /v1/prices` and `GET /v1/prices/candles`.

## Run

Run from the `typescript/` directory after running `npm install`:

```bash
npm run example -- examples/free-tier/bootstrap-and-search/bootstrap_and_search.ts
npm run example -- examples/free-tier/market-data-workbench/market_data_workbench.ts
```
