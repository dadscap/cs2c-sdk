# AccountAPIKeysApi

All URIs are relative to *https://api.cs2c.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSubKey**](AccountAPIKeysApi.md#createsubkey) | **POST** /v1/account/sub-keys | Create Sub Key |
| [**deleteSubKey**](AccountAPIKeysApi.md#deletesubkey) | **DELETE** /v1/account/sub-keys/{key_id} | Delete Sub Key |
| [**getSubKey**](AccountAPIKeysApi.md#getsubkey) | **GET** /v1/account/sub-keys/{key_id} | Get Sub Key |
| [**listSubKeys**](AccountAPIKeysApi.md#listsubkeys) | **GET** /v1/account/sub-keys | List Sub Keys |
| [**reissueSubKey**](AccountAPIKeysApi.md#reissuesubkey) | **POST** /v1/account/sub-keys/{key_id}/reissue | Reissue Sub Key |
| [**resetFreeTierIpBinding**](AccountAPIKeysApi.md#resetfreetieripbinding) | **POST** /v1/account/key/reset-ip | Reset Free Tier Ip Binding |
| [**updateSubKey**](AccountAPIKeysApi.md#updatesubkey) | **PATCH** /v1/account/sub-keys/{key_id} | Update Sub Key |



## createSubKey

> ChildAPIKeyCreateResponse createSubKey(childAPIKeyCreateRequest)

Create Sub Key

Create one child API key under the active root key.

### Example

```ts
import {
  Configuration,
  AccountAPIKeysApi,
} from 'cs2cap-sdk';
import type { CreateSubKeyRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountAPIKeysApi(config);

  const body = {
    // ChildAPIKeyCreateRequest
    childAPIKeyCreateRequest: ...,
  } satisfies CreateSubKeyRequest;

  try {
    const data = await api.createSubKey(body);
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
| **childAPIKeyCreateRequest** | [ChildAPIKeyCreateRequest](ChildAPIKeyCreateRequest.md) |  | |

### Return type

[**ChildAPIKeyCreateResponse**](ChildAPIKeyCreateResponse.md)

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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code. <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteSubKey

> { [key: string]: any; } deleteSubKey(keyId)

Delete Sub Key

Revoke one active child API key.

### Example

```ts
import {
  Configuration,
  AccountAPIKeysApi,
} from 'cs2cap-sdk';
import type { DeleteSubKeyRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountAPIKeysApi(config);

  const body = {
    // string | Child API key ID.
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteSubKeyRequest;

  try {
    const data = await api.deleteSubKey(body);
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
| **keyId** | `string` | Child API key ID. | [Defaults to `undefined`] |

### Return type

**{ [key: string]: any; }**

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSubKey

> ChildAPIKeyDetailResponse getSubKey(keyId)

Get Sub Key

Get one active child API key.

### Example

```ts
import {
  Configuration,
  AccountAPIKeysApi,
} from 'cs2cap-sdk';
import type { GetSubKeyRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountAPIKeysApi(config);

  const body = {
    // string | Child API key ID.
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetSubKeyRequest;

  try {
    const data = await api.getSubKey(body);
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
| **keyId** | `string` | Child API key ID. | [Defaults to `undefined`] |

### Return type

[**ChildAPIKeyDetailResponse**](ChildAPIKeyDetailResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listSubKeys

> ChildAPIKeyListResponse listSubKeys(limit, offset)

List Sub Keys

List active child API keys.

### Example

```ts
import {
  Configuration,
  AccountAPIKeysApi,
} from 'cs2cap-sdk';
import type { ListSubKeysRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountAPIKeysApi(config);

  const body = {
    // number | Requested page size. Values are clamped to the range 1..100. (optional)
    limit: 56,
    // number | Zero-based starting position for this page. (optional)
    offset: 56,
  } satisfies ListSubKeysRequest;

  try {
    const data = await api.listSubKeys(body);
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
| **limit** | `number` | Requested page size. Values are clamped to the range 1..100. | [Optional] [Defaults to `25`] |
| **offset** | `number` | Zero-based starting position for this page. | [Optional] [Defaults to `0`] |

### Return type

[**ChildAPIKeyListResponse**](ChildAPIKeyListResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reissueSubKey

> ChildAPIKeyCreateResponse reissueSubKey(keyId)

Reissue Sub Key

Rotate one active child API key.

### Example

```ts
import {
  Configuration,
  AccountAPIKeysApi,
} from 'cs2cap-sdk';
import type { ReissueSubKeyRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountAPIKeysApi(config);

  const body = {
    // string | Child API key ID.
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ReissueSubKeyRequest;

  try {
    const data = await api.reissueSubKey(body);
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
| **keyId** | `string` | Child API key ID. | [Defaults to `undefined`] |

### Return type

[**ChildAPIKeyCreateResponse**](ChildAPIKeyCreateResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## resetFreeTierIpBinding

> IPResetResponse resetFreeTierIpBinding()

Reset Free Tier Ip Binding

Rebind the active key to the caller IP for free tier with cooldown protection.

### Example

```ts
import {
  Configuration,
  AccountAPIKeysApi,
} from 'cs2cap-sdk';
import type { ResetFreeTierIpBindingRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountAPIKeysApi(config);

  try {
    const data = await api.resetFreeTierIpBinding();
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
| **429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier code. <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
| **422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier code when available. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateSubKey

> ChildAPIKeyDetailResponse updateSubKey(keyId, childAPIKeyUpdateRequest)

Update Sub Key

Update one active child API key.

### Example

```ts
import {
  Configuration,
  AccountAPIKeysApi,
} from 'cs2cap-sdk';
import type { UpdateSubKeyRequest } from 'cs2cap-sdk';

async function example() {
  console.log("🚀 Testing cs2cap-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountAPIKeysApi(config);

  const body = {
    // string | Child API key ID.
    keyId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ChildAPIKeyUpdateRequest
    childAPIKeyUpdateRequest: ...,
  } satisfies UpdateSubKeyRequest;

  try {
    const data = await api.updateSubKey(body);
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
| **keyId** | `string` | Child API key ID. | [Defaults to `undefined`] |
| **childAPIKeyUpdateRequest** | [ChildAPIKeyUpdateRequest](ChildAPIKeyUpdateRequest.md) |  | |

### Return type

[**ChildAPIKeyDetailResponse**](ChildAPIKeyDetailResponse.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

