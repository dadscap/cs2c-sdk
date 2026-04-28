
# TransactionOut

A single transaction entry within a portfolio.

## Properties

Name | Type
------------ | -------------
`id` | string
`itemId` | number
`marketHashName` | string
`phase` | string
`type` | string
`quantity` | number
`price` | number
`feeAmount` | number
`feePercentage` | number
`marketplace` | string
`date` | Date
`note` | string
`currency` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { TransactionOut } from 'cs2cap-ts'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "itemId": null,
  "marketHashName": null,
  "phase": null,
  "type": null,
  "quantity": null,
  "price": null,
  "feeAmount": null,
  "feePercentage": null,
  "marketplace": null,
  "date": null,
  "note": null,
  "currency": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies TransactionOut

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransactionOut
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


