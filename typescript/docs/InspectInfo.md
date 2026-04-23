
# InspectInfo

In-game inspect link and screenshot URLs.

## Properties

Name | Type
------------ | -------------
`inGame` | string
`screenshotFront` | string
`screenshotBack` | string

## Example

```typescript
import type { InspectInfo } from '@cs2cap.com/sdk'

// TODO: Update the object below with actual values
const example = {
  "inGame": null,
  "screenshotFront": null,
  "screenshotBack": null,
} satisfies InspectInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InspectInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


