# Pro Tier Examples

Use a pro-tier key for bulk market data, recent sales, history, and market-item research.

- [`create-comparison-table/create_comparison_table.ts`](create-comparison-table/create_comparison_table.ts) - Stream `POST /v1/prices`, enrich with `POST /v1/bids/batch`, and print spread rows.
- [`sales-history-report/sales_history_report.ts`](sales-history-report/sales_history_report.ts) - Combine `GET /v1/sales` with `GET /v1/prices/history`.
- [`item-analytics-report/item_analytics_report.ts`](item-analytics-report/item_analytics_report.ts) - Use `GET /v1/market/items` and `GET /v1/market/items/{item_id}` for research.

## Run

Run from the `typescript/` directory after running `npm install`:

```bash
npm run example -- examples/pro-tier/create-comparison-table/create_comparison_table.ts
npm run example -- examples/pro-tier/sales-history-report/sales_history_report.ts
npm run example -- examples/pro-tier/item-analytics-report/item_analytics_report.ts
```
