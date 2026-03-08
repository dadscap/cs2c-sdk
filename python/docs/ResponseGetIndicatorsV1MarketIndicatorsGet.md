# ResponseGetIndicatorsV1MarketIndicatorsGet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**meta** | [**MarketIndicatorsMeta**](MarketIndicatorsMeta.md) | Response metadata for this payload. | 
**data** | [**List[MarketIndicatorsScreenerItem]**](MarketIndicatorsScreenerItem.md) | Primary data payload for this response. | 
**pagination** | [**PaginationMeta**](PaginationMeta.md) | Pagination metadata for this response. | 

## Example

```python
from cs2cap_sdk.models.response_get_indicators_v1_market_indicators_get import ResponseGetIndicatorsV1MarketIndicatorsGet

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseGetIndicatorsV1MarketIndicatorsGet from a JSON string
response_get_indicators_v1_market_indicators_get_instance = ResponseGetIndicatorsV1MarketIndicatorsGet.from_json(json)
# print the JSON string representation of the object
print(ResponseGetIndicatorsV1MarketIndicatorsGet.to_json())

# convert the object into a dict
response_get_indicators_v1_market_indicators_get_dict = response_get_indicators_v1_market_indicators_get_instance.to_dict()
# create an instance of ResponseGetIndicatorsV1MarketIndicatorsGet from a dict
response_get_indicators_v1_market_indicators_get_from_dict = ResponseGetIndicatorsV1MarketIndicatorsGet.from_dict(response_get_indicators_v1_market_indicators_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


