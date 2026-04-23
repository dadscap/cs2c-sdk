# PricesApi

All URIs are relative to *https://api.cs2c.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**batchPriceLookup**](PricesApi.md#batchpricelookup) | **POST** /v1/prices/batch | Batch Price Lookup |
| [**listPrices**](PricesApi.md#listprices) | **GET** /v1/prices | List Prices |
| [**priceCandles**](PricesApi.md#pricecandles) | **GET** /v1/prices/candles | Price Candles |
| [**priceHistory**](PricesApi.md#pricehistory) | **GET** /v1/prices/history | Price History |
| [**streamFullPricesSnapshot**](PricesApi.md#streamfullpricessnapshot) | **POST** /v1/prices | Stream Full Prices Snapshot |



## batchPriceLookup

> BatchPricesResponse batchPriceLookup(batchPricesRequest)

Batch Price Lookup

Retrieve current prices for multiple items in a single request.  Maximum 100 items per request. Returns per-item price quotes from each queried provider.  Prices are in minor units of the requested currency (e.g. USD cents when &#x60;currency&#x3D;USD&#x60;). Divide by 100 for display.

### Example

```ts
import {
  Configuration,
  PricesApi,
} from 'cs2cap-sdk';
import type { BatchPriceLookupRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PricesApi(config);

  const body = {
    // BatchPricesRequest
    batchPricesRequest: ...,
  } satisfies BatchPriceLookupRequest;

  try {
    const data = await api.batchPriceLookup(body);
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
| **batchPricesRequest** | [BatchPricesRequest](BatchPricesRequest.md) |  | |

### Return type

[**BatchPricesResponse**](BatchPricesResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **401** | Missing or invalid authentication credentials. |  -  |
| **403** | Authenticated but not permitted to access this resource. |  -  |
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code. <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |
| **400** | Batch size exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listPrices

> PricesPaginatedResponseMarketItem listPrices(itemId, marketHashName, phase, providers, currency, limit, offset)

List Prices

Return current lowest ask listings.  Parameters: - &#x60;item_id&#x60;: Exact item ID (recommended when known). - &#x60;market_hash_name&#x60;: Exact market name. - &#x60;phase&#x60;: Optional Doppler phase filter. - &#x60;providers&#x60;: Optional provider-key enum list (repeat &#x60;providers&#x60; to pass multiple values). - &#x60;currency&#x60;: Quote currency for prices (default &#x60;USD&#x60;). - &#x60;limit&#x60;, &#x60;offset&#x60;: Offset pagination controls.  Behavior: - If no filters are provided, returns a broad paginated listing. - If &#x60;market_hash_name&#x60; is Doppler and &#x60;phase&#x60; is omitted, results aggregate across phases per provider. - If &#x60;market_hash_name&#x60; and &#x60;phase&#x60; are both provided, only that exact phase is returned. - If the item resolves in the catalog but none of the queried providers currently has a   listing, returns &#x60;200&#x60; with an empty &#x60;items&#x60; array.  Response: - &#x60;meta&#x60;: Applied filters, requested providers, returned providers, currency. - &#x60;items&#x60;: Per-provider lowest ask entries. - &#x60;pagination&#x60;: &#x60;limit&#x60;, &#x60;offset&#x60;, &#x60;total&#x60;, &#x60;has_next&#x60;, &#x60;has_prev&#x60;.  Requirements: - Valid API key with access to &#x60;/v1/prices&#x60;. - &#x60;limit&#x60; is capped by your tier.

### Example

```ts
import {
  Configuration,
  PricesApi,
} from 'cs2cap-sdk';
import type { ListPricesRequest } from 'cs2cap-sdk';

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
  } satisfies ListPricesRequest;

  try {
    const data = await api.listPrices(body);
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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code. <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |
| **503** | Indexed prices data unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## priceCandles

> PriceCandlesPage priceCandles(itemId, marketHashName, phase, start, end, lookback, interval, fill, currency, limit, cursor)

Price Candles

Return composite OHLCV candle data for a single item across all providers.  Parameters: - Item filter: &#x60;item_id&#x60; or &#x60;market_hash_name&#x60; (one is required). - Optional filter: &#x60;phase&#x60;. - Time window: &#x60;start&#x60;/&#x60;end&#x60; (ISO 8601) or &#x60;lookback&#x60; (for example &#x60;7d&#x60; or &#x60;7&#x60;). - &#x60;interval&#x60;: &#x60;5m&#x60;, &#x60;1h&#x60;, or &#x60;1d&#x60;. - &#x60;fill&#x60;: Include empty buckets with carry-forward prices when &#x60;true&#x60;. - &#x60;currency&#x60;: Quote currency (default &#x60;USD&#x60;). - &#x60;limit&#x60;, &#x60;cursor&#x60;: Cursor-based pagination controls.  Notes: - If both &#x60;start&#x60; and &#x60;lookback&#x60; are sent, &#x60;lookback&#x60; takes precedence. - Maximum lookback depends on &#x60;interval&#x60;:   &#x60;5m&#x60; up to 7 days, &#x60;1h&#x60; up to 30 days, &#x60;1d&#x60; up to 365 days.  Response: - &#x60;meta&#x60;: Item, provider scope, interval, phase, currency, start/end timestamps. - &#x60;data&#x60;: Candle buckets in oldest-to-newest order   (&#x60;t&#x60;, &#x60;o&#x60;, &#x60;h&#x60;, &#x60;l&#x60;, &#x60;c&#x60;, &#x60;v&#x60;, &#x60;q&#x60;, &#x60;providers&#x60;).   &#x60;o&#x60;/&#x60;c&#x60; are unweighted averages across provider snapshots, &#x60;l&#x60; is the minimum provider   low, &#x60;h&#x60; is capped at &#x60;median(provider_highs) * 1.5&#x60;, &#x60;v&#x60; is the non-negative depletion   flow between buckets, and &#x60;q&#x60; is the summed close-side inventory at bucket end when   available. &#x60;providers.l&#x60; and &#x60;providers.h&#x60; identify the provider keys contributing the   returned low/high values. For &#x60;1d&#x60; requests starting more than 30 days back, &#x60;v&#x60; falls   back to legacy depletion-derived &#x60;volume_qty&#x60; and &#x60;q&#x60; is &#x60;null&#x60;. - &#x60;pagination&#x60;: Standardized pagination footer with cursor state.  Requirements: - Valid API key with access to &#x60;/v1/prices/candles&#x60;. - &#x60;item_id&#x60; or &#x60;market_hash_name&#x60; is required. - &#x60;start&#x60;/&#x60;end&#x60; must be valid ISO 8601 timestamps. - &#x60;limit&#x60; is capped by your tier.

### Example

```ts
import {
  Configuration,
  PricesApi,
} from 'cs2cap-sdk';
import type { PriceCandlesRequest } from 'cs2cap-sdk';

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
    // Date | Start timestamp (ISO 8601, inclusive) (optional)
    start: 2013-10-20T19:20:30+01:00,
    // Date | End timestamp (ISO 8601, exclusive) (optional)
    end: 2013-10-20T19:20:30+01:00,
    // string | Lookback window in days. Use `7d` or plain `7`; both mean 7 days and set start=now-lookback. (optional)
    lookback: 7d,
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
  } satisfies PriceCandlesRequest;

  try {
    const data = await api.priceCandles(body);
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
| **start** | `Date` | Start timestamp (ISO 8601, inclusive) | [Optional] [Defaults to `undefined`] |
| **end** | `Date` | End timestamp (ISO 8601, exclusive) | [Optional] [Defaults to `undefined`] |
| **lookback** | `string` | Lookback window in days. Use &#x60;7d&#x60; or plain &#x60;7&#x60;; both mean 7 days and set start&#x3D;now-lookback. | [Optional] [Defaults to `undefined`] |
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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code. <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |
| **400** | Invalid filters, interval, or time window violations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## priceHistory

> PriceSnapshotPage priceHistory(itemId, marketHashName, phase, provider, start, end, currency, limit, cursor)

Price History

Return historical price snapshots.  Parameters: - Filters: &#x60;item_id&#x60;, &#x60;market_hash_name&#x60;, &#x60;phase&#x60;, &#x60;provider&#x60; (singular string key). - Time window: &#x60;start&#x60;, &#x60;end&#x60; (ISO 8601). - &#x60;currency&#x60;: Quote currency (default &#x60;USD&#x60;). - &#x60;limit&#x60;: Items per page. - &#x60;cursor&#x60;: Opaque cursor from &#x60;next_cursor&#x60; for the next page.  Response: - &#x60;items&#x60;: Historical snapshots ordered newest first. - &#x60;meta&#x60;: Applied filters and time window. - &#x60;pagination&#x60;: Standardized pagination footer with cursor state.  Requirements: - Valid API key with access to &#x60;/v1/prices/history&#x60;. - &#x60;start&#x60;/&#x60;end&#x60; must be valid ISO 8601 timestamps. - Requested time range must be within the endpoint retention window. - &#x60;limit&#x60; is capped by your tier.

### Example

```ts
import {
  Configuration,
  PricesApi,
} from 'cs2cap-sdk';
import type { PriceHistoryRequest } from 'cs2cap-sdk';

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
    // AllProviders | Single provider key for provider-scoped historical snapshots. Use repeated `providers` on `/v1/prices` for live snapshot filtering; `/v1/prices/candles` is composite and intentionally has no provider filter. (optional)
    provider: ...,
    // Date | ISO 8601 timestamp (optional)
    start: 2013-10-20T19:20:30+01:00,
    // Date | ISO 8601 timestamp (optional)
    end: 2013-10-20T19:20:30+01:00,
    // string | Target currency. Any ISO 4217 code supported by `/v1/fx` (see `/v1/fx` for the full list). Invalid codes return a 422 validation error. (optional)
    currency: currency_example,
    // number | Maximum number of results to return. Defaults to the effective tier cap. (optional)
    limit: 56,
    // string | Cursor for keyset pagination. Use next_cursor from previous response. When provided, offset is ignored and keyset pagination is used for O(1) seek. (optional)
    cursor: cursor_example,
  } satisfies PriceHistoryRequest;

  try {
    const data = await api.priceHistory(body);
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
| **provider** | `AllProviders` | Single provider key for provider-scoped historical snapshots. Use repeated &#x60;providers&#x60; on &#x60;/v1/prices&#x60; for live snapshot filtering; &#x60;/v1/prices/candles&#x60; is composite and intentionally has no provider filter. | [Optional] [Defaults to `undefined`] [Enum: avanmarket, bitskins, buff163, buffmarket, c5, csdeals, csfloat, csgo500, csgoempire, csmoney_m, csmoney_t, cstrade, dmarket, ecosteam, gamerpay, haloskins, itradegg, lisskins, lootfarm, mannco, marketcsgo, pirateswap, rapidskins, shadowpay, skinbaron, skinflow, skinout, skinplace, skinport, skinscom, skinsmonkey, skinswap, skinvault, steam, swapgg, tradeit, waxpeer, whitemarket, youpin] |
| **start** | `Date` | ISO 8601 timestamp | [Optional] [Defaults to `undefined`] |
| **end** | `Date` | ISO 8601 timestamp | [Optional] [Defaults to `undefined`] |
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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code. <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |
| **400** | Invalid timestamp filters or retention window violations. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamFullPricesSnapshot

> string streamFullPricesSnapshot(providers)

Stream Full Prices Snapshot

Return the full live prices snapshot as an NDJSON stream.  Behavior: - pro and quant tiers only - requires a real &#x60;sk_*&#x60; API key; session JWTs are not accepted - optional &#x60;providers&#x60; filter; omit to stream all providers - fixed USD output - &#x60;lowest_ask&#x60; values are returned in USD minor units - one JSON object per line using the &#x60;MarketItem&#x60; field set - the live index is copied into temporary Redis keys so the export is stable for the duration of the stream - per-API-key cooldown of 30 seconds for this POST operation

### Example

```ts
import {
  Configuration,
  PricesApi,
} from 'cs2cap-sdk';
import type { StreamFullPricesSnapshotRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PricesApi(config);

  const body = {
    // Array<AllProviders> (optional)
    providers: ...,
  } satisfies StreamFullPricesSnapshotRequest;

  try {
    const data = await api.streamFullPricesSnapshot(body);
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
| **providers** | `Array<AllProviders>` |  | [Optional] |

### Return type

**string**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/x-ndjson`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | NDJSON stream of the full live prices snapshot in USD. |  * X-Snapshot-Timestamp - UTC timestamp when the snapshot stream started. <br>  * X-Snapshot-Currency - Fixed response currency for every streamed row. <br>  * X-Snapshot-Total - Total indexed rows at stream start, when known. <br>  |
| **401** | Missing or invalid authentication credentials. |  -  |
| **403** | Bulk snapshot access requires a tier with bulk snapshot capability. |  -  |
| **429** | Bulk snapshot cooldown active for this API key. |  * Retry-After - Seconds until this API key may request another prices snapshot. <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |
| **503** | Indexed prices data unavailable. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

