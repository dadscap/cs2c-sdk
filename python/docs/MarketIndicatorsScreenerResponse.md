# MarketIndicatorsScreenerResponse

Response envelope for /v1/market/indicators (bulk screener mode).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**MarketIndicatorsMeta**](MarketIndicatorsMeta.md) | Response metadata for this payload. | 
**data** | [**List[MarketIndicatorsScreenerItem]**](MarketIndicatorsScreenerItem.md) | Primary data payload for this response. | 
**pagination** | [**PaginationMeta**](PaginationMeta.md) | Pagination metadata for this response. | 

## Example

```python
from cs2cap_sdk.models.market_indicators_screener_response import MarketIndicatorsScreenerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MarketIndicatorsScreenerResponse from a JSON string
market_indicators_screener_response_instance = MarketIndicatorsScreenerResponse.from_json(json)
# print the JSON string representation of the object
print(MarketIndicatorsScreenerResponse.to_json())

# convert the object into a dict
market_indicators_screener_response_dict = market_indicators_screener_response_instance.to_dict()
# create an instance of MarketIndicatorsScreenerResponse from a dict
market_indicators_screener_response_from_dict = MarketIndicatorsScreenerResponse.from_dict(market_indicators_screener_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


