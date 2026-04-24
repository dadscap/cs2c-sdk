
# ProviderInfo


## Properties

Name | Type
------------ | -------------
`key` | string
`logo` | string
`code` | string
`marketType` | string
`defaultCurrency` | string
`fees` | [ProviderFees](ProviderFees.md)
`features` | [ProviderFeatures](ProviderFeatures.md)
`health` | [ProviderHealth](ProviderHealth.md)

## Example

```typescript
import type { ProviderInfo } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "key": null,
  "logo": null,
  "code": null,
  "marketType": null,
  "defaultCurrency": null,
  "fees": null,
  "features": null,
  "health": null,
} satisfies ProviderInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProviderInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


