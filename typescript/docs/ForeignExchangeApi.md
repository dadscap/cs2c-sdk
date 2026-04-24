# ForeignExchangeApi

All URIs are relative to *https://api.cs2c.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getFxRates**](ForeignExchangeApi.md#getfxrates) | **GET** /v1/fx | Get Fx Rates |



## getFxRates

> FXRatesResponse getFxRates()

Get Fx Rates

Return latest foreign exchange rates.  Parameters: - None.  Response: - &#x60;timestamp&#x60;: ISO timestamp for the rates snapshot. - &#x60;rates&#x60;: Map of currency code to value relative to 1 USD (USD -&gt; X).  Requirements: - Valid API key with access to &#x60;/v1/fx&#x60;.

### Example

```ts
import {
  Configuration,
  ForeignExchangeApi,
} from '@cs2cap.com/sdk';
import type { GetFxRatesRequest } from '@cs2cap.com/sdk';

async function example() {
  console.log("🚀 Testing @cs2cap.com/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ForeignExchangeApi(config);

  try {
    const data = await api.getFxRates();
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

[**FXRatesResponse**](FXRatesResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

