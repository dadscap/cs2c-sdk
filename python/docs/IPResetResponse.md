# IPResetResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** | Boolean success indicator for this operation. | 
**key_id** | **str** | Unique identifier for the API key. | 
**cooldown_sec** | **int** | Cooldown period in seconds before this action can be retried. | 

## Example

```python
from cs2cap_sdk.models.ip_reset_response import IPResetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IPResetResponse from a JSON string
ip_reset_response_instance = IPResetResponse.from_json(json)
# print the JSON string representation of the object
print(IPResetResponse.to_json())

# convert the object into a dict
ip_reset_response_dict = ip_reset_response_instance.to_dict()
# create an instance of IPResetResponse from a dict
ip_reset_response_from_dict = IPResetResponse.from_dict(ip_reset_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


