# cs2cap_sdk.AccountApi

All URIs are relative to *https://api.cs2c.app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_alert_route_v1_account_alerts_post**](AccountApi.md#create_alert_route_v1_account_alerts_post) | **POST** /v1/account/alerts | Create Alert Route
[**create_watchlist_entry_v1_account_watchlist_post**](AccountApi.md#create_watchlist_entry_v1_account_watchlist_post) | **POST** /v1/account/watchlist | Create Watchlist Entry
[**delete_alert_route_v1_account_alerts_alert_id_delete**](AccountApi.md#delete_alert_route_v1_account_alerts_alert_id_delete) | **DELETE** /v1/account/alerts/{alert_id} | Delete Alert Route
[**delete_watchlist_entry_v1_account_watchlist_item_id_delete**](AccountApi.md#delete_watchlist_entry_v1_account_watchlist_item_id_delete) | **DELETE** /v1/account/watchlist/{item_id} | Delete Watchlist Entry
[**get_alert_event_history_v1_account_alerts_events_get**](AccountApi.md#get_alert_event_history_v1_account_alerts_events_get) | **GET** /v1/account/alerts/events | Get Alert Event History
[**get_alerts_v1_account_alerts_get**](AccountApi.md#get_alerts_v1_account_alerts_get) | **GET** /v1/account/alerts | Get Alerts
[**get_watchlist_v1_account_watchlist_get**](AccountApi.md#get_watchlist_v1_account_watchlist_get) | **GET** /v1/account/watchlist | Get Watchlist
[**patch_alert_v1_account_alerts_alert_id_patch**](AccountApi.md#patch_alert_v1_account_alerts_alert_id_patch) | **PATCH** /v1/account/alerts/{alert_id} | Patch Alert
[**reset_free_tier_ip_binding_v1_account_key_reset_ip_post**](AccountApi.md#reset_free_tier_ip_binding_v1_account_key_reset_ip_post) | **POST** /v1/account/key/reset-ip | Reset Free Tier Ip Binding


# **create_alert_route_v1_account_alerts_post**
> AlertDefinition create_alert_route_v1_account_alerts_post(alert_create_request)

Create Alert Route

Create a new account alert.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.alert_create_request import AlertCreateRequest
from cs2cap_sdk.models.alert_definition import AlertDefinition
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
    api_instance = cs2cap_sdk.AccountApi(api_client)
    alert_create_request = cs2cap_sdk.AlertCreateRequest() # AlertCreateRequest | 

    try:
        # Create Alert Route
        api_response = api_instance.create_alert_route_v1_account_alerts_post(alert_create_request)
        print("The response of AccountApi->create_alert_route_v1_account_alerts_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->create_alert_route_v1_account_alerts_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_create_request** | [**AlertCreateRequest**](AlertCreateRequest.md)|  | 

### Return type

[**AlertDefinition**](AlertDefinition.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | Missing or invalid authentication credentials. |  -  |
**403** | Authenticated but not permitted to access this resource. |  -  |
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_watchlist_entry_v1_account_watchlist_post**
> WatchlistItem create_watchlist_entry_v1_account_watchlist_post(watchlist_create_request)

Create Watchlist Entry

Save one item to the default account watchlist.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.watchlist_create_request import WatchlistCreateRequest
from cs2cap_sdk.models.watchlist_item import WatchlistItem
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
    api_instance = cs2cap_sdk.AccountApi(api_client)
    watchlist_create_request = cs2cap_sdk.WatchlistCreateRequest() # WatchlistCreateRequest | 

    try:
        # Create Watchlist Entry
        api_response = api_instance.create_watchlist_entry_v1_account_watchlist_post(watchlist_create_request)
        print("The response of AccountApi->create_watchlist_entry_v1_account_watchlist_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->create_watchlist_entry_v1_account_watchlist_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **watchlist_create_request** | [**WatchlistCreateRequest**](WatchlistCreateRequest.md)|  | 

### Return type

[**WatchlistItem**](WatchlistItem.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**401** | Missing or invalid authentication credentials. |  -  |
**403** | Authenticated but not permitted to access this resource. |  -  |
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_alert_route_v1_account_alerts_alert_id_delete**
> AccountMutationResponse delete_alert_route_v1_account_alerts_alert_id_delete(alert_id)

Delete Alert Route

Delete an account alert.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.account_mutation_response import AccountMutationResponse
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
    api_instance = cs2cap_sdk.AccountApi(api_client)
    alert_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 

    try:
        # Delete Alert Route
        api_response = api_instance.delete_alert_route_v1_account_alerts_alert_id_delete(alert_id)
        print("The response of AccountApi->delete_alert_route_v1_account_alerts_alert_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->delete_alert_route_v1_account_alerts_alert_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_id** | **UUID**|  | 

### Return type

[**AccountMutationResponse**](AccountMutationResponse.md)

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
**403** | Authenticated but not permitted to access this resource. |  -  |
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_watchlist_entry_v1_account_watchlist_item_id_delete**
> AccountMutationResponse delete_watchlist_entry_v1_account_watchlist_item_id_delete(item_id)

Delete Watchlist Entry

Delete one item from the default account watchlist.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.account_mutation_response import AccountMutationResponse
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
    api_instance = cs2cap_sdk.AccountApi(api_client)
    item_id = 56 # int | 

    try:
        # Delete Watchlist Entry
        api_response = api_instance.delete_watchlist_entry_v1_account_watchlist_item_id_delete(item_id)
        print("The response of AccountApi->delete_watchlist_entry_v1_account_watchlist_item_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->delete_watchlist_entry_v1_account_watchlist_item_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **item_id** | **int**|  | 

### Return type

[**AccountMutationResponse**](AccountMutationResponse.md)

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
**403** | Authenticated but not permitted to access this resource. |  -  |
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_alert_event_history_v1_account_alerts_events_get**
> AlertEventsResponse get_alert_event_history_v1_account_alerts_events_get(limit=limit, cursor=cursor)

Get Alert Event History

List recent alert trigger events with delivery status.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.alert_events_response import AlertEventsResponse
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
    api_instance = cs2cap_sdk.AccountApi(api_client)
    limit = 50 # int |  (optional) (default to 50)
    cursor = 'cursor_example' # str |  (optional)

    try:
        # Get Alert Event History
        api_response = api_instance.get_alert_event_history_v1_account_alerts_events_get(limit=limit, cursor=cursor)
        print("The response of AccountApi->get_alert_event_history_v1_account_alerts_events_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->get_alert_event_history_v1_account_alerts_events_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**|  | [optional] [default to 50]
 **cursor** | **str**|  | [optional] 

### Return type

[**AlertEventsResponse**](AlertEventsResponse.md)

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
**403** | Authenticated but not permitted to access this resource. |  -  |
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_alerts_v1_account_alerts_get**
> AlertListResponse get_alerts_v1_account_alerts_get()

Get Alerts

List configured alerts for the authenticated user.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.alert_list_response import AlertListResponse
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
    api_instance = cs2cap_sdk.AccountApi(api_client)

    try:
        # Get Alerts
        api_response = api_instance.get_alerts_v1_account_alerts_get()
        print("The response of AccountApi->get_alerts_v1_account_alerts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->get_alerts_v1_account_alerts_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**AlertListResponse**](AlertListResponse.md)

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
**403** | Authenticated but not permitted to access this resource. |  -  |
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_watchlist_v1_account_watchlist_get**
> WatchlistResponse get_watchlist_v1_account_watchlist_get(limit=limit, cursor=cursor, search=search)

Get Watchlist

List saved watchlist items for the authenticated user.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.watchlist_response import WatchlistResponse
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
    api_instance = cs2cap_sdk.AccountApi(api_client)
    limit = 50 # int |  (optional) (default to 50)
    cursor = 'cursor_example' # str |  (optional)
    search = 'search_example' # str |  (optional)

    try:
        # Get Watchlist
        api_response = api_instance.get_watchlist_v1_account_watchlist_get(limit=limit, cursor=cursor, search=search)
        print("The response of AccountApi->get_watchlist_v1_account_watchlist_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->get_watchlist_v1_account_watchlist_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**|  | [optional] [default to 50]
 **cursor** | **str**|  | [optional] 
 **search** | **str**|  | [optional] 

### Return type

[**WatchlistResponse**](WatchlistResponse.md)

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
**403** | Authenticated but not permitted to access this resource. |  -  |
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_alert_v1_account_alerts_alert_id_patch**
> AlertDefinition patch_alert_v1_account_alerts_alert_id_patch(alert_id, alert_update_request)

Patch Alert

Update an existing account alert.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.alert_definition import AlertDefinition
from cs2cap_sdk.models.alert_update_request import AlertUpdateRequest
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
    api_instance = cs2cap_sdk.AccountApi(api_client)
    alert_id = UUID('38400000-8cf0-11bd-b23e-10b96e4ef00d') # UUID | 
    alert_update_request = cs2cap_sdk.AlertUpdateRequest() # AlertUpdateRequest | 

    try:
        # Patch Alert
        api_response = api_instance.patch_alert_v1_account_alerts_alert_id_patch(alert_id, alert_update_request)
        print("The response of AccountApi->patch_alert_v1_account_alerts_alert_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->patch_alert_v1_account_alerts_alert_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alert_id** | **UUID**|  | 
 **alert_update_request** | [**AlertUpdateRequest**](AlertUpdateRequest.md)|  | 

### Return type

[**AlertDefinition**](AlertDefinition.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**401** | Missing or invalid authentication credentials. |  -  |
**403** | Authenticated but not permitted to access this resource. |  -  |
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reset_free_tier_ip_binding_v1_account_key_reset_ip_post**
> IPResetResponse reset_free_tier_ip_binding_v1_account_key_reset_ip_post()

Reset Free Tier Ip Binding

Rebind the active key to the caller IP for free tier with cooldown protection.

### Example

* Bearer Authentication (BearerAuth):

```python
import cs2cap_sdk
from cs2cap_sdk.models.ip_reset_response import IPResetResponse
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
    api_instance = cs2cap_sdk.AccountApi(api_client)

    try:
        # Reset Free Tier Ip Binding
        api_response = api_instance.reset_free_tier_ip_binding_v1_account_key_reset_ip_post()
        print("The response of AccountApi->reset_free_tier_ip_binding_v1_account_key_reset_ip_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountApi->reset_free_tier_ip_binding_v1_account_key_reset_ip_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**IPResetResponse**](IPResetResponse.md)

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
**403** | Authenticated but not permitted to access this resource. |  -  |
**429** | Rate limit exceeded (burst or monthly quota). |  * Retry-After - Seconds to wait before retrying when present. <br>  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  * X-RateLimit-Limit - Monthly request quota for this key (returned on quota 429). <br>  * X-RateLimit-Remaining - Remaining monthly requests (returned on quota 429). <br>  * X-RateLimit-Reset - Seconds until monthly quota reset (returned on quota 429). <br>  |
**422** | Request validation failed. The detail list contains field-specific validation errors. |  * X-RateLimit-Tier - Authenticated caller tier (free, pro, quant). <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

