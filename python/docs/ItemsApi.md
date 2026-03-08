# cs2cap_sdk.ItemsApi

All URIs are relative to *https://api.cs2c.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_market_ids_v1_items_market_ids_get**](ItemsApi.md#get_market_ids_v1_items_market_ids_get) | **GET** /v1/items/market-ids | Get Market Ids
[**list_items_v1_items_get**](ItemsApi.md#list_items_v1_items_get) | **GET** /v1/items | List Items


# **get_market_ids_v1_items_market_ids_get**
> MarketIdsResponse get_market_ids_v1_items_market_ids_get()

Get Market Ids

Get provider-specific marketplace IDs for all items.

Returns a mapping of every `market_hash_name` to its provider-specific IDs
(e.g. `buff163_goods_id`, `csfloat_id`, `steam_nameid`).

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.market_ids_response import MarketIdsResponse
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
    api_instance = cs2cap_sdk.ItemsApi(api_client)

    try:
        # Get Market Ids
        api_response = api_instance.get_market_ids_v1_items_market_ids_get()
        print("The response of ItemsApi->get_market_ids_v1_items_market_ids_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ItemsApi->get_market_ids_v1_items_market_ids_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**MarketIdsResponse**](MarketIdsResponse.md)

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

# **list_items_v1_items_get**
> PaginatedResponseItemOut list_items_v1_items_get(q=q, item_id=item_id, market_hash_name=market_hash_name, item_type=item_type, item_subtype=item_subtype, weapon_type=weapon_type, base_name=base_name, skin_name=skin_name, wear_name=wear_name, phase=phase, collection=collection, crates=crates, rarity_name=rarity_name, rarity_color=rarity_color, style_name=style_name, is_stattrak=is_stattrak, is_souvenir=is_souvenir, limit=limit, offset=offset)

List Items

Search the normalized CS2 item catalog with exact-match metadata filters and offset pagination.

Filters:
- exact catalog fields such as `item_type`, `collection`, `rarity_name`, and `phase`
- `q` for case-insensitive substring search on `market_hash_name`
- `item_id` for direct lookup

Response:
- paginated item records with canonical identifiers and item metadata
- optional `supply` values when available

Use this endpoint to resolve canonical `item_id` values before calling prices, bids, sales, or market analytics.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.paginated_response_item_out import PaginatedResponseItemOut
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
    api_instance = cs2cap_sdk.ItemsApi(api_client)
    q = 'q_example' # str | Search by name substring (case-insensitive) (optional)
    item_id = 56 # int | Exact item ID match (optional)
    market_hash_name = 'market_hash_name_example' # str | Exact market hash name match (case-insensitive) (optional)
    item_type = 'item_type_example' # str | Exact item type match (case-insensitive). Options: Weapon, Sticker, Sticker Slab, Graffiti, Charm, Crate, Music Kit, Patch, Collectible, Agent, Key, Tool. (optional)
    item_subtype = 'item_subtype_example' # str | Exact item subtype match (case-insensitive). Options depend on item_type (for example Equipment, Gloves, Rifles, Autograph, Team, Capsule Key). (optional)
    weapon_type = 'weapon_type_example' # str | Exact weapon type match (case-insensitive) (optional)
    base_name = 'base_name_example' # str | Exact base name match (case-insensitive) (optional)
    skin_name = 'skin_name_example' # str | Exact skin name match (case-insensitive) (optional)
    wear_name = 'wear_name_example' # str | Exact wear name match (case-insensitive) (optional)
    phase = 'phase_example' # str | Exact phase match (case-insensitive) (optional)
    collection = 'collection_example' # str | Exact collection match (case-insensitive) (optional)
    crates = ['crates_example'] # List[str] | Filter by crate names (matches any provided value) (optional)
    rarity_name = 'rarity_name_example' # str | Exact rarity name match (case-insensitive) (optional)
    rarity_color = 'rarity_color_example' # str | Exact rarity color match (case-insensitive) (optional)
    style_name = 'style_name_example' # str | Exact style name match (case-insensitive) (optional)
    is_stattrak = True # bool | Filter by StatTrak items (optional)
    is_souvenir = True # bool | Filter by Souvenir items (optional)
    limit = 56 # int | Maximum number of items to return. (optional)
    offset = 0 # int | Number of results to skip for pagination. (optional) (default to 0)

    try:
        # List Items
        api_response = api_instance.list_items_v1_items_get(q=q, item_id=item_id, market_hash_name=market_hash_name, item_type=item_type, item_subtype=item_subtype, weapon_type=weapon_type, base_name=base_name, skin_name=skin_name, wear_name=wear_name, phase=phase, collection=collection, crates=crates, rarity_name=rarity_name, rarity_color=rarity_color, style_name=style_name, is_stattrak=is_stattrak, is_souvenir=is_souvenir, limit=limit, offset=offset)
        print("The response of ItemsApi->list_items_v1_items_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ItemsApi->list_items_v1_items_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**| Search by name substring (case-insensitive) | [optional] 
 **item_id** | **int**| Exact item ID match | [optional] 
 **market_hash_name** | **str**| Exact market hash name match (case-insensitive) | [optional] 
 **item_type** | **str**| Exact item type match (case-insensitive). Options: Weapon, Sticker, Sticker Slab, Graffiti, Charm, Crate, Music Kit, Patch, Collectible, Agent, Key, Tool. | [optional] 
 **item_subtype** | **str**| Exact item subtype match (case-insensitive). Options depend on item_type (for example Equipment, Gloves, Rifles, Autograph, Team, Capsule Key). | [optional] 
 **weapon_type** | **str**| Exact weapon type match (case-insensitive) | [optional] 
 **base_name** | **str**| Exact base name match (case-insensitive) | [optional] 
 **skin_name** | **str**| Exact skin name match (case-insensitive) | [optional] 
 **wear_name** | **str**| Exact wear name match (case-insensitive) | [optional] 
 **phase** | **str**| Exact phase match (case-insensitive) | [optional] 
 **collection** | **str**| Exact collection match (case-insensitive) | [optional] 
 **crates** | [**List[str]**](str.md)| Filter by crate names (matches any provided value) | [optional] 
 **rarity_name** | **str**| Exact rarity name match (case-insensitive) | [optional] 
 **rarity_color** | **str**| Exact rarity color match (case-insensitive) | [optional] 
 **style_name** | **str**| Exact style name match (case-insensitive) | [optional] 
 **is_stattrak** | **bool**| Filter by StatTrak items | [optional] 
 **is_souvenir** | **bool**| Filter by Souvenir items | [optional] 
 **limit** | **int**| Maximum number of items to return. | [optional] 
 **offset** | **int**| Number of results to skip for pagination. | [optional] [default to 0]

### Return type

[**PaginatedResponseItemOut**](PaginatedResponseItemOut.md)

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

