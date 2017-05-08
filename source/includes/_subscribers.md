# Subscribers

## Subscribe a User

Subscribe a user to a Release Page.

> Definition

```bash
PATCH https://api.releasepage.com/v1/pages/{PAGE_ID}/subscribers
```

> Example request

```bash
curl --data '{"op":"add","data":{"type":"email","value":"test@releasepage.co","preferences":["major","minor","patch"]}}' \
    -X PATCH https://api.releasepage.com/v1/pages/0767f57acc44/subscribers \
    -H "Authorization: test.x7izhgezWg" \
    -H "Content-Type: application/json"
```

> Example response

```json
{
  "message": "Subscriber request accepted, pending email confirmation",
  "pageId": "0767f57acc44",
  "data": {
    "type": "email",
    "value": "test@releasepage.co",
    "preferences": [
      "major",
      "minor",
      "patch"
    ]
  }
}
```

### Arguments

**PAGE_ID** <small>required</small>

The ID of the Release Page to subscribe to. You can find this value on the API panel of the Release Page within the [Management Portal](https://manage.releasepage.co).

### Returns

The response returns the outcome of the subscription request, along with details of the subscription. 

<aside class=“notice”>Note that this response denotes a successful subscription <strong>request</strong>. The subscription will not be completed until the email address has been confirmed.</aside>

