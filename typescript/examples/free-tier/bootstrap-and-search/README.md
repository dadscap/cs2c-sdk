# Bootstrap and Search

Rebind the free-tier key to your current IP, then search the catalog and print a
compact result table.

Free-tier keys are IP-bound. This script calls the reset-IP endpoint first so all subsequent
requests are accepted from your current network address.

## Tier

Free

## Run

From the `sdk-scripts/typescript/` directory after completing setup:

```bash
npm run example -- examples/free-tier/bootstrap-and-search/bootstrap_and_search.ts
```

Optional flags:

```bash
npm run example -- examples/free-tier/bootstrap-and-search/bootstrap_and_search.ts --query "AWP" --limit 20
```

| Flag | Default | Description |
| --- | --- | --- |
| `--query` | `AK-47` | Catalog search term |
| `--item-type` | `Weapon` | Item type filter |
| `--limit` | `10` | Number of items to print |
