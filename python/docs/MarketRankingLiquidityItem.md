# MarketRankingLiquidityItem

Liquidity ranking payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **int** | Normalized catalog item ID used by this API. | 
**market_hash_name** | **str** | Canonical Steam market hash name for the item. | 
**phase** | **str** |  | [optional] 
**provider** | **str** | Provider key used by this API. | 
**last_updated** | **datetime** | ISO 8601 UTC timestamp when this record was last ingested or processed. | 
**liquidity_score** | **float** | Liquidity score value. | 
**var_exec** | **float** | Exec value. | 
**turnover** | **float** | Turnover value. | 
**breadth** | **float** | Breadth value. | 
**spread_pct** | **float** |  | [optional] 
**dos** | **float** |  | [optional] 
**dos_proxy** | **float** |  | [optional] 
**used_proxy** | **bool** | Used proxy value. | 
**confidence** | **float** | Confidence value. | 
**bid_anomaly** | **bool** | Bid anomaly value. | 

## Example

```python
from cs2cap_sdk.models.market_ranking_liquidity_item import MarketRankingLiquidityItem

# TODO update the JSON string below
json = "{}"
# create an instance of MarketRankingLiquidityItem from a JSON string
market_ranking_liquidity_item_instance = MarketRankingLiquidityItem.from_json(json)
# print the JSON string representation of the object
print(MarketRankingLiquidityItem.to_json())

# convert the object into a dict
market_ranking_liquidity_item_dict = market_ranking_liquidity_item_instance.to_dict()
# create an instance of MarketRankingLiquidityItem from a dict
market_ranking_liquidity_item_from_dict = MarketRankingLiquidityItem.from_dict(market_ranking_liquidity_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


