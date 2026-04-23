# CS2Cap SDKs

Generated client SDKs for the public CS2Cap market-data surface.

This repository is generated from the private source repository's public OpenAPI spec.
Do not edit generated client code here manually.

## Contents

- `python/` — generated Python client plus bundled example workflows in `python/examples/`
- `typescript/` — generated TypeScript Fetch client plus bundled example workflows in `typescript/examples/`
- `openapi/openapi.json` — public OpenAPI source used for generation

## API Base URL

```text
https://api.cs2c.app
```

## Notes

- The published spec is intentionally limited to the documented external API surface.
- Admin, auth, and billing-management endpoints are excluded.
- Account watchlist, alerts, and API-key IP reset endpoints are included.
- Regenerate from the source repo when the public OpenAPI changes.
