
# ChildAPIKeyCreateRequest

Create one child API key.

## Properties

Name | Type
------------ | -------------
`name` | string
`quotaRequestsPerMonthOverride` | number
`rateRequestsPerMinuteOverride` | number

## Example

```typescript
import type { ChildAPIKeyCreateRequest } from '@cs2cap.com/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "quotaRequestsPerMonthOverride": null,
  "rateRequestsPerMinuteOverride": null,
} satisfies ChildAPIKeyCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChildAPIKeyCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


