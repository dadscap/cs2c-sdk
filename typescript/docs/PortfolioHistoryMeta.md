
# PortfolioHistoryMeta

Metadata for saved-portfolio historical valuation.

## Properties

Name | Type
------------ | -------------
`portfolioId` | string
`currency` | string
`providersQueried` | Array&lt;string&gt;
`startDate` | Date
`endDate` | Date
`interval` | string
`holdingsBasis` | string
`valuationBasis` | string

## Example

```typescript
import type { PortfolioHistoryMeta } from '@cs2cap.com/sdk'

// TODO: Update the object below with actual values
const example = {
  "portfolioId": null,
  "currency": null,
  "providersQueried": null,
  "startDate": null,
  "endDate": null,
  "interval": null,
  "holdingsBasis": null,
  "valuationBasis": null,
} satisfies PortfolioHistoryMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PortfolioHistoryMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


