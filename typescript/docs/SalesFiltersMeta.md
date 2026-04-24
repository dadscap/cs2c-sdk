
# SalesFiltersMeta

Filter metadata for sales endpoint.

## Properties

Name | Type
------------ | -------------
`itemId` | number
`marketHashName` | string
`phase` | string
`requestedProviders` | Array&lt;string&gt;
`limit` | number

## Example

```typescript
import type { SalesFiltersMeta } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "itemId": null,
  "marketHashName": null,
  "phase": null,
  "requestedProviders": null,
  "limit": null,
} satisfies SalesFiltersMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SalesFiltersMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


