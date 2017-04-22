# Introduction

The ReleasePage API is organized around REST. Our API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors. We use built-in HTTP features, like HTTP authentication and HTTP verbs, which are understood by off-the-shelf HTTP clients.

We support cross-origin resource sharing, allowing you to interact securely with our API from a client-side web application.

# Schema

All API access is over HTTPS, and accessed from `https://api.releasepage.co`. All data is sent and received as JSON.

```bash
curl -i https://api.releasepage.co/v1

HTTP/1.1 200 OK
Date: Mon, 17 Apr 2017 10:47:15 GMT
Content-Type: application/json; charset=utf-8
Connection: keep-alive
Access-Control-Allow-Origin: *
Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate
Pragma: no-cache
Content-Length: 5
ETag: W/"f-VaSQ4oDUiZblZNAEkkN+sX+q3Sg"
X-ReleasePage-Media-Type: releasepage.v1
X-RateLimit-Limit: 5000
X-RateLimit-Remaining: 4987
X-RateLimit-Reset: 1350085394
```

When not specified, all requests will receive the latest version of the API. If you wish to use an older version then please specify in the

## Rate Limit

All requests are rate-limited per API Key to 60 requests per minute.

If you need a higher limit then get in touch at [support@releasepage.co](mailto:support@releasepage.co) and we'll do our best to help.

## Timestamps
All timestamps are returned in ISO 8601 format:

`YYYY-MM-DDTHH:MM:SSZ`

## HTTP Verbs

Where possible, the API uses appropriate HTTP verbs for each action.

Verb  | Description
------|-------------
GET | Used for retrieving resources
POST  | Used for creating resources
DELETE | Used for deleting resources

## Errors

Error Code | Meaning
---------- | -------
400 | Bad Request - Something is wrong with your request parameters
403 | Forbidden - The API key used is incorrect or missing
404 | Not Found - The resource requested could not be found
429 | Too Many Requests - You have exceeded the rate limit

```bash
curl -i https://api.releasepage.co/v1/pages/<PAGE_ID>/version
HTTP/1.1 403 Forbidden
Date: Sat, 22 Apr 2017 07:13:56 GMT
Content-Type: application/json; charset=utf-8
...
{
  "error": "key_invalid",
  "error_description": "The client API key is invalid",
  "error_uri": "https://developers.releasepage.co/#authentication"
}
```

The API will always return a JSON interpretation of the error.

In the case of a API key not having access to a resource, such as requesting a Release Page that belongs to a different user, then the API will always return a `404 Not found`, rather than a `403 Forbidden`. This is a preventative measure to avoid exposing any underlying private information.



# Authentication

In order to use the ReleasePage API you must first enable add-ons for your page and obtain an API Key through the <a href="https://manage.releasepage.co">Management Portal</a>.

From the Release Page list page, click on the page that you wish to access via the API, and go to the Add-ons panel.

Click the switch to enable API access to this Release Page.

<img class="demo-image" src="./images/add-ons-panel.png" alt="enable api image" />

You will now see your API key (this is how we identify you when making requests) and the Page ID (this is how we know when page you want to use).

You can now use these to authenticate yourself to the API!

> To authorize using `curl`:

```bash
curl https://api.releasepage.co/v1/<endpoint>
  -H "Authorization: API_KEY"
```
> Make sure to replace `API_KEY` with your actual API key.

ReleasePage expects your personal API key to be included in all API requests to the server in a header that looks like the following:

`Authorization: API_KEY`

<aside class="notice">
You must replace <code>API_KEY</code> with your personal API key.
</aside>

