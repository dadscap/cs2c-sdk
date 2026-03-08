
# MarketRankingLiquidityItem

Liquidity ranking payload.

## Properties

Name | Type
------------ | -------------
`itemId` | number
`marketHashName` | string
`phase` | string
`provider` | string
`lastUpdated` | Date
`liquidityScore` | number
`exec` | number
`turnover` | number
`breadth` | number
`spreadPct` | number
`dos` | number
`dosProxy` | number
`usedProxy` | boolean
`confidence` | number
`bidAnomaly` | boolean

## Example

```typescript
import type { MarketRankingLiquidityItem } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "itemId": null,
  "marketHashName": null,
  "phase": null,
  "provider": null,
  "lastUpdated": null,
  "liquidityScore": null,
  "exec": null,
  "turnover": null,
  "breadth": null,
  "spreadPct": null,
  "dos": null,
  "dosProxy": null,
  "usedProxy": null,
  "confidence": null,
  "bidAnomaly": null,
} satisfies MarketRankingLiquidityItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketRankingLiquidityItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


