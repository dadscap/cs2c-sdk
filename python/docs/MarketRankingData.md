# MarketRankingData

Rankings endpoint payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ItemsInner]**](ItemsInner.md) | List of returned items. | 

## Example

```python
from cs2cap_sdk.models.market_ranking_data import MarketRankingData

# TODO update the JSON string below
json = "{}"
# create an instance of MarketRankingData from a JSON string
market_ranking_data_instance = MarketRankingData.from_json(json)
# print the JSON string representation of the object
print(MarketRankingData.to_json())

# convert the object into a dict
market_ranking_data_dict = market_ranking_data_instance.to_dict()
# create an instance of MarketRankingData from a dict
market_ranking_data_from_dict = MarketRankingData.from_dict(market_ranking_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


