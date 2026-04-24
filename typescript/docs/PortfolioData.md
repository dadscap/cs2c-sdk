
# PortfolioData

Primary data payload for portfolio valuation.

## Properties

Name | Type
------------ | -------------
`lineItems` | [Array&lt;PortfolioLineItem&gt;](PortfolioLineItem.md)
`totalValue` | number
`itemsValued` | number
`itemsNotFound` | Array&lt;number&gt;

## Example

```typescript
import type { PortfolioData } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "lineItems": null,
  "totalValue": null,
  "itemsValued": null,
  "itemsNotFound": null,
} satisfies PortfolioData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PortfolioData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


