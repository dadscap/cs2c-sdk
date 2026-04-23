
# PortfolioHistoryPage

Response envelope for GET /v1/portfolio/{portfolio_id}/history.

## Properties

Name | Type
------------ | -------------
`meta` | [PortfolioHistoryMeta](PortfolioHistoryMeta.md)
`data` | [Array&lt;PortfolioHistoryPoint&gt;](PortfolioHistoryPoint.md)
`pagination` | [CursorPaginationMeta](CursorPaginationMeta.md)

## Example

```typescript
import type { PortfolioHistoryPage } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
  "pagination": null,
} satisfies PortfolioHistoryPage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PortfolioHistoryPage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


