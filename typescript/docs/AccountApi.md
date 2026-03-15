# AccountApi

All URIs are relative to *https://api.cs2c.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createAlertRouteV1AccountAlertsPost**](AccountApi.md#createalertroutev1accountalertspost) | **POST** /v1/account/alerts | Create Alert Route |
| [**createWatchlistEntryV1AccountWatchlistPost**](AccountApi.md#createwatchlistentryv1accountwatchlistpost) | **POST** /v1/account/watchlist | Create Watchlist Entry |
| [**deleteAlertRouteV1AccountAlertsAlertIdDelete**](AccountApi.md#deletealertroutev1accountalertsalertiddelete) | **DELETE** /v1/account/alerts/{alert_id} | Delete Alert Route |
| [**deleteWatchlistEntryV1AccountWatchlistItemIdDelete**](AccountApi.md#deletewatchlistentryv1accountwatchlistitemiddelete) | **DELETE** /v1/account/watchlist/{item_id} | Delete Watchlist Entry |
| [**getAlertEventHistoryV1AccountAlertsEventsGet**](AccountApi.md#getalerteventhistoryv1accountalertseventsget) | **GET** /v1/account/alerts/events | Get Alert Event History |
| [**getAlertsV1AccountAlertsGet**](AccountApi.md#getalertsv1accountalertsget) | **GET** /v1/account/alerts | Get Alerts |
| [**getWatchlistV1AccountWatchlistGet**](AccountApi.md#getwatchlistv1accountwatchlistget) | **GET** /v1/account/watchlist | Get Watchlist |
| [**patchAlertV1AccountAlertsAlertIdPatch**](AccountApi.md#patchalertv1accountalertsalertidpatch) | **PATCH** /v1/account/alerts/{alert_id} | Patch Alert |
| [**resetFreeTierIpBindingV1AccountKeyResetIpPost**](AccountApi.md#resetfreetieripbindingv1accountkeyresetippost) | **POST** /v1/account/key/reset-ip | Reset Free Tier Ip Binding |



## createAlertRouteV1AccountAlertsPost

> AlertDefinition createAlertRouteV1AccountAlertsPost(alertCreateRequest)

Create Alert Route

Create a new account alert.

### Example

```ts
import {
  Configuration,
  AccountApi,
} from 'cs2cap-sdk';
import type { CreateAlertRouteV1AccountAlertsPostRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  const body = {
    // AlertCreateRequest
    alertCreateRequest: ...,
  } satisfies CreateAlertRouteV1AccountAlertsPostRequest;

  try {
    const data = await api.createAlertRouteV1AccountAlertsPost(body);
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
| **alertCreateRequest** | [AlertCreateRequest](AlertCreateRequest.md) |  | |

### Return type

[**AlertDefinition**](AlertDefinition.md)

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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant) when available. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createWatchlistEntryV1AccountWatchlistPost

> WatchlistItem createWatchlistEntryV1AccountWatchlistPost(watchlistCreateRequest)

Create Watchlist Entry

Save one item to the default account watchlist.

### Example

```ts
import {
  Configuration,
  AccountApi,
} from 'cs2cap-sdk';
import type { CreateWatchlistEntryV1AccountWatchlistPostRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  const body = {
    // WatchlistCreateRequest
    watchlistCreateRequest: ...,
  } satisfies CreateWatchlistEntryV1AccountWatchlistPostRequest;

  try {
    const data = await api.createWatchlistEntryV1AccountWatchlistPost(body);
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

[**WatchlistItem**](WatchlistItem.md)

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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant) when available. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAlertRouteV1AccountAlertsAlertIdDelete

> AccountMutationResponse deleteAlertRouteV1AccountAlertsAlertIdDelete(alertId)

Delete Alert Route

Delete an account alert.

### Example

```ts
import {
  Configuration,
  AccountApi,
} from 'cs2cap-sdk';
import type { DeleteAlertRouteV1AccountAlertsAlertIdDeleteRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  const body = {
    // string
    alertId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteAlertRouteV1AccountAlertsAlertIdDeleteRequest;

  try {
    const data = await api.deleteAlertRouteV1AccountAlertsAlertIdDelete(body);
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
| **alertId** | `string` |  | [Defaults to `undefined`] |

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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant) when available. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWatchlistEntryV1AccountWatchlistItemIdDelete

> AccountMutationResponse deleteWatchlistEntryV1AccountWatchlistItemIdDelete(itemId)

Delete Watchlist Entry

Delete one item from the default account watchlist.

### Example

```ts
import {
  Configuration,
  AccountApi,
} from 'cs2cap-sdk';
import type { DeleteWatchlistEntryV1AccountWatchlistItemIdDeleteRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  const body = {
    // number
    itemId: 56,
  } satisfies DeleteWatchlistEntryV1AccountWatchlistItemIdDeleteRequest;

  try {
    const data = await api.deleteWatchlistEntryV1AccountWatchlistItemIdDelete(body);
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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant) when available. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAlertEventHistoryV1AccountAlertsEventsGet

> AlertEventsResponse getAlertEventHistoryV1AccountAlertsEventsGet(limit, cursor)

Get Alert Event History

List recent alert trigger events with delivery status.

### Example

```ts
import {
  Configuration,
  AccountApi,
} from 'cs2cap-sdk';
import type { GetAlertEventHistoryV1AccountAlertsEventsGetRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  const body = {
    // number (optional)
    limit: 56,
    // string (optional)
    cursor: cursor_example,
  } satisfies GetAlertEventHistoryV1AccountAlertsEventsGetRequest;

  try {
    const data = await api.getAlertEventHistoryV1AccountAlertsEventsGet(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `50`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**AlertEventsResponse**](AlertEventsResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getAlertsV1AccountAlertsGet

> AlertListResponse getAlertsV1AccountAlertsGet()

Get Alerts

List configured alerts for the authenticated user.

### Example

```ts
import {
  Configuration,
  AccountApi,
} from 'cs2cap-sdk';
import type { GetAlertsV1AccountAlertsGetRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  try {
    const data = await api.getAlertsV1AccountAlertsGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AlertListResponse**](AlertListResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWatchlistV1AccountWatchlistGet

> WatchlistResponse getWatchlistV1AccountWatchlistGet(limit, cursor, search)

Get Watchlist

List saved watchlist items for the authenticated user.

### Example

```ts
import {
  Configuration,
  AccountApi,
} from 'cs2cap-sdk';
import type { GetWatchlistV1AccountWatchlistGetRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  const body = {
    // number (optional)
    limit: 56,
    // string (optional)
    cursor: cursor_example,
    // string (optional)
    search: search_example,
  } satisfies GetWatchlistV1AccountWatchlistGetRequest;

  try {
    const data = await api.getWatchlistV1AccountWatchlistGet(body);
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
| **limit** | `number` |  | [Optional] [Defaults to `50`] |
| **cursor** | `string` |  | [Optional] [Defaults to `undefined`] |
| **search** | `string` |  | [Optional] [Defaults to `undefined`] |

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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant) when available. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## patchAlertV1AccountAlertsAlertIdPatch

> AlertDefinition patchAlertV1AccountAlertsAlertIdPatch(alertId, alertUpdateRequest)

Patch Alert

Update an existing account alert.

### Example

```ts
import {
  Configuration,
  AccountApi,
} from 'cs2cap-sdk';
import type { PatchAlertV1AccountAlertsAlertIdPatchRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  const body = {
    // string
    alertId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // AlertUpdateRequest
    alertUpdateRequest: ...,
  } satisfies PatchAlertV1AccountAlertsAlertIdPatchRequest;

  try {
    const data = await api.patchAlertV1AccountAlertsAlertIdPatch(body);
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
| **alertId** | `string` |  | [Defaults to `undefined`] |
| **alertUpdateRequest** | [AlertUpdateRequest](AlertUpdateRequest.md) |  | |

### Return type

[**AlertDefinition**](AlertDefinition.md)

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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant) when available. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resetFreeTierIpBindingV1AccountKeyResetIpPost

> IPResetResponse resetFreeTierIpBindingV1AccountKeyResetIpPost()

Reset Free Tier Ip Binding

Rebind the active key to the caller IP for free tier with cooldown protection.

### Example

```ts
import {
  Configuration,
  AccountApi,
} from 'cs2cap-sdk';
import type { ResetFreeTierIpBindingV1AccountKeyResetIpPostRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  try {
    const data = await api.resetFreeTierIpBindingV1AccountKeyResetIpPost();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**IPResetResponse**](IPResetResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

