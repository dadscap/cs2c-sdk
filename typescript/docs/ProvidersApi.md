# ProvidersApi

All URIs are relative to *https://api.cs2c.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listProviders**](ProvidersApi.md#listproviders) | **GET** /v1/providers | List Providers |



## listProviders

> { [key: string]: ProviderInfo; } listProviders(provider)

List Providers

List supported marketplace providers with capability, fee, currency, and health metadata.  Use the optional &#x60;provider&#x60; query parameter to fetch a single provider by key.

### Example

```ts
import {
  Configuration,
  ProvidersApi,
} from '@cs2cap.com/sdk';
import type { ListProvidersRequest } from '@cs2cap.com/sdk';

async function example() {
  console.log("🚀 Testing @cs2cap.com/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ProvidersApi(config);

  const body = {
    // string | Optional provider key filter (e.g. \"skinport\"). Omit to return all providers. (optional)
    provider: provider_example,
  } satisfies ListProvidersRequest;

  try {
    const data = await api.listProviders(body);
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
| **provider** | `string` | Optional provider key filter (e.g. \&quot;skinport\&quot;). Omit to return all providers. | [Optional] [Defaults to `undefined`] |

### Return type

[**{ [key: string]: ProviderInfo; }**](ProviderInfo.md)

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
| **404** | The requested provider key does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

