# MarketIntelligenceApi

All URIs are relative to *https://api.cs2c.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getArbitrageOpportunitiesV1MarketArbitrageGet**](MarketIntelligenceApi.md#getarbitrageopportunitiesv1marketarbitrageget) | **GET** /v1/market/arbitrage | Get Arbitrage Opportunities |
| [**getIndicatorsV1MarketIndicatorsGet**](MarketIntelligenceApi.md#getindicatorsv1marketindicatorsget) | **GET** /v1/market/indicators | Get Indicators |
| [**getItemAnalyticsV1MarketItemsItemIdGet**](MarketIntelligenceApi.md#getitemanalyticsv1marketitemsitemidget) | **GET** /v1/market/items/{item_id} | Get Item Analytics |
| [**getMarketRankingsV1MarketRankingsMetricGet**](MarketIntelligenceApi.md#getmarketrankingsv1marketrankingsmetricget) | **GET** /v1/market/rankings/{metric} | Get Market Rankings |



## getArbitrageOpportunitiesV1MarketArbitrageGet

> MarketArbitrageResponse getArbitrageOpportunitiesV1MarketArbitrageGet(limit, cursor, minSpreadPct, providersBuy, providersSell)

Get Arbitrage Opportunities

Scan providers for cross-market arbitrage opportunities.  Filters: - &#x60;min_spread_pct&#x60; - &#x60;providers_buy&#x60; and &#x60;providers_sell&#x60; - cursor pagination via &#x60;cursor&#x60;  Response: - opportunities ranked by estimated net profit in USD with buy-side and sell-side provider context  Tier: Quant-only.

### Example

```ts
import {
  Configuration,
  MarketIntelligenceApi,
} from 'cs2cap-sdk';
import type { GetArbitrageOpportunitiesV1MarketArbitrageGetRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MarketIntelligenceApi(config);

  const body = {
    // number | Maximum number of results to return. Defaults to the effective tier cap. (optional)
    limit: 56,
    // string | Opaque pagination cursor from a previous response. (optional)
    cursor: cursor_example,
    // number | Minimum gross spread percentage between buy and sell prices. (optional)
    minSpreadPct: 8.14,
    // Array<AllProviders> | Buy-side provider key enum filters (plural parameter). Repeat `providers_buy` to pass multiple values. (optional)
    providersBuy: ...,
    // Array<AllProviders> | Sell-side provider key enum filters (plural parameter). Repeat `providers_sell` to pass multiple values. (optional)
    providersSell: ...,
  } satisfies GetArbitrageOpportunitiesV1MarketArbitrageGetRequest;

  try {
    const data = await api.getArbitrageOpportunitiesV1MarketArbitrageGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **limit** | `number` | Maximum number of results to return. Defaults to the effective tier cap. | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | Opaque pagination cursor from a previous response. | [Optional] [Defaults to `undefined`] |
| **minSpreadPct** | `number` | Minimum gross spread percentage between buy and sell prices. | [Optional] [Defaults to `1.0`] |
| **providersBuy** | `Array<AllProviders>` | Buy-side provider key enum filters (plural parameter). Repeat &#x60;providers_buy&#x60; to pass multiple values. | [Optional] |
| **providersSell** | `Array<AllProviders>` | Sell-side provider key enum filters (plural parameter). Repeat &#x60;providers_sell&#x60; to pass multiple values. | [Optional] |

### Return type

[**MarketArbitrageResponse**](MarketArbitrageResponse.md)

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
| **403** | Analytics tier required to access this endpoint. |  -  |
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant) when available. <br>  |
| **400** | Invalid cursor |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getIndicatorsV1MarketIndicatorsGet

> ResponseGetIndicatorsV1MarketIndicatorsGet getIndicatorsV1MarketIndicatorsGet(itemId, marketHashName, phase, provider, interval, limit, offset, sortBy, order, currency)

Get Indicators

Compute technical analysis indicators from OHLCV candle data.  **Modes:**  - **Individual item**: Provide &#x60;item_id&#x60; (or &#x60;market_hash_name&#x60;) + &#x60;provider&#x60;.   Returns full numeric indicator values computed on-the-fly from candle data. - **Bulk screener**: Omit item filters. Returns signal summaries for top items   from pre-computed cache, paginated with offset.  **Indicators:**  - **Momentum**: RSI(14), MACD(12/26/9), SMA(20/50/200), EMA(12/26), Bollinger Bands(20,2σ) - **Volatility**: ATR(14), Historical Volatility(20), Keltner Channels(20/10/2) - **Volume**: VWAP, OBV, Volume SMA(20)  **Tier**: Quant-only.

### Example

```ts
import {
  Configuration,
  MarketIntelligenceApi,
} from 'cs2cap-sdk';
import type { GetIndicatorsV1MarketIndicatorsGetRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MarketIntelligenceApi(config);

  const body = {
    // number | Item ID for individual mode. Triggers live computation. (optional)
    itemId: 56,
    // string | Market hash name (alternative to item_id). (optional)
    marketHashName: marketHashName_example,
    // string | Doppler phase filter. (optional)
    phase: phase_example,
    // string | Single provider key string (singular parameter). Required for individual mode and optional as a single-provider filter for bulk screener mode. (optional)
    provider: provider_example,
    // '1h' | '1d' | Candle interval for indicator computation. (optional)
    interval: interval_example,
    // number | Maximum number of results to return (bulk screener mode). Defaults to the effective tier cap. (optional)
    limit: 56,
    // number | Number of results to skip for pagination (bulk screener mode). (optional)
    offset: 56,
    // 'composite_score' | 'rsi_14' | 'macd_histogram' | 'atr_14' | Sort field for bulk screener mode. (optional)
    sortBy: sortBy_example,
    // 'asc' | 'desc' | Sort order. (optional)
    order: order_example,
    // string | Target currency for price-level indicators (e.g. ``USD``, ``EUR``). Provider-native prices are converted via FX rates. Default: ``USD``. (optional)
    currency: currency_example,
  } satisfies GetIndicatorsV1MarketIndicatorsGetRequest;

  try {
    const data = await api.getIndicatorsV1MarketIndicatorsGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **itemId** | `number` | Item ID for individual mode. Triggers live computation. | [Optional] [Defaults to `undefined`] |
| **marketHashName** | `string` | Market hash name (alternative to item_id). | [Optional] [Defaults to `undefined`] |
| **phase** | `string` | Doppler phase filter. | [Optional] [Defaults to `undefined`] |
| **provider** | `string` | Single provider key string (singular parameter). Required for individual mode and optional as a single-provider filter for bulk screener mode. | [Optional] [Defaults to `undefined`] |
| **interval** | `1h`, `1d` | Candle interval for indicator computation. | [Optional] [Defaults to `&#39;1d&#39;`] [Enum: 1h, 1d] |
| **limit** | `number` | Maximum number of results to return (bulk screener mode). Defaults to the effective tier cap. | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Number of results to skip for pagination (bulk screener mode). | [Optional] [Defaults to `0`] |
| **sortBy** | `composite_score`, `rsi_14`, `macd_histogram`, `atr_14` | Sort field for bulk screener mode. | [Optional] [Defaults to `&#39;composite_score&#39;`] [Enum: composite_score, rsi_14, macd_histogram, atr_14] |
| **order** | `asc`, `desc` | Sort order. | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |
| **currency** | `string` | Target currency for price-level indicators (e.g. &#x60;&#x60;USD&#x60;&#x60;, &#x60;&#x60;EUR&#x60;&#x60;). Provider-native prices are converted via FX rates. Default: &#x60;&#x60;USD&#x60;&#x60;. | [Optional] [Defaults to `&#39;USD&#39;`] |

### Return type

[**ResponseGetIndicatorsV1MarketIndicatorsGet**](ResponseGetIndicatorsV1MarketIndicatorsGet.md)

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
| **403** | Analytics tier required to access this endpoint. |  -  |
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Insufficient candle data for indicator computation |  -  |
| **400** | Invalid parameters |  -  |
| **503** | Screener cache not available yet |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getItemAnalyticsV1MarketItemsItemIdGet

> MarketItemAnalyticsResponse getItemAnalyticsV1MarketItemsItemIdGet(itemId, timeframe, startAt, endAt)

Get Item Analytics

Return per-item market analytics across providers for a requested time window.  Includes: - best ask, best bid, and spread summary - provider-level liquidity, volume, depth, and bid-side metrics - coverage diagnostics showing which providers contributed data  Window selection: - preset &#x60;timeframe&#x60; - or explicit &#x60;start_at&#x60; + &#x60;end_at&#x60;  Tier: Pro and Quant.

### Example

```ts
import {
  Configuration,
  MarketIntelligenceApi,
} from 'cs2cap-sdk';
import type { GetItemAnalyticsV1MarketItemsItemIdGetRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MarketIntelligenceApi(config);

  const body = {
    // number | Item ID.
    itemId: 56,
    // '1h' | '24h' | '7d' | '30d' | Analysis time window. (optional)
    timeframe: timeframe_example,
    // Date | Range start (UTC, inclusive). Must be paired with end_at. (optional)
    startAt: 2013-10-20T19:20:30+01:00,
    // Date | Range end (UTC, exclusive). Must be paired with start_at. (optional)
    endAt: 2013-10-20T19:20:30+01:00,
  } satisfies GetItemAnalyticsV1MarketItemsItemIdGetRequest;

  try {
    const data = await api.getItemAnalyticsV1MarketItemsItemIdGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **itemId** | `number` | Item ID. | [Defaults to `undefined`] |
| **timeframe** | `1h`, `24h`, `7d`, `30d` | Analysis time window. | [Optional] [Defaults to `&#39;24h&#39;`] [Enum: 1h, 24h, 7d, 30d] |
| **startAt** | `Date` | Range start (UTC, inclusive). Must be paired with end_at. | [Optional] [Defaults to `undefined`] |
| **endAt** | `Date` | Range end (UTC, exclusive). Must be paired with start_at. | [Optional] [Defaults to `undefined`] |

### Return type

[**MarketItemAnalyticsResponse**](MarketItemAnalyticsResponse.md)

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
| **403** | Analytics tier required to access this endpoint. |  -  |
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant) when available. <br>  |
| **404** | No analytics data exists for the provided item_id. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getMarketRankingsV1MarketRankingsMetricGet

> MarketRankingListResponse getMarketRankingsV1MarketRankingsMetricGet(metric, timeframe, startAt, endAt, limit, cursor, order, providers, minVolatilityPct, minVolumeUsd, minLiquidityScore)

Get Market Rankings

Return ranked market analytics rows for one metric with cursor pagination.  Supported metrics: - &#x60;volatility&#x60; - &#x60;volume&#x60; - &#x60;liquidity&#x60;  Filters: - &#x60;timeframe&#x60; or explicit &#x60;start_at&#x60; + &#x60;end_at&#x60; - &#x60;providers&#x60; - metric-specific minimum thresholds such as &#x60;min_volatility_pct&#x60;, &#x60;min_volume_usd&#x60;, and &#x60;min_liquidity_score&#x60; - &#x60;order&#x60;  Response: - ranked items list plus cursor pagination metadata  Tier: Quant-only.

### Example

```ts
import {
  Configuration,
  MarketIntelligenceApi,
} from 'cs2cap-sdk';
import type { GetMarketRankingsV1MarketRankingsMetricGetRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new MarketIntelligenceApi(config);

  const body = {
    // 'volatility' | 'volume' | 'liquidity' | Ranking metric.
    metric: metric_example,
    // '1h' | '24h' | '7d' | '30d' | Analysis time window. (optional)
    timeframe: timeframe_example,
    // Date | Range start (UTC, inclusive). Must be paired with end_at. (optional)
    startAt: 2013-10-20T19:20:30+01:00,
    // Date | Range end (UTC, exclusive). Must be paired with start_at. (optional)
    endAt: 2013-10-20T19:20:30+01:00,
    // number | Maximum number of results to return. Defaults to the effective tier cap. (optional)
    limit: 56,
    // string | Opaque pagination cursor from a previous response. (optional)
    cursor: cursor_example,
    // 'asc' | 'desc' | Sort order. (optional)
    order: order_example,
    // Array<AllProviders> | Provider key enum filters (plural parameter). Repeat `providers` to pass multiple values. (optional)
    providers: ...,
    // number | Minimum volatility score. Only valid for metric=volatility. (optional)
    minVolatilityPct: 8.14,
    // MinVolumeUsd | Minimum 24h depletion-activity value in USD. Only valid for metric=volume (optional)
    minVolumeUsd: ...,
    // number | Minimum liquidity score. Only valid for metric=liquidity. (optional)
    minLiquidityScore: 8.14,
  } satisfies GetMarketRankingsV1MarketRankingsMetricGetRequest;

  try {
    const data = await api.getMarketRankingsV1MarketRankingsMetricGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **metric** | `volatility`, `volume`, `liquidity` | Ranking metric. | [Defaults to `undefined`] [Enum: volatility, volume, liquidity] |
| **timeframe** | `1h`, `24h`, `7d`, `30d` | Analysis time window. | [Optional] [Defaults to `&#39;24h&#39;`] [Enum: 1h, 24h, 7d, 30d] |
| **startAt** | `Date` | Range start (UTC, inclusive). Must be paired with end_at. | [Optional] [Defaults to `undefined`] |
| **endAt** | `Date` | Range end (UTC, exclusive). Must be paired with start_at. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of results to return. Defaults to the effective tier cap. | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | Opaque pagination cursor from a previous response. | [Optional] [Defaults to `undefined`] |
| **order** | `asc`, `desc` | Sort order. | [Optional] [Defaults to `&#39;desc&#39;`] [Enum: asc, desc] |
| **providers** | `Array<AllProviders>` | Provider key enum filters (plural parameter). Repeat &#x60;providers&#x60; to pass multiple values. | [Optional] |
| **minVolatilityPct** | `number` | Minimum volatility score. Only valid for metric&#x3D;volatility. | [Optional] [Defaults to `undefined`] |
| **minVolumeUsd** | [](.md) | Minimum 24h depletion-activity value in USD. Only valid for metric&#x3D;volume | [Optional] [Defaults to `undefined`] |
| **minLiquidityScore** | `number` | Minimum liquidity score. Only valid for metric&#x3D;liquidity. | [Optional] [Defaults to `undefined`] |

### Return type

[**MarketRankingListResponse**](MarketRankingListResponse.md)

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
| **403** | Analytics tier required to access this endpoint. |  -  |
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant) when available. <br>  |
| **400** | Invalid cursor, filter combination, or time window |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

