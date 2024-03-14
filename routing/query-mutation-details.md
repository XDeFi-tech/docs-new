# Query Mutation Details

_Deep-dive into our Graph QL schema_

[[toc]]

In the [previous section](./routing-graph-ql-api), we saw an overview of queries and mutations publicly available.

Here we'll zoom into each one of them and present their inputs and outputs and also show some usage examples.
A step-by-step full example of how routing works is available in the [next section](./swap-example).

### chainsV2 & chainV2

Both of these queries return information about assets available in one (chain, given a chain name) or all available chains.

While `chainsV2` has no parameters, `chainV2` takes one of the following chain names:

```js [JavaScript]
const ENDPOINT = "https://routingapi.xdefiservices.com/";

const fetchChainsV2 = async () => {
  fetch(ENDPOINT + "chains")
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
};
```

<div ref='refChainsV2' />

Both queries return objects of type `RoutingChainTypeV2` defined as:

```ts
interface RoutingChainTypeV2 {
  name: string;
  tokens: RoutingTokenTypeV2[];
}

interface RoutingTokenTypeV2 {
  id: string;
  asset: CryptoAsset;
  listProviders: string[];
}

interface CryptoAsset {
  id?: string;
  name?: string;
  symbol?: string;
  image?: string;
  chain: string;
  contract: string;
  price: AssetAmountType;
}

interface AssetAmountType {
  // Define the properties of AssetAmountType here if necessary
}
```

## tokenV2 & tokensV2

Both queries return objects of type `RoutingTokenTypeV2` defined in the above section but take different parameters:

### `tokenV2`

`tokenV2` takes a routing specific uid

::: code-group

```js [JavaScript]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const query = `
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
}`;

const vars = {
  tokenV2Id: "2a1456da-6642-4293-b383-baefcdf4c22e",
};
const fetchTokenV2 = async () => {
  await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: vars,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
};

fetchTokenV2();
```

```js [Variables]
{
  tokenV2Id: "2a1456da-6642-4293-b383-baefcdf4c22e",
}
```

:::

<div ref='refTokenV2' />

### `tokensV2`

`tokensV2` takes either a list of uids or symbols (of the `chain.symbol` format)

::: code-group

```js [JavaScript]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const query = `
query TokensV2($names: [String!]) {
  routingV2 {
    tokensV2(names: $names) {
      isValid
      address
      chain
    }
  }
}`;

const vars = {
  names: ["AVAX.AVAX", "AVAX.STG"],
};
const fetchTokensV2 = async () => {
  await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: vars,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
};

fetchTokensV2();
```

```js [Variables]
{
  names: ["AVAX.AVAX", "AVAX.STG"],
}
```

:::

<div ref='refTokensV2' />

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

```js [JavaScript]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const query = `
query AddressCheckV2($address: AddressRouteInputTypeV2!) {
  routingV2 {
    addressCheckV2(address: $address) {
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
}`;

const vars = {
  address: {
    address: "0x7045916CEEFf58547E80E31d2c60ae5F67D63027",
    chain: "ETH",
  },
};
const fetchAddressCheckV2 = async () => {
  await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: vars,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
};

fetchAddressCheckV2();
```

```js [Variables]
{
  address: {
    address: "0x7045916CEEFf58547E80E31d2c60ae5F67D63027",
    chain: "ETH",
  },
}
```

:::

<div ref='refAddressCheckV2' />

## referrerSummary

Rather than taking an input, this query relies on the header being passed through the `POST` request.

```js
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const ACCOUNT_ADDRESS = "Your account address";
const SIGNED_MESSAGE = "The message signed with registered address";

const query = `
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
}`;

const fetchReferrerSummary = async () => {
  await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${ACCOUNT_ADDRESS}:${SIGNED_MESSAGE}`,
    },
    query: JSON.stringify({
      query: query,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
};
```

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

```js [JavaScript]
import moment from "moment";
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const query = `
query Volume($startDate: String!) {
  routingV2 {
    dailyVolume(startDate: $startDate) {
      date
      volume
    }
  }
}`;

const vars = {
  startDate: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
};
const fetchDailyVolume = async () => {
  await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: vars,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
};

fetchDailyVolume();
```

```js [Variables]
{
  startDate: "YYYY-MM-DD",
}
```

:::

In demo startDate is set to 1 week ago.

<div ref='refDailyVolume' />

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

For referral programme participants, this triggers a claim of a fraction of the fees generated through referred swaps.

This mutation does not take an input but rather relies on the header which should include an `Authorization` field (similar to the `referralSummary` query)

```js
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const ACCOUNT_ADDRESS = "Your account address";
const SIGNED_MESSAGE = "The message signed with registered address";

const query = `
mutation claimFees {
  claimFees {
      claimId
      status
      amountUsd
    }
  }
`;

const fetchClaimFees = async () => {
  await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${ACCOUNT_ADDRESS}:${SIGNED_MESSAGE}`,
    },
    query: JSON.stringify({
      query: query,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
};

fetchClaimFees();
```

This query returns a **ClaimStatus** object is returned:

```ts
type ClaimStatus {
  claimId: String!
  status: String!
  amountUsd: Float!
}
```

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'

import ChainsV2 from '../components/ChainsV2.jsx'
import TokenV2 from '../components/TokenV2.jsx'
import TokensV2 from '../components/TokensV2.jsx'
import AddressCheckV2 from '../components/AddressCheckV2.jsx'
import DailyVolume from '../components/DailyVolume.jsx'

const refChainsV2 = ref()
const refTokenV2 = ref()
const refTokensV2 = ref()
const refAddressCheckV2 = ref()
const refDailyVolume = ref()
onMounted(() => {
  const rootChainsV2 = createRoot(refChainsV2.value)
  rootChainsV2.render(createElement(ChainsV2, {}, null))

  const rootTokenV2 = createRoot(refTokenV2.value)
  rootTokenV2.render(createElement(TokenV2, {}, null))

  const rootTokensV2 = createRoot(refTokensV2.value)
  rootTokensV2.render(createElement(TokensV2, {}, null))

  const rootAddressCheckV2 = createRoot(refAddressCheckV2.value)
  rootAddressCheckV2.render(createElement(AddressCheckV2, {}, null))

  const rootDailyVolume = createRoot(refDailyVolume.value)
  rootDailyVolume.render(createElement(DailyVolume, {}, null))
})
</script>
