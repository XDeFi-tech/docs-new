# Routing Graph QL API

The Routing Graph QL schema offers queries and mutations to generate routes and the subsequent transaction(s) hex data necessary to accomplish them, to be signed and broadcast on chain. Additionally, "helper" queries are available to get information about available chains and tokens to swap from or to.

## Routing schema
In this section, we present the Graph QL schema upon which the routing API is built. The schema gives the full picture of what data can be queried with what parameters.
Here's a list of publicly available queries (root view):

```bash
type RoutingTypeV2 {
  tokenV2(id: String!): RoutingTokenTypeV2!
  tokensV2(names: [String!] = null, tokenIds: [String!] = null): [RoutingTokenTypeV2!]!
  bridgeableTokens(bridgeToken: BridgeTokenInput = null, tokenId: String = null): [RoutingTokenTypeV2!]!
  routeV2(srcToken: String!, destToken: String!, amountSource: String, slippage: String!, addresses: [AddressRouteInputTypeV2!]!, destAddress: String!, infiniteApproval: Boolean, referral: ReferralInputType): RouteTypeV2!
  chainsV2: [RoutingChainTypeV2!]!
  chainV2(name: String!): RoutingChainTypeV2!
  tradeV2(tradeId: String!): RouteTransactionTradeTypeV2!
  tradesV2(routeId: String!): [RouteTransactionTradeTypeV2!]!
  addressCheckV2(address: AddressRouteInputTypeV2!): AddressRouteCheckTypeV2!
  referrerSummary: ReferralFeeSummary!
  dailyVolume(startDate: String! = "2023-01-10"): [VolumeHistory!]
}
```

:::tip NOTE
- `tokenV2` and `tokensV2` queries fetch information about specific token(s) given an `id` or a name (list of names)
- `chainV2` and `chainsV2` fetch info about a given chain or all available chains and assets available in them
- `bridgeableTokens` fetches a list of chains' assets one can bridge to given an input token belonging to a source chain
- `addressCheckV2` will verify the address belonging to a given chain is correct
- `referrerSummary` will return referral data if the requester is part of the programme
- `dailyVolume` returns daily volumes of swaps facilitated through XDEFI's Routing API
- `routeV2` finds the best route to swap from `srcToken` to `destToken`
- `tradeV2` and `tradesV2 will fetch trade(s) associated to a given ID
:::

In addition to the above read-only operations, mutations are made available to add new routes and trades, and alter transactions statuses.

```bash
type Mutation {
  transactionsV2(routeData: RouteInputTypeV2!): PostRouteTypeV2!
  transactionHashV2(routeId: String!, tradeId: String!, transactionHash: String!): String!
  claimFees: ClaimStatus
}
```

:::tip NOTE
- `transactionsV2` generates trade and route records in the database
- `transactionHashV2` generates trade status and route status records in the database
- `claimFees` generates a fee claim request (if you're part of the referral programme)
:::

## Querying the Graph QL endpoint
This endpoint is similar to the ones discussed earlier but needs extra parameters, and sometimes a header with authentication token, to perform certain read/write operations (queries vs. mutations).
Querying this endpoint to fetch the list of tokens/chains one can bridge to from `ETH.USDC` would look like this in Python:

IMPORT LA DATA MANQUANTE

A comprehensive routing example, from requesting a route to getting transaction data, is shown in the [Overview](./overview) section.