# Bootstrap And Search

Calls `GET /v1/items/metadata` to summarize catalog filter options, then calls `GET /v1/items` to print matching catalog rows.

```bash
python examples/free-tier/bootstrap-and-search/bootstrap_and_search.py
python examples/free-tier/bootstrap-and-search/bootstrap_and_search.py --query "AWP" --limit 20
```
