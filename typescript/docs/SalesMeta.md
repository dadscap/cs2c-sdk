
# SalesMeta

Metadata for sales response.

## Properties

Name | Type
------------ | -------------
`currency` | string
`filters` | [SalesFiltersMeta](SalesFiltersMeta.md)
`providersQueried` | Array&lt;string&gt;
`resultCount` | number

## Example

```typescript
import type { SalesMeta } from '@cs2cap.com/sdk'

// TODO: Update the object below with actual values
const example = {
  "currency": null,
  "filters": null,
  "providersQueried": null,
  "resultCount": null,
} satisfies SalesMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SalesMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


