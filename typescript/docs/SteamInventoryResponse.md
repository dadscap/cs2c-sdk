
# SteamInventoryResponse

Response envelope for GET /v1/portfolio/steam-inventory.

## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;SteamInventoryItem&gt;](SteamInventoryItem.md)
`totalCount` | number

## Example

```typescript
import type { SteamInventoryResponse } from '@cs2cap.com/sdk'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "totalCount": null,
} satisfies SteamInventoryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SteamInventoryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


