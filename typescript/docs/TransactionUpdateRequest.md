
# TransactionUpdateRequest

Request body for partially updating a transaction.

## Properties

Name | Type
------------ | -------------
`type` | string
`quantity` | number
`price` | number
`date` | Date
`feeAmount` | number
`feePercentage` | number
`marketplace` | string
`note` | string
`currency` | string

## Example

```typescript
import type { TransactionUpdateRequest } from 'cs2cap-ts'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "quantity": null,
  "price": null,
  "date": null,
  "feeAmount": null,
  "feePercentage": null,
  "marketplace": null,
  "note": null,
  "currency": null,
} satisfies TransactionUpdateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionUpdateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


