
# MarketIndicatorsScreenerItem

Signal summary for one item in bulk screener mode.

## Properties

Name | Type
------------ | -------------
`itemId` | number
`marketHashName` | string
`phase` | string
`provider` | string
`closePriceUsd` | string
`signals` | [IndicatorSignals](IndicatorSignals.md)
`rsi14` | number
`macdHistogram` | number
`atr14` | number
`sma20` | number
`lastUpdated` | Date

## Example

```typescript
import type { MarketIndicatorsScreenerItem } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "itemId": null,
  "marketHashName": null,
  "phase": null,
  "provider": null,
  "closePriceUsd": null,
  "signals": null,
  "rsi14": null,
  "macdHistogram": null,
  "atr14": null,
  "sma20": null,
  "lastUpdated": null,
} satisfies MarketIndicatorsScreenerItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketIndicatorsScreenerItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


