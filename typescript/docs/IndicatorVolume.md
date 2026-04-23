
# IndicatorVolume

Volume indicator values.

## Properties

Name | Type
------------ | -------------
`vwap` | number
`obv` | number
`volumeSma20` | number

## Example

```typescript
import type { IndicatorVolume } from '@cs2cap.com/sdk'

// TODO: Update the object below with actual values
const example = {
  "vwap": null,
  "obv": null,
  "volumeSma20": null,
} satisfies IndicatorVolume

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IndicatorVolume
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


