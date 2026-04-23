
# ChildAPIKeyDetailResponse

One child key plus current-month usage summary.

## Properties

Name | Type
------------ | -------------
`key` | [APIKeyInfo](APIKeyInfo.md)
`requestsThisMonth` | number

## Example

```typescript
import type { ChildAPIKeyDetailResponse } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "key": null,
  "requestsThisMonth": null,
} satisfies ChildAPIKeyDetailResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChildAPIKeyDetailResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


