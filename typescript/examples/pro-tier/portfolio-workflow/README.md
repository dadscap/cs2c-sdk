# Portfolio Workflow

Create a temporary portfolio, add items, compare ad hoc and saved valuations, and optionally
import from Steam. The portfolio is deleted at the end of the run unless you pass `--keep-resources`.

## Tier

Pro

## Run

From the `sdk-scripts/typescript/` directory after completing setup:

```bash
npm run example -- examples/pro-tier/portfolio-workflow/portfolio_workflow.ts
```

Optional flags:

```bash
# Also fetch your Steam inventory and import one asset when possible
npm run example -- examples/pro-tier/portfolio-workflow/portfolio_workflow.ts --import-from-steam

# Keep the portfolio after the run instead of deleting it
npm run example -- examples/pro-tier/portfolio-workflow/portfolio_workflow.ts --keep-resources
```

| Flag | Description |
| --- | --- |
| `--import-from-steam` | Fetch your Steam inventory and import one CS2 asset into the portfolio |
| `--keep-resources` | Skip the cleanup step — the portfolio stays in your account after the run |
| `--query` | Catalog search term used to pick items (default: `AK-47`) |
| `--item-type` | Item type filter (default: `Weapon`) |
