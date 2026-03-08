# cs2cap_sdk.BidsApi

All URIs are relative to *https://api.cs2c.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_bids_v1_bids_get**](BidsApi.md#list_bids_v1_bids_get) | **GET** /v1/bids | List Bids


# **list_bids_v1_bids_get**
> BidsResponse list_bids_v1_bids_get(item_id=item_id, market_hash_name=market_hash_name, phase=phase, providers=providers, currency=currency, limit=limit, offset=offset)

List Bids

Return current highest bids from providers that support buy orders.

Filters:
- `item_id` or `market_hash_name`
- optional `phase`
- `providers` limited to buy-order-capable provider keys
- `currency`, `limit`, and `offset`

Behavior:
- broad listings use the indexed pagination path
- item-specific requests use direct indexed lookup
- unsupported providers return `400`

Response:
- `meta` with filters and providers queried
- flattened per-provider bid rows
- offset pagination metadata

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.bids_response import BidsResponse
from cs2cap_sdk.models.buy_order_provider import BuyOrderProvider
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
    api_instance = cs2cap_sdk.BidsApi(api_client)
    item_id = 56 # int | Filter by item ID. When provided, canonical market_hash_name and phase from catalog are used and take precedence over request market_hash_name/phase. (optional)
    market_hash_name = 'market_hash_name_example' # str | Optional market_hash_name to filter for specific item. Ignored when item_id is provided. (optional)
    phase = cs2cap_sdk.PhaseName() # PhaseName | Optional phase to filter (global or combined with market_hash_name). Ignored when item_id is provided. (optional)
    providers = [cs2cap_sdk.BuyOrderProvider()] # List[BuyOrderProvider] | Providers to include (provider-key enum values that support buy orders). Repeat `providers` to pass multiple values. (optional)
    currency = 'USD' # str | Target currency. Any ISO 4217 code supported by `/v1/fx` (see `/v1/fx` for the full list). Invalid codes return a 422 validation error. (optional) (default to 'USD')
    limit = 1000 # int | Maximum number of results to return. (optional) (default to 1000)
    offset = 0 # int | Number of results to skip for pagination. (optional) (default to 0)

    try:
        # List Bids
        api_response = api_instance.list_bids_v1_bids_get(item_id=item_id, market_hash_name=market_hash_name, phase=phase, providers=providers, currency=currency, limit=limit, offset=offset)
        print("The response of BidsApi->list_bids_v1_bids_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BidsApi->list_bids_v1_bids_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **int**| Filter by item ID. When provided, canonical market_hash_name and phase from catalog are used and take precedence over request market_hash_name/phase. | [optional] 
 **market_hash_name** | **str**| Optional market_hash_name to filter for specific item. Ignored when item_id is provided. | [optional] 
 **phase** | [**PhaseName**](.md)| Optional phase to filter (global or combined with market_hash_name). Ignored when item_id is provided. | [optional] 
 **providers** | [**List[BuyOrderProvider]**](BuyOrderProvider.md)| Providers to include (provider-key enum values that support buy orders). Repeat &#x60;providers&#x60; to pass multiple values. | [optional] 
 **currency** | **str**| Target currency. Any ISO 4217 code supported by &#x60;/v1/fx&#x60; (see &#x60;/v1/fx&#x60; for the full list). Invalid codes return a 422 validation error. | [optional] [default to &#39;USD&#39;]
 **limit** | **int**| Maximum number of results to return. | [optional] [default to 1000]
 **offset** | **int**| Number of results to skip for pagination. | [optional] [default to 0]

### Return type

[**BidsResponse**](BidsResponse.md)

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
**400** | Providers were specified that do not support buy orders. |  -  |
**503** | Indexed bids data unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

