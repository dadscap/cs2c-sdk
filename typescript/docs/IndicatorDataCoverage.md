
# IndicatorDataCoverage

Data sufficiency information for computed indicators.

## Properties

Name | Type
------------ | -------------
`candleCount` | number
`firstBucket` | Date
`lastBucket` | Date
`sufficientFor` | Array&lt;string&gt;
`insufficientFor` | Array&lt;string&gt;

## Example

```typescript
import type { IndicatorDataCoverage } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "candleCount": null,
  "firstBucket": null,
  "lastBucket": null,
  "sufficientFor": null,
  "insufficientFor": null,
} satisfies IndicatorDataCoverage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IndicatorDataCoverage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


