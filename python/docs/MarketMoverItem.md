# MarketMoverItem

Mover payload in canonical USD units.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **int** | Normalized catalog item ID used by this API. | 
**market_hash_name** | **str** | Canonical Steam market hash name for the item. | 
**phase** | **str** |  | [optional] 
**provider** | **str** | Provider key used by this API. | 
**current_price_usd** | **str** | USD-denominated value for current price. | 
**previous_price_usd** | **str** | USD-denominated value for previous price. | 
**price_change_usd** | **str** | USD-denominated value for price change. | 
**price_change_pct** | **float** | Percentage value for price change. | 
**volume** | **int** | Depletion activity volume over the selected window. | 
**last_updated** | **datetime** | ISO 8601 UTC timestamp when this record was last ingested or processed. | 

## Example

```python
from cs2cap_sdk.models.market_mover_item import MarketMoverItem

# TODO update the JSON string below
json = "{}"
# create an instance of MarketMoverItem from a JSON string
market_mover_item_instance = MarketMoverItem.from_json(json)
# print the JSON string representation of the object
print(MarketMoverItem.to_json())

# convert the object into a dict
market_mover_item_dict = market_mover_item_instance.to_dict()
# create an instance of MarketMoverItem from a dict
market_mover_item_from_dict = MarketMoverItem.from_dict(market_mover_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


