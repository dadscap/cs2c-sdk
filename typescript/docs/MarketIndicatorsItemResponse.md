
# MarketIndicatorsItemResponse

Response envelope for /v1/market/indicators (individual item mode).

## Properties

Name | Type
------------ | -------------
`meta` | [MarketIndicatorsMeta](MarketIndicatorsMeta.md)
`data` | [MarketIndicatorsItemData](MarketIndicatorsItemData.md)

## Example

```typescript
import type { MarketIndicatorsItemResponse } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
} satisfies MarketIndicatorsItemResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketIndicatorsItemResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


