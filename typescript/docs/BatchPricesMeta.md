
# BatchPricesMeta

Response metadata for batch prices.

## Properties

Name | Type
------------ | -------------
`currency` | string
`requestedItemCount` | number
`foundItemCount` | number
`providersQueried` | Array&lt;string&gt;
`generatedAt` | Date

## Example

```typescript
import type { BatchPricesMeta } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "currency": null,
  "requestedItemCount": null,
  "foundItemCount": null,
  "providersQueried": null,
  "generatedAt": null,
} satisfies BatchPricesMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchPricesMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


