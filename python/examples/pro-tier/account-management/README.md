# Account Management

Create temporary watchlist entries and a disabled alert, review the account state,
and clean up the created resources at the end of the run.

All created resources are deleted before the script exits, so this is safe to run
repeatedly without leaving stale data in your account.

## Tier

Pro

## Run

From the `sdk-scripts/python/` directory with your virtual environment active:

```bash
python examples/pro-tier/account-management/account_management.py
```
