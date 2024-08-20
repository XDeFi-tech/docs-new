# Step-by-step Swap example

[[toc]]

## Swap Avalanche (AAVE) for Avalanche (USDT)

This particular route (swap) consists of two transactions. However, the number of transactions required for swapping different coins and across different chains may vary and depend on several factors such as the source coin, the destination coin, and the number of available addresses for signing transactions.

### Step 1

In this step, we prepare the data for the chains and assets that our routing system supports. This data enables us to display the source and destination tokens to users and query and display swap route in the next step.

#### 1.1 Get list of supported chains

[Explorer query ChainsV2](https://gql-router.xdefi.services/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAMIAWAhgJZIDOAagExHAA6SRReEMKNA5kxbtOnKJRoNmbDqM5IKiEaIC%2BytUhUgVQA)

```js
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const query = `
query ChainsV2 {
  routingV2 {
    chainsV2 {
      name,
    }
  }
}`;
const fetchChainsV2 = async () => {
  setLoading(true);
  setResponse({});

  await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
};

fetchChainsV2();
```

<div ref="refChainsV2GraphQL"></div>

#### 1.2 Get list of assets for supported chain

[Explorer query ChainV2](https://gql-router.xdefi.services/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAMIAWAhgJZIBqATABQAkSFi6RAyinjQOYBCAJRFgAHSREieCDBQCGYydOlRKNBozYcirdglESpq6ToQrTRFBADWyAM7KTVohQcOEKZ69NQIqHgUUCiWvkQOBHAARhAANmFWAL6J0ikuROlpkkkgADQgAG4UfBTRcQgOGCDG0uIg5vWc9QCCtC0AGvU5IElAA)

```js
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const query = `
query ChainV2($name: String!) {
  routingV2 {
    chainV2(name: $name) {
      name
      tokens {
        asset {
          contract
          symbol
        }
      }
    }
  }
}`;
const vars = {
  name: "ETH",
};
const fetchChainV2 = async () => {
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

fetchChainV2();
```

In demo we use `ETH` as a chain name.

<div ref="refChainV2GraphQL"></div>

### Step 2

Query swap route. This query returns a `tradesRoute` collection, along with other properties. Based on this data, we can show the user which providers we will use, the amount of fees in dollars and assets for each transaction, and thus calculate the total fees and approximate transaction time in seconds.

[Explorer query RouteV2](https://gql-router.xdefi.services/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAEoQwoIBqATABQAkAznlACoQDWy6RAyijwBLJAHMAhABoiDMAiYoO3JLwHCxUmUwA2QgA56AhqISrBIidIaGwYPPKbzeAbQCCt%2B0yZkKCAJJIehRsBHrUNOIAupqy8ijudg5m6pYyhnDkqHzkrKb85mJWIgBmIkKUrgZ4EABuhtq8AEIQENoIhkgAlETAADpIRETVFBa0Pf2Dg8OUtHQs7Fw8WqxKyNJyCqsqMhuKi0jSOvpGJrzMugbGCNI2iV5OaR4O8utxCZ5MZ7vvDjcZMFkclA8tZ-oCYLlpCUyhUqrV6mdoUhyghKnpqnVtN0%2BgNJoNbh95ONcXjBlAABaGEQTUn4p5eGl4gC%2BjMm33pTFZg3RQmBJEMlC5RB5fIFCDYCAAHighUdLiYhSL-HAjFAZSTJulMigAkLBDZ5D5KMTadyMUI5HgTabBhahYMWRq8VqATqkPaiC7UAB5CgeuAiVxglAkBDAoQ1BBgD2Ge5u602u1OyaOm2xxwoX0oBOmpM21Om4oIBA52lIBAoADuEDwnAAYsWACKtbSGPAewblqs1%2BvF1xxjtEEQAI0yYAbCGb2lb7eTeJHY4n-Yzg6YlcMegng6LCH5lDYeA6TEMaqEEHdc8mkrkpT4683xcH14Qt-vE6nM49BdpSr3CAAqkwYDLhWWYer%2BYqAcBca6pe%2BpyCEYRCt%2BkyiLGAAKwjApyyYbui8LaAEpTIpQdatqIQr4NUeCNDAQjaGAFhGggrIFo6TIgJIIB1MIhjDm0TAYCAOKDL0IDzFsYm8GJrhUK4AAaAB0AAMkoAGwAMyGAA7DQAAcylqcpACcenDmAGlgMZACsNDKVAUAACwaRp1lqbY2l6YYRbWRZenucZYmSDSYm7JJGBEDJclKapUDaQAjKZznaaZ9nKY58VQAZ1mGPFUZQMOhjWfZmUIL5w42fF8V6UFIXiRcJwsRFYnxbVuJiQSzychFzgiaaYkUlS7rNSAskKW1NodRyUmRSAqnWRpNDGQgw4AMLWcZykacOACi8WrUVjmOdpak0Il8Uac5dZGTtjbDtZq3GQdGliaxkTBe14BvNNI3zYty1rRtW27fth3Had52XRp13Kbd92Pc9E2zV6KDZBCwIzWJymKTQL2cXVSIomiGL1DNSAwNO-QcUyQA)

::: code-group

```ts [JavaScript]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const query = `
query RouteV2($srcToken: String!, $destToken: String!, $slippage: String!, $addresses: [AddressRouteInputTypeV2!]!, $destAddress: String!, $amountSource: String, $infiniteApproval: Boolean) {
  routingV2 {
    routeV2(srcToken: $srcToken, destToken: $destToken, slippage: $slippage, addresses: $addresses, destAddress: $destAddress, amountSource: $amountSource, infiniteApproval: $infiniteApproval) {
      addresses {
        chain
        address
      }
      destAddress
      priceRate
      priceRateText
      slippage
      priceImpact
      amountIn
      tradesRoute {
        provider {
          id
        }
        amountIn
        amountOut
        minAmountReceived
        assetIn {
          id
        }
        assetOut {
          id
        }
        fee {
          networkFeeDollar
          networkFeeAsset
          inboundFeeDollar
          inboundFeeAsset
          swapFee
          feeRateTransaction
          xdefiSwapFee
          xdefiSwapFeeDollar
        }
        priceRateUsdAssetOut
        priceRateUsdAssetIn
        tradeType
      }
      gasPrices
      approvalInfiniteFlag
      errorBuildingRoute
    }
  }
}`;
const vars = {
  srcToken: "AVAX.0x63a72806098bd3d9520cc43356dd78afe5d386d9",
  destToken: "AVAX.0xc7198437980c041c805a1edcba50c1ce5db95118",
  slippage: "1",
  addresses: [
    {
      chain: "AVAX",
      address: "0x5329ebC5903bE1Ca544762191343F60EDb5C9Ca3",
    },
  ],
  destAddress: "0x5329ebC5903bE1Ca544762191343F60EDb5C9Ca3",
  amountSource: "0.23",
  infiniteApproval: null,
};

const fetchRouteV2 = async () => {
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

fetchRouteV2();
```

```js [Variables]
{
  "srcToken": "AVAX.0x63a72806098bd3d9520cc43356dd78afe5d386d9",
  "destToken": "AVAX.0xc7198437980c041c805a1edcba50c1ce5db95118",
  "slippage": "1",
  "addresses": [
    {
      "chain": "AVAX",
      "address": "0x5329ebC5903bE1Ca544762191343F60EDb5C9Ca3"
    },
  ],
  "destAddress": "0x5329ebC5903bE1Ca544762191343F60EDb5C9Ca3",
  "amountSource": "0.23",
  "infiniteApproval": null
}
```

```ts [Snippets]
enum TradeType {
  APPROVAL = "APPROVAL",
  BRIDGE = "BRIDGE",
  REDEEM = "REDEEM",
  SWAP = "SWAP",
}
```

:::

<div ref="refRouteV2"></div>

**Variables:**

- `chainName`: This variable is obtained from step [1.1](#1.1-get-list-of-supported-chains).
- `contract`: This variable is obtained from step [1.2](#1.2-get-list-of-assets-for-supported-chain.
- `srcToken`: This variable has the format `${chainName}.${contract} and represents the token to be swapped.
- `destToken`: This variable also has the format `${chainName}.${contract}` and represents the token to receive in exchange.
- For native tokens, the format is `${chainName}.${nativeTokenName}`. For example, Ethereum's native token is "ETH", so the format would be "ETH.ETH". For Polygon, it's "POLYGON.MATIC", and for Binance Smart Chain, it's "BSC.BNB".
- `slippage`: This variable represents the percentage of slippage tolerance for the trade.
- `addresses`: This variable is a collection of addresses available to sign transactions. For this swap, we only need one, as the trade takes place within the Avalanche chain.
- `destAddress`: This variable represents the address that will receive the swapped Avalanche (USDT) upon completion of the trade.
- `amountSource`: This variable represents the amount of Avalanche (AAVE) to be swapped.
- `infiniteApproval`: Using this prop is not mandatory, but it allows users to avoid approving trades when swapping ERC20 tokens. However, it's important to note that the first approval still needs to be granted.

**Response:**

- `networkFeeDollar`: Provider fee. 1Inch in example.
- `networkFeeAsset`: Provider fee in asset value.
- `inboundFeeDollar`: Network fee for transaction. Cost of Avalanche transaction.
- `inboundFeeAsset`: Network fee for transaction in native token. AVAX in example.

**Snippets:**

- Enum describes all possible values for `tradeType` property from the response.

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'

import ChainsV2GraphQL from '../components/ChainsV2GraphQL.jsx'
import ChainV2GraphQL from '../components/ChainV2GraphQL.jsx'
import RouteV2 from '../components/RouteV2.jsx'

const refChainsV2GraphQL = ref()
const refChainV2GraphQL = ref()
const refRouteV2 = ref()
onMounted(() => {
  const rootChainsV2GraphQL = createRoot(refChainsV2GraphQL.value)
  rootChainsV2GraphQL.render(createElement(ChainsV2GraphQL, {}, null))

  const rootChainV2GraphQL = createRoot(refChainV2GraphQL.value)
  rootChainV2GraphQL.render(createElement(ChainV2GraphQL, {}, null))

  const rootRouteV2 = createRoot(refRouteV2.value)
  rootRouteV2.render(createElement(RouteV2, {}, null))
})
</script>
