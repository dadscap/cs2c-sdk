# MarketIndicesMeta

Metadata for /v1/market/indices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generated_at** | **datetime** | ISO 8601 UTC timestamp when this response was generated. | 
**data_source** | **str** | Primary data source used to build this response. | 
**freshness_sec** | **int** | Estimated freshness of source data in seconds. | 
**window** | [**MarketTimeWindowMeta**](MarketTimeWindowMeta.md) |  | [optional] 
**group_by** | **str** | Catalog dimension used to group market items. | 

## Example

```python
from cs2cap.models.market_indices_meta import MarketIndicesMeta

# TODO update the JSON string below
json = "{}"
# create an instance of MarketIndicesMeta from a JSON string
market_indices_meta_instance = MarketIndicesMeta.from_json(json)
# print the JSON string representation of the object
print(MarketIndicesMeta.to_json())

# convert the object into a dict
market_indices_meta_dict = market_indices_meta_instance.to_dict()
# create an instance of MarketIndicesMeta from a dict
market_indices_meta_from_dict = MarketIndicesMeta.from_dict(market_indices_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


