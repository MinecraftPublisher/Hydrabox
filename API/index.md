# Hydrabox API
**Warning: You should NOT share your fingerprint with ANYONE at ALL.** This API only works if the user has a registered fingerprint. The fingerprint can be set by clicking on this link: [Click Here](https://hydrabox.phazor.ir/API/Fingerprint/)

## https://hydrabox.phazor.ir/API/Fingerprint/
This endpoint checks for a user's fingerprint, If it exists the current IP will be written to it, If it doesn't, A new one will be created with the user's current IP. The user's IP address is never shared with anyone at all costs. If the user's endpoint cookie is invalid, The endpoint will return `INVALID`. Otherwise, It will always return `DONE`.

## https://hydrabox.phazor.ir/API/Fingerprint/?session
This endpoint checks for the user's current IP in the fingerprint databse, And returns `NULL` if it wasn't found. This might occur due to the IP changing, Which will be fixed by the user navigating to the usual fingerprint endpoint. If the user's fingerprint was found, The endpoint will return `DONE`.

## https://hydrabox.phazor.ir/API/Storage/write.php
This endpoint modifies the user's API data, And it requires the user's fingerprint as a query string labeled `fingerprint`, And the data that the user wants to set in the HTTP POST request body. If the given body is valid JSON and the user's fingerprint exists, The endpoint will return `DONE`. Otherwise, You might get the `INVALID_JSON` error for submitting an invalid JSON array or object, The `INVALID_PRINT` error for submitting a non-existing fingerprint, And the `NO_PRINT` error for not submitting a fingerprint at all.

## https://hydrabox.phazor.ir/API/Storage/read.php
This endpoint returns the data stored in the user's API storage. If anything goes wrong ( eg. wrong fingerprint, not submitting a fingerprint, etc ), The endpoint will return `NULL`. Otherwise it will return the user's API storage data.
