
# MarketMoversData

Movers endpoint payload.

## Properties

Name | Type
------------ | -------------
`gainers` | [Array&lt;MarketMoverItem&gt;](MarketMoverItem.md)
`losers` | [Array&lt;MarketMoverItem&gt;](MarketMoverItem.md)

## Example

```typescript
import type { MarketMoversData } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "gainers": null,
  "losers": null,
} satisfies MarketMoversData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketMoversData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


