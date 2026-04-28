
# PortfolioHistoryPoint

One daily historical portfolio valuation point.

## Properties

Name | Type
------------ | -------------
`date` | Date
`totalValue` | number
`positions` | number
`itemsValued` | number
`itemsMissingPrice` | number

## Example

```typescript
import type { PortfolioHistoryPoint } from 'cs2cap-ts'

// TODO: Update the object below with actual values
const example = {
  "date": null,
  "totalValue": null,
  "positions": null,
  "itemsValued": null,
  "itemsMissingPrice": null,
} satisfies PortfolioHistoryPoint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PortfolioHistoryPoint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


