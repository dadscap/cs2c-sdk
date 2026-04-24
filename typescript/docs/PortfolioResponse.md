
# PortfolioResponse

Response envelope for POST /v1/portfolio/value.

## Properties

Name | Type
------------ | -------------
`meta` | [PortfolioMeta](PortfolioMeta.md)
`data` | [PortfolioData](PortfolioData.md)

## Example

```typescript
import type { PortfolioResponse } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
} satisfies PortfolioResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PortfolioResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


