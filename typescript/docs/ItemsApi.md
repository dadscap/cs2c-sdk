# ItemsApi

All URIs are relative to *https://api.cs2c.app*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getItemCatalogMetadata**](ItemsApi.md#getitemcatalogmetadata) | **GET** /v1/items/metadata | Get Item Catalog Metadata |
| [**listItems**](ItemsApi.md#listitems) | **GET** /v1/items | List Items |



## getItemCatalogMetadata

> ItemsMetadataResponse getItemCatalogMetadata()

Get Item Catalog Metadata

Return catalog counts and filter option values for frontend search controls.

### Example

```ts
import {
  Configuration,
  ItemsApi,
} from '@cs2cap.com/sdk';
import type { GetItemCatalogMetadataRequest } from '@cs2cap.com/sdk';

async function example() {
  console.log("🚀 Testing @cs2cap.com/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ItemsApi(config);

  try {
    const data = await api.getItemCatalogMetadata();
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

[**ItemsMetadataResponse**](ItemsMetadataResponse.md)

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


## listItems

> ItemsPaginatedResponseItemOut listItems(q, itemId, marketHashName, itemType, itemSubtype, weaponType, baseName, skinName, wearName, phase, collection, crates, rarityName, rarityColor, styleName, isStattrak, isSouvenir, limit, offset)

List Items

Search the normalized CS2 item catalog with exact-match metadata filters and simple result limiting.  Filters: - exact catalog fields such as &#x60;item_type&#x60;, &#x60;collection&#x60;, &#x60;rarity_name&#x60;, and &#x60;phase&#x60; - &#x60;q&#x60; for case-insensitive substring search on &#x60;market_hash_name&#x60; - &#x60;item_id&#x60; for direct lookup  Result limiting: - provide &#x60;limit&#x60; to cap the number of returned items (still tier-capped, endpoint max 1000) - omit &#x60;limit&#x60; to return all matched items in one response, for any tier  Response: - item records with canonical identifiers and item metadata - optional &#x60;supply&#x60; values when available  Use this endpoint to resolve canonical &#x60;item_id&#x60; values before calling prices, bids, sales, or market analytics.

### Example

```ts
import {
  Configuration,
  ItemsApi,
} from '@cs2cap.com/sdk';
import type { ListItemsRequest } from '@cs2cap.com/sdk';

async function example() {
  console.log("🚀 Testing @cs2cap.com/sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new ItemsApi(config);

  const body = {
    // string | Search by name substring (case-insensitive) (optional)
    q: q_example,
    // number | Exact item ID match (optional)
    itemId: 56,
    // string | Exact market hash name match (case-insensitive) (optional)
    marketHashName: marketHashName_example,
    // string | Exact item type match (case-insensitive). Options: Weapon, Sticker, Sticker Slab, Graffiti, Charm, Crate, Music Kit, Patch, Collectible, Agent, Key, Tool. (optional)
    itemType: itemType_example,
    // string | Exact item subtype match (case-insensitive). Options depend on item_type (for example Equipment, Gloves, Rifles, Autograph, Team, Capsule Key). (optional)
    itemSubtype: itemSubtype_example,
    // string | Exact weapon type match (case-insensitive) (optional)
    weaponType: weaponType_example,
    // string | Exact base name match (case-insensitive) (optional)
    baseName: baseName_example,
    // string | Exact skin name match (case-insensitive) (optional)
    skinName: skinName_example,
    // string | Exact wear name match (case-insensitive) (optional)
    wearName: wearName_example,
    // string | Exact phase match (case-insensitive) (optional)
    phase: phase_example,
    // string | Exact collection match (case-insensitive) (optional)
    collection: collection_example,
    // Array<string> | Filter by crate names (matches any provided value) (optional)
    crates: ...,
    // string | Exact rarity name match (case-insensitive) (optional)
    rarityName: rarityName_example,
    // string | Exact rarity color match (case-insensitive) (optional)
    rarityColor: rarityColor_example,
    // string | Exact style name match (case-insensitive) (optional)
    styleName: styleName_example,
    // boolean | Filter by StatTrak items (optional)
    isStattrak: true,
    // boolean | Filter by Souvenir items (optional)
    isSouvenir: true,
    // number | Maximum number of items to return. Omit to return all matched items in one response. (optional)
    limit: 56,
    // number | Number of items to skip before returning results. (optional)
    offset: 56,
  } satisfies ListItemsRequest;

  try {
    const data = await api.listItems(body);
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
| **q** | `string` | Search by name substring (case-insensitive) | [Optional] [Defaults to `undefined`] |
| **itemId** | `number` | Exact item ID match | [Optional] [Defaults to `undefined`] |
| **marketHashName** | `string` | Exact market hash name match (case-insensitive) | [Optional] [Defaults to `undefined`] |
| **itemType** | `string` | Exact item type match (case-insensitive). Options: Weapon, Sticker, Sticker Slab, Graffiti, Charm, Crate, Music Kit, Patch, Collectible, Agent, Key, Tool. | [Optional] [Defaults to `undefined`] |
| **itemSubtype** | `string` | Exact item subtype match (case-insensitive). Options depend on item_type (for example Equipment, Gloves, Rifles, Autograph, Team, Capsule Key). | [Optional] [Defaults to `undefined`] |
| **weaponType** | `string` | Exact weapon type match (case-insensitive) | [Optional] [Defaults to `undefined`] |
| **baseName** | `string` | Exact base name match (case-insensitive) | [Optional] [Defaults to `undefined`] |
| **skinName** | `string` | Exact skin name match (case-insensitive) | [Optional] [Defaults to `undefined`] |
| **wearName** | `string` | Exact wear name match (case-insensitive) | [Optional] [Defaults to `undefined`] |
| **phase** | `string` | Exact phase match (case-insensitive) | [Optional] [Defaults to `undefined`] |
| **collection** | `string` | Exact collection match (case-insensitive) | [Optional] [Defaults to `undefined`] |
| **crates** | `Array<string>` | Filter by crate names (matches any provided value) | [Optional] |
| **rarityName** | `string` | Exact rarity name match (case-insensitive) | [Optional] [Defaults to `undefined`] |
| **rarityColor** | `string` | Exact rarity color match (case-insensitive) | [Optional] [Defaults to `undefined`] |
| **styleName** | `string` | Exact style name match (case-insensitive) | [Optional] [Defaults to `undefined`] |
| **isStattrak** | `boolean` | Filter by StatTrak items | [Optional] [Defaults to `undefined`] |
| **isSouvenir** | `boolean` | Filter by Souvenir items | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Maximum number of items to return. Omit to return all matched items in one response. | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Number of items to skip before returning results. | [Optional] [Defaults to `undefined`] |

### Return type

[**ItemsPaginatedResponseItemOut**](ItemsPaginatedResponseItemOut.md)

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

