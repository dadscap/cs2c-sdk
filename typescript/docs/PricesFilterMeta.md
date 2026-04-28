
# PricesFilterMeta

Filter metadata for prices endpoint.

## Properties

Name | Type
------------ | -------------
`marketHashName` | string
`phase` | string
`requestedProviders` | Array&lt;string&gt;

## Example

```typescript
import type { PricesFilterMeta } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "marketHashName": null,
  "phase": null,
  "requestedProviders": null,
} satisfies PricesFilterMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PricesFilterMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


