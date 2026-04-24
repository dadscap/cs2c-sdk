# AccountAlertsApi

All URIs are relative to *https://api.cs2c.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createAlert**](AccountAlertsApi.md#createalert) | **POST** /v1/account/alerts | Create Alert |
| [**createAlertsBatch**](AccountAlertsApi.md#createalertsbatch) | **POST** /v1/account/alerts/batch | Create Alerts Batch |
| [**deleteAlert**](AccountAlertsApi.md#deletealert) | **DELETE** /v1/account/alerts/{alert_id} | Delete Alert |
| [**listAlertEvents**](AccountAlertsApi.md#listalertevents) | **GET** /v1/account/alerts/events | List Alert Events |
| [**listAlerts**](AccountAlertsApi.md#listalerts) | **GET** /v1/account/alerts | List Alerts |
| [**updateAlert**](AccountAlertsApi.md#updatealert) | **PATCH** /v1/account/alerts/{alert_id} | Update Alert |



## createAlert

> AlertDefinition createAlert(alertCreateRequest)

Create Alert

Create a new item-scoped account alert.  Supported kinds: - &#x60;price_below&#x60;: trigger when the current best ask is at or below the threshold - &#x60;price_above&#x60;: trigger when the current best ask is at or above the threshold - &#x60;spread_exceeds&#x60;: trigger when &#x60;((best_ask - best_bid) / best_ask) * 100&#x60; meets or exceeds the threshold  Rules: - accepts either a real API key or a session JWT bearer token - &#x60;spread_exceeds&#x60; ignores &#x60;threshold_currency&#x60; - price alerts default &#x60;threshold_currency&#x60; to the account preferred currency when omitted; accounts that have not set a preference use USD - enabled alerts require at least one configured delivery channel (verified email delivery or an active webhook destination) - the active enabled-alert cap is tier-controlled

### Example

```ts
import {
  Configuration,
  AccountAlertsApi,
} from '@cs2cap.com/sdk';
import type { CreateAlertRequest } from '@cs2cap.com/sdk';

async function example() {
  console.log("🚀 Testing @cs2cap.com/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountAlertsApi(config);

  const body = {
    // AlertCreateRequest
    alertCreateRequest: ...,
  } satisfies CreateAlertRequest;

  try {
    const data = await api.createAlert(body);
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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code. <br>  * X-RateLimit-Limit - Request limit for the rate-limit window that was exceeded. <br>  * X-RateLimit-Remaining - Remaining requests in the rate-limit window that was exceeded. <br>  * X-RateLimit-Reset - Seconds until the rate-limit window resets. <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAlertsBatch

> AlertBatchCreateResponse createAlertsBatch(alertBatchCreateRequest)

Create Alerts Batch

Create multiple item-scoped account alerts in one request.  Rules: - accepts either a real API key or a session JWT bearer token - maximum 100 alerts per request - gated by the &#x60;batch_alert_creation_access&#x60; feature flag - enabled alerts are preflight-checked against the tier active-alert cap before inserts - exact duplicate alert payloads in the same request are rejected inline - the response preserves request order and reports per-item created/error status - the request consumes one API call regardless of batch size

### Example

```ts
import {
  Configuration,
  AccountAlertsApi,
} from '@cs2cap.com/sdk';
import type { CreateAlertsBatchRequest } from '@cs2cap.com/sdk';

async function example() {
  console.log("🚀 Testing @cs2cap.com/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountAlertsApi(config);

  const body = {
    // AlertBatchCreateRequest
    alertBatchCreateRequest: ...,
  } satisfies CreateAlertsBatchRequest;

  try {
    const data = await api.createAlertsBatch(body);
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
| **alertBatchCreateRequest** | [AlertBatchCreateRequest](AlertBatchCreateRequest.md) |  | |

### Return type

[**AlertBatchCreateResponse**](AlertBatchCreateResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Batch processed successfully. |  -  |
| **401** | Missing or invalid authentication credentials. |  -  |
| **403** | Batch alert creation is not available for this tier. |  -  |
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code. <br>  * X-RateLimit-Limit - Request limit for the rate-limit window that was exceeded. <br>  * X-RateLimit-Remaining - Remaining requests in the rate-limit window that was exceeded. <br>  * X-RateLimit-Reset - Seconds until the rate-limit window resets. <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |
| **400** | Batch size exceeded. |  -  |
| **402** | Enabled-alert cap would be exceeded by this batch. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAlert

> AccountMutationResponse deleteAlert(alertId)

Delete Alert

Delete one alert definition owned by the authenticated user.

### Example

```ts
import {
  Configuration,
  AccountAlertsApi,
} from '@cs2cap.com/sdk';
import type { DeleteAlertRequest } from '@cs2cap.com/sdk';

async function example() {
  console.log("🚀 Testing @cs2cap.com/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountAlertsApi(config);

  const body = {
    // string
    alertId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteAlertRequest;

  try {
    const data = await api.deleteAlert(body);
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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code. <br>  * X-RateLimit-Limit - Request limit for the rate-limit window that was exceeded. <br>  * X-RateLimit-Remaining - Remaining requests in the rate-limit window that was exceeded. <br>  * X-RateLimit-Reset - Seconds until the rate-limit window resets. <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAlertEvents

> AlertEventsResponse listAlertEvents(limit, offset)

List Alert Events

List recent alert trigger events and delivery attempts for the authenticated user.  Behavior: - accepts either a real API key or a session JWT bearer token - offset pagination ordered by newest event first - delivery rows currently reflect email delivery attempts

### Example

```ts
import {
  Configuration,
  AccountAlertsApi,
} from '@cs2cap.com/sdk';
import type { ListAlertEventsRequest } from '@cs2cap.com/sdk';

async function example() {
  console.log("🚀 Testing @cs2cap.com/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountAlertsApi(config);

  const body = {
    // number | Requested page size. Values are clamped to the range 1..100. (optional)
    limit: 56,
    // number | Requested offset into the event history. (optional)
    offset: 56,
  } satisfies ListAlertEventsRequest;

  try {
    const data = await api.listAlertEvents(body);
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
| **limit** | `number` | Requested page size. Values are clamped to the range 1..100. | [Optional] [Defaults to `50`] |
| **offset** | `number` | Requested offset into the event history. | [Optional] [Defaults to `0`] |

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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code. <br>  * X-RateLimit-Limit - Request limit for the rate-limit window that was exceeded. <br>  * X-RateLimit-Remaining - Remaining requests in the rate-limit window that was exceeded. <br>  * X-RateLimit-Reset - Seconds until the rate-limit window resets. <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listAlerts

> AlertListResponse listAlerts(limit, offset, search)

List Alerts

List configured item alerts for the authenticated user.  Behavior: - accepts either a real API key or a session JWT bearer token - offset pagination ordered by newest created first - &#x60;search&#x60; matches exact numeric &#x60;item_id&#x60; or case-insensitive item-name substring - response pagination includes a real &#x60;total&#x60; count

### Example

```ts
import {
  Configuration,
  AccountAlertsApi,
} from '@cs2cap.com/sdk';
import type { ListAlertsRequest } from '@cs2cap.com/sdk';

async function example() {
  console.log("🚀 Testing @cs2cap.com/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountAlertsApi(config);

  const body = {
    // number | Requested page size. Values are clamped to the range 1..200. (optional)
    limit: 56,
    // number | Zero-based starting position for this page. (optional)
    offset: 56,
    // string | Exact numeric item_id match or case-insensitive market_hash_name substring. (optional)
    search: search_example,
  } satisfies ListAlertsRequest;

  try {
    const data = await api.listAlerts(body);
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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code. <br>  * X-RateLimit-Limit - Request limit for the rate-limit window that was exceeded. <br>  * X-RateLimit-Remaining - Remaining requests in the rate-limit window that was exceeded. <br>  * X-RateLimit-Reset - Seconds until the rate-limit window resets. <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAlert

> AlertDefinition updateAlert(alertId, alertUpdateRequest)

Update Alert

Update threshold fields or enabled state for an existing alert.  At least one of &#x60;threshold_value&#x60;, &#x60;threshold_currency&#x60;, or &#x60;is_enabled&#x60; must be provided. Enabling an alert re-applies tier, configured-delivery-channel, and enabled-alert-limit checks.

### Example

```ts
import {
  Configuration,
  AccountAlertsApi,
} from '@cs2cap.com/sdk';
import type { UpdateAlertRequest } from '@cs2cap.com/sdk';

async function example() {
  console.log("🚀 Testing @cs2cap.com/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountAlertsApi(config);

  const body = {
    // string
    alertId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // AlertUpdateRequest
    alertUpdateRequest: ...,
  } satisfies UpdateAlertRequest;

  try {
    const data = await api.updateAlert(body);
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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code. <br>  * X-RateLimit-Limit - Request limit for the rate-limit window that was exceeded. <br>  * X-RateLimit-Remaining - Remaining requests in the rate-limit window that was exceeded. <br>  * X-RateLimit-Reset - Seconds until the rate-limit window resets. <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

