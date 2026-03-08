
# MarketRankingData

Rankings endpoint payload.

## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;ItemsInner&gt;](ItemsInner.md)

## Example

```typescript
import type { MarketRankingData } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "items": null,
} satisfies MarketRankingData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketRankingData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


