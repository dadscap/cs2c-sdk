# Quant Tier Examples

Use a quant-tier key for market intelligence, root-key management, and webhooks.

- [`quant-signals-and-arbitrage/quant_signals_and_arbitrage.ts`](quant-signals-and-arbitrage/quant_signals_and_arbitrage.ts) - Combine `GET /v1/market/indexes`, `GET /v1/market/arbitrage`, and `GET /v1/market/indicators`.
- [`sub-key-lifecycle/sub_key_lifecycle.ts`](sub-key-lifecycle/sub_key_lifecycle.ts) - Demonstrate Quant sub-key list/create/get/update/reissue/delete.
- [`webhook-lifecycle/webhook_lifecycle.ts`](webhook-lifecycle/webhook_lifecycle.ts) - Demonstrate webhook list/create/update/rotate/delivery/delete.

## Run

Run from the `typescript/` directory after running `npm install`:

```bash
npm run example -- examples/quant-tier/quant-signals-and-arbitrage/quant_signals_and_arbitrage.ts
npm run example -- examples/quant-tier/sub-key-lifecycle/sub_key_lifecycle.ts
npm run example -- examples/quant-tier/webhook-lifecycle/webhook_lifecycle.ts
```
