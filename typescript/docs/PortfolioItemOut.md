
# PortfolioItemOut

A single item entry within a portfolio.

## Properties

Name | Type
------------ | -------------
`id` | string
`itemId` | number
`marketHashName` | string
`phase` | string
`quantity` | number
`source` | string
`steamAssetid` | string
`floatValue` | number
`paintSeed` | number
`inspectLink` | string
`nameTag` | string
`stickers` | [Array&lt;StickerInfo&gt;](StickerInfo.md)
`charms` | [Array&lt;CharmInfo&gt;](CharmInfo.md)
`createdAt` | Date

## Example

```typescript
import type { PortfolioItemOut } from 'cs2cap-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "itemId": null,
  "marketHashName": null,
  "phase": null,
  "quantity": null,
  "source": null,
  "steamAssetid": null,
  "floatValue": null,
  "paintSeed": null,
  "inspectLink": null,
  "nameTag": null,
  "stickers": null,
  "charms": null,
  "createdAt": null,
} satisfies PortfolioItemOut

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PortfolioItemOut
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


