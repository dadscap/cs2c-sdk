# PricesFilterMeta

Filter metadata for prices endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**market_hash_name** | **str** |  | [optional] 
**phase** | **str** |  | [optional] 
**requested_providers** | **List[str]** |  | [optional] 

## Example

```python
from cs2cap_sdk.models.prices_filter_meta import PricesFilterMeta

# TODO update the JSON string below
json = "{}"
# create an instance of PricesFilterMeta from a JSON string
prices_filter_meta_instance = PricesFilterMeta.from_json(json)
# print the JSON string representation of the object
print(PricesFilterMeta.to_json())

# convert the object into a dict
prices_filter_meta_dict = prices_filter_meta_instance.to_dict()
# create an instance of PricesFilterMeta from a dict
prices_filter_meta_from_dict = PricesFilterMeta.from_dict(prices_filter_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


