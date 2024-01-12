# Step-by-step Swap example

[[toc]]

## Swap Avalanche (AAVE) for Avalanche (USDT)

This particular route (swap) consists of two transactions. However, the number of transactions required for swapping different coins and across different chains may vary and depend on several factors such as the source coin, the destination coin, and the number of available addresses for signing transactions.

### Step 1
In this step, we prepare the data for the chains and assets that our routing system supports. This data enables us to display the source and destination tokens to users and query and display swap route in the next step.

#### 1.1 Get list of supported chains
[Explorer query ChainsV2](https://gql-router.xdefiservices.com/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAMIAWAhgJZIDOAagExHAA6SRReEMKNA5kxbtOnKJRoNmbDqM5IKiEaIC%2BytUhUgVQA)

::: code-group
```ts [Query]
query ChainsV2 {
  routingV2 {
    chainsV2 {
      name
    }
  }
}
```

```ts [Response]
{
  "data": {
    "routingV2": {
      "chainV2": {
        "name": "AVAX",
        "tokens": [
          ...
          {
            "asset": {
              "contract": "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
              "symbol": "USDT"
            }
          },
          {
            "asset": {
              "contract": "0x63a72806098bd3d9520cc43356dd78afe5d386d9",
              "symbol": "AAVE"
            }
          }
          ...
        ]
      }
    }
  }
}
```
:::


#### 1.2 Get list of assets for supported chain
[Explorer query ChainsV2](https://gql-router.xdefiservices.com/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAMIAWAhgJZIBqATABQAkSFi6RAyinjQOYBCAJRFgAHSREieCDBQCGYydOlRKNBozYcirdglESpq6ToQrTRFBADWyAM7KTVohQcOEKZ69NQIqHgUUCiWvkQOBHAARhAANmFWAL6J0ikuROlpkkkgADQgAG4UfBTRcQgOGCDG0uIg5vWc9QCCtC0AGvU5IElAA)

::: code-group
```ts [Query]
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
}
```

```ts [Variables]
{
  "name": "AVAX"
}
```

```ts [Response]
{
  "data": {
    "routingV2": {
      "chainV2": {
        "name": "AVAX",
        "tokens": [
          ...
          {
            "asset": {
              "contract": "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",
              "symbol": "USDT"
            }
          },
          {
            "asset": {
              "contract": "0x63a72806098bd3d9520cc43356dd78afe5d386d9",
              "symbol": "AAVE"
            }
          }
          ...
        ]
      }
    }
  }
}
```
:::

### Step 2
Query swap route. This query returns a `tradesRoute` collection, along with other properties. Based on this data, we can show the user which providers we will use, the amount of fees in dollars and assets for each transaction, and thus calculate the total fees and approximate transaction time in seconds.

[Explorer query RouteV2](https://gql-router.xdefiservices.com/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAEoQwoIBqATABQAkAznlACoQDWy6RAyijwBLJAHMAhABoiDMAiYoO3JLwHCxUmUwA2QgA56AhqISrBIidIaGwYPPKbzeAbQCCt%2B0yZkKCAJJIehRsBHrUNOIAupqy8ijudg5m6pYyhnDkqHzkrKb85mJWIgBmIkKUrgZ4EABuhtq8AEIQENoIhkgAlETAADpIRETVFBa0Pf2Dg8OUtHQs7Fw8WqxKyNJyCqsqMhuKi0jSOvpGJrzMugbGCNI2iV5OaR4O8utxCZ5MZ7vvDjcZMFkclA8tZ-oCYLlpCUyhUqrV6mdoUhyghKnpqnVtN0%2BgNJoNbh95ONcXjBlAABaGEQTUn4p5eGl4gC%2BjMm33pTFZg3RQmBJEMlC5RB5fIFCDYCAAHighUdLiYhSL-HAjFAZSTJulMigAkLBDZ5D5KMTadyMUI5HgTabBhahYMWRq8VqATqkPaiC7UAB5CgeuAiVxglAkBDAoQ1BBgD2Ge5u602u1OyaOm2xxwoX0oBOmpM21Om4oIBA52lIBAoADuEDwnAAYsWACKtbSGPAewblqs1%2BvF1xxjtEEQAI0yYAbCGb2lb7eTeJHY4n-Yzg6YlcMegng6LCH5lDYeA6TEMaqEEHdc8mkrkpT4683xcH14Qt-vE6nM49BdpSr3CAAqkwYDLhWWYer%2BYqAcBca6pe%2BpyCEYRCt%2BkyiLGAAKwjApyyYbui8LaAEpTIpQdatqIQr4NUeCNDAQjaGAFhGggrIFo6TIgJIIB1MIhjDm0TAYCAOKDL0IDzFsYm8GJrhUK4AAaAB0AAMkoAGwAMyGAA7DQAAcylqcpACcenDmAGlgMZACsNDKVAUAACwaRp1lqbY2l6YYRbWRZenucZYmSDSYm7JJGBEDJclKapUDaQAjKZznaaZ9nKY58VQAZ1mGPFUZQMOhjWfZmUIL5w42fF8V6UFIXiRcJwsRFYnxbVuJiQSzychFzgiaaYkUlS7rNSAskKW1NodRyUmRSAqnWRpNDGQgw4AMLWcZykacOACi8WrUVjmOdpak0Il8Uac5dZGTtjbDtZq3GQdGliaxkTBe14BvNNI3zYty1rRtW27fth3Had52XRp13Kbd92Pc9E2zV6KDZBCwIzWJymKTQL2cXVSIomiGL1DNSAwNO-QcUyQA)

::: code-group
```ts [Query]
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
}srcToken
```

```ts [Variables]
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

```ts [Response]
{
  "data": {
    "routingV2": {
      "routeV2": {
        "addresses": [
          {
            "chain": "AVAX",
            "address": "0x5329ebC5903bE1Ca544762191343F60EDb5C9Ca3"
          }
        ],
        "destAddress": "0x5329ebC5903bE1Ca544762191343F60EDb5C9Ca3",
        "priceRate": "83.41570269977431352948063293",
        "priceRateText": "1 AAVE = 83.415703 USDT",
        "slippage": "1",
        "priceImpact": "-1.71%",
        "amountIn": "0.23",
        "tradesRoute": [
          {
            "provider": {
              "id": "87c6a323-45ef-4153-9d6c-143cb5b9e98b"
            },
            "amountIn": "0.23",
            "amountOut": "0.23",
            "minAmountReceived": "0.23",
            "assetIn": {
              "id": "4a4edfe5-1cdb-4142-b068-de4ee7e3a1d1"
            },
            "assetOut": {
              "id": "4a4edfe5-1cdb-4142-b068-de4ee7e3a1d1"
            },
            "fee": {
              "networkFeeDollar": "0",
              "networkFeeAsset": "0",
              "inboundFeeDollar": "0.03291354",
              "inboundFeeAsset": "0.001782",
              "swapFee": "0.03291354",
              "feeRateTransaction": "29.7",
              "xdefiSwapFee": "0",
              "xdefiSwapFeeDollar": "0"
            },
            "priceRateUsdAssetOut": "83.36156590872216",
            "priceRateUsdAssetIn": "83.36156590872216",
            "tradeType": "APPROVAL"
          },
          {
            "provider": {
              "id": "87c6a323-45ef-4153-9d6c-143cb5b9e98b"
            },
            "amountIn": "0.23",
            "amountOut": "18.857786",
            "minAmountReceived": "18.66920814",
            "assetIn": {
              "id": "4a4edfe5-1cdb-4142-b068-de4ee7e3a1d1"
            },
            "assetOut": {
              "id": "bead7daf-8652-43b8-8d85-676e385b1ec2"
            },
            "fee": {
              "networkFeeDollar": "0",
              "networkFeeAsset": "0",
              "inboundFeeDollar": "0.26013688099740",
              "inboundFeeAsset": "0.014084292420",
              "swapFee": "0.26013688099740",
              "feeRateTransaction": "29.7",
              "xdefiSwapFee": "0",
              "xdefiSwapFeeDollar": "0E-14"
            },
            "priceRateUsdAssetOut": "0.999351",
            "priceRateUsdAssetIn": "83.36156590872216",
            "tradeType": "SWAP"
          }
        ],
        "gasPrices": {},
        "approvalInfiniteFlag": false,
        "errorBuildingRoute": null
      }
    }
  }
}
```

```ts [Snippets]
enum TradeType {
  APPROVAL = 'APPROVAL',
  BRIDGE = 'BRIDGE',
  REDEEM = 'REDEEM',
  SWAP = 'SWAP',
}
```
:::

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