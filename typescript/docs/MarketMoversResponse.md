
# MarketMoversResponse

Response envelope for /v1/market/movers.

## Properties

Name | Type
------------ | -------------
`meta` | [MarketMeta](MarketMeta.md)
`data` | [MarketMoversData](MarketMoversData.md)

## Example

```typescript
import type { MarketMoversResponse } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
} satisfies MarketMoversResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketMoversResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


