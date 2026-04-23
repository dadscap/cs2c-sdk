
# AlertBatchCreateResponse


## Properties

Name | Type
------------ | -------------
`created` | number
`failed` | number
`results` | [Array&lt;AlertBatchCreateResult&gt;](AlertBatchCreateResult.md)

## Example

```typescript
import type { AlertBatchCreateResponse } from '@cs2cap.com/sdk'

// TODO: Update the object below with actual values
const example = {
  "created": null,
  "failed": null,
  "results": null,
} satisfies AlertBatchCreateResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AlertBatchCreateResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


