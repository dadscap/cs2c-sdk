
# PortfolioAddItemRequest

Request body for POST /v1/portfolio/{portfolio_id}/items.

## Properties

Name | Type
------------ | -------------
`itemId` | number
`marketHashName` | string
`phase` | string
`quantity` | number

## Example

```typescript
import type { PortfolioAddItemRequest } from 'cs2cap-ts'

// TODO: Update the object below with actual values
const example = {
  "itemId": null,
  "marketHashName": null,
  "phase": null,
  "quantity": null,
} satisfies PortfolioAddItemRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PortfolioAddItemRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


