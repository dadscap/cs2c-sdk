# MarketIndicesResponse

Response envelope for /v1/market/indices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**MarketIndicesMeta**](MarketIndicesMeta.md) | Response metadata for this payload. | 
**data** | [**MarketIndicesData**](MarketIndicesData.md) | Primary data payload for this response. | 

## Example

```python
from cs2cap_sdk.models.market_indices_response import MarketIndicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MarketIndicesResponse from a JSON string
market_indices_response_instance = MarketIndicesResponse.from_json(json)
# print the JSON string representation of the object
print(MarketIndicesResponse.to_json())

# convert the object into a dict
market_indices_response_dict = market_indices_response_instance.to_dict()
# create an instance of MarketIndicesResponse from a dict
market_indices_response_from_dict = MarketIndicesResponse.from_dict(market_indices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


