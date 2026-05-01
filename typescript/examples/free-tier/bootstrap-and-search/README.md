# Bootstrap And Search

Calls `GET /v1/items/metadata` to summarize catalog filter options, then calls `GET /v1/items` to print matching catalog rows.

```bash
npm run example -- examples/free-tier/bootstrap-and-search/bootstrap_and_search.ts
npm run example -- examples/free-tier/bootstrap-and-search/bootstrap_and_search.ts --query "AWP" --limit 20
```
