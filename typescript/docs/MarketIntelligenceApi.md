# MarketIntelligenceApi

All URIs are relative to *https://api.cs2c.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getArbitrageOpportunitiesV1MarketArbitrageGet**](MarketIntelligenceApi.md#getarbitrageopportunitiesv1marketarbitrageget) | **GET** /v1/market/arbitrage | Get Arbitrage Opportunities |
| [**getIndicatorsV1MarketIndicatorsGet**](MarketIntelligenceApi.md#getindicatorsv1marketindicatorsget) | **GET** /v1/market/indicators | Get Indicators |
| [**getItemAnalyticsV1MarketItemsItemIdGet**](MarketIntelligenceApi.md#getitemanalyticsv1marketitemsitemidget) | **GET** /v1/market/items/{item_id} | Get Item Analytics |



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

> MarketIndicatorsItemResponse getIndicatorsV1MarketIndicatorsGet(itemId, marketHashName, phase, provider, interval, currency)

Get Indicators

Compute technical analysis indicators for one item from OHLCV candle data.  **Indicators:**  - **Momentum**: RSI(14), MACD(12/26/9), SMA(20/50/200), EMA(12/26), Bollinger Bands(20,2σ) - **Volatility**: ATR(14), Historical Volatility(20), Keltner Channels(20/10/2) - **Volume**: VWAP, OBV, Volume SMA(20)  **Tier**: Quant-only.

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
    // number | Item ID for live indicator computation. (optional)
    itemId: 56,
    // string | Market hash name (alternative to item_id). (optional)
    marketHashName: marketHashName_example,
    // string | Doppler phase filter. (optional)
    phase: phase_example,
    // string | Single provider key string (singular parameter). Required for indicator computation. (optional)
    provider: provider_example,
    // '1h' | '1d' | Candle interval for indicator computation. (optional)
    interval: interval_example,
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
| **itemId** | `number` | Item ID for live indicator computation. | [Optional] [Defaults to `undefined`] |
| **marketHashName** | `string` | Market hash name (alternative to item_id). | [Optional] [Defaults to `undefined`] |
| **phase** | `string` | Doppler phase filter. | [Optional] [Defaults to `undefined`] |
| **provider** | `string` | Single provider key string (singular parameter). Required for indicator computation. | [Optional] [Defaults to `undefined`] |
| **interval** | `1h`, `1d` | Candle interval for indicator computation. | [Optional] [Defaults to `&#39;1d&#39;`] [Enum: 1h, 1d] |
| **currency** | `string` | Target currency for price-level indicators (e.g. &#x60;&#x60;USD&#x60;&#x60;, &#x60;&#x60;EUR&#x60;&#x60;). Provider-native prices are converted via FX rates. Default: &#x60;&#x60;USD&#x60;&#x60;. | [Optional] [Defaults to `&#39;USD&#39;`] |

### Return type

[**MarketIndicatorsItemResponse**](MarketIndicatorsItemResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getItemAnalyticsV1MarketItemsItemIdGet

> MarketItemAnalyticsResponse getItemAnalyticsV1MarketItemsItemIdGet(itemId, timeframe)

Get Item Analytics

Return per-item market analytics across providers for a requested time window.  Includes: - best ask, best bid, and spread summary - item-level liquidity summary and provider-level price/depth/volume metrics - coverage diagnostics showing which providers contributed data  Window selection uses preset &#x60;timeframe&#x60; only. The selected timeframe affects the item-level liquidity summary only. Provider volume fields remain literal trailing 24h/7d depletion metrics.  Tier: Pro and Quant.

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

