
# MarketItemAnalyticsData

Payload for /v1/market/items/{item_id}.

## Properties

Name | Type
------------ | -------------
`itemId` | number
`marketHashName` | string
`phase` | string
`summary` | [MarketItemAnalyticsSummary](MarketItemAnalyticsSummary.md)
`providers` | [Array&lt;MarketItemAnalyticsProvider&gt;](MarketItemAnalyticsProvider.md)
`coverage` | [MarketItemAnalyticsCoverage](MarketItemAnalyticsCoverage.md)

## Example

```typescript
import type { MarketItemAnalyticsData } from 'cs2cap-ts'

// TODO: Update the object below with actual values
const example = {
  "itemId": null,
  "marketHashName": null,
  "phase": null,
  "summary": null,
  "providers": null,
  "coverage": null,
} satisfies MarketItemAnalyticsData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MarketItemAnalyticsData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


