# cs2cap_sdk.MarketIntelligenceApi

All URIs are relative to *https://api.cs2c.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_arbitrage_opportunities**](MarketIntelligenceApi.md#get_arbitrage_opportunities) | **GET** /v1/market/arbitrage | Get Arbitrage Opportunities
[**get_indicators**](MarketIntelligenceApi.md#get_indicators) | **GET** /v1/market/indicators | Get Indicators
[**get_item_analytics**](MarketIntelligenceApi.md#get_item_analytics) | **GET** /v1/market/items/{item_id} | Get Item Analytics
[**get_market_analytics_snapshot**](MarketIntelligenceApi.md#get_market_analytics_snapshot) | **GET** /v1/market/items | Get Market Analytics Snapshot
[**get_market_cap_indices**](MarketIntelligenceApi.md#get_market_cap_indices) | **GET** /v1/market/indices | Get Market Cap Indices


# **get_arbitrage_opportunities**
> MarketArbitrageResponse get_arbitrage_opportunities(limit=limit, offset=offset, min_spread_pct=min_spread_pct, providers_buy=providers_buy, providers_sell=providers_sell)

Get Arbitrage Opportunities

Scan providers for cross-market arbitrage opportunities.

Filters:
- `min_spread_pct`
- `providers_buy` and `providers_sell` (sell-side limited to buy-order providers)
- offset pagination via `offset`

Response:
- opportunities ranked by estimated net profit in USD with buy-side and sell-side provider context

Tier: Quant-only.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.all_providers import AllProviders
from cs2cap_sdk.models.buy_order_provider import BuyOrderProvider
from cs2cap_sdk.models.market_arbitrage_response import MarketArbitrageResponse
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
    api_instance = cs2cap_sdk.MarketIntelligenceApi(api_client)
    limit = 56 # int | Maximum number of results to return. Defaults to the effective tier cap. (optional)
    offset = 0 # int | Requested offset into the ranked opportunity list. (optional) (default to 0)
    min_spread_pct = 1.0 # float | Minimum gross spread percentage between buy and sell prices. (optional) (default to 1.0)
    providers_buy = [cs2cap_sdk.AllProviders()] # List[AllProviders] | Buy-side provider key enum filters (plural parameter). Repeat `providers_buy` to pass multiple values. (optional)
    providers_sell = [cs2cap_sdk.BuyOrderProvider()] # List[BuyOrderProvider] | Sell-side provider key enum filters for providers with buy orders (plural parameter). Repeat `providers_sell` to pass multiple values. (optional)

    try:
        # Get Arbitrage Opportunities
        api_response = api_instance.get_arbitrage_opportunities(limit=limit, offset=offset, min_spread_pct=min_spread_pct, providers_buy=providers_buy, providers_sell=providers_sell)
        print("The response of MarketIntelligenceApi->get_arbitrage_opportunities:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MarketIntelligenceApi->get_arbitrage_opportunities: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Maximum number of results to return. Defaults to the effective tier cap. | [optional] 
 **offset** | **int**| Requested offset into the ranked opportunity list. | [optional] [default to 0]
 **min_spread_pct** | **float**| Minimum gross spread percentage between buy and sell prices. | [optional] [default to 1.0]
 **providers_buy** | [**List[AllProviders]**](AllProviders.md)| Buy-side provider key enum filters (plural parameter). Repeat &#x60;providers_buy&#x60; to pass multiple values. | [optional] 
 **providers_sell** | [**List[BuyOrderProvider]**](BuyOrderProvider.md)| Sell-side provider key enum filters for providers with buy orders (plural parameter). Repeat &#x60;providers_sell&#x60; to pass multiple values. | [optional] 

### Return type

[**MarketArbitrageResponse**](MarketArbitrageResponse.md)

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
**403** | Analytics tier required to access this endpoint. |  -  |
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |
**400** | Invalid cursor or unsupported cursor parameter. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_indicators**
> MarketIndicatorsItemResponse get_indicators(item_id=item_id, market_hash_name=market_hash_name, phase=phase, interval=interval, currency=currency)

Get Indicators

Compute technical analysis indicators for one item from OHLCV candle data.

**Indicators:**

- **Momentum**: RSI(14), MACD(12/26/9), SMA(20/50/200), EMA(12/26), Bollinger Bands(20,2σ)
- **Volatility**: ATR(14), Historical Volatility(20), Keltner Channels(20/10/2)
- **Volume**: VWAP, OBV, Volume SMA(20)

**Tier**: Quant-only.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.market_indicators_item_response import MarketIndicatorsItemResponse
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
    api_instance = cs2cap_sdk.MarketIntelligenceApi(api_client)
    item_id = 56 # int | Item ID for live indicator computation. (optional)
    market_hash_name = 'market_hash_name_example' # str | Market hash name (alternative to item_id). (optional)
    phase = 'phase_example' # str | Doppler phase filter. (optional)
    interval = 1d # str | Candle interval for indicator computation. (optional) (default to 1d)
    currency = 'USD' # str | Target currency for price-level indicators (e.g. ``USD``, ``EUR``). Provider-native prices are converted via FX rates. Default: ``USD``. (optional) (default to 'USD')

    try:
        # Get Indicators
        api_response = api_instance.get_indicators(item_id=item_id, market_hash_name=market_hash_name, phase=phase, interval=interval, currency=currency)
        print("The response of MarketIntelligenceApi->get_indicators:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MarketIntelligenceApi->get_indicators: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **int**| Item ID for live indicator computation. | [optional] 
 **market_hash_name** | **str**| Market hash name (alternative to item_id). | [optional] 
 **phase** | **str**| Doppler phase filter. | [optional] 
 **interval** | **str**| Candle interval for indicator computation. | [optional] [default to 1d]
 **currency** | **str**| Target currency for price-level indicators (e.g. &#x60;&#x60;USD&#x60;&#x60;, &#x60;&#x60;EUR&#x60;&#x60;). Provider-native prices are converted via FX rates. Default: &#x60;&#x60;USD&#x60;&#x60;. | [optional] [default to &#39;USD&#39;]

### Return type

[**MarketIndicatorsItemResponse**](MarketIndicatorsItemResponse.md)

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
**403** | Analytics tier required to access this endpoint. |  -  |
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Insufficient candle data for indicator computation |  -  |
**400** | Invalid parameters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_item_analytics**
> MarketItemAnalyticsResponse get_item_analytics(item_id)

Get Item Analytics

Return per-item market analytics across providers.

Includes:
- best ask, best bid, and spread summary
- item-level liquidity summary and provider-level price/depth/volume metrics
- coverage diagnostics showing which providers contributed data

Liquidity is always scored against the 24h horizon.
Provider volume fields remain literal trailing 24h/7d depletion metrics.

Tier: Pro and Quant.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.market_item_analytics_response import MarketItemAnalyticsResponse
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
    api_instance = cs2cap_sdk.MarketIntelligenceApi(api_client)
    item_id = 56 # int | Item ID.

    try:
        # Get Item Analytics
        api_response = api_instance.get_item_analytics(item_id)
        print("The response of MarketIntelligenceApi->get_item_analytics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MarketIntelligenceApi->get_item_analytics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **int**| Item ID. | 

### Return type

[**MarketItemAnalyticsResponse**](MarketItemAnalyticsResponse.md)

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
**403** | Analytics tier required to access this endpoint. |  -  |
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |
**404** | No analytics data exists for the provided item_id. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_market_analytics_snapshot**
> MarketItemsSnapshotResponse get_market_analytics_snapshot()

Get Market Analytics Snapshot

Return the full market as a cached, summary-only snapshot.

Includes:
- one row per catalog item with the same summary fields exposed by the detail route
- no pagination and no provider-level payloads
- rank-ordered output using `rank asc, item_id asc`

Window selection uses preset `timeframe` only.
The selected timeframe affects liquidity fields only.
Trade windows remain fixed at 24h, 7d, and 30d.

Tier: Pro and Quant.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.market_items_snapshot_response import MarketItemsSnapshotResponse
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
    api_instance = cs2cap_sdk.MarketIntelligenceApi(api_client)

    try:
        # Get Market Analytics Snapshot
        api_response = api_instance.get_market_analytics_snapshot()
        print("The response of MarketIntelligenceApi->get_market_analytics_snapshot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MarketIntelligenceApi->get_market_analytics_snapshot: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**MarketItemsSnapshotResponse**](MarketItemsSnapshotResponse.md)

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
**403** | Analytics tier required to access this endpoint. |  -  |
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |
**503** | Snapshot cache unavailable and initial build failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_market_cap_indices**
> MarketIndicesResponse get_market_cap_indices(group_by=group_by)

Get Market Cap Indices

Aggregate the cached 24h market snapshot into category-level indices.

Supports grouping by `item_type` or `weapon_type`.
Items are excluded from market cap totals when bid/ask/marketcap data is incomplete or spread exceeds the internal spread threshold.

Response:
- no pagination
- groups sorted by `marketcap_usd desc`
- totals computed from the same filtered item set

Tier: Quant-only.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.market_indices_response import MarketIndicesResponse
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
    api_instance = cs2cap_sdk.MarketIntelligenceApi(api_client)
    group_by = item_type # str | Catalog dimension used to group snapshot items. (optional) (default to item_type)

    try:
        # Get Market Cap Indices
        api_response = api_instance.get_market_cap_indices(group_by=group_by)
        print("The response of MarketIntelligenceApi->get_market_cap_indices:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MarketIntelligenceApi->get_market_cap_indices: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_by** | **str**| Catalog dimension used to group snapshot items. | [optional] [default to item_type]

### Return type

[**MarketIndicesResponse**](MarketIndicesResponse.md)

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
**403** | Analytics tier required to access this endpoint. |  -  |
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |
**503** | Snapshot cache unavailable and initial build failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

