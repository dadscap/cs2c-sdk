# BidsFilterMeta

Filter metadata for bids endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **int** |  | [optional] 
**market_hash_name** | **str** |  | [optional] 
**phase** | **str** |  | [optional] 
**requested_providers** | **List[str]** |  | [optional] 

## Example

```python
from cs2cap_sdk.models.bids_filter_meta import BidsFilterMeta

# TODO update the JSON string below
json = "{}"
# create an instance of BidsFilterMeta from a JSON string
bids_filter_meta_instance = BidsFilterMeta.from_json(json)
# print the JSON string representation of the object
print(BidsFilterMeta.to_json())

# convert the object into a dict
bids_filter_meta_dict = bids_filter_meta_instance.to_dict()
# create an instance of BidsFilterMeta from a dict
bids_filter_meta_from_dict = BidsFilterMeta.from_dict(bids_filter_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


