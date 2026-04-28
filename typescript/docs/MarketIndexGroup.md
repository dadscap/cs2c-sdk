
# MarketIndexGroup

Single group row for /v1/market/indexes.

## Properties

Name | Type
------------ | -------------
`group` | string
`marketcapUsd` | string
`itemCount` | number
`includedCount` | number
`excludedCount` | number

## Example

```typescript
import type { MarketIndexGroup } from 'cs2cap-ts'

// TODO: Update the object below with actual values
const example = {
  "group": null,
  "marketcapUsd": null,
  "itemCount": null,
  "includedCount": null,
  "excludedCount": null,
} satisfies MarketIndexGroup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketIndexGroup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


