# MarketMoversResponse

Response envelope for /v1/market/movers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**MarketMeta**](MarketMeta.md) | Response metadata for this payload. | 
**data** | [**MarketMoversData**](MarketMoversData.md) | Primary data payload for this response. | 

## Example

```python
from cs2cap_sdk.models.market_movers_response import MarketMoversResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MarketMoversResponse from a JSON string
market_movers_response_instance = MarketMoversResponse.from_json(json)
# print the JSON string representation of the object
print(MarketMoversResponse.to_json())

# convert the object into a dict
market_movers_response_dict = market_movers_response_instance.to_dict()
# create an instance of MarketMoversResponse from a dict
market_movers_response_from_dict = MarketMoversResponse.from_dict(market_movers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


