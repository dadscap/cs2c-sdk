
# ItemsPaginatedResponseItemOut


## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;ItemOut&gt;](ItemOut.md)
`pagination` | [ItemsPaginationMeta](ItemsPaginationMeta.md)

## Example

```typescript
import type { ItemsPaginatedResponseItemOut } from 'cs2cap-ts'

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "pagination": null,
} satisfies ItemsPaginatedResponseItemOut

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ItemsPaginatedResponseItemOut
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


