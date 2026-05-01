# Pro Tier Examples

Use a pro-tier key for bulk market data, recent sales, history, and market-item research.

- [`create-comparison-table/create_comparison_table.py`](create-comparison-table/create_comparison_table.py) - Stream `POST /v1/prices`, enrich with `POST /v1/bids/batch`, and print spread rows.
- [`sales-history-report/sales_history_report.py`](sales-history-report/sales_history_report.py) - Combine `GET /v1/sales` with `GET /v1/prices/history`.
- [`item-analytics-report/item_analytics_report.py`](item-analytics-report/item_analytics_report.py) - Use `GET /v1/market/items` and `GET /v1/market/items/{item_id}` for research.

## Run

Run from the `python/` directory after installing `cs2cap`:

```bash
python examples/pro-tier/create-comparison-table/create_comparison_table.py
python examples/pro-tier/sales-history-report/sales_history_report.py
python examples/pro-tier/item-analytics-report/item_analytics_report.py
```
