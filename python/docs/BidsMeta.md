# BidsMeta

Metadata for bids response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | ISO 4217 currency code for the value context. | 
**filters** | [**BidsFilterMeta**](BidsFilterMeta.md) | Effective request filters applied to this response. | 
**providers_queried** | **List[str]** | Provider keys queried while building this response. | 

## Example

```python
from cs2cap_sdk.models.bids_meta import BidsMeta

# TODO update the JSON string below
json = "{}"
# create an instance of BidsMeta from a JSON string
bids_meta_instance = BidsMeta.from_json(json)
# print the JSON string representation of the object
print(BidsMeta.to_json())

# convert the object into a dict
bids_meta_dict = bids_meta_instance.to_dict()
# create an instance of BidsMeta from a dict
bids_meta_from_dict = BidsMeta.from_dict(bids_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


