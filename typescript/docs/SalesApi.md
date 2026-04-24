# SalesApi

All URIs are relative to *https://api.cs2c.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listRecentSales**](SalesApi.md#listrecentsales) | **GET** /v1/sales | List Recent Sales |



## listRecentSales

> SalesHistoryResponse listRecentSales(itemId, marketHashName, phase, providers, currency, limit)

List Recent Sales

Return recent sales history from providers with recent-sales support.  Filters: - &#x60;item_id&#x60; or &#x60;market_hash_name&#x60; is required - optional &#x60;phase&#x60; - &#x60;providers&#x60; limited to sales-capable provider keys - &#x60;currency&#x60; and &#x60;limit&#x60;  Behavior: - cache misses trigger live provider fetches during the request - results are cached per item and provider for 1 hour - response is single-page only with a maximum of 50 rows  Response: - request metadata and providers queried - sales records with sticker, charm, and inspect metadata when available - per-provider cache status for hit, miss, error, or unavailable

### Example

```ts
import {
  Configuration,
  SalesApi,
} from '@cs2cap.com/sdk';
import type { ListRecentSalesRequest } from '@cs2cap.com/sdk';

async function example() {
  console.log("🚀 Testing @cs2cap.com/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SalesApi(config);

  const body = {
    // number | Filter by item ID. When provided, canonical market_hash_name and phase from catalog are used and take precedence over request market_hash_name/phase. (optional)
    itemId: 56,
    // string | Exact market_hash_name match (required if item_id not provided). Ignored when item_id is provided. (optional)
    marketHashName: marketHashName_example,
    // PhaseName | Filter by phase (when applicable). Ignored when item_id is provided. (optional)
    phase: ...,
    // Array<RecentSalesProvider> | Providers to query (provider-key enum values with sales support). Repeat `providers` to pass multiple values. (optional)
    providers: ...,
    // string | Target currency. Any ISO 4217 code supported by `/v1/fx` (see `/v1/fx` for the full list). Invalid codes return a 422 validation error. (optional)
    currency: currency_example,
    // number | Maximum number of sales to return. Defaults to the effective tier cap. (optional)
    limit: 56,
  } satisfies ListRecentSalesRequest;

  try {
    const data = await api.listRecentSales(body);
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
| **marketHashName** | `string` | Exact market_hash_name match (required if item_id not provided). Ignored when item_id is provided. | [Optional] [Defaults to `undefined`] |
| **phase** | `PhaseName` | Filter by phase (when applicable). Ignored when item_id is provided. | [Optional] [Defaults to `undefined`] [Enum: Phase 1, Phase 2, Phase 3, Phase 4, Sapphire, Ruby, Black Pearl, Emerald] |
| **providers** | `Array<RecentSalesProvider>` | Providers to query (provider-key enum values with sales support). Repeat &#x60;providers&#x60; to pass multiple values. | [Optional] |
| **currency** | `string` | Target currency. Any ISO 4217 code supported by &#x60;/v1/fx&#x60; (see &#x60;/v1/fx&#x60; for the full list). Invalid codes return a 422 validation error. | [Optional] [Defaults to `&#39;USD&#39;`] |
| **limit** | `number` | Maximum number of sales to return. Defaults to the effective tier cap. | [Optional] [Defaults to `undefined`] |

### Return type

[**SalesHistoryResponse**](SalesHistoryResponse.md)

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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code. <br>  * X-RateLimit-Limit - Request limit for the rate-limit window that was exceeded. <br>  * X-RateLimit-Remaining - Remaining requests in the rate-limit window that was exceeded. <br>  * X-RateLimit-Reset - Seconds until the rate-limit window resets. <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |
| **400** | Missing required item filter or invalid provider selection. |  -  |
| **404** | The requested item could not be resolved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

