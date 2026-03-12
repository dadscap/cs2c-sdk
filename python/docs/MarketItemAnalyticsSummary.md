# MarketItemAnalyticsSummary

Quick summary for single-item analytics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provider_count** | **int** | Number of providers represented in this payload. | 
**total_volume_24h** | **int** | Total depletion activity volume observed over the last 24 hours. | 
**best_ask_usd** | **str** |  | [optional] 
**best_bid_usd** | **str** |  | [optional] 
**avg_spread_pct** | **float** |  | [optional] 
**liquidity_score** | **int** |  | [optional] 
**listing_score** | **int** |  | [optional] 
**gap_score** | **int** |  | [optional] 
**volume_score** | **int** |  | [optional] 
**doppler_bonus** | **bool** | Whether Doppler bonus was applied. | [optional] [default to False]
**price_anomaly** | **bool** | Whether a same-provider bid-above-ask anomaly was detected, excluding Steam. | [optional] [default to False]
**high_tier_override** | **bool** | Whether the high-tier override was applied. | [optional] [default to False]
**liquidity_last_updated** | **datetime** |  | [optional] 

## Example

```python
from cs2cap_sdk.models.market_item_analytics_summary import MarketItemAnalyticsSummary

# TODO update the JSON string below
json = "{}"
# create an instance of MarketItemAnalyticsSummary from a JSON string
market_item_analytics_summary_instance = MarketItemAnalyticsSummary.from_json(json)
# print the JSON string representation of the object
print(MarketItemAnalyticsSummary.to_json())

# convert the object into a dict
market_item_analytics_summary_dict = market_item_analytics_summary_instance.to_dict()
# create an instance of MarketItemAnalyticsSummary from a dict
market_item_analytics_summary_from_dict = MarketItemAnalyticsSummary.from_dict(market_item_analytics_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


