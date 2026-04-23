
# MarketItemAnalyticsProvider

Provider-level item analytics payload.

## Properties

Name | Type
------------ | -------------
`provider` | string
`askUsd` | string
`bidUsd` | string
`spreadUsd` | string
`spreadPct` | number
`askDepth` | number
`bidDepth` | number
`volume24h` | number
`volume7d` | number
`totalValue24hUsd` | string
`priceRate24h` | number
`priceDiff24h` | string
`priceRate7d` | number
`priceDiff7d` | string
`priceRate30d` | number
`priceDiff30d` | string
`bidAnomaly` | boolean

## Example

```typescript
import type { MarketItemAnalyticsProvider } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "provider": null,
  "askUsd": null,
  "bidUsd": null,
  "spreadUsd": null,
  "spreadPct": null,
  "askDepth": null,
  "bidDepth": null,
  "volume24h": null,
  "volume7d": null,
  "totalValue24hUsd": null,
  "priceRate24h": null,
  "priceDiff24h": null,
  "priceRate7d": null,
  "priceDiff7d": null,
  "priceRate30d": null,
  "priceDiff30d": null,
  "bidAnomaly": null,
} satisfies MarketItemAnalyticsProvider

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketItemAnalyticsProvider
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


