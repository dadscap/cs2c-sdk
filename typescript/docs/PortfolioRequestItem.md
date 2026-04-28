
# PortfolioRequestItem

Single item in a portfolio valuation request.

## Properties

Name | Type
------------ | -------------
`itemId` | number
`quantity` | number

## Example

```typescript
import type { PortfolioRequestItem } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "itemId": null,
  "quantity": null,
} satisfies PortfolioRequestItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PortfolioRequestItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


