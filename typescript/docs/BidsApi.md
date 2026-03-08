# BidsApi

All URIs are relative to *https://api.cs2c.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listBidsV1BidsGet**](BidsApi.md#listbidsv1bidsget) | **GET** /v1/bids | List Bids |



## listBidsV1BidsGet

> BidsResponse listBidsV1BidsGet(itemId, marketHashName, phase, providers, currency, limit, offset)

List Bids

Return current highest bids from providers that support buy orders.  Filters: - &#x60;item_id&#x60; or &#x60;market_hash_name&#x60; - optional &#x60;phase&#x60; - &#x60;providers&#x60; limited to buy-order-capable provider keys - &#x60;currency&#x60;, &#x60;limit&#x60;, and &#x60;offset&#x60;  Behavior: - broad listings use the indexed pagination path - item-specific requests use direct indexed lookup - unsupported providers return &#x60;400&#x60;  Response: - &#x60;meta&#x60; with filters and providers queried - flattened per-provider bid rows - offset pagination metadata

### Example

```ts
import {
  Configuration,
  BidsApi,
} from 'cs2cap-sdk';
import type { ListBidsV1BidsGetRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new BidsApi(config);

  const body = {
    // number | Filter by item ID. When provided, canonical market_hash_name and phase from catalog are used and take precedence over request market_hash_name/phase. (optional)
    itemId: 56,
    // string | Optional market_hash_name to filter for specific item. Ignored when item_id is provided. (optional)
    marketHashName: marketHashName_example,
    // PhaseName | Optional phase to filter (global or combined with market_hash_name). Ignored when item_id is provided. (optional)
    phase: ...,
    // Array<BuyOrderProvider> | Providers to include (provider-key enum values that support buy orders). Repeat `providers` to pass multiple values. (optional)
    providers: ...,
    // string | Target currency. Any ISO 4217 code supported by `/v1/fx` (see `/v1/fx` for the full list). Invalid codes return a 422 validation error. (optional)
    currency: currency_example,
    // number | Maximum number of results to return. (optional)
    limit: 56,
    // number | Number of results to skip for pagination. (optional)
    offset: 56,
  } satisfies ListBidsV1BidsGetRequest;

  try {
    const data = await api.listBidsV1BidsGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **itemId** | `number` | Filter by item ID. When provided, canonical market_hash_name and phase from catalog are used and take precedence over request market_hash_name/phase. | [Optional] [Defaults to `undefined`] |
| **marketHashName** | `string` | Optional market_hash_name to filter for specific item. Ignored when item_id is provided. | [Optional] [Defaults to `undefined`] |
| **phase** | `PhaseName` | Optional phase to filter (global or combined with market_hash_name). Ignored when item_id is provided. | [Optional] [Defaults to `undefined`] [Enum: Phase 1, Phase 2, Phase 3, Phase 4, Sapphire, Ruby, Black Pearl, Emerald] |
| **providers** | `Array<BuyOrderProvider>` | Providers to include (provider-key enum values that support buy orders). Repeat &#x60;providers&#x60; to pass multiple values. | [Optional] |
| **currency** | `string` | Target currency. Any ISO 4217 code supported by &#x60;/v1/fx&#x60; (see &#x60;/v1/fx&#x60; for the full list). Invalid codes return a 422 validation error. | [Optional] [Defaults to `&#39;USD&#39;`] |
| **limit** | `number` | Maximum number of results to return. | [Optional] [Defaults to `1000`] |
| **offset** | `number` | Number of results to skip for pagination. | [Optional] [Defaults to `0`] |

### Return type

[**BidsResponse**](BidsResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **401** | Missing or invalid authentication credentials. |  -  |
| **403** | Authenticated but not permitted to access this resource. |  -  |
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant) when available. <br>  |
| **400** | Providers were specified that do not support buy orders. |  -  |
| **503** | Indexed bids data unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

