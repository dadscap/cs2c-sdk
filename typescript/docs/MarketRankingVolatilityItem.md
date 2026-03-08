
# MarketRankingVolatilityItem

Volatility ranking payload.

## Properties

Name | Type
------------ | -------------
`itemId` | number
`marketHashName` | string
`phase` | string
`provider` | string
`lastUpdated` | Date
`volatilityScore` | number
`currentPriceUsd` | string
`minPriceUsd` | string
`maxPriceUsd` | string
`stdDevUsd` | string
`sampleCount` | number

## Example

```typescript
import type { MarketRankingVolatilityItem } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "itemId": null,
  "marketHashName": null,
  "phase": null,
  "provider": null,
  "lastUpdated": null,
  "volatilityScore": null,
  "currentPriceUsd": null,
  "minPriceUsd": null,
  "maxPriceUsd": null,
  "stdDevUsd": null,
  "sampleCount": null,
} satisfies MarketRankingVolatilityItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketRankingVolatilityItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


