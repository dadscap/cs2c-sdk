# MarketIndicatorsScreenerItem

Signal summary for one item in bulk screener mode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **int** | Normalized catalog item ID used by this API. | 
**market_hash_name** | **str** | Canonical Steam market hash name for the item. | 
**phase** | **str** |  | [optional] 
**provider** | **str** | Provider key used by this API. | 
**close_price_usd** | **str** | USD-denominated value for close price. | 
**signals** | [**IndicatorSignals**](IndicatorSignals.md) | Signals value. | 
**rsi_14** | **float** |  | [optional] 
**macd_histogram** | **float** |  | [optional] 
**atr_14** | **float** |  | [optional] 
**sma_20** | **float** |  | [optional] 
**last_updated** | **datetime** | ISO 8601 UTC timestamp when this record was last ingested or processed. | 

## Example

```python
from cs2cap_sdk.models.market_indicators_screener_item import MarketIndicatorsScreenerItem

# TODO update the JSON string below
json = "{}"
# create an instance of MarketIndicatorsScreenerItem from a JSON string
market_indicators_screener_item_instance = MarketIndicatorsScreenerItem.from_json(json)
# print the JSON string representation of the object
print(MarketIndicatorsScreenerItem.to_json())

# convert the object into a dict
market_indicators_screener_item_dict = market_indicators_screener_item_instance.to_dict()
# create an instance of MarketIndicatorsScreenerItem from a dict
market_indicators_screener_item_from_dict = MarketIndicatorsScreenerItem.from_dict(market_indicators_screener_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


