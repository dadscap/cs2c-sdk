
# BatchPricesResponse

Response envelope for POST /v1/prices/batch.

## Properties

Name | Type
------------ | -------------
`meta` | [BatchPricesMeta](BatchPricesMeta.md)
`items` | [Array&lt;BatchPriceItem&gt;](BatchPriceItem.md)
`itemsNotFound` | Array&lt;number&gt;

## Example

```typescript
import type { BatchPricesResponse } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "items": null,
  "itemsNotFound": null,
} satisfies BatchPricesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchPricesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


