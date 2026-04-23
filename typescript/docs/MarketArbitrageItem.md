
# MarketArbitrageItem

Arbitrage opportunity payload.

## Properties

Name | Type
------------ | -------------
`itemId` | number
`marketHashName` | string
`phase` | string
`buyProvider` | string
`sellProvider` | string
`buyPriceUsd` | string
`sellPriceUsd` | string
`grossSpreadPct` | number
`estimatedFeesUsd` | string
`netProfitUsd` | string
`lastUpdated` | Date

## Example

```typescript
import type { MarketArbitrageItem } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "itemId": null,
  "marketHashName": null,
  "phase": null,
  "buyProvider": null,
  "sellProvider": null,
  "buyPriceUsd": null,
  "sellPriceUsd": null,
  "grossSpreadPct": null,
  "estimatedFeesUsd": null,
  "netProfitUsd": null,
  "lastUpdated": null,
} satisfies MarketArbitrageItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketArbitrageItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


