
# PriceCandleItem

Single OHLCV candle data point (time-varying fields only).

## Properties

Name | Type
------------ | -------------
`t` | number
`o` | number
`h` | number
`l` | number
`c` | number
`v` | number
`q` | number
`providers` | [Providers](Providers.md)

## Example

```typescript
import type { PriceCandleItem } from 'cs2cap-ts'

// TODO: Update the object below with actual values
const example = {
  "t": null,
  "o": null,
  "h": null,
  "l": null,
  "c": null,
  "v": null,
  "q": null,
  "providers": null,
} satisfies PriceCandleItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PriceCandleItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


