# Quant Tier Examples

Use a quant-tier key for market intelligence, root-key management, and webhooks.

- [`quant-signals-and-arbitrage/quant_signals_and_arbitrage.py`](quant-signals-and-arbitrage/quant_signals_and_arbitrage.py) - Combine `GET /v1/market/indexes`, `GET /v1/market/arbitrage`, and `GET /v1/market/indicators`.
- [`sub-key-lifecycle/sub_key_lifecycle.py`](sub-key-lifecycle/sub_key_lifecycle.py) - Demonstrate Quant sub-key list/create/get/update/reissue/delete.
- [`webhook-lifecycle/webhook_lifecycle.py`](webhook-lifecycle/webhook_lifecycle.py) - Demonstrate webhook list/create/update/rotate/delivery/delete.

## Run

Run from the `python/` directory after installing `cs2cap`:

```bash
python examples/quant-tier/quant-signals-and-arbitrage/quant_signals_and_arbitrage.py
python examples/quant-tier/sub-key-lifecycle/sub_key_lifecycle.py
python examples/quant-tier/webhook-lifecycle/webhook_lifecycle.py
```
