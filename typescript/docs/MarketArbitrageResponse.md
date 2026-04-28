
# MarketArbitrageResponse

Response envelope for /v1/market/arbitrage.

## Properties

Name | Type
------------ | -------------
`meta` | [MarketArbitrageMeta](MarketArbitrageMeta.md)
`data` | [MarketArbitrageData](MarketArbitrageData.md)
`pagination` | [PaginationMeta](PaginationMeta.md)

## Example

```typescript
import type { MarketArbitrageResponse } from 'cs2cap-ts'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
  "pagination": null,
} satisfies MarketArbitrageResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketArbitrageResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


