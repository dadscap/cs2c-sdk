
# ProviderHealth


## Properties

Name | Type
------------ | -------------
`status` | string
`lastCheckedAt` | Date
`totalOffers` | number
`uniqueItems` | number
`marketCoverage` | number
`totalValue` | number
`totalValueUsd` | number

## Example

```typescript
import type { ProviderHealth } from '@cs2cap.com/sdk'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "lastCheckedAt": null,
  "totalOffers": null,
  "uniqueItems": null,
  "marketCoverage": null,
  "totalValue": null,
  "totalValueUsd": null,
} satisfies ProviderHealth

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProviderHealth
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


