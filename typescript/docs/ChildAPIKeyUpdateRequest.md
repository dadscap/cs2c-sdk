
# ChildAPIKeyUpdateRequest

Update mutable child-key fields.

## Properties

Name | Type
------------ | -------------
`name` | string
`quotaRequestsPerMonthOverride` | number
`rateRequestsPerMinuteOverride` | number

## Example

```typescript
import type { ChildAPIKeyUpdateRequest } from 'cs2cap-ts'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "quotaRequestsPerMonthOverride": null,
  "rateRequestsPerMinuteOverride": null,
} satisfies ChildAPIKeyUpdateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChildAPIKeyUpdateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


