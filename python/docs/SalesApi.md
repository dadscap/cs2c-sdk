# cs2cap_sdk.SalesApi

All URIs are relative to *https://api.cs2c.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_sales_v1_sales_get**](SalesApi.md#list_sales_v1_sales_get) | **GET** /v1/sales | List Recent Sales


# **list_sales_v1_sales_get**
> SalesHistoryResponse list_sales_v1_sales_get(item_id=item_id, market_hash_name=market_hash_name, phase=phase, providers=providers, currency=currency, limit=limit)

List Recent Sales

Return recent sales history from providers with recent-sales support.

Filters:
- `item_id` or `market_hash_name` is required
- optional `phase`
- `providers` limited to sales-capable provider keys
- `currency` and `limit`

Behavior:
- cache misses trigger live provider fetches during the request
- results are cached per item and provider for 1 hour
- response is single-page only with a maximum of 50 rows

Response:
- request metadata and providers queried
- sales records with sticker, charm, and inspect metadata when available
- per-provider cache status for hit, miss, error, or unavailable

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.recent_sales_provider import RecentSalesProvider
from cs2cap_sdk.models.sales_history_response import SalesHistoryResponse
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
    api_instance = cs2cap_sdk.SalesApi(api_client)
    item_id = 56 # int | Filter by item ID. When provided, canonical market_hash_name and phase from catalog are used and take precedence over request market_hash_name/phase. (optional)
    market_hash_name = 'market_hash_name_example' # str | Exact market_hash_name match (required if item_id not provided). Ignored when item_id is provided. (optional)
    phase = cs2cap_sdk.PhaseName() # PhaseName | Filter by phase (when applicable). Ignored when item_id is provided. (optional)
    providers = [cs2cap_sdk.RecentSalesProvider()] # List[RecentSalesProvider] | Providers to query (provider-key enum values with sales support). Repeat `providers` to pass multiple values. (optional)
    currency = 'USD' # str | Target currency. Any ISO 4217 code supported by `/v1/fx` (see `/v1/fx` for the full list). Invalid codes return a 422 validation error. (optional) (default to 'USD')
    limit = 56 # int | Maximum number of sales to return. Defaults to the effective tier cap. (optional)

    try:
        # List Recent Sales
        api_response = api_instance.list_sales_v1_sales_get(item_id=item_id, market_hash_name=market_hash_name, phase=phase, providers=providers, currency=currency, limit=limit)
        print("The response of SalesApi->list_sales_v1_sales_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SalesApi->list_sales_v1_sales_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **int**| Filter by item ID. When provided, canonical market_hash_name and phase from catalog are used and take precedence over request market_hash_name/phase. | [optional] 
 **market_hash_name** | **str**| Exact market_hash_name match (required if item_id not provided). Ignored when item_id is provided. | [optional] 
 **phase** | [**PhaseName**](.md)| Filter by phase (when applicable). Ignored when item_id is provided. | [optional] 
 **providers** | [**List[RecentSalesProvider]**](RecentSalesProvider.md)| Providers to query (provider-key enum values with sales support). Repeat &#x60;providers&#x60; to pass multiple values. | [optional] 
 **currency** | **str**| Target currency. Any ISO 4217 code supported by &#x60;/v1/fx&#x60; (see &#x60;/v1/fx&#x60; for the full list). Invalid codes return a 422 validation error. | [optional] [default to &#39;USD&#39;]
 **limit** | **int**| Maximum number of sales to return. Defaults to the effective tier cap. | [optional] 

### Return type

[**SalesHistoryResponse**](SalesHistoryResponse.md)

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
**400** | Missing required item filter or invalid provider selection. |  -  |
**404** | The requested item could not be resolved. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

