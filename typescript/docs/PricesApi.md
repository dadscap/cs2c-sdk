# PricesApi

All URIs are relative to *https://api.cs2c.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listPricesV1PricesGet**](PricesApi.md#listpricesv1pricesget) | **GET** /v1/prices | List Prices |
| [**priceCandlesV1PricesCandlesGet**](PricesApi.md#pricecandlesv1pricescandlesget) | **GET** /v1/prices/candles | Price Candles |
| [**priceHistoryV1PricesHistoryGet**](PricesApi.md#pricehistoryv1priceshistoryget) | **GET** /v1/prices/history | Price History |



## listPricesV1PricesGet

> PricesPaginatedResponseMarketItem listPricesV1PricesGet(itemId, marketHashName, phase, providers, currency, limit, offset)

List Prices

Return current lowest ask listings.  Parameters: - &#x60;item_id&#x60;: Exact item ID (recommended when known). - &#x60;market_hash_name&#x60;: Exact market name. - &#x60;phase&#x60;: Optional Doppler phase filter. - &#x60;providers&#x60;: Optional provider-key enum list (repeat &#x60;providers&#x60; to pass multiple values). - &#x60;currency&#x60;: Quote currency for prices (default &#x60;USD&#x60;). - &#x60;limit&#x60;, &#x60;offset&#x60;: Offset pagination controls.  Behavior: - If no filters are provided, returns a broad paginated listing. - If &#x60;market_hash_name&#x60; is Doppler and &#x60;phase&#x60; is omitted, results aggregate across phases per provider. - If &#x60;market_hash_name&#x60; and &#x60;phase&#x60; are both provided, only that exact phase is returned.  Response: - &#x60;meta&#x60;: Applied filters, requested providers, returned providers, currency. - &#x60;items&#x60;: Per-provider lowest ask entries. - &#x60;pagination&#x60;: &#x60;limit&#x60;, &#x60;offset&#x60;, &#x60;total&#x60;, &#x60;has_next&#x60;, &#x60;has_prev&#x60;.  Requirements: - Valid API key with access to &#x60;/v1/prices&#x60;. - &#x60;limit&#x60; is capped by your tier.

### Example

```ts
import {
  Configuration,
  PricesApi,
} from 'cs2cap-sdk';
import type { ListPricesV1PricesGetRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PricesApi(config);

  const body = {
    // number | Item ID (fastest lookup). Use /v1/items to search for IDs. (optional)
    itemId: 56,
    // string | Exact item name. For Doppler items without phase, aggregates all phases (sums quantities, min price). (optional)
    marketHashName: marketHashName_example,
    // PhaseName | Doppler phase (Phase 1-4, Black Pearl, Emerald, Sapphire, Ruby). Works with or without market_hash_name. (optional)
    phase: ...,
    // Array<AllProviders> | Provider keys to include (enum values). Repeat the query parameter to pass multiple providers, e.g. providers=steam&providers=skinport. (optional)
    providers: ...,
    // string | Target currency. Any ISO 4217 code supported by `/v1/fx` (see `/v1/fx` for the full list). Invalid codes return a 422 validation error. (optional)
    currency: currency_example,
    // number | Results per page. Defaults to the effective tier cap. (optional)
    limit: 56,
    // number | Pagination offset (optional)
    offset: 56,
  } satisfies ListPricesV1PricesGetRequest;

  try {
    const data = await api.listPricesV1PricesGet(body);
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
| **itemId** | `number` | Item ID (fastest lookup). Use /v1/items to search for IDs. | [Optional] [Defaults to `undefined`] |
| **marketHashName** | `string` | Exact item name. For Doppler items without phase, aggregates all phases (sums quantities, min price). | [Optional] [Defaults to `undefined`] |
| **phase** | `PhaseName` | Doppler phase (Phase 1-4, Black Pearl, Emerald, Sapphire, Ruby). Works with or without market_hash_name. | [Optional] [Defaults to `undefined`] [Enum: Phase 1, Phase 2, Phase 3, Phase 4, Sapphire, Ruby, Black Pearl, Emerald] |
| **providers** | `Array<AllProviders>` | Provider keys to include (enum values). Repeat the query parameter to pass multiple providers, e.g. providers&#x3D;steam&amp;providers&#x3D;skinport. | [Optional] |
| **currency** | `string` | Target currency. Any ISO 4217 code supported by &#x60;/v1/fx&#x60; (see &#x60;/v1/fx&#x60; for the full list). Invalid codes return a 422 validation error. | [Optional] [Defaults to `&#39;USD&#39;`] |
| **limit** | `number` | Results per page. Defaults to the effective tier cap. | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Pagination offset | [Optional] [Defaults to `0`] |

### Return type

[**PricesPaginatedResponseMarketItem**](PricesPaginatedResponseMarketItem.md)

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
| **403** | Authenticated but not permitted to access this resource. |  -  |
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant) when available. <br>  |
| **503** | Indexed prices data unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## priceCandlesV1PricesCandlesGet

> PriceCandlesPage priceCandlesV1PricesCandlesGet(provider, itemId, marketHashName, phase, start, end, lookback, interval, fill, currency, limit, cursor)

Price Candles

Return OHLCV candle data for a single item and single provider.  Parameters: - Item filter: &#x60;item_id&#x60; or &#x60;market_hash_name&#x60; (one is required). - Optional filter: &#x60;phase&#x60;. - Required filter: &#x60;provider&#x60; (singular string key for one specific provider). - Time window: &#x60;start&#x60;/&#x60;end&#x60; (ISO 8601) or &#x60;lookback&#x60; (for example &#x60;7d&#x60;, &#x60;30d&#x60;). - &#x60;interval&#x60;: &#x60;5m&#x60;, &#x60;1h&#x60;, or &#x60;1d&#x60;. - &#x60;fill&#x60;: Include empty buckets with carry-forward prices when &#x60;true&#x60;. - &#x60;currency&#x60;: Quote currency (default &#x60;USD&#x60;). - &#x60;limit&#x60;, &#x60;cursor&#x60;: Cursor-based pagination controls.  Notes: - If both &#x60;start&#x60; and &#x60;lookback&#x60; are sent, &#x60;lookback&#x60; takes precedence. - Maximum lookback depends on &#x60;interval&#x60;:   &#x60;5m&#x60; up to 7 days, &#x60;1h&#x60; up to 30 days, &#x60;1d&#x60; up to 365 days.  Response: - &#x60;meta&#x60;: Item, interval, provider/phase, currency, start/end. - &#x60;data&#x60;: Candle buckets in oldest-to-newest order (&#x60;t&#x60;, &#x60;o&#x60;, &#x60;h&#x60;, &#x60;l&#x60;, &#x60;c&#x60;, &#x60;v&#x60;).   &#x60;v&#x60; is the last observed listing quantity in the bucket, not transaction volume. - &#x60;pagination&#x60;: Standardized pagination footer with cursor state.  Requirements: - Valid API key with access to &#x60;/v1/prices/candles&#x60;. - &#x60;item_id&#x60; or &#x60;market_hash_name&#x60; is required. - &#x60;provider&#x60; is required and accepts exactly one provider key. - &#x60;start&#x60;/&#x60;end&#x60; must be valid ISO 8601 timestamps. - &#x60;limit&#x60; is capped by your tier.

### Example

```ts
import {
  Configuration,
  PricesApi,
} from 'cs2cap-sdk';
import type { PriceCandlesV1PricesCandlesGetRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PricesApi(config);

  const body = {
    // string | Single provider key string (singular parameter, required; e.g. provider=steam).
    provider: provider_example,
    // number | Filter by item ID (optional)
    itemId: 56,
    // string | Filter by market hash name (optional)
    marketHashName: marketHashName_example,
    // PhaseName | Filter by phase (e.g., Phase 1, Ruby, Sapphire) (optional)
    phase: ...,
    // string | Start timestamp (ISO 8601, inclusive) (optional)
    start: start_example,
    // string | End timestamp (ISO 8601, exclusive) (optional)
    end: end_example,
    // string | Convenience alias: \'7d\', \'30d\', etc. Sets start=now-lookback (optional)
    lookback: lookback_example,
    // '1d' | '1h' | '5m' | Time bucket interval (optional)
    interval: interval_example,
    // boolean | Fill gaps with forward-filled data (default: false for sparse data) (optional)
    fill: true,
    // string | Target currency. Any ISO 4217 code supported by `/v1/fx` (see `/v1/fx` for the full list). Invalid codes return a 422 validation error. (optional)
    currency: currency_example,
    // number | Maximum number of candles to return. Defaults to the effective tier cap. (optional)
    limit: 56,
    // string | Opaque pagination cursor from previous response (optional)
    cursor: cursor_example,
  } satisfies PriceCandlesV1PricesCandlesGetRequest;

  try {
    const data = await api.priceCandlesV1PricesCandlesGet(body);
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
| **provider** | `string` | Single provider key string (singular parameter, required; e.g. provider&#x3D;steam). | [Defaults to `undefined`] |
| **itemId** | `number` | Filter by item ID | [Optional] [Defaults to `undefined`] |
| **marketHashName** | `string` | Filter by market hash name | [Optional] [Defaults to `undefined`] |
| **phase** | `PhaseName` | Filter by phase (e.g., Phase 1, Ruby, Sapphire) | [Optional] [Defaults to `undefined`] [Enum: Phase 1, Phase 2, Phase 3, Phase 4, Sapphire, Ruby, Black Pearl, Emerald] |
| **start** | `string` | Start timestamp (ISO 8601, inclusive) | [Optional] [Defaults to `undefined`] |
| **end** | `string` | End timestamp (ISO 8601, exclusive) | [Optional] [Defaults to `undefined`] |
| **lookback** | `string` | Convenience alias: \&#39;7d\&#39;, \&#39;30d\&#39;, etc. Sets start&#x3D;now-lookback | [Optional] [Defaults to `undefined`] |
| **interval** | `1d`, `1h`, `5m` | Time bucket interval | [Optional] [Defaults to `&#39;1h&#39;`] [Enum: 1d, 1h, 5m] |
| **fill** | `boolean` | Fill gaps with forward-filled data (default: false for sparse data) | [Optional] [Defaults to `false`] |
| **currency** | `string` | Target currency. Any ISO 4217 code supported by &#x60;/v1/fx&#x60; (see &#x60;/v1/fx&#x60; for the full list). Invalid codes return a 422 validation error. | [Optional] [Defaults to `&#39;USD&#39;`] |
| **limit** | `number` | Maximum number of candles to return. Defaults to the effective tier cap. | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | Opaque pagination cursor from previous response | [Optional] [Defaults to `undefined`] |

### Return type

[**PriceCandlesPage**](PriceCandlesPage.md)

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
| **403** | Authenticated but not permitted to access this resource. |  -  |
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant) when available. <br>  |
| **400** | Invalid filters, interval, or time window violations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## priceHistoryV1PricesHistoryGet

> PriceSnapshotPage priceHistoryV1PricesHistoryGet(itemId, marketHashName, phase, provider, start, end, currency, limit, cursor)

Price History

Return historical price snapshots.  Parameters: - Filters: &#x60;item_id&#x60;, &#x60;market_hash_name&#x60;, &#x60;phase&#x60;, &#x60;provider&#x60; (singular string key). - Time window: &#x60;start&#x60;, &#x60;end&#x60; (ISO 8601). - &#x60;currency&#x60;: Quote currency (default &#x60;USD&#x60;). - &#x60;limit&#x60;: Items per page. - &#x60;cursor&#x60;: Opaque cursor from &#x60;next_cursor&#x60; for the next page.  Response: - &#x60;items&#x60;: Historical snapshots ordered newest first. - &#x60;meta&#x60;: Applied filters and time window. - &#x60;pagination&#x60;: Standardized pagination footer with cursor state.  Requirements: - Valid API key with access to &#x60;/v1/prices/history&#x60;. - &#x60;start&#x60;/&#x60;end&#x60; must be valid ISO 8601 timestamps. - Requested time range must be within the endpoint retention window. - &#x60;limit&#x60; is capped by your tier.

### Example

```ts
import {
  Configuration,
  PricesApi,
} from 'cs2cap-sdk';
import type { PriceHistoryV1PricesHistoryGetRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PricesApi(config);

  const body = {
    // number | Filter by item ID (optional)
    itemId: 56,
    // string | Filter by market hash name (optional)
    marketHashName: marketHashName_example,
    // PhaseName | Filter by phase (e.g., Phase 1, Ruby, Sapphire) (optional)
    phase: ...,
    // string | Single provider key string (singular parameter, e.g. provider=steam). (optional)
    provider: provider_example,
    // string | ISO 8601 timestamp (optional)
    start: start_example,
    // string | ISO 8601 timestamp (optional)
    end: end_example,
    // string | Target currency. Any ISO 4217 code supported by `/v1/fx` (see `/v1/fx` for the full list). Invalid codes return a 422 validation error. (optional)
    currency: currency_example,
    // number | Maximum number of results to return. Defaults to the effective tier cap. (optional)
    limit: 56,
    // string | Cursor for keyset pagination. Use next_cursor from previous response. When provided, offset is ignored and keyset pagination is used for O(1) seek. (optional)
    cursor: cursor_example,
  } satisfies PriceHistoryV1PricesHistoryGetRequest;

  try {
    const data = await api.priceHistoryV1PricesHistoryGet(body);
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
| **itemId** | `number` | Filter by item ID | [Optional] [Defaults to `undefined`] |
| **marketHashName** | `string` | Filter by market hash name | [Optional] [Defaults to `undefined`] |
| **phase** | `PhaseName` | Filter by phase (e.g., Phase 1, Ruby, Sapphire) | [Optional] [Defaults to `undefined`] [Enum: Phase 1, Phase 2, Phase 3, Phase 4, Sapphire, Ruby, Black Pearl, Emerald] |
| **provider** | `string` | Single provider key string (singular parameter, e.g. provider&#x3D;steam). | [Optional] [Defaults to `undefined`] |
| **start** | `string` | ISO 8601 timestamp | [Optional] [Defaults to `undefined`] |
| **end** | `string` | ISO 8601 timestamp | [Optional] [Defaults to `undefined`] |
| **currency** | `string` | Target currency. Any ISO 4217 code supported by &#x60;/v1/fx&#x60; (see &#x60;/v1/fx&#x60; for the full list). Invalid codes return a 422 validation error. | [Optional] [Defaults to `&#39;USD&#39;`] |
| **limit** | `number` | Maximum number of results to return. Defaults to the effective tier cap. | [Optional] [Defaults to `undefined`] |
| **cursor** | `string` | Cursor for keyset pagination. Use next_cursor from previous response. When provided, offset is ignored and keyset pagination is used for O(1) seek. | [Optional] [Defaults to `undefined`] |

### Return type

[**PriceSnapshotPage**](PriceSnapshotPage.md)

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
| **403** | Authenticated but not permitted to access this resource. |  -  |
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant) when available. <br>  |
| **400** | Invalid timestamp filters or retention window violations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

