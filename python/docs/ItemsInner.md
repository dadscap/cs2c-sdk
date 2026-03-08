# ItemsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **int** | Normalized catalog item ID used by this API. | 
**market_hash_name** | **str** | Canonical Steam market hash name for the item. | 
**phase** | **str** |  | [optional] 
**provider** | **str** | Provider key used by this API. | 
**last_updated** | **datetime** | ISO 8601 UTC timestamp when this record was last ingested or processed. | 
**volatility_score** | **float** | Volatility score value. | 
**current_price_usd** | **str** | USD-denominated value for current price. | 
**min_price_usd** | **str** | USD-denominated value for min price. | 
**max_price_usd** | **str** | USD-denominated value for max price. | 
**std_dev_usd** | **str** | USD-denominated value for std dev. | 
**sample_count** | **int** | Sample count value. | 
**volume_24h** | **int** | Depletion activity volume over the last 24 hours. | 
**volume_7d** | **int** | Depletion activity volume over the last 7 days. | 
**volume_30d** | **int** | Depletion activity volume over the last 30 days. | 
**total_value_24h_usd** | **str** | USD-denominated value for total value 24h. | 
**liquidity_score** | **float** | Liquidity score value. | 
**var_exec** | **float** | Exec value. | 
**turnover** | **float** | Turnover value. | 
**breadth** | **float** | Breadth value. | 
**spread_pct** | **float** |  | [optional] 
**dos** | **float** |  | [optional] 
**dos_proxy** | **float** |  | [optional] 
**used_proxy** | **bool** | Used proxy value. | 
**confidence** | **float** | Confidence value. | 
**bid_anomaly** | **bool** | Bid anomaly value. | 

## Example

```python
from cs2cap_sdk.models.items_inner import ItemsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsInner from a JSON string
items_inner_instance = ItemsInner.from_json(json)
# print the JSON string representation of the object
print(ItemsInner.to_json())

# convert the object into a dict
items_inner_dict = items_inner_instance.to_dict()
# create an instance of ItemsInner from a dict
items_inner_from_dict = ItemsInner.from_dict(items_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


