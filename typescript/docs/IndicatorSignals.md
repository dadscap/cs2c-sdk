
# IndicatorSignals

Derived signal labels from indicator values.

## Properties

Name | Type
------------ | -------------
`rsi` | string
`macd` | string
`trend` | string
`bollinger` | string
`volatility` | string
`compositeScore` | number

## Example

```typescript
import type { IndicatorSignals } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "rsi": null,
  "macd": null,
  "trend": null,
  "bollinger": null,
  "volatility": null,
  "compositeScore": null,
} satisfies IndicatorSignals

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IndicatorSignals
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


