# CS2C-API SDKs

Client SDKs for the public CS2C-API market-data surface. Languages available: Python, TypeScript

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Contents

- `python/` — generated Python client plus bundled example workflows in `python/examples/`
- `typescript/` — generated TypeScript Fetch client plus bundled example workflows in `typescript/examples/`
- `openapi/openapi.json` — public OpenAPI source used for generation

## API Base URL

```text
https://api.cs2c.app
```

## Onboarding

### Get an API key

1. Create an account at [cs2cap.com](https://cs2cap.com) and verify your email address.
2. Navigate to [cs2cap.com/account/api-keys](https://cs2cap.com/account/api-keys) and generate a key.

> **Note for free-tier keys:** Free keys are bound to the IP address that made the generation request. If your active IP at request time differs from the IP you query from, calls will be rejected. Avoid using a VPN or Use the bootstrap example to rebind the key to your current IP if needed.

When you are ready to unlock additional endpoints and higher rate limits, upgrade at [cs2cap.com/account/billing](https://cs2cap.com/account/billing).

### Python

**Requirements:** Python 3.9+

```bash
cd python
python -m venv .venv && source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install .
```

Provide your API key via environment variable:

```bash
export BEARER_TOKEN=sk_your_key_here
```

Or copy the template and fill in your key:

```bash
cp .env.example .env
# then edit .env and set CS2C_API_KEY=sk_your_key_here
```

Run examples from the `python/` directory with your virtual environment active:

| Tier | Example | Command |
| --- | --- | --- |
| Free | Bootstrap & search | `python examples/free-tier/bootstrap-and-search/bootstrap_and_search.py` |
| Free | Market data workbench | `python examples/free-tier/market-data-workbench/market_data_workbench.py` |
| Pro | Comparison table | `python examples/pro-tier/create-comparison-table/create_comparison_table.py` |
| Pro | Account management | `python examples/pro-tier/account-management/account_management.py` |
| Pro | Portfolio workflow | `python examples/pro-tier/portfolio-workflow/portfolio_workflow.py` |
| Pro | Item analytics report | `python examples/pro-tier/item-analytics-report/item_analytics_report.py` |
| Quant | Stream prices | `python examples/quant-tier/stream-prices-snapshot/stream_prices_snapshot.py --max-lines 5000 --top 15` |
| Quant | Stream bids | `python examples/quant-tier/stream-bids-snapshot/stream_bids_snapshot.py --max-lines 5000 --top 15` |
| Quant | Signals & arbitrage | `python examples/quant-tier/quant-signals-and-arbitrage/quant_signals_and_arbitrage.py` |

See [`python/examples/`](python/examples/) for per-tier README files with full option descriptions.

### TypeScript

**Requirements:** Node.js 18+

```bash
cd typescript
npm install
npm run build
```

Provide your API key via environment variable:

```bash
export BEARER_TOKEN=sk_your_key_here
```

Or copy the template and fill in your key:

```bash
cp .env.example .env
# then edit .env and set CS2C_API_KEY=sk_your_key_here
```

Run examples from the `typescript/` directory:

| Tier | Example | Command |
| --- | --- | --- |
| Free | Bootstrap & search | `npm run example -- examples/free-tier/bootstrap-and-search/bootstrap_and_search.ts` |
| Free | Market data workbench | `npm run example -- examples/free-tier/market-data-workbench/market_data_workbench.ts` |
| Pro | Comparison table | `npm run example -- examples/pro-tier/create-comparison-table/create_comparison_table.ts` |
| Pro | Account management | `npm run example -- examples/pro-tier/account-management/account_management.ts` |
| Pro | Portfolio workflow | `npm run example -- examples/pro-tier/portfolio-workflow/portfolio_workflow.ts` |
| Pro | Item analytics report | `npm run example -- examples/pro-tier/item-analytics-report/item_analytics_report.ts` |
| Quant | Stream prices | `npm run example -- examples/quant-tier/stream-prices-snapshot/stream_prices_snapshot.ts --max-lines 5000 --top 15` |
| Quant | Stream bids | `npm run example -- examples/quant-tier/stream-bids-snapshot/stream_bids_snapshot.ts --max-lines 5000 --top 15` |
| Quant | Signals & arbitrage | `npm run example -- examples/quant-tier/quant-signals-and-arbitrage/quant_signals_and_arbitrage.ts` |

See [`typescript/examples/`](typescript/examples/) for per-tier README files with full option descriptions.
