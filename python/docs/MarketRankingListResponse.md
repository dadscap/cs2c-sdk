# MarketRankingListResponse

Response envelope for /v1/market/rankings/{metric}.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**MarketRankingMeta**](MarketRankingMeta.md) | Response metadata for this payload. | 
**data** | [**MarketRankingData**](MarketRankingData.md) | Primary data payload for this response. | 
**pagination** | [**PaginationMeta**](PaginationMeta.md) | Cursor pagination metadata. | 

## Example

```python
from cs2cap_sdk.models.market_ranking_list_response import MarketRankingListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MarketRankingListResponse from a JSON string
market_ranking_list_response_instance = MarketRankingListResponse.from_json(json)
# print the JSON string representation of the object
print(MarketRankingListResponse.to_json())

# convert the object into a dict
market_ranking_list_response_dict = market_ranking_list_response_instance.to_dict()
# create an instance of MarketRankingListResponse from a dict
market_ranking_list_response_from_dict = MarketRankingListResponse.from_dict(market_ranking_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


