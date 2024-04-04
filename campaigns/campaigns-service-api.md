---
prev:
  text: Routing API
  link: /routing/introduction
next: false
---

# Campaigns Service API

Welcome to the XDEFI Campaigns Service API documentation. This API allows third-party websites to connect a list of addresses from an external source to the XDEFI Wallet's internal list of opted-in ad

### Base URL

The base URL for all API endpoints is: https://compaign-ts.xdefi.services/api

### Workflow

The high-level workflow for the XDEFI Campaigns Service API is as follows:

1. A third-party website sends a list of addresses from any XDEFI-supported chain to the Campaigns Service API. These addresses fulfill certain criteria determined by the third-party website.
2. XDEFI maintains an internal list of user addresses that have opted into the Campaigns feature in XDEFI Wallet.
3. The Campaigns Service API cross-references the third-party list of addresses with the internal list of opted-in addresses.
4. If there is a match between a third-party address and an opted-in address, the corresponding EVM address is identified.
5. A request is made to the Campaigns Service API from a website like Galxe, using an endpoint such as `https://compaign-ts.xdefi.services/api/campaigns/{campaign_name}/address/{evm_address}/`.
6. The request includes a user's EVM address.
7. If the user's EVM address meets both criteria:
   - The EVM address is in the XDEFI list of opted-in addresses (indicating participation in the campaign).
   - The corresponding SOL address is in the third-party list of addresses (indicating completion of the task).
8. If the criteria are met, the API returns TRUE to Galxe.

Note: The requested address will always be in the EVM format, but the corresponding address could be on any XDEFI-supported chain.

### Swagger Documentation

You can find the Swagger documentation for the XDEFI Campaigns Service API [here](https://compaign-ts.xdefi.services/documentation/v1.0.0).

## Endpoints

### Create Event

Create a new event for a campaign.

- Method: POST
- Endpoint: `/events`
- Request format: JSON
- Response format: JSON

::: code-group

```js [Request Body]
{
  "address": "0x...",
  "campaign": "campignName",
  "partnerName": "routing",
  "partnerKey": "abc",
  "metadata": { ... }
}
```

:::

The request body should include the following parameters:

| Field         | Type   | Required | Description                        |
| ------------- | ------ | -------- | ---------------------------------- |
| `address`     | string | Yes      | The user's address.                |
| `campaign`    | string | Yes      | The name of the campaign.          |
| `partnerName` | string | Yes      | The name of the partner.           |
| `partnerKey`  | string | Yes      | The key of the partner.            |
| `metadata`    | object | Yes      | Additional metadata for the event. |

::: code-group

```js [Example Request]
POST /events HTTP/1.1
Host: compaign-ts.xdefi.services/api
Content-Type: application/json

{
  "address": "0x1234567890abcdef",
  "campaign": "campignName",
  "partnerName": "routing",
  "partnerKey": "abc",
  "metadata": { ... }
}
```

```json [Example Response]
{
  "id": 0,
  "address": "0x1234567890abcdef",
  "metadata": { ... },
  "createdAt": "string",
  "updatedAt": "string",
  "publishedAt": "string"
}
```

:::

### Check Campaign Address

Check if all partners have reported the address for a given campaign.

- Method: GET
- Endpoint: `/campaign/{name}/address/{address}`
- Response format: JSON

**Parameters**

| Parameter | Type   | Required | Description                                      |
| --------- | ------ | -------- | ------------------------------------------------ |
| `name`    | string | Yes      | The name of the campaign.                        |
| `address` | string | Yes      | The address to check for campaign participation. |

::: code-group

```js [Example Request]
GET /campaign/mycampaign/address/0x1234567890abcdef HTTP/1.1
Host: compaign-ts.xdefi.services/api
```

```json [Example Response]
{
  "result": true,
  "events": [
    {
      "address": "0x1234567890abcdef",
      "partnerName": "string"
    }
  ]
}
```

:::

This response indicates that all partners have reported the address `0x1234567890abcdef` for the campaign with the name `mycampaign`.

### Opt-in

Opt-in a user to the campaigns service.

- Method: POST
- Endpoint: `/campaigns/opt-in`
- Request format: JSON
- Response format: JSON

::: code-group

```js [Request Body]
{
  "userId": "dfsjnsekjdfbgjkdfgkjdfjkgbdfjkgk",
  "addresses": [
    {
      "chain": "ETH",
      "address": "0xE9752bf95F4cF73cf8b45e75D88756EC8D48845c"
    }
  ]
}
```

:::

The request body should include the following parameters:

| Parameter   | Type   | Required | Description                                                                           |
| ----------- | ------ | -------- | ------------------------------------------------------------------------------------- |
| `userId`    | string | Yes      | The user ID.                                                                          |
| `addresses` | array  | Yes      | An array of address objects, each containing the chain (string) and address (string). |

### Opt-out

Opt-out a user from the campaigns service.

- Method: POST
- Endpoint: `/campaigns/opt-out`
- Request format: JSON
- Response format: JSON

::: code-group

```js [Request Body]
{
  "userId": "dfsjnsekjdfbgjkdfgkjdfjkgbdfjkgk",
}
```

:::

The request body should include the following parameters:

| Parameter | Type   | Required | Description  |
| --------- | ------ | -------- | ------------ |
| `userId`  | string | Yes      | The user ID. |

Please refer to the Swagger documentation for detailed information on these endpoints, including their HTTP methods, request and response schemas, and any additional parameters or headers required.
