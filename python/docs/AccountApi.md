# cs2cap_sdk.AccountApi

All URIs are relative to *https://api.cs2c.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reset_free_tier_ip_binding_v1_account_key_reset_ip_post**](AccountApi.md#reset_free_tier_ip_binding_v1_account_key_reset_ip_post) | **POST** /v1/account/key/reset-ip | Reset Free Tier Ip Binding


# **reset_free_tier_ip_binding_v1_account_key_reset_ip_post**
> IPResetResponse reset_free_tier_ip_binding_v1_account_key_reset_ip_post()

Reset Free Tier Ip Binding

Rebind the active key to the caller IP for free tier with cooldown protection.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.ip_reset_response import IPResetResponse
from cs2cap_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.cs2c.app
# See configuration.py for a list of all supported configuration parameters.
configuration = cs2cap_sdk.Configuration(
    host = "https://api.cs2c.app"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: BearerAuth
configuration = cs2cap_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with cs2cap_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = cs2cap_sdk.AccountApi(api_client)

    try:
        # Reset Free Tier Ip Binding
        api_response = api_instance.reset_free_tier_ip_binding_v1_account_key_reset_ip_post()
        print("The response of AccountApi->reset_free_tier_ip_binding_v1_account_key_reset_ip_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->reset_free_tier_ip_binding_v1_account_key_reset_ip_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**IPResetResponse**](IPResetResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication credentials. |  -  |
**403** | Authenticated but not permitted to access this resource. |  -  |
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

