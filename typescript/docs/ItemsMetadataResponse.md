
# ItemsMetadataResponse


## Properties

Name | Type
------------ | -------------
`catalog` | [ItemsCatalogSummary](ItemsCatalogSummary.md)
`filters` | [ItemsFilterMetadata](ItemsFilterMetadata.md)

## Example

```typescript
import type { ItemsMetadataResponse } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "catalog": null,
  "filters": null,
} satisfies ItemsMetadataResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ItemsMetadataResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


