
# FXRatesResponse

FX rates response - returns USD to X conversion rates.

## Properties

Name | Type
------------ | -------------
`timestamp` | Date
`rates` | { [key: string]: number; }

## Example

```typescript
import type { FXRatesResponse } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "timestamp": null,
  "rates": null,
} satisfies FXRatesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FXRatesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


