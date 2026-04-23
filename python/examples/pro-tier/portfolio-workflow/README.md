# Portfolio Workflow

Create a temporary portfolio, add items, compare ad hoc and saved valuations, and optionally
import from Steam. The portfolio is deleted at the end of the run unless you pass `--keep-resources`.

## Tier

Pro

## Run

From the `sdk-scripts/python/` directory with your virtual environment active:

```bash
python examples/pro-tier/portfolio-workflow/portfolio_workflow.py
```

Optional flags:

```bash
# Also fetch your Steam inventory and import one asset when possible
python examples/pro-tier/portfolio-workflow/portfolio_workflow.py --import-from-steam

# Keep the portfolio after the run instead of deleting it
python examples/pro-tier/portfolio-workflow/portfolio_workflow.py --keep-resources
```

| Flag | Description |
| --- | --- |
| `--import-from-steam` | Fetch your Steam inventory and import one CS2 asset into the portfolio |
| `--keep-resources` | Skip the cleanup step — the portfolio stays in your account after the run |
| `--query` | Catalog search term used to pick items (default: `AK-47`) |
| `--item-type` | Item type filter (default: `Weapon`) |
