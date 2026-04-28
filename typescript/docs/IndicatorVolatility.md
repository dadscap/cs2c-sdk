
# IndicatorVolatility

Volatility indicator values.

## Properties

Name | Type
------------ | -------------
`atr14` | number
`historicalVolatility20` | number
`kcUpper` | number
`kcMiddle` | number
`kcLower` | number

## Example

```typescript
import type { IndicatorVolatility } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "atr14": null,
  "historicalVolatility20": null,
  "kcUpper": null,
  "kcMiddle": null,
  "kcLower": null,
} satisfies IndicatorVolatility

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IndicatorVolatility
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


