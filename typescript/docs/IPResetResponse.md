
# IPResetResponse


## Properties

Name | Type
------------ | -------------
`ok` | boolean
`keyId` | string
`cooldownSec` | number

## Example

```typescript
import type { IPResetResponse } from '@cs2cap.com/sdk'

// TODO: Update the object below with actual values
const example = {
  "ok": null,
  "keyId": null,
  "cooldownSec": null,
} satisfies IPResetResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IPResetResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


