# Bootstrap and Search

Search the catalog and print a compact result table.

## Tier

Free

## Run

From the `sdk-scripts/python/` directory with your virtual environment active:

```bash
python examples/free-tier/bootstrap-and-search/bootstrap_and_search.py
```

Optional flags:

```bash
python examples/free-tier/bootstrap-and-search/bootstrap_and_search.py --query "AWP" --limit 20
```

| Flag | Default | Description |
| --- | --- | --- |
| `--query` | `AK-47` | Catalog search term |
| `--item-type` | `Weapon` | Item type filter |
| `--limit` | `10` | Number of items to print |
