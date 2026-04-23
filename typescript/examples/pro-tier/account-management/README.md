# Account Management

Create temporary watchlist entries and a disabled alert, review the account state,
and clean up the created resources at the end of the run.

All created resources are deleted before the script exits, so this is safe to run
repeatedly without leaving stale data in your account.

## Tier

Pro

## Run

From the `sdk-scripts/typescript/` directory after completing setup:

```bash
npm run example -- examples/pro-tier/account-management/account_management.ts
```
