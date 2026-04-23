
# WebhookEndpointsResponse

List of configured outbound webhook destinations.

## Properties

Name | Type
------------ | -------------
`webhooks` | [Array&lt;WebhookEndpointSummary&gt;](WebhookEndpointSummary.md)

## Example

```typescript
import type { WebhookEndpointsResponse } from '@cs2cap.com/sdk'

// TODO: Update the object below with actual values
const example = {
  "webhooks": null,
} satisfies WebhookEndpointsResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookEndpointsResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


