
# MarketIdsResponse

Response for `/v1/items/market-ids` containing provider-specific IDs for all items.

## Properties

Name | Type
------------ | -------------
`items` | { [key: string]: { [key: string]: any; }; }

## Example

```typescript
import type { MarketIdsResponse } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "items": null,
} satisfies MarketIdsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketIdsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


