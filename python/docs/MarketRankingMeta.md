# MarketRankingMeta

Metadata for rankings endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generated_at** | **datetime** | ISO 8601 UTC timestamp when this response was generated. | 
**data_source** | **str** | Primary data source used to build this response. | 
**freshness_sec** | **int** | Estimated freshness of source data in seconds. | 
**window** | [**MarketTimeWindowMeta**](MarketTimeWindowMeta.md) |  | [optional] 
**metric** | **str** | Metric value. | 

## Example

```python
from cs2cap_sdk.models.market_ranking_meta import MarketRankingMeta

# TODO update the JSON string below
json = "{}"
# create an instance of MarketRankingMeta from a JSON string
market_ranking_meta_instance = MarketRankingMeta.from_json(json)
# print the JSON string representation of the object
print(MarketRankingMeta.to_json())

# convert the object into a dict
market_ranking_meta_dict = market_ranking_meta_instance.to_dict()
# create an instance of MarketRankingMeta from a dict
market_ranking_meta_from_dict = MarketRankingMeta.from_dict(market_ranking_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


