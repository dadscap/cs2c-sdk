
# ItemsFilterMetadata


## Properties

Name | Type
------------ | -------------
`itemType` | Array&lt;string&gt;
`itemSubtype` | Array&lt;string&gt;
`weaponType` | Array&lt;string&gt;
`wearName` | Array&lt;string&gt;
`phase` | Array&lt;string&gt;
`collection` | Array&lt;string&gt;
`rarityName` | Array&lt;string&gt;
`rarityColor` | Array&lt;string&gt;
`styleName` | Array&lt;string&gt;

## Example

```typescript
import type { ItemsFilterMetadata } from 'cs2cap'

// TODO: Update the object below with actual values
const example = {
  "itemType": null,
  "itemSubtype": null,
  "weaponType": null,
  "wearName": null,
  "phase": null,
  "collection": null,
  "rarityName": null,
  "rarityColor": null,
  "styleName": null,
} satisfies ItemsFilterMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ItemsFilterMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


