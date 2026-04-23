# InventoryApi

All URIs are relative to *https://api.cs2c.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**fetchSteamInventory**](InventoryApi.md#fetchsteaminventory) | **GET** /v1/inventory/steam | Fetch Steam Inventory |
| [**fetchSteamInventoryBySteamId**](InventoryApi.md#fetchsteaminventorybysteamid) | **GET** /v1/inventory/steam/lookup | Fetch Steam Inventory by Steam ID |



## fetchSteamInventory

> SteamInventoryResponse fetchSteamInventory()

Fetch Steam Inventory

Fetch the authenticated user\&#39;s live CS2 inventory from Steam. Requires a linked Steam account. No data is persisted — use the portfolio import endpoint to add items to a portfolio.

### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@cs2cap.com/sdk';
import type { FetchSteamInventoryRequest } from '@cs2cap.com/sdk';

async function example() {
  console.log("🚀 Testing @cs2cap.com/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  try {
    const data = await api.fetchSteamInventory();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SteamInventoryResponse**](SteamInventoryResponse.md)

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
| **403** | No linked Steam account. |  -  |
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code. <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |
| **503** | Steam inventory unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## fetchSteamInventoryBySteamId

> SteamInventoryResponse fetchSteamInventoryBySteamId(steamId)

Fetch Steam Inventory by Steam ID

Fetch the CS2 inventory for any Steam account by Steam64ID or vanity URL. Accepts a 17-digit Steam64ID (e.g. &#x60;76561197964243909&#x60;) or a custom URL name (e.g. &#x60;dadscap&#x60;). Vanity URL resolution requires a Steam Web API key to be configured. No data is persisted.

### Example

```ts
import {
  Configuration,
  InventoryApi,
} from '@cs2cap.com/sdk';
import type { FetchSteamInventoryBySteamIdRequest } from '@cs2cap.com/sdk';

async function example() {
  console.log("🚀 Testing @cs2cap.com/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new InventoryApi(config);

  const body = {
    // string | Steam64ID (17-digit) or vanity URL name (e.g. \'dadscap\').
    steamId: steamId_example,
  } satisfies FetchSteamInventoryBySteamIdRequest;

  try {
    const data = await api.fetchSteamInventoryBySteamId(body);
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
| **steamId** | `string` | Steam64ID (17-digit) or vanity URL name (e.g. \&#39;dadscap\&#39;). | [Defaults to `undefined`] |

### Return type

[**SteamInventoryResponse**](SteamInventoryResponse.md)

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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code. <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |
| **400** | Steam ID could not be resolved. |  -  |
| **503** | Steam inventory unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

