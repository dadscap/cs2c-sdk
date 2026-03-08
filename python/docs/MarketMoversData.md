# MarketMoversData

Movers endpoint payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gainers** | [**List[MarketMoverItem]**](MarketMoverItem.md) | Items with positive movement for the selected window. | 
**losers** | [**List[MarketMoverItem]**](MarketMoverItem.md) | Items with negative movement for the selected window. | 

## Example

```python
from cs2cap_sdk.models.market_movers_data import MarketMoversData

# TODO update the JSON string below
json = "{}"
# create an instance of MarketMoversData from a JSON string
market_movers_data_instance = MarketMoversData.from_json(json)
# print the JSON string representation of the object
print(MarketMoversData.to_json())

# convert the object into a dict
market_movers_data_dict = market_movers_data_instance.to_dict()
# create an instance of MarketMoversData from a dict
market_movers_data_from_dict = MarketMoversData.from_dict(market_movers_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


