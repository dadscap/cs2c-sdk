
# PriceCandlesPage

Paginated candle response with cursor-based pagination.

## Properties

Name | Type
------------ | -------------
`meta` | [PriceCandlesMeta](PriceCandlesMeta.md)
`data` | [Array&lt;PriceCandleItem&gt;](PriceCandleItem.md)
`pagination` | [PaginationMeta](PaginationMeta.md)

## Example

```typescript
import type { PriceCandlesPage } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
  "pagination": null,
} satisfies PriceCandlesPage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PriceCandlesPage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


