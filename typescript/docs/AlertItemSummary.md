
# AlertItemSummary

Item metadata attached to an alert.

## Properties

Name | Type
------------ | -------------
`itemId` | number
`marketHashName` | string
`phase` | string

## Example

```typescript
import type { AlertItemSummary } from 'cs2cap-ts'

// TODO: Update the object below with actual values
const example = {
  "itemId": null,
  "marketHashName": null,
  "phase": null,
} satisfies AlertItemSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AlertItemSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


