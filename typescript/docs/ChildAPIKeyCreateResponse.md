
# ChildAPIKeyCreateResponse

Plaintext child-key creation response.

## Properties

Name | Type
------------ | -------------
`key` | string
`keyInfo` | [APIKeyInfo](APIKeyInfo.md)
`message` | string

## Example

```typescript
import type { ChildAPIKeyCreateResponse } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "key": null,
  "keyInfo": null,
  "message": null,
} satisfies ChildAPIKeyCreateResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChildAPIKeyCreateResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


