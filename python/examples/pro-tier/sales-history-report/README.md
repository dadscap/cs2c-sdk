# Sales And History Report

Resolves catalog items, calls `GET /v1/sales` and `GET /v1/prices/history`, then prints latest sale, historical range, and simple momentum fields.

```bash
python examples/pro-tier/sales-history-report/sales_history_report.py
python examples/pro-tier/sales-history-report/sales_history_report.py --query "AWP" --count 5
```
