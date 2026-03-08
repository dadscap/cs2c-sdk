
# MarketRankingVolumeItem

Volume ranking payload.

## Properties

Name | Type
------------ | -------------
`itemId` | number
`marketHashName` | string
`phase` | string
`provider` | string
`lastUpdated` | Date
`volume24h` | number
`volume7d` | number
`volume30d` | number
`totalValue24hUsd` | string
`currentPriceUsd` | string

## Example

```typescript
import type { MarketRankingVolumeItem } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "itemId": null,
  "marketHashName": null,
  "phase": null,
  "provider": null,
  "lastUpdated": null,
  "volume24h": null,
  "volume7d": null,
  "volume30d": null,
  "totalValue24hUsd": null,
  "currentPriceUsd": null,
} satisfies MarketRankingVolumeItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketRankingVolumeItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


