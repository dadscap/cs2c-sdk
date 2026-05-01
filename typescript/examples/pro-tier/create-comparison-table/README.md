# Bulk Price And Bid Report

Streams a bounded `POST /v1/prices` snapshot, groups rows by item, enriches the selected items with `POST /v1/bids/batch`, and prints ask/bid spread rows.

```bash
npm run example -- examples/pro-tier/create-comparison-table/create_comparison_table.ts
npm run example -- examples/pro-tier/create-comparison-table/create_comparison_table.ts --max-rows 1000 --top 12
```
