
# MarketItemAnalyticsCoverage

Coverage diagnostics for single-item analytics.

## Properties

Name | Type
------------ | -------------
`providerCount` | number
`providersWithVolume` | number
`providersWithBidSide` | number

## Example

```typescript
import type { MarketItemAnalyticsCoverage } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "providerCount": null,
  "providersWithVolume": null,
  "providersWithBidSide": null,
} satisfies MarketItemAnalyticsCoverage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketItemAnalyticsCoverage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


