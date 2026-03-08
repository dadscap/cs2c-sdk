
# IndicatorMomentum

Momentum indicator values.

## Properties

Name | Type
------------ | -------------
`rsi14` | number
`macdLine` | number
`macdSignal` | number
`macdHistogram` | number
`sma20` | number
`sma50` | number
`sma200` | number
`ema12` | number
`ema26` | number
`bbUpper` | number
`bbMiddle` | number
`bbLower` | number

## Example

```typescript
import type { IndicatorMomentum } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "rsi14": null,
  "macdLine": null,
  "macdSignal": null,
  "macdHistogram": null,
  "sma20": null,
  "sma50": null,
  "sma200": null,
  "ema12": null,
  "ema26": null,
  "bbUpper": null,
  "bbMiddle": null,
  "bbLower": null,
} satisfies IndicatorMomentum

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IndicatorMomentum
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


