
# BatchPricesRequest

Request body for POST /v1/prices/batch.

## Properties

Name | Type
------------ | -------------
`itemIds` | Array&lt;number&gt;
`providers` | Array&lt;string&gt;
`currency` | string

## Example

```typescript
import type { BatchPricesRequest } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "itemIds": null,
  "providers": null,
  "currency": null,
} satisfies BatchPricesRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchPricesRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


