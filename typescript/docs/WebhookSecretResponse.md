
# WebhookSecretResponse

Response carrying one-time plaintext secret material.

## Properties

Name | Type
------------ | -------------
`webhook` | [WebhookEndpointSummary](WebhookEndpointSummary.md)
`secret` | string

## Example

```typescript
import type { WebhookSecretResponse } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "webhook": null,
  "secret": null,
} satisfies WebhookSecretResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookSecretResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


