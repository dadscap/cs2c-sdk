
# PriceHistoryMeta

Metadata for price history response.

## Properties

Name | Type
------------ | -------------
`currency` | string
`filters` | [PriceHistoryFiltersMeta](PriceHistoryFiltersMeta.md)
`resultCount` | number

## Example

```typescript
import type { PriceHistoryMeta } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "currency": null,
  "filters": null,
  "resultCount": null,
} satisfies PriceHistoryMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PriceHistoryMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


