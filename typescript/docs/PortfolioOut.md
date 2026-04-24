
# PortfolioOut

Summary of a saved portfolio.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`itemCount` | number
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { PortfolioOut } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "itemCount": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies PortfolioOut

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PortfolioOut
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


