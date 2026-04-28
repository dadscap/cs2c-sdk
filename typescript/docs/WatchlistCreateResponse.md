
# WatchlistCreateResponse

Response body for POST /v1/account/watchlist.

## Properties

Name | Type
------------ | -------------
`id` | string
`itemId` | number
`marketHashName` | string
`phase` | string
`createdAt` | Date
`items` | [Array&lt;WatchlistItem&gt;](WatchlistItem.md)
`createdCount` | number

## Example

```typescript
import type { WatchlistCreateResponse } from 'cs2cap-ts'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "itemId": null,
  "marketHashName": null,
  "phase": null,
  "createdAt": null,
  "items": null,
  "createdCount": null,
} satisfies WatchlistCreateResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WatchlistCreateResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


