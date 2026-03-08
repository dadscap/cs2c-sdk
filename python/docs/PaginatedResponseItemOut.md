# PaginatedResponseItemOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ItemOut]**](ItemOut.md) | List of returned items. | 
**pagination** | [**PaginationMeta**](PaginationMeta.md) | Pagination metadata for this response. | 

## Example

```python
from cs2cap_sdk.models.paginated_response_item_out import PaginatedResponseItemOut

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedResponseItemOut from a JSON string
paginated_response_item_out_instance = PaginatedResponseItemOut.from_json(json)
# print the JSON string representation of the object
print(PaginatedResponseItemOut.to_json())

# convert the object into a dict
paginated_response_item_out_dict = paginated_response_item_out_instance.to_dict()
# create an instance of PaginatedResponseItemOut from a dict
paginated_response_item_out_from_dict = PaginatedResponseItemOut.from_dict(paginated_response_item_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


