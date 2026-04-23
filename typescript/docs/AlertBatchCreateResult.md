
# AlertBatchCreateResult


## Properties

Name | Type
------------ | -------------
`index` | number
`status` | string
`alertId` | string
`code` | string
`message` | string

## Example

```typescript
import type { AlertBatchCreateResult } from '@cs2cap.com/sdk'

// TODO: Update the object below with actual values
const example = {
  "index": null,
  "status": null,
  "alertId": null,
  "code": null,
  "message": null,
} satisfies AlertBatchCreateResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AlertBatchCreateResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


