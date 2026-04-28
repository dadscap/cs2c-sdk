
# MarketIndicatorsItemData

Full indicator data for one item (individual mode).

## Properties

Name | Type
------------ | -------------
`itemId` | number
`marketHashName` | string
`phase` | string
`provider` | string
`interval` | string
`closePriceUsd` | string
`momentum` | [IndicatorMomentum](IndicatorMomentum.md)
`volatility` | [IndicatorVolatility](IndicatorVolatility.md)
`volume` | [IndicatorVolume](IndicatorVolume.md)
`signals` | [IndicatorSignals](IndicatorSignals.md)
`coverage` | [IndicatorDataCoverage](IndicatorDataCoverage.md)

## Example

```typescript
import type { MarketIndicatorsItemData } from 'cs2cap-ts'

// TODO: Update the object below with actual values
const example = {
  "itemId": null,
  "marketHashName": null,
  "phase": null,
  "provider": null,
  "interval": null,
  "closePriceUsd": null,
  "momentum": null,
  "volatility": null,
  "volume": null,
  "signals": null,
  "coverage": null,
} satisfies MarketIndicatorsItemData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketIndicatorsItemData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


