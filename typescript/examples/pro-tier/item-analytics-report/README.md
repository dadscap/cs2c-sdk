# Market Research Report

Uses `GET /v1/market/items` to select high-liquidity candidates, then calls `GET /v1/market/items/{item_id}` for coverage detail.

```bash
npm run example -- examples/pro-tier/item-analytics-report/item_analytics_report.ts
npm run example -- examples/pro-tier/item-analytics-report/item_analytics_report.ts --top 10
```
