# cs2cap_sdk.PricesApi

All URIs are relative to *https://api.cs2c.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batch_price_lookup**](PricesApi.md#batch_price_lookup) | **POST** /v1/prices/batch | Batch Price Lookup
[**list_prices**](PricesApi.md#list_prices) | **GET** /v1/prices | List Prices
[**price_candles**](PricesApi.md#price_candles) | **GET** /v1/prices/candles | Price Candles
[**price_history**](PricesApi.md#price_history) | **GET** /v1/prices/history | Price History
[**stream_full_prices_snapshot**](PricesApi.md#stream_full_prices_snapshot) | **POST** /v1/prices | Stream Full Prices Snapshot


# **batch_price_lookup**
> BatchPricesResponse batch_price_lookup(batch_prices_request)

Batch Price Lookup

Retrieve current prices for multiple items in a single request.

Maximum 100 items per request. Returns per-item price quotes from each queried provider.

Prices are in minor units of the requested currency (e.g. USD cents when `currency=USD`). Divide by 100 for display.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.batch_prices_request import BatchPricesRequest
from cs2cap_sdk.models.batch_prices_response import BatchPricesResponse
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
    batch_prices_request = cs2cap_sdk.BatchPricesRequest() # BatchPricesRequest | 

    try:
        # Batch Price Lookup
        api_response = api_instance.batch_price_lookup(batch_prices_request)
        print("The response of PricesApi->batch_price_lookup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->batch_price_lookup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_prices_request** | [**BatchPricesRequest**](BatchPricesRequest.md)|  | 

### Return type

[**BatchPricesResponse**](BatchPricesResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication credentials. |  -  |
**403** | Authenticated but not permitted to access this resource. |  -  |
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |
**400** | Batch size exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_prices**
> PricesPaginatedResponseMarketItem list_prices(item_id=item_id, market_hash_name=market_hash_name, phase=phase, providers=providers, currency=currency, limit=limit, offset=offset)

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
- If the item resolves in the catalog but none of the queried providers currently has a
  listing, returns `200` with an empty `items` array.

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
        api_response = api_instance.list_prices(item_id=item_id, market_hash_name=market_hash_name, phase=phase, providers=providers, currency=currency, limit=limit, offset=offset)
        print("The response of PricesApi->list_prices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->list_prices: %s\n" % e)
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
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds until this API key may request another bids snapshot. <br>  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |
**503** | Indexed prices data unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **price_candles**
> PriceCandlesPage price_candles(item_id=item_id, market_hash_name=market_hash_name, phase=phase, start=start, end=end, lookback=lookback, interval=interval, fill=fill, currency=currency, limit=limit, cursor=cursor)

Price Candles

Return composite OHLCV candle data for a single item across all providers.

Parameters:
- Item filter: `item_id` or `market_hash_name` (one is required).
- Optional filter: `phase`.
- Time window: `start`/`end` (ISO 8601) or `lookback` (for example `7d` or `7`).
- `interval`: `5m`, `1h`, or `1d`.
- `fill`: Include empty buckets with carry-forward prices when `true`.
- `currency`: Quote currency (default `USD`).
- `limit`, `cursor`: Cursor-based pagination controls.

Notes:
- If both `start` and `lookback` are sent, `lookback` takes precedence.
- Maximum lookback depends on `interval`:
  `5m` up to 7 days, `1h` up to 30 days, `1d` up to 365 days.

Response:
- `meta`: Item, provider scope, interval, phase, currency, start/end timestamps.
- `data`: Candle buckets in oldest-to-newest order
  (`t`, `o`, `h`, `l`, `c`, `v`, `q`, `providers`).
  `o`/`c` are unweighted averages across provider snapshots, `l` is the minimum provider
  low, `h` is capped at `median(provider_highs) * 1.5`, `v` is the non-negative depletion
  flow between buckets, and `q` is the summed close-side inventory at bucket end when
  available. `providers.l` and `providers.h` identify the provider keys contributing the
  returned low/high values. For `1d` requests starting more than 30 days back, `v` falls
  back to legacy depletion-derived `volume_qty` and `q` is `null`.
- `pagination`: Standardized pagination footer with cursor state.

Requirements:
- Valid API key with access to `/v1/prices/candles`.
- `item_id` or `market_hash_name` is required.
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
    item_id = 56 # int | Filter by item ID (optional)
    market_hash_name = 'market_hash_name_example' # str | Filter by market hash name (optional)
    phase = cs2cap_sdk.PhaseName() # PhaseName | Filter by phase (e.g., Phase 1, Ruby, Sapphire) (optional)
    start = '2013-10-20T19:20:30+01:00' # datetime | Start timestamp (ISO 8601, inclusive) (optional)
    end = '2013-10-20T19:20:30+01:00' # datetime | End timestamp (ISO 8601, exclusive) (optional)
    lookback = '7d' # str | Lookback window in days. Use `7d` or plain `7`; both mean 7 days and set start=now-lookback. (optional)
    interval = 1h # str | Time bucket interval (optional) (default to 1h)
    fill = False # bool | Fill gaps with forward-filled data (default: false for sparse data) (optional) (default to False)
    currency = 'USD' # str | Target currency. Any ISO 4217 code supported by `/v1/fx` (see `/v1/fx` for the full list). Invalid codes return a 422 validation error. (optional) (default to 'USD')
    limit = 56 # int | Maximum number of candles to return. Defaults to the effective tier cap. (optional)
    cursor = 'cursor_example' # str | Opaque pagination cursor from previous response (optional)

    try:
        # Price Candles
        api_response = api_instance.price_candles(item_id=item_id, market_hash_name=market_hash_name, phase=phase, start=start, end=end, lookback=lookback, interval=interval, fill=fill, currency=currency, limit=limit, cursor=cursor)
        print("The response of PricesApi->price_candles:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->price_candles: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **int**| Filter by item ID | [optional] 
 **market_hash_name** | **str**| Filter by market hash name | [optional] 
 **phase** | [**PhaseName**](.md)| Filter by phase (e.g., Phase 1, Ruby, Sapphire) | [optional] 
 **start** | **datetime**| Start timestamp (ISO 8601, inclusive) | [optional] 
 **end** | **datetime**| End timestamp (ISO 8601, exclusive) | [optional] 
 **lookback** | **str**| Lookback window in days. Use &#x60;7d&#x60; or plain &#x60;7&#x60;; both mean 7 days and set start&#x3D;now-lookback. | [optional] 
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
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |
**400** | Invalid filters, interval, or time window violations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **price_history**
> PriceSnapshotPage price_history(item_id=item_id, market_hash_name=market_hash_name, phase=phase, provider=provider, start=start, end=end, currency=currency, limit=limit, cursor=cursor)

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
    provider = cs2cap_sdk.AllProviders() # AllProviders | Single provider key for provider-scoped historical snapshots. Use repeated `providers` on `/v1/prices` for live snapshot filtering; `/v1/prices/candles` is composite and intentionally has no provider filter. (optional)
    start = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 timestamp (optional)
    end = '2013-10-20T19:20:30+01:00' # datetime | ISO 8601 timestamp (optional)
    currency = 'USD' # str | Target currency. Any ISO 4217 code supported by `/v1/fx` (see `/v1/fx` for the full list). Invalid codes return a 422 validation error. (optional) (default to 'USD')
    limit = 56 # int | Maximum number of results to return. Defaults to the effective tier cap. (optional)
    cursor = 'cursor_example' # str | Cursor for keyset pagination. Use next_cursor from previous response. When provided, offset is ignored and keyset pagination is used for O(1) seek. (optional)

    try:
        # Price History
        api_response = api_instance.price_history(item_id=item_id, market_hash_name=market_hash_name, phase=phase, provider=provider, start=start, end=end, currency=currency, limit=limit, cursor=cursor)
        print("The response of PricesApi->price_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->price_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **int**| Filter by item ID | [optional] 
 **market_hash_name** | **str**| Filter by market hash name | [optional] 
 **phase** | [**PhaseName**](.md)| Filter by phase (e.g., Phase 1, Ruby, Sapphire) | [optional] 
 **provider** | [**AllProviders**](.md)| Single provider key for provider-scoped historical snapshots. Use repeated &#x60;providers&#x60; on &#x60;/v1/prices&#x60; for live snapshot filtering; &#x60;/v1/prices/candles&#x60; is composite and intentionally has no provider filter. | [optional] 
 **start** | **datetime**| ISO 8601 timestamp | [optional] 
 **end** | **datetime**| ISO 8601 timestamp | [optional] 
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
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |
**400** | Invalid timestamp filters or retention window violations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_full_prices_snapshot**
> str stream_full_prices_snapshot(providers=providers)

Stream Full Prices Snapshot

Return the full live prices snapshot as an NDJSON stream.

Behavior:
- pro and quant tiers only
- requires a real `sk_*` API key; session JWTs are not accepted
- optional `providers` filter; omit to stream all providers
- fixed USD output
- `lowest_ask` values are returned in USD minor units
- one JSON object per line using the `MarketItem` field set
- the live index is copied into temporary Redis keys so the export is stable for the duration of the stream
- per-API-key cooldown of 30 seconds for this POST operation

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.all_providers import AllProviders
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
    providers = [cs2cap_sdk.AllProviders()] # List[AllProviders] |  (optional)

    try:
        # Stream Full Prices Snapshot
        api_response = api_instance.stream_full_prices_snapshot(providers=providers)
        print("The response of PricesApi->stream_full_prices_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricesApi->stream_full_prices_snapshot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providers** | [**List[AllProviders]**](AllProviders.md)|  | [optional] 

### Return type

**str**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/x-ndjson, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | NDJSON stream of the full live prices snapshot in USD. |  * X-Snapshot-Timestamp - UTC timestamp when the snapshot stream started. <br>  * X-Snapshot-Currency - Fixed response currency for every streamed row. <br>  * X-Snapshot-Total - Total indexed rows at stream start, when known. <br>  |
**401** | Missing or invalid authentication credentials. |  -  |
**403** | Bulk snapshot access requires a tier with bulk snapshot capability. |  -  |
**429** | Bulk snapshot cooldown active for this API key. |  * Retry-After - Seconds until this API key may request another bids snapshot. <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |
**503** | Indexed prices data unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

