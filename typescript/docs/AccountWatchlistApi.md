# AccountWatchlistApi

All URIs are relative to *https://api.cs2c.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWatchlistEntries**](AccountWatchlistApi.md#createwatchlistentries) | **POST** /v1/account/watchlist | Create Watchlist Entries |
| [**deleteWatchlistEntry**](AccountWatchlistApi.md#deletewatchlistentry) | **DELETE** /v1/account/watchlist/{item_id} | Delete Watchlist Entry |
| [**listWatchlist**](AccountWatchlistApi.md#listwatchlist) | **GET** /v1/account/watchlist | List Watchlist |



## createWatchlistEntries

> WatchlistCreateResponse createWatchlistEntries(watchlistCreateRequest)

Create Watchlist Entries

Save one or more normalized catalog items to the authenticated user\&#39;s default watchlist.  Rules: - accepts either a real API key or a session JWT bearer token - send either &#x60;item_id&#x60; for a single add or &#x60;item_ids&#x60; for a batch add - every item ID must exist in the API item catalog - watchlist access and max saved items depend on the user\&#39;s tier - batch creates are all-or-nothing - duplicate saves return &#x60;409&#x60;

### Example

```ts
import {
  Configuration,
  AccountWatchlistApi,
} from 'cs2cap-ts';
import type { CreateWatchlistEntriesRequest } from 'cs2cap-ts';

async function example() {
  console.log("🚀 Testing cs2cap-ts SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountWatchlistApi(config);

  const body = {
    // WatchlistCreateRequest
    watchlistCreateRequest: ...,
  } satisfies CreateWatchlistEntriesRequest;

  try {
    const data = await api.createWatchlistEntries(body);
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
| **watchlistCreateRequest** | [WatchlistCreateRequest](WatchlistCreateRequest.md) |  | |

### Return type

[**WatchlistCreateResponse**](WatchlistCreateResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Successful Response |  -  |
| **401** | Missing or invalid authentication credentials. |  -  |
| **403** | Authenticated but not permitted to access this resource. |  -  |
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code. <br>  * X-RateLimit-Limit - Request limit for the rate-limit window that was exceeded. <br>  * X-RateLimit-Remaining - Remaining requests in the rate-limit window that was exceeded. <br>  * X-RateLimit-Reset - Seconds until the rate-limit window resets. <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWatchlistEntry

> AccountMutationResponse deleteWatchlistEntry(itemId)

Delete Watchlist Entry

Remove one saved watchlist entry by normalized &#x60;item_id&#x60;.  This path uses the catalog item ID, not the watchlist entry UUID.

### Example

```ts
import {
  Configuration,
  AccountWatchlistApi,
} from 'cs2cap-ts';
import type { DeleteWatchlistEntryRequest } from 'cs2cap-ts';

async function example() {
  console.log("🚀 Testing cs2cap-ts SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountWatchlistApi(config);

  const body = {
    // number
    itemId: 56,
  } satisfies DeleteWatchlistEntryRequest;

  try {
    const data = await api.deleteWatchlistEntry(body);
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
| **itemId** | `number` |  | [Defaults to `undefined`] |

### Return type

[**AccountMutationResponse**](AccountMutationResponse.md)

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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code. <br>  * X-RateLimit-Limit - Request limit for the rate-limit window that was exceeded. <br>  * X-RateLimit-Remaining - Remaining requests in the rate-limit window that was exceeded. <br>  * X-RateLimit-Reset - Seconds until the rate-limit window resets. <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWatchlist

> WatchlistResponse listWatchlist(limit, offset, search)

List Watchlist

List saved watchlist items for the authenticated user.  Behavior: - accepts either a real API key or a session JWT bearer token - offset pagination ordered by newest saved first - &#x60;search&#x60; matches exact numeric &#x60;item_id&#x60; or case-insensitive item-name substring - response pagination includes a real &#x60;total&#x60; count

### Example

```ts
import {
  Configuration,
  AccountWatchlistApi,
} from 'cs2cap-ts';
import type { ListWatchlistRequest } from 'cs2cap-ts';

async function example() {
  console.log("🚀 Testing cs2cap-ts SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountWatchlistApi(config);

  const body = {
    // number | Requested page size. Values are clamped to the range 1..200. (optional)
    limit: 56,
    // number | Zero-based starting position for this page. (optional)
    offset: 56,
    // string | Exact numeric item_id match or case-insensitive market_hash_name substring. (optional)
    search: search_example,
  } satisfies ListWatchlistRequest;

  try {
    const data = await api.listWatchlist(body);
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
| **limit** | `number` | Requested page size. Values are clamped to the range 1..200. | [Optional] [Defaults to `50`] |
| **offset** | `number` | Zero-based starting position for this page. | [Optional] [Defaults to `0`] |
| **search** | `string` | Exact numeric item_id match or case-insensitive market_hash_name substring. | [Optional] [Defaults to `undefined`] |

### Return type

[**WatchlistResponse**](WatchlistResponse.md)

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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code. <br>  * X-RateLimit-Limit - Request limit for the rate-limit window that was exceeded. <br>  * X-RateLimit-Remaining - Remaining requests in the rate-limit window that was exceeded. <br>  * X-RateLimit-Reset - Seconds until the rate-limit window resets. <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

