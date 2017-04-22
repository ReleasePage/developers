# Versions

## Version Information

Get all the latest version information for a Release Page.

> Definition

```bash
GET https://api.releasepage.com/v1/pages/{PAGE_ID}/version
```

> Example request

```bash
curl https://api.releasepage.co/v1/pages/7fa436a3/version \
    -H "Authorization: test.x7izhgezWg"
```

> Example response

```json
{
  "latest": [{
    "repo": "releasepage/api",
    "version": "v1.0.2",
    "author": "Jivings",
    "published_at": "2017-04-12T11:20:10Z",
    "name": "Public API"
  }, {
    "repo": "releasepage/portal",
    "version": "v1.2.5",
    "author": "dinkydani",
    "published_at": "2017-02-22T06:53:02Z",
    "name": "Management Portal"
  }],
  "latestGrouped": {
    "version": "v0.5.0",
    "authors": [
      "Jivings",
      "dinkydani"
    ],
    "published_at": "2017-04-12T11:20:10Z",
    "repos": [
      "releasepage/api",
      "releasepage/portal"
    ]
  }
}
```

### Arguments

**PAGE_ID** <small>required</small>

The ID of the requested Release Page. You can find this value on the API panel of the Release Page within the [Management Portal](https://manage.releasepage.co).

### Returns

The response will always contain a `latest` array, containing the latest release of each repository defined in the specified Release Page.

In the case of a Release Page with `grouped` releases, the response will also include a `latestGrouped` block. This will show the latest grouped version of the Release Page, including the repositories and authors that contributed to that grouped release,

