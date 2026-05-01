# Market Research Report

Uses `GET /v1/market/items` to select high-liquidity candidates, then calls `GET /v1/market/items/{item_id}` for coverage detail.

```bash
python examples/pro-tier/item-analytics-report/item_analytics_report.py
python examples/pro-tier/item-analytics-report/item_analytics_report.py --top 10
```
