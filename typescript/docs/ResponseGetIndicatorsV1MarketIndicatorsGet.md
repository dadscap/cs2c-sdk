
# ResponseGetIndicatorsV1MarketIndicatorsGet


## Properties

Name | Type
------------ | -------------
`meta` | [MarketIndicatorsMeta](MarketIndicatorsMeta.md)
`data` | [Array&lt;MarketIndicatorsScreenerItem&gt;](MarketIndicatorsScreenerItem.md)
`pagination` | [PaginationMeta](PaginationMeta.md)

## Example

```typescript
import type { ResponseGetIndicatorsV1MarketIndicatorsGet } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "meta": null,
  "data": null,
  "pagination": null,
} satisfies ResponseGetIndicatorsV1MarketIndicatorsGet

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResponseGetIndicatorsV1MarketIndicatorsGet
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


