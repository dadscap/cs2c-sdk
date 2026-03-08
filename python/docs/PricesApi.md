# cs2cap_sdk.PricesApi

All URIs are relative to *https://api.cs2c.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_prices_v1_prices_get**](PricesApi.md#list_prices_v1_prices_get) | **GET** /v1/prices | List Prices
[**price_candles_v1_prices_candles_get**](PricesApi.md#price_candles_v1_prices_candles_get) | **GET** /v1/prices/candles | Price Candles
[**price_history_v1_prices_history_get**](PricesApi.md#price_history_v1_prices_history_get) | **GET** /v1/prices/history | Price History


# **list_prices_v1_prices_get**
> PricesPaginatedResponseMarketItem list_prices_v1_prices_get(item_id=item_id, market_hash_name=market_hash_name, phase=phase, providers=providers, currency=currency, limit=limit, offset=offset)

List Prices

Return current lowest ask listings.

Parameters:
- `item_id`: Exact item ID (recommended when known).
- `market_hash_name`: Exact market name.
- `phase`: Optional Doppler phase filter.
- `providers`: Optional provider-key enum list (repeat `providers` to pass multiple values).
- `currency`: Quote currency for prices (default `USD`).
- `limit`, `offset`: Offset pagination controls.

Behavior:
- If no filters are provided, returns a broad paginated listing.
- If `market_hash_name` is Doppler and `phase` is omitted, results aggregate across phases per provider.
- If `market_hash_name` and `phase` are both provided, only that exact phase is returned.

Response:
- `meta`: Applied filters, requested providers, returned providers, currency.
- `items`: Per-provider lowest ask entries.
- `pagination`: `limit`, `offset`, `total`, `has_next`, `has_prev`.

Requirements:
- Valid API key with access to `/v1/prices`.
- `limit` is capped by your tier.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.all_providers import AllProviders
from cs2cap_sdk.models.prices_paginated_response_market_item import PricesPaginatedResponseMarketItem
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
    api_instance = cs2cap_sdk.PricesApi(api_client)
    item_id = 56 # int | Item ID (fastest lookup). Use /v1/items to search for IDs. (optional)
    market_hash_name = 'market_hash_name_example' # str | Exact item name. For Doppler items without phase, aggregates all phases (sums quantities, min price). (optional)
    phase = cs2cap_sdk.PhaseName() # PhaseName | Doppler phase (Phase 1-4, Black Pearl, Emerald, Sapphire, Ruby). Works with or without market_hash_name. (optional)
    providers = [cs2cap_sdk.AllProviders()] # List[AllProviders] | Provider keys to include (enum values). Repeat the query parameter to pass multiple providers, e.g. providers=steam&providers=skinport. (optional)
    currency = 'USD' # str | Target currency. Any ISO 4217 code supported by `/v1/fx` (see `/v1/fx` for the full list). Invalid codes return a 422 validation error. (optional) (default to 'USD')
    limit = 56 # int | Results per page. Defaults to the effective tier cap. (optional)
    offset = 0 # int | Pagination offset (optional) (default to 0)

    try:
        # List Prices
        api_response = api_instance.list_prices_v1_prices_get(item_id=item_id, market_hash_name=market_hash_name, phase=phase, providers=providers, currency=currency, limit=limit, offset=offset)
        print("The response of PricesApi->list_prices_v1_prices_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->list_prices_v1_prices_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **int**| Item ID (fastest lookup). Use /v1/items to search for IDs. | [optional] 
 **market_hash_name** | **str**| Exact item name. For Doppler items without phase, aggregates all phases (sums quantities, min price). | [optional] 
 **phase** | [**PhaseName**](.md)| Doppler phase (Phase 1-4, Black Pearl, Emerald, Sapphire, Ruby). Works with or without market_hash_name. | [optional] 
 **providers** | [**List[AllProviders]**](AllProviders.md)| Provider keys to include (enum values). Repeat the query parameter to pass multiple providers, e.g. providers&#x3D;steam&amp;providers&#x3D;skinport. | [optional] 
 **currency** | **str**| Target currency. Any ISO 4217 code supported by &#x60;/v1/fx&#x60; (see &#x60;/v1/fx&#x60; for the full list). Invalid codes return a 422 validation error. | [optional] [default to &#39;USD&#39;]
 **limit** | **int**| Results per page. Defaults to the effective tier cap. | [optional] 
 **offset** | **int**| Pagination offset | [optional] [default to 0]

### Return type

[**PricesPaginatedResponseMarketItem**](PricesPaginatedResponseMarketItem.md)

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
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant) when available. <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant) when available. <br>  |
**503** | Indexed prices data unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **price_candles_v1_prices_candles_get**
> PriceCandlesPage price_candles_v1_prices_candles_get(provider, item_id=item_id, market_hash_name=market_hash_name, phase=phase, start=start, end=end, lookback=lookback, interval=interval, fill=fill, currency=currency, limit=limit, cursor=cursor)

Price Candles

Return OHLC candle data for a single item and single provider.

Parameters:
- Item filter: `item_id` or `market_hash_name` (one is required).
- Optional filter: `phase`.
- Required filter: `provider` (singular string key for one specific provider).
- Time window: `start`/`end` (ISO 8601) or `lookback` (for example `7d`, `30d`).
- `interval`: `5m`, `1h`, or `1d`.
- `fill`: Include empty buckets with carry-forward prices when `true`.
- `currency`: Quote currency (default `USD`).
- `limit`, `cursor`: Cursor-based pagination controls.

Notes:
- If both `start` and `lookback` are sent, `lookback` takes precedence.
- Maximum lookback depends on `interval`:
  `5m` up to 7 days, `1h` up to 30 days, `1d` up to 365 days.

Response:
- `meta`: Item, interval, provider/phase, currency, start/end.
- `data`: Candle buckets in oldest-to-newest order (`t`, `o`, `h`, `l`, `c`).
- `pagination`: Standardized pagination footer with cursor state.

Requirements:
- Valid API key with access to `/v1/prices/candles`.
- `item_id` or `market_hash_name` is required.
- `provider` is required and accepts exactly one provider key.
- `start`/`end` must be valid ISO 8601 timestamps.
- `limit` is capped by your tier.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.price_candles_page import PriceCandlesPage
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
    api_instance = cs2cap_sdk.PricesApi(api_client)
    provider = 'provider_example' # str | Single provider key string (singular parameter, required; e.g. provider=steam).
    item_id = 56 # int | Filter by item ID (optional)
    market_hash_name = 'market_hash_name_example' # str | Filter by market hash name (optional)
    phase = cs2cap_sdk.PhaseName() # PhaseName | Filter by phase (e.g., Phase 1, Ruby, Sapphire) (optional)
    start = 'start_example' # str | Start timestamp (ISO 8601, inclusive) (optional)
    end = 'end_example' # str | End timestamp (ISO 8601, exclusive) (optional)
    lookback = 'lookback_example' # str | Convenience alias: '7d', '30d', etc. Sets start=now-lookback (optional)
    interval = 1h # str | Time bucket interval (optional) (default to 1h)
    fill = False # bool | Fill gaps with forward-filled data (default: false for sparse data) (optional) (default to False)
    currency = 'USD' # str | Target currency. Any ISO 4217 code supported by `/v1/fx` (see `/v1/fx` for the full list). Invalid codes return a 422 validation error. (optional) (default to 'USD')
    limit = 56 # int | Maximum number of candles to return. Defaults to the effective tier cap. (optional)
    cursor = 'cursor_example' # str | Opaque pagination cursor from previous response (optional)

    try:
        # Price Candles
        api_response = api_instance.price_candles_v1_prices_candles_get(provider, item_id=item_id, market_hash_name=market_hash_name, phase=phase, start=start, end=end, lookback=lookback, interval=interval, fill=fill, currency=currency, limit=limit, cursor=cursor)
        print("The response of PricesApi->price_candles_v1_prices_candles_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->price_candles_v1_prices_candles_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **str**| Single provider key string (singular parameter, required; e.g. provider&#x3D;steam). | 
 **item_id** | **int**| Filter by item ID | [optional] 
 **market_hash_name** | **str**| Filter by market hash name | [optional] 
 **phase** | [**PhaseName**](.md)| Filter by phase (e.g., Phase 1, Ruby, Sapphire) | [optional] 
 **start** | **str**| Start timestamp (ISO 8601, inclusive) | [optional] 
 **end** | **str**| End timestamp (ISO 8601, exclusive) | [optional] 
 **lookback** | **str**| Convenience alias: &#39;7d&#39;, &#39;30d&#39;, etc. Sets start&#x3D;now-lookback | [optional] 
 **interval** | **str**| Time bucket interval | [optional] [default to 1h]
 **fill** | **bool**| Fill gaps with forward-filled data (default: false for sparse data) | [optional] [default to False]
 **currency** | **str**| Target currency. Any ISO 4217 code supported by &#x60;/v1/fx&#x60; (see &#x60;/v1/fx&#x60; for the full list). Invalid codes return a 422 validation error. | [optional] [default to &#39;USD&#39;]
 **limit** | **int**| Maximum number of candles to return. Defaults to the effective tier cap. | [optional] 
 **cursor** | **str**| Opaque pagination cursor from previous response | [optional] 

### Return type

[**PriceCandlesPage**](PriceCandlesPage.md)

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
**400** | Invalid filters, interval, or time window violations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **price_history_v1_prices_history_get**
> PriceSnapshotPage price_history_v1_prices_history_get(item_id=item_id, market_hash_name=market_hash_name, phase=phase, provider=provider, start=start, end=end, currency=currency, limit=limit, cursor=cursor)

Price History

Return historical price snapshots.

Parameters:
- Filters: `item_id`, `market_hash_name`, `phase`, `provider` (singular string key).
- Time window: `start`, `end` (ISO 8601).
- `currency`: Quote currency (default `USD`).
- `limit`: Items per page.
- `cursor`: Opaque cursor from `next_cursor` for the next page.

Response:
- `items`: Historical snapshots ordered newest first.
- `meta`: Applied filters and time window.
- `pagination`: Standardized pagination footer with cursor state.

Requirements:
- Valid API key with access to `/v1/prices/history`.
- `start`/`end` must be valid ISO 8601 timestamps.
- Requested time range must be within the endpoint retention window.
- `limit` is capped by your tier.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.price_snapshot_page import PriceSnapshotPage
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
    api_instance = cs2cap_sdk.PricesApi(api_client)
    item_id = 56 # int | Filter by item ID (optional)
    market_hash_name = 'market_hash_name_example' # str | Filter by market hash name (optional)
    phase = cs2cap_sdk.PhaseName() # PhaseName | Filter by phase (e.g., Phase 1, Ruby, Sapphire) (optional)
    provider = 'provider_example' # str | Single provider key string (singular parameter, e.g. provider=steam). (optional)
    start = 'start_example' # str | ISO 8601 timestamp (optional)
    end = 'end_example' # str | ISO 8601 timestamp (optional)
    currency = 'USD' # str | Target currency. Any ISO 4217 code supported by `/v1/fx` (see `/v1/fx` for the full list). Invalid codes return a 422 validation error. (optional) (default to 'USD')
    limit = 56 # int | Maximum number of results to return. Defaults to the effective tier cap. (optional)
    cursor = 'cursor_example' # str | Cursor for keyset pagination. Use next_cursor from previous response. When provided, offset is ignored and keyset pagination is used for O(1) seek. (optional)

    try:
        # Price History
        api_response = api_instance.price_history_v1_prices_history_get(item_id=item_id, market_hash_name=market_hash_name, phase=phase, provider=provider, start=start, end=end, currency=currency, limit=limit, cursor=cursor)
        print("The response of PricesApi->price_history_v1_prices_history_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->price_history_v1_prices_history_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **int**| Filter by item ID | [optional] 
 **market_hash_name** | **str**| Filter by market hash name | [optional] 
 **phase** | [**PhaseName**](.md)| Filter by phase (e.g., Phase 1, Ruby, Sapphire) | [optional] 
 **provider** | **str**| Single provider key string (singular parameter, e.g. provider&#x3D;steam). | [optional] 
 **start** | **str**| ISO 8601 timestamp | [optional] 
 **end** | **str**| ISO 8601 timestamp | [optional] 
 **currency** | **str**| Target currency. Any ISO 4217 code supported by &#x60;/v1/fx&#x60; (see &#x60;/v1/fx&#x60; for the full list). Invalid codes return a 422 validation error. | [optional] [default to &#39;USD&#39;]
 **limit** | **int**| Maximum number of results to return. Defaults to the effective tier cap. | [optional] 
 **cursor** | **str**| Cursor for keyset pagination. Use next_cursor from previous response. When provided, offset is ignored and keyset pagination is used for O(1) seek. | [optional] 

### Return type

[**PriceSnapshotPage**](PriceSnapshotPage.md)

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
**400** | Invalid timestamp filters or retention window violations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

