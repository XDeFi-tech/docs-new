# Query Mutation Details
*Deep-dive into our Graph QL schema*

[[toc]]

In the [previous section](./routing-graph-ql-api), we saw an overview of queries and mutations publicly available. 

Here we'll zoom into each one of them and present their inputs and outputs and also show some usage examples.
A step-by-step full example of how routing works is available in the [next section](./swap-example).

### chainsV2 & chainV2
Both of these queries return information about assets available in one (chain, given a chain name) or all available chains.

While `chainsV2` has no parameters, `chainV2` takes one of the following chain names:

::: code-group
```ts [Request]
import requests

URL = "https://routingapi.xdefiservices.com/"

response = requests.get(URL + "chains/")

print(response.json())
```

```ts [Response]
['BNB', 'BTC', 'BCH', 'LTC', 'ETH', 'THOR', 'DOGE', 'BSC', 'POLYGON', 'FTM', 'AVAX', 'ARBITRUM', 'AURORA', 'NEAR', 'SOL', 'COSMOS', 'OSMOSIS']
```
:::

Both queries return objects of type `RoutingChainTypeV2` defined as:

```ts
type RoutingChainTypeV2 {
  name: String!
  tokens: [RoutingTokenTypeV2]!
}

type RoutingTokenTypeV2 {
  id: String!
  asset: CryptoAsset!
  listProviders: [String!]!
}

type CryptoAsset {
  """Unique asset identifier"""
  id: ID

  """Known name that identifies token"""
  name: String

  """The symbol that identifies token"""
  symbol: String

  """Asset image"""
  image: String

  """supported list of chain are in [`Chain`] enum"""
  chain: String

  """ID of token (contract address in most chain)"""
  contract: String
  price: AssetAmountType
}
```

## tokenV2 & tokensV2
Both queries return objects of type `RoutingTokenTypeV2` defined in the above section but take different parameters:
- `tokenV2` takes a routing specific uid
- `tokensV2` takes either a list of uids or symbols (of the `chain.symbol` format)

::: code-group
```ts [tokenV2 request]
import requests

GRAPHQL_ENDPOINT = "https://gql-router.staging.xdefiservices.com/graphql"

query = """
query TokenV2($tokenV2Id: String!) {
  routingV2 {
    tokenV2(id: $tokenV2Id) {
      id
      asset {
        id
        name
        symbol
        chain
        contract
        image
      }
    }
  }
}"""

vars = {
  "tokenV2Id": "2a1456da-6642-4293-b383-baefcdf4c22e"
}

response = requests.post(GRAPHQL_ENDPOINT,
             json = {"query": query, "variables": vars})

print(response.json())
```

```ts [tokenV2 response]
{
  "data": {
    "routingV2": {
      "tokenV2": {
        "id": "2a1456da-6642-4293-b383-baefcdf4c22e",
        "asset": {
          "id": "13f2d52b-3f12-42cd-9295-acd862f941be",
          "name": "Binance USD",
          "symbol": "BUSD",
          "chain": "Avalanche",
          "contract": "0x19860ccb0a68fd4213ab9d8266f7bbf05a8dde98",
          "image": "https://assets.coingecko.com/coins/images/9576/thumb/BUSD.png?1568947766"
        }
      }
    }
  }
}
```

```ts [tokenV2 request]
import requests

GRAPHQL_ENDPOINT = "https://gql-router.staging.xdefiservices.com/graphql"

query = """
query TokensV2($names: [String!]) {
  routingV2 {
    tokensV2(names: $names) {
      id
      asset {
        chain
        contract
        id
        name
        symbol
      }
    }
  }
}"""

vars = {
  "names": ["AVAX.AVAX", "AVAX.STG"]
}

response = requests.post(GRAPHQL_ENDPOINT,
             json = {"query": query, "variables": vars})

print(response.json())
```

```ts [tokenV2 response]
{
  "data": {
    "routingV2": {
      "tokensV2": [
        {
          "id": "ac9437fb-4429-4240-b8f9-077dd7fe0a4f",
          "asset": {
            "chain": "Avalanche",
            "contract": "AVAX",
            "id": "a0e2d381-dde0-4bb3-a5a1-f227eec4b89c",
            "name": "Avalanche",
            "symbol": "AVAX"
          }
        },
        {
          "id": "6ddf09f6-515b-49b8-9c34-e8ad5b8f3f52",
          "asset": {
            "chain": "Avalanche",
            "contract": "0x2f6f07cdcf3588944bf4c42ac74ff24bf56e7590",
            "id": "705cd798-944f-402d-93a7-8df0e88f66aa",
            "name": "Stargate Finance",
            "symbol": "STG"
          }
        }
      ]
    }
  }
}
```
:::

## bridgeableTokens
This query takes a `BridgeTokenInput` object or a routing-specific uid as input. For more details on usage, see example provided in the previous section.

A `RoutingTokenTypeV2` object is returned if the asset is available on another chain.

```ts
input BridgeTokenInput {
  name: String!
  address: String!
}
```

## routeV2
A collection of inputs needs to be provided here in order to return a route:
- `srcToken` and `destToken`: source and destination token in the `chain.symbol` format
- `amountSource`: amount of srcToken` one wants to swap/bridge
- `slippage`: price slippage tolerance in %
- `addresses`: a list of address objects
- `destAddress`: destination address
- `infiniteApproval`: flag giving smart contracts maximum allowance
- `referral`: referral programme information (optional, to provide only if onboarded in the programme)

```ts
input AddressRouteInputTypeV2 {
  chain: String!
  address: String!
}

input ReferralInputType {
  medium: String = ""
  link: String = ""
}
```

This query return a `RouteTypeV2` object with all the relevant route information:

```ts 
type RouteTypeV2 {
  addresses: [AddressRouteTypeV2!]!
  destAddress: String!
  priceRate: Decimal!
  priceRateText: String!
  slippage: Decimal!
  gasPrices: JSON
  priceImpact: String!
  amountIn: Decimal!
  approvalInfiniteFlag: Boolean
  tradesRoute: [RouteTradeTypeV2!]!
  errorBuildingRoute: String
}

type AddressRouteTypeV2 {
  chain: String!
  address: String!
}

type RouteTradeTypeV2 {
  provider: ProviderTypeV2!
  amountIn: Decimal!
  amountOut: Decimal!
  minAmountReceived: Decimal!
  assetIn: RoutingTokenTypeV2!
  assetOut: RoutingTokenTypeV2!
  fee: RoutingFeeTypeV2!
  priceRateUsdAssetOut: Decimal!
  priceRateUsdAssetIn: Decimal!
  tradeType: String!
  referral: ReferralType
}

type ProviderTypeV2 {
  id: String!
  name: String!
  time: String!
  icon: String!
}

type RoutingFeeTypeV2 {
  networkFeeDollar: Decimal!
  networkFeeAsset: Decimal!
  inboundFeeDollar: Decimal!
  inboundFeeAsset: Decimal!
  swapFee: Decimal!
  feeRateTransaction: Decimal!
  xdefiSwapFee: Decimal
  xdefiSwapFeeDollar: Decimal
}

type ReferralType {
  medium: String
  link: String
}
```

For a full routing example check the [routing API section](./introduction).

## tradeV2 & tradesV2

`tradeV2` and `tradesV2` take as input a trade id (integer?) and a route id (uid) respectively and return one or more objects of `RouteTransactionTradeTypeV2` type.


```ts
type RouteTransactionTradeTypeV2 {
  transaction: RouteTransactionTypeV2
  tradeRoute: RouteTradeTypeV2!
  routeId: String!
  status: RouteTransactionStatusV2!
}

type RouteTransactionTypeV2 {
  chain: String!
  amount: Decimal!
  recipient: String
  feeRate: String!
  txType: String!
  tradeId: String!
  routeId: String
  gasPrice: String
  data: String
  unsignedStdTx: String
  gasLimit: String
  memo: String
  actions: JSON
  signerId: String
  receiverId: String
}

type RouteTransactionStatusV2 {
  status: String
  txHash: String
}
```

For a full routing example, with the above queries, check the [routing API section](./introduction).

## addressCheckV2

This query takes a AddressRouteInputTypeV2 object as an input:
```ts
input AddressRouteInputTypeV2 {
  chain: String!
  address: String!
}
```

The address is then checked:

::: code-group
```ts [Request]
import requests

GRAPHQL_ENDPOINT = "https://gql-router.staging.xdefiservices.com/graphql"

query = """
query AddressCheckV2($address: AddressRouteInputTypeV2!) {
  routingV2 {
    addressCheckV2(address: $address) {
      isValid
      address
      chain
    }
  }
}"""

vars = {
  "address": {
    "address": "0x7045916CEEFf58547E80E31d2c60ae5F67D63027",
    "chain": "ETH"
  }
}

response = requests.post(GRAPHQL_ENDPOINT,
             json = {"query": query, "variables": vars})

print(response.json())
```

```ts [Response]
{
  "data": {
    "routingV2": {
      "addressCheckV2": {
        "isValid": true,
        "address": "0x7045916CEEFf58547E80E31d2c60ae5F67D63027",
        "chain": "ETH"
      }
    }
  }
}
```
:::

## referrerSummary

Rather than taking an input, this query relies on the header being passed through the `POST` request.

::: code-group
```ts [Request]
import requests

ACCOUNT_ADDRESS = "Input your registered account address here"
SIGNED_MESSAGE = "Input the message signed with registered address"

referralSummaryQuery = """
query ReferralFeeSummary {
  routingV2 {
    referrerSummary {
      referrerId
      url
      lifetimeFees
      last7dFees
      last30dFees
      claimableFees
      feeTier
      totalReferralVolume
      totalAssociatedAddresses
      claimHistory {
        claimId
        status
        amountUsd
      }
      userType
    }
  }
}
"""

auth_header = f"{ACCOUNT_ADDRESS}:{SIGNED_MESSAGE}"

response = requests.post("https://gql-router.dev.xdefiservices.com/graphql", headers={"Authorization": auth_header},
                    json={"query":referralSummaryQuery})

print(response.json())
```

```ts [Response]
{
  "data": {
    "routingV2": {
      "referrerSummary": {
        "referrerId": "29fde42d-edd6-495b-9fbc-26f7d60a8c23",
        "url": "cryptodev",
        "lifetimeFees": "3.93",
        "last7dFees": "0.0",
        "last30dFees": "3.93",
        "claimableFees": "3.93",
        "feeTier": "0.5000",
        "totalReferralVolume": "1563.45",
        "totalAssociatedAddresses": 1,
        "claimHistory": [],
        "userType": "referrer"
      }
    }
  }
}
```
:::

This query returns a `ReferralFeeSummary` object:

```ts
type ReferralFeeSummary {
  referrerId: String!
  url: String!
  lifetimeFees: Decimal!
  last7dFees: Decimal!
  last30dFees: Decimal!
  claimableFees: Decimal!
  feeTier: Decimal!
  totalReferralVolume: Decimal!
  totalAssociatedAddresses: Int!
  claimHistory: [ClaimStatus!]!
  userType: String!
}
```

## dailyVolume

This query takes a date in the format `"YYYY-MM-DD"` and return for each date after `startDate` the daily swap volume.

::: code-group
```ts [Request]
import requests

GRAPHQL_ENDPOINT = "https://gql-router.staging.xdefiservices.com/graphql"

query = """
query Volume($startDate: String!) {
  routingV2 {
    dailyVolume(startDate: $startDate) {
      date
      volume
    }
  }
}"""

vars = {
  "startDate": "2023-02-10"
}

response = requests.post(GRAPHQL_ENDPOINT,
             json = {"query": query, "variables": vars})

print(response.json())
```

```ts [Response]
{
  "data": {
    "routingV2": {
      "dailyVolume": [
        {
          "date": "2023-02-10  00:00:00",
          "volume": "0"
        },
        {
          "date": "2023-02-11  00:00:00",
          "volume": "0"
        },
        {
          "date": "2023-02-12  00:00:00",
          "volume": "0"
        },
        {
          "date": "2023-02-13  00:00:00",
          "volume": "0"
        },
        {
          "date": "2023-02-14  00:00:00",
          "volume": "542168235.4621111283289613321"
        },
        {
          "date": "2023-02-15  00:00:00",
          "volume": "0"
        },
        {
          "date": "2023-02-16  00:00:00",
          "volume": "1.36766277387363113848884"
        },
        {
          "date": "2023-02-17  00:00:00",
          "volume": "0"
        },
        {
          "date": "2023-02-18  00:00:00",
          "volume": "0"
        },
        {
          "date": "2023-02-19  00:00:00",
          "volume": "0"
        },
        {
          "date": "2023-02-20  00:00:00",
          "volume": "541.5600506040581120064440045"
        },
        {
          "date": "2023-02-21  00:00:00",
          "volume": "53996.82460348166920058343796"
        },
        {
          "date": "2023-02-22  00:00:00",
          "volume": "1242.267101413565768895289237"
        },
        {
          "date": "2023-02-23  00:00:00",
          "volume": "0.4174599441870186719936558866"
        },
        {
          "date": "2023-02-24  00:00:00",
          "volume": "0"
        },
        {
          "date": "2023-02-25  00:00:00",
          "volume": "54.06038287335565896855478036"
        },
        {
          "date": "2023-02-26  00:00:00",
          "volume": "0"
        },
        {
          "date": "2023-02-27  00:00:00",
          "volume": "0"
        },
        {
          "date": "2023-02-28  00:00:00",
          "volume": "258.4792191407147582760637100"
        }
      ]
    }
  }
}
```
:::

## transactionsV2

This mutation takes a `RouteInputTypeV2` as an input and returns `PostRouteTypeV2` which only contains a `routeId`.

```ts
input RouteInputTypeV2 {
  addresses: [AddressRouteInputTypeV2!]!
  destAddress: String!
  priceRate: Decimal!
  priceRateText: String!
  slippage: Decimal!
  gasPrices: JSON
  priceImpact: String!
  amountIn: Decimal!
  approvalInfiniteFlag: Boolean
  tradesRoute: [TradeRouteInputTypeV2!]!
  errorBuildingRoute: String
}

input TradeRouteInputTypeV2 {
  provider: ProviderInputTypeV2!
  amountIn: Decimal!
  amountOut: Decimal!
  minAmountReceived: Decimal!
  assetIn: RoutingTokenInputTypeV2!
  assetOut: RoutingTokenInputTypeV2!
  priceRateUsdAssetIn: Decimal!
  priceRateUsdAssetOut: Decimal!
  tradeType: String!
  fee: RoutingFeeInputTypeV2!
  referral: ReferralInputType = null
}

input ProviderInputTypeV2 {
  id: String!
  name: String = ""
  time: String = ""
  icon: String = ""
}

input RoutingTokenInputTypeV2 {
  id: String!
  listProviders: [String!] = null
  asset: CryptoAssetInputV2 = null
}

input RoutingFeeInputTypeV2 {
  networkFeeDollar: Decimal!
  networkFeeAsset: Decimal!
  inboundFeeDollar: Decimal!
  inboundFeeAsset: Decimal!
  swapFee: Decimal!
  feeRateTransaction: Decimal!
  xdefiSwapFee: Decimal! = "0"
  xdefiSwapFeeDollar: Decimal! = "0"
}

input CryptoAssetInputV2 {
  id: String = ""
  name: String = ""
  symbol: String = ""
  image: String = ""
  chain: String = ""
  contract: String = ""
  price: PriceInputV2 = null
}

type PostRouteTypeV2 {
  routeId: String!
}
```

## transactionHashV2

This mutation returns a string if trade status has been added/updated successfully. It takes the following elements as inputs:
- `routeId`: `id` returned in the previous step
- `tradeId`: `id` returned by **tradeV2** query
- `transactionHash`: hash of the broadcast transaction data

## claimFees

For referral programme participants, this triggers a claim of a fraction of the fees generated through referred swaps. A **ClaimStatus** object is returned:

```ts 
type ClaimStatus {
  claimId: String!
  status: String!
  amountUsd: Float!
}
``` 

This mutation does not take an input but rather relies on the header which should include an `Authorization` field (similar to the `referralSummary` query)

::: code-group
```ts [Request]
import requests

ACCOUNT_ADDRESS = "Input your registered account address here"
SIGNED_MESSAGE = "Input the message signed with registered address"

query = """
mutation claimFees { 
  claimFees { 
    claimId 
    status 
    amountUsd 
    } 
  }
"""

auth_header = f"{ACCOUNT_ADDRESS}:{SIGNED_MESSAGE}"

response = requests.post("https://gql-router.dev.xdefiservices.com/graphql", headers={"Authorization": auth_header},
                    json={"query":query})

print(response.json())
```

```ts [Response]
{
  "data": {
    "claimFees": {
      "claimId": "6beb9dbc-6dd9-4f7c-8c66-2d951b6590be",
      "status": "PENDING",
      "amountUsd": 3.93
    }
  }
}
``` 