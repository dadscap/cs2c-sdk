
# MarketItemAnalyticsResponse

Response envelope for /v1/market/items/{item_id}.

## Properties

Name | Type
------------ | -------------
`meta` | [MarketMeta](MarketMeta.md)
`data` | [MarketItemAnalyticsData](MarketItemAnalyticsData.md)

## Example

```typescript
import type { MarketItemAnalyticsResponse } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
} satisfies MarketItemAnalyticsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketItemAnalyticsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


