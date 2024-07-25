---
prev:
  text: "⚙️ Ctrl Wallet Integration"
  link: "/developers/ctrl-wallet-integration"
next:
  text: "🔹 Endpoints"
  link: "./endpoints"
---

# Routing API

_Comprehensive description of the routing service and its endpoints_

## Summary

- [Introduction](#introduction)
- [Endpoints](./endpoints)
- [Routing Graph QL API](./routing-graph-ql-api)
- [Query and Mutation details](./query-mutation-details)
- [Step by step Swap example](./swap-example)

## Introduction

This project provides a multi-step process to request and execute cross-chain swaps via a REST API.

First, given a pair tokenA/tokenB, with assets belonging to the same chain or separate chains, an optimal route is found to swap from tokenA to tokenB. Once the route is found, the necessary transaction data are returned for signing and execution.

## Connecting to the API

Before connecting to the API, one needs to go through the Ctrl (fka XDEFI) VPN to access it or to whitelist the IP address.
API endpoints share the same root URL: https://routingapi.xdefi.services/.

To check the health status of the API just send a GET request to the above URL:
::: code-group

```ts [Request]
URL = "https://routingapi.xdefi.services";

response = await fetch(URL);

console.log(response.status);
```

```ts [Response]
{'status': 'OK'}
```

:::
