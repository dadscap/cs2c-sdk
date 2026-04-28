
# BatchBidsRequest

Request body for POST /v1/bids/batch.

## Properties

Name | Type
------------ | -------------
`itemIds` | Array&lt;number&gt;
`marketHashNames` | Array&lt;string&gt;
`providers` | Array&lt;string&gt;
`currency` | string

## Example

```typescript
import type { BatchBidsRequest } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "itemIds": null,
  "marketHashNames": null,
  "providers": null,
  "currency": null,
} satisfies BatchBidsRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BatchBidsRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


