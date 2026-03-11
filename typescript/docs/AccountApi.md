# AccountApi

All URIs are relative to *https://api.cs2c.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**resetFreeTierIpBindingV1AccountKeyResetIpPost**](AccountApi.md#resetfreetieripbindingv1accountkeyresetippost) | **POST** /v1/account/key/reset-ip | Reset Free Tier Ip Binding |



## resetFreeTierIpBindingV1AccountKeyResetIpPost

> IPResetResponse resetFreeTierIpBindingV1AccountKeyResetIpPost()

Reset Free Tier Ip Binding

Rebind the active key to the caller IP for free tier with cooldown protection.

### Example

```ts
import {
  Configuration,
  AccountApi,
} from 'cs2cap-sdk';
import type { ResetFreeTierIpBindingV1AccountKeyResetIpPostRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  try {
    const data = await api.resetFreeTierIpBindingV1AccountKeyResetIpPost();
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

[**IPResetResponse**](IPResetResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

