# AccountWebhooksApi

All URIs are relative to *https://api.cs2c.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWebhook**](AccountWebhooksApi.md#createwebhook) | **POST** /v1/account/webhooks | Create Webhook |
| [**deleteWebhook**](AccountWebhooksApi.md#deletewebhook) | **DELETE** /v1/account/webhooks/{webhook_id} | Delete Webhook |
| [**getWebhookDelivery**](AccountWebhooksApi.md#getwebhookdelivery) | **GET** /v1/account/webhooks/deliveries/{delivery_id} | Get Webhook Delivery |
| [**listWebhookDeliveries**](AccountWebhooksApi.md#listwebhookdeliveries) | **GET** /v1/account/webhooks/deliveries | List Webhook Deliveries |
| [**listWebhooks**](AccountWebhooksApi.md#listwebhooks) | **GET** /v1/account/webhooks | List Webhooks |
| [**rotateWebhookSecret**](AccountWebhooksApi.md#rotatewebhooksecret) | **POST** /v1/account/webhooks/{webhook_id}/rotate-secret | Rotate Webhook Secret |
| [**updateWebhook**](AccountWebhooksApi.md#updatewebhook) | **PATCH** /v1/account/webhooks/{webhook_id} | Update Webhook |



## createWebhook

> WebhookSecretResponse createWebhook(webhookCreateRequest)

Create Webhook

Create one outbound webhook destination and return its signing secret once.

### Example

```ts
import {
  Configuration,
  AccountWebhooksApi,
} from 'cs2cap-ts';
import type { CreateWebhookRequest } from 'cs2cap-ts';

async function example() {
  console.log("🚀 Testing cs2cap-ts SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountWebhooksApi(config);

  const body = {
    // WebhookCreateRequest
    webhookCreateRequest: ...,
  } satisfies CreateWebhookRequest;

  try {
    const data = await api.createWebhook(body);
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
| **webhookCreateRequest** | [WebhookCreateRequest](WebhookCreateRequest.md) |  | |

### Return type

[**WebhookSecretResponse**](WebhookSecretResponse.md)

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


## deleteWebhook

> AccountMutationResponse deleteWebhook(webhookId)

Delete Webhook

Delete one outbound webhook destination owned by the authenticated account.

### Example

```ts
import {
  Configuration,
  AccountWebhooksApi,
} from 'cs2cap-ts';
import type { DeleteWebhookRequest } from 'cs2cap-ts';

async function example() {
  console.log("🚀 Testing cs2cap-ts SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountWebhooksApi(config);

  const body = {
    // string
    webhookId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteWebhookRequest;

  try {
    const data = await api.deleteWebhook(body);
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
| **webhookId** | `string` |  | [Defaults to `undefined`] |

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


## getWebhookDelivery

> WebhookDeliveryDetail getWebhookDelivery(deliveryId)

Get Webhook Delivery

Fetch one outbound webhook delivery job with its attempt history.

### Example

```ts
import {
  Configuration,
  AccountWebhooksApi,
} from 'cs2cap-ts';
import type { GetWebhookDeliveryRequest } from 'cs2cap-ts';

async function example() {
  console.log("🚀 Testing cs2cap-ts SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountWebhooksApi(config);

  const body = {
    // string
    deliveryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetWebhookDeliveryRequest;

  try {
    const data = await api.getWebhookDelivery(body);
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
| **deliveryId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WebhookDeliveryDetail**](WebhookDeliveryDetail.md)

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


## listWebhookDeliveries

> WebhookDeliveriesResponse listWebhookDeliveries(limit, offset)

List Webhook Deliveries

List outbound webhook delivery jobs for the authenticated account.

### Example

```ts
import {
  Configuration,
  AccountWebhooksApi,
} from 'cs2cap-ts';
import type { ListWebhookDeliveriesRequest } from 'cs2cap-ts';

async function example() {
  console.log("🚀 Testing cs2cap-ts SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountWebhooksApi(config);

  const body = {
    // number | Requested page size. Values are clamped to the range 1..100. (optional)
    limit: 56,
    // number | Requested offset into delivery history. (optional)
    offset: 56,
  } satisfies ListWebhookDeliveriesRequest;

  try {
    const data = await api.listWebhookDeliveries(body);
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
| **offset** | `number` | Requested offset into delivery history. | [Optional] [Defaults to `0`] |

### Return type

[**WebhookDeliveriesResponse**](WebhookDeliveriesResponse.md)

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


## listWebhooks

> WebhookEndpointsResponse listWebhooks()

List Webhooks

List outbound webhook destinations configured for the authenticated account.

### Example

```ts
import {
  Configuration,
  AccountWebhooksApi,
} from 'cs2cap-ts';
import type { ListWebhooksRequest } from 'cs2cap-ts';

async function example() {
  console.log("🚀 Testing cs2cap-ts SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountWebhooksApi(config);

  try {
    const data = await api.listWebhooks();
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

[**WebhookEndpointsResponse**](WebhookEndpointsResponse.md)

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


## rotateWebhookSecret

> WebhookSecretResponse rotateWebhookSecret(webhookId)

Rotate Webhook Secret

Rotate one webhook destination signing secret and return the new secret once.

### Example

```ts
import {
  Configuration,
  AccountWebhooksApi,
} from 'cs2cap-ts';
import type { RotateWebhookSecretRequest } from 'cs2cap-ts';

async function example() {
  console.log("🚀 Testing cs2cap-ts SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountWebhooksApi(config);

  const body = {
    // string
    webhookId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies RotateWebhookSecretRequest;

  try {
    const data = await api.rotateWebhookSecret(body);
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
| **webhookId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WebhookSecretResponse**](WebhookSecretResponse.md)

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


## updateWebhook

> WebhookEndpointSummary updateWebhook(webhookId, webhookUpdateRequest)

Update Webhook

Update mutable outbound webhook destination fields.

### Example

```ts
import {
  Configuration,
  AccountWebhooksApi,
} from 'cs2cap-ts';
import type { UpdateWebhookRequest } from 'cs2cap-ts';

async function example() {
  console.log("🚀 Testing cs2cap-ts SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountWebhooksApi(config);

  const body = {
    // string
    webhookId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // WebhookUpdateRequest
    webhookUpdateRequest: ...,
  } satisfies UpdateWebhookRequest;

  try {
    const data = await api.updateWebhook(body);
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
| **webhookId** | `string` |  | [Defaults to `undefined`] |
| **webhookUpdateRequest** | [WebhookUpdateRequest](WebhookUpdateRequest.md) |  | |

### Return type

[**WebhookEndpointSummary**](WebhookEndpointSummary.md)

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

