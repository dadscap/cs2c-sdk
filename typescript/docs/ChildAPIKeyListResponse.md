
# ChildAPIKeyListResponse

Paginated child-key listing.

## Properties

Name | Type
------------ | -------------
`keys` | [Array&lt;ChildAPIKeyDetailResponse&gt;](ChildAPIKeyDetailResponse.md)
`pagination` | [PaginationMeta](PaginationMeta.md)

## Example

```typescript
import type { ChildAPIKeyListResponse } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "keys": null,
  "pagination": null,
} satisfies ChildAPIKeyListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChildAPIKeyListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


