
# MarketMoverItem

Mover payload in canonical USD units.

## Properties

Name | Type
------------ | -------------
`itemId` | number
`marketHashName` | string
`phase` | string
`provider` | string
`currentPriceUsd` | string
`previousPriceUsd` | string
`priceChangeUsd` | string
`priceChangePct` | number
`volume` | number
`lastUpdated` | Date

## Example

```typescript
import type { MarketMoverItem } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "itemId": null,
  "marketHashName": null,
  "phase": null,
  "provider": null,
  "currentPriceUsd": null,
  "previousPriceUsd": null,
  "priceChangeUsd": null,
  "priceChangePct": null,
  "volume": null,
  "lastUpdated": null,
} satisfies MarketMoverItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketMoverItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


