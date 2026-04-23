
# MarketIndicesData

Payload for /v1/market/indices.

## Properties

Name | Type
------------ | -------------
`totalMarketcapUsd` | string
`groups` | [Array&lt;MarketIndexGroup&gt;](MarketIndexGroup.md)

## Example

```typescript
import type { MarketIndicesData } from '@cs2cap.com/sdk'

// TODO: Update the object below with actual values
const example = {
  "totalMarketcapUsd": null,
  "groups": null,
} satisfies MarketIndicesData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketIndicesData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


