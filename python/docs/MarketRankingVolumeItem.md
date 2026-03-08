# MarketRankingVolumeItem

Volume ranking payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **int** | Normalized catalog item ID used by this API. | 
**market_hash_name** | **str** | Canonical Steam market hash name for the item. | 
**phase** | **str** |  | [optional] 
**provider** | **str** | Provider key used by this API. | 
**last_updated** | **datetime** | ISO 8601 UTC timestamp when this record was last ingested or processed. | 
**volume_24h** | **int** | Depletion activity volume over the last 24 hours. | 
**volume_7d** | **int** | Depletion activity volume over the last 7 days. | 
**volume_30d** | **int** | Depletion activity volume over the last 30 days. | 
**total_value_24h_usd** | **str** | USD-denominated value for total value 24h. | 
**current_price_usd** | **str** | USD-denominated value for current price. | 

## Example

```python
from cs2cap_sdk.models.market_ranking_volume_item import MarketRankingVolumeItem

# TODO update the JSON string below
json = "{}"
# create an instance of MarketRankingVolumeItem from a JSON string
market_ranking_volume_item_instance = MarketRankingVolumeItem.from_json(json)
# print the JSON string representation of the object
print(MarketRankingVolumeItem.to_json())

# convert the object into a dict
market_ranking_volume_item_dict = market_ranking_volume_item_instance.to_dict()
# create an instance of MarketRankingVolumeItem from a dict
market_ranking_volume_item_from_dict = MarketRankingVolumeItem.from_dict(market_ranking_volume_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


