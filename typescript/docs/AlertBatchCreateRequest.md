
# AlertBatchCreateRequest


## Properties

Name | Type
------------ | -------------
`alerts` | [Array&lt;AlertCreateRequest&gt;](AlertCreateRequest.md)

## Example

```typescript
import type { AlertBatchCreateRequest } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "alerts": null,
} satisfies AlertBatchCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AlertBatchCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


