
# APIKeyInfo

Active API key information (without full key material).

## Properties

Name | Type
------------ | -------------
`id` | string
`keyPrefix` | string
`name` | string
`rootKeyId` | string
`isRootKey` | boolean
`isActive` | boolean
`createdAt` | Date
`lastUsedAt` | Date
`expiresAt` | Date
`boundIp` | string
`boundIpSetAt` | Date
`quotaRequestsPerMonthOverride` | number
`rateRequestsPerMinuteOverride` | number
`effectiveQuotaRequestsPerMonth` | number
`effectiveRateRequestsPerMinute` | number

## Example

```typescript
import type { APIKeyInfo } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "keyPrefix": null,
  "name": null,
  "rootKeyId": null,
  "isRootKey": null,
  "isActive": null,
  "createdAt": null,
  "lastUsedAt": null,
  "expiresAt": null,
  "boundIp": null,
  "boundIpSetAt": null,
  "quotaRequestsPerMonthOverride": null,
  "rateRequestsPerMinuteOverride": null,
  "effectiveQuotaRequestsPerMonth": null,
  "effectiveRateRequestsPerMinute": null,
} satisfies APIKeyInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as APIKeyInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


