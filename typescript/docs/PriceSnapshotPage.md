
# PriceSnapshotPage

Paginated price snapshots for raw mode.

## Properties

Name | Type
------------ | -------------
`meta` | [PriceHistoryMeta](PriceHistoryMeta.md)
`items` | [Array&lt;PriceSnapshot&gt;](PriceSnapshot.md)
`pagination` | [CursorPaginationMeta](CursorPaginationMeta.md)

## Example

```typescript
import type { PriceSnapshotPage } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "items": null,
  "pagination": null,
} satisfies PriceSnapshotPage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PriceSnapshotPage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


