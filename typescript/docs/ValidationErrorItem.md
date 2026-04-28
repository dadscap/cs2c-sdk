
# ValidationErrorItem

Single validation error entry returned by FastAPI/Pydantic.

## Properties

Name | Type
------------ | -------------
`type` | string
`loc` | [Array&lt;LocInner&gt;](LocInner.md)
`msg` | string
`input` | object
`ctx` | { [key: string]: any; }

## Example

```typescript
import type { ValidationErrorItem } from 'cs2cap-ts'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "loc": null,
  "msg": null,
  "input": null,
  "ctx": null,
} satisfies ValidationErrorItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ValidationErrorItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


