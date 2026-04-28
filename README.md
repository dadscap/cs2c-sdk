# CS2Cap SDKs

Client SDKs for the CS2Cap market-data API. Available for Python and TypeScript.

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Packages

| Language | Package | Install |
| --- | --- | --- |
| Python | [`cs2cap-py`](https://pypi.org/project/cs2cap-py/) | `pip install cs2cap-py` |
| TypeScript | `@cs2cap/cs2cap-ts` (GitHub Packages) | `npm install @cs2cap/cs2cap-ts --registry=https://npm.pkg.github.com` |

## Contents

- `python/` — Python SDK source and bundled example workflows in `python/examples/`
- `typescript/` — TypeScript SDK source and bundled example workflows in `typescript/examples/`
- `openapi/openapi.json` — public OpenAPI spec used to generate these SDKs

## API Base URL

```text
https://api.cs2c.app
```

## Onboarding

### Get an API key

1. Create an account at [cs2cap.com](https://cs2cap.com) and verify your email address.
2. Navigate to [cs2cap.com/account/api-keys](https://cs2cap.com/account/api-keys) and generate a key.

When you are ready to unlock additional endpoints and higher rate limits, upgrade at [cs2cap.com/account/billing](https://cs2cap.com/account/billing).

---

### Python

**Requirements:** Python 3.9+

Install the SDK from PyPI:

```bash
pip install cs2cap-py
```

Provide your API key:

```bash
export BEARER_TOKEN=sk_your_key_here
```

Or copy the env template and fill in your key:

```bash
cd python
cp .env.example .env
# edit .env and set CS2C_API_KEY=sk_your_key_here
```

Run examples from the `python/` directory:

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

---

### TypeScript

**Requirements:** Node.js 18+

Install the SDK from GitHub Packages:

```bash
npm install @cs2cap/cs2cap-ts --registry=https://npm.pkg.github.com
```

Provide your API key:

```bash
export BEARER_TOKEN=sk_your_key_here
```

Or copy the env template and fill in your key:

```bash
cd typescript
cp .env.example .env
# edit .env and set CS2C_API_KEY=sk_your_key_here
```

Install example runner dependencies and run examples from the `typescript/` directory:

```bash
cd typescript
npm install
```

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
