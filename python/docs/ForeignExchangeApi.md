# cs2cap_sdk.ForeignExchangeApi

All URIs are relative to *https://api.cs2c.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_fx_rates_v1_fx_get**](ForeignExchangeApi.md#get_fx_rates_v1_fx_get) | **GET** /v1/fx | Get Fx Rates


# **get_fx_rates_v1_fx_get**
> FXRatesResponse get_fx_rates_v1_fx_get()

Get Fx Rates

Return latest foreign exchange rates.

Parameters:
- None.

Response:
- `timestamp`: ISO timestamp for the rates snapshot.
- `rates`: Map of currency code to value relative to 1 USD (USD -> X).

Requirements:
- Valid API key with access to `/v1/fx`.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.fx_rates_response import FXRatesResponse
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
    api_instance = cs2cap_sdk.ForeignExchangeApi(api_client)

    try:
        # Get Fx Rates
        api_response = api_instance.get_fx_rates_v1_fx_get()
        print("The response of ForeignExchangeApi->get_fx_rates_v1_fx_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ForeignExchangeApi->get_fx_rates_v1_fx_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**FXRatesResponse**](FXRatesResponse.md)

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

