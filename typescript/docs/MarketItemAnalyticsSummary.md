
# MarketItemAnalyticsSummary

Quick summary for single-item analytics.

## Properties

Name | Type
------------ | -------------
`providerCount` | number
`totalVolume24h` | number
`bestAskUsd` | string
`bestBidUsd` | string
`avgSpreadPct` | number

## Example

```typescript
import type { MarketItemAnalyticsSummary } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "providerCount": null,
  "totalVolume24h": null,
  "bestAskUsd": null,
  "bestBidUsd": null,
  "avgSpreadPct": null,
} satisfies MarketItemAnalyticsSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketItemAnalyticsSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


