# MarketRankingVolatilityItem

Volatility ranking payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **int** | Normalized catalog item ID used by this API. | 
**market_hash_name** | **str** | Canonical Steam market hash name for the item. | 
**phase** | **str** |  | [optional] 
**provider** | **str** | Provider key used by this API. | 
**last_updated** | **datetime** | ISO 8601 UTC timestamp when this record was last ingested or processed. | 
**volatility_score** | **float** | Volatility score value. | 
**current_price_usd** | **str** | USD-denominated value for current price. | 
**min_price_usd** | **str** | USD-denominated value for min price. | 
**max_price_usd** | **str** | USD-denominated value for max price. | 
**std_dev_usd** | **str** | USD-denominated value for std dev. | 
**sample_count** | **int** | Sample count value. | 

## Example

```python
from cs2cap_sdk.models.market_ranking_volatility_item import MarketRankingVolatilityItem

# TODO update the JSON string below
json = "{}"
# create an instance of MarketRankingVolatilityItem from a JSON string
market_ranking_volatility_item_instance = MarketRankingVolatilityItem.from_json(json)
# print the JSON string representation of the object
print(MarketRankingVolatilityItem.to_json())

# convert the object into a dict
market_ranking_volatility_item_dict = market_ranking_volatility_item_instance.to_dict()
# create an instance of MarketRankingVolatilityItem from a dict
market_ranking_volatility_item_from_dict = MarketRankingVolatilityItem.from_dict(market_ranking_volatility_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


