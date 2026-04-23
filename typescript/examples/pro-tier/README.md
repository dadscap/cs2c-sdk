# Pro Tier Examples

Use a pro-tier key for deeper account and analytics workflows.

- [`create-comparison-table/create_comparison_table.ts`](create-comparison-table/create_comparison_table.ts) - Compare price, bid, and sales data for a small item set.
- [`account-management/account_management.ts`](account-management/account_management.ts) - Create and clean up watchlist and alert resources.
- [`portfolio-workflow/portfolio_workflow.ts`](portfolio-workflow/portfolio_workflow.ts) - Create, value, and clean up a temporary portfolio.
- [`item-analytics-report/item_analytics_report.ts`](item-analytics-report/item_analytics_report.ts) - Review item analytics and provider coverage.

## Run

Run from the `sdk-scripts/typescript/` directory after completing setup:

```bash
npm run example -- examples/pro-tier/create-comparison-table/create_comparison_table.ts
npm run example -- examples/pro-tier/account-management/account_management.ts
npm run example -- examples/pro-tier/portfolio-workflow/portfolio_workflow.ts
npm run example -- examples/pro-tier/portfolio-workflow/portfolio_workflow.ts --import-from-steam
npm run example -- examples/pro-tier/item-analytics-report/item_analytics_report.ts
```
