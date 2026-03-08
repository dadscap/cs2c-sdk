# MarketIdsResponse

Response for `/v1/items/market-ids` containing provider-specific IDs for all items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | **Dict[str, Dict[str, object]]** | Mapping of market_hash_name to provider-specific IDs. Each value is a dict of provider ID keys (e.g. &#x60;buff163_goods_id&#x60;, &#x60;csfloat_id&#x60;, &#x60;steam_nameid&#x60;) to their corresponding ID values. | 

## Example

```python
from cs2cap_sdk.models.market_ids_response import MarketIdsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MarketIdsResponse from a JSON string
market_ids_response_instance = MarketIdsResponse.from_json(json)
# print the JSON string representation of the object
print(MarketIdsResponse.to_json())

# convert the object into a dict
market_ids_response_dict = market_ids_response_instance.to_dict()
# create an instance of MarketIdsResponse from a dict
market_ids_response_from_dict = MarketIdsResponse.from_dict(market_ids_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


