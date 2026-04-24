
# WatchlistItem

One saved watchlist entry.

## Properties

Name | Type
------------ | -------------
`id` | string
`itemId` | number
`marketHashName` | string
`phase` | string
`createdAt` | Date

## Example

```typescript
import type { WatchlistItem } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "itemId": null,
  "marketHashName": null,
  "phase": null,
  "createdAt": null,
} satisfies WatchlistItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WatchlistItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


