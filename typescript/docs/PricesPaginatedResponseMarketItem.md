
# PricesPaginatedResponseMarketItem


## Properties

Name | Type
------------ | -------------
`meta` | [PricesMeta](PricesMeta.md)
`items` | [Array&lt;MarketItem&gt;](MarketItem.md)
`pagination` | [PaginationMeta](PaginationMeta.md)

## Example

```typescript
import type { PricesPaginatedResponseMarketItem } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "items": null,
  "pagination": null,
} satisfies PricesPaginatedResponseMarketItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PricesPaginatedResponseMarketItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


