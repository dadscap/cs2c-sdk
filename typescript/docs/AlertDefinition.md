
# AlertDefinition

Configured alert rule.

## Properties

Name | Type
------------ | -------------
`id` | string
`kind` | string
`thresholdValue` | string
`thresholdCurrency` | string
`isEnabled` | boolean
`lastTriggeredAt` | Date
`createdAt` | Date
`updatedAt` | Date
`item` | [AlertItemSummary](AlertItemSummary.md)

## Example

```typescript
import type { AlertDefinition } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "kind": null,
  "thresholdValue": null,
  "thresholdCurrency": null,
  "isEnabled": null,
  "lastTriggeredAt": null,
  "createdAt": null,
  "updatedAt": null,
  "item": null,
} satisfies AlertDefinition

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AlertDefinition
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


