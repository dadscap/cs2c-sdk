
# ItemsInner


## Properties

Name | Type
------------ | -------------
`itemId` | number
`marketHashName` | string
`phase` | string
`provider` | string
`lastUpdated` | Date
`volatilityScore` | number
`currentPriceUsd` | string
`minPriceUsd` | string
`maxPriceUsd` | string
`stdDevUsd` | string
`sampleCount` | number
`volume24h` | number
`volume7d` | number
`volume30d` | number
`totalValue24hUsd` | string
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
import type { ItemsInner } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "itemId": null,
  "marketHashName": null,
  "phase": null,
  "provider": null,
  "lastUpdated": null,
  "volatilityScore": null,
  "currentPriceUsd": null,
  "minPriceUsd": null,
  "maxPriceUsd": null,
  "stdDevUsd": null,
  "sampleCount": null,
  "volume24h": null,
  "volume7d": null,
  "volume30d": null,
  "totalValue24hUsd": null,
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
} satisfies ItemsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ItemsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


