
# SaleRecordDetail

Sale record matching CSFloat API response format.

## Properties

Name | Type
------------ | -------------
`date` | Date
`provider` | string
`price` | number
`currency` | string
`itemId` | number
`marketHashName` | string
`phase` | string
`_float` | number
`paintSeed` | number
`stickers` | [Array&lt;StickerInfo&gt;](StickerInfo.md)
`charms` | [Array&lt;CharmInfo&gt;](CharmInfo.md)
`inspect` | [InspectInfo](InspectInfo.md)

## Example

```typescript
import type { SaleRecordDetail } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "date": null,
  "provider": null,
  "price": null,
  "currency": null,
  "itemId": null,
  "marketHashName": null,
  "phase": null,
  "_float": null,
  "paintSeed": null,
  "stickers": null,
  "charms": null,
  "inspect": null,
} satisfies SaleRecordDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SaleRecordDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


