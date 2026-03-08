
# MarketTimeWindowMeta

Effective time window used for the analytics query.

## Properties

Name | Type
------------ | -------------
`windowKind` | string
`timeframe` | string
`startAt` | Date
`endAt` | Date

## Example

```typescript
import type { MarketTimeWindowMeta } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "windowKind": null,
  "timeframe": null,
  "startAt": null,
  "endAt": null,
} satisfies MarketTimeWindowMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketTimeWindowMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


