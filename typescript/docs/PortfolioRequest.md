
# PortfolioRequest

Request body for POST /v1/portfolio/value.

## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;PortfolioRequestItem&gt;](PortfolioRequestItem.md)
`currency` | string
`providers` | Array&lt;string&gt;

## Example

```typescript
import type { PortfolioRequest } from '@cs2cap.com/sdk'

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "currency": null,
  "providers": null,
} satisfies PortfolioRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PortfolioRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


