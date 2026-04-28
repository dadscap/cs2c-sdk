
# ItemsPaginationMeta

Pagination metadata for `/v1/items` full-catalog responses.

## Properties

Name | Type
------------ | -------------
`limit` | number
`offset` | number
`total` | number
`hasNext` | boolean
`hasPrev` | boolean
`nextCursor` | string

## Example

```typescript
import type { ItemsPaginationMeta } from 'cs2cap-ts'

// TODO: Update the object below with actual values
const example = {
  "limit": null,
  "offset": null,
  "total": null,
  "hasNext": null,
  "hasPrev": null,
  "nextCursor": null,
} satisfies ItemsPaginationMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ItemsPaginationMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


