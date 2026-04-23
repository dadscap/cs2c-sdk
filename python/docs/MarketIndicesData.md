# MarketIndicesData

Payload for /v1/market/indices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_marketcap_usd** | **str** | Money amount as a decimal string in USD major units (for example \&quot;25.82\&quot;). | 
**groups** | [**List[MarketIndexGroup]**](MarketIndexGroup.md) | Category groups sorted by market cap descending. | 

## Example

```python
from cs2cap_sdk.models.market_indices_data import MarketIndicesData

# TODO update the JSON string below
json = "{}"
# create an instance of MarketIndicesData from a JSON string
market_indices_data_instance = MarketIndicesData.from_json(json)
# print the JSON string representation of the object
print(MarketIndicesData.to_json())

# convert the object into a dict
market_indices_data_dict = market_indices_data_instance.to_dict()
# create an instance of MarketIndicesData from a dict
market_indices_data_from_dict = MarketIndicesData.from_dict(market_indices_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


