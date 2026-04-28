
# PriceSnapshot

Single price snapshot at a point in time.

## Properties

Name | Type
------------ | -------------
`itemId` | number
`marketHashName` | string
`phase` | string
`provider` | string
`time` | Date
`price` | number
`currency` | string
`quantity` | number

## Example

```typescript
import type { PriceSnapshot } from 'cs2cap-ts'

// TODO: Update the object below with actual values
const example = {
  "itemId": null,
  "marketHashName": null,
  "phase": null,
  "provider": null,
  "time": null,
  "price": null,
  "currency": null,
  "quantity": null,
} satisfies PriceSnapshot

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PriceSnapshot
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


