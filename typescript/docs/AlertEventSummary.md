
# AlertEventSummary

Recent alert trigger event.

## Properties

Name | Type
------------ | -------------
`id` | string
`alertId` | string
`kind` | string
`item` | [AlertItemSummary](AlertItemSummary.md)
`triggeredValue` | string
`triggeredCurrency` | string
`reason` | string
`createdAt` | Date
`deliveries` | [Array&lt;AlertDeliverySummary&gt;](AlertDeliverySummary.md)

## Example

```typescript
import type { AlertEventSummary } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "alertId": null,
  "kind": null,
  "item": null,
  "triggeredValue": null,
  "triggeredCurrency": null,
  "reason": null,
  "createdAt": null,
  "deliveries": null,
} satisfies AlertEventSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AlertEventSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


