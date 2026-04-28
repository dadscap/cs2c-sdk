
# SteamInventoryItem

A single item from a Steam CS2 inventory.

## Properties

Name | Type
------------ | -------------
`assetid` | string
`marketHashName` | string
`phase` | string
`name` | string
`iconUrl` | string
`tradable` | boolean
`marketable` | boolean
`quantity` | number
`floatValue` | number
`paintSeed` | number
`inspectLink` | string
`nameTag` | string
`stickers` | [Array&lt;StickerInfo&gt;](StickerInfo.md)
`charms` | [Array&lt;CharmInfo&gt;](CharmInfo.md)

## Example

```typescript
import type { SteamInventoryItem } from 'cs2cap-ts'

// TODO: Update the object below with actual values
const example = {
  "assetid": null,
  "marketHashName": null,
  "phase": null,
  "name": null,
  "iconUrl": null,
  "tradable": null,
  "marketable": null,
  "quantity": null,
  "floatValue": null,
  "paintSeed": null,
  "inspectLink": null,
  "nameTag": null,
  "stickers": null,
  "charms": null,
} satisfies SteamInventoryItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SteamInventoryItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


