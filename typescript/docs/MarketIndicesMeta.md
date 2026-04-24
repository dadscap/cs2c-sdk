
# MarketIndicesMeta

Metadata for /v1/market/indices.

## Properties

Name | Type
------------ | -------------
`generatedAt` | Date
`dataSource` | string
`freshnessSec` | number
`window` | [MarketTimeWindowMeta](MarketTimeWindowMeta.md)
`groupBy` | string

## Example

```typescript
import type { MarketIndicesMeta } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "generatedAt": null,
  "dataSource": null,
  "freshnessSec": null,
  "window": null,
  "groupBy": null,
} satisfies MarketIndicesMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketIndicesMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


