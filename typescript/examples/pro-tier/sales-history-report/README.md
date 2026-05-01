# Sales And History Report

Resolves catalog items, calls `GET /v1/sales` and `GET /v1/prices/history`, then prints latest sale, historical range, and simple momentum fields.

```bash
npm run example -- examples/pro-tier/sales-history-report/sales_history_report.ts
npm run example -- examples/pro-tier/sales-history-report/sales_history_report.ts --query "AWP" --count 5
```
