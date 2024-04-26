# Assets and Prices API

## Getting Started

This guide will help you get started with the Assets and Prices API.

The Assets and Prices API is a free API that provides real-time and historical data on assets and prices for various blockchains. The API is designed to be easy to use and provides a wide range of data, including:

- Asset information, such as name, symbol, and decimals
- Price information, such as current price, market cap, and 24-hour trading volume
- Historical price data, such as price changes over time

The API is available for a wide range of blockchains, including Ethereum, Binance Smart Chain, and Solana, and supports a variety of assets, such as tokens, coins, and NFTs.

The base URL for all API endpoints is: https://gql-router.xdefi.services/graphql

## Get Assets Tokens

Get Assets Tokens provides information about tokens on various blockchains, including Ethereum, Binance Smart Chain, and Solana. The API returns data such as the token's name, symbol, icon, market cap, price, and contracts.

[Query GraphQL directly here](https://gql-router.xdefi.services/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAKIAeAhnAA4A2CAiroQBQAk1FA5gukQMIQkSBFBQBLIQEE8XAM4BCADRE2FAGYp8fACIUtAFXGIVazfgAKecVF5E9h4wlPrxtLXj4GIAa2QAxNw8ASiJgAB0kIiIKOTkEFDkwyOjolF9kORZOHj4ObmcY809VDQ8VMstrWzzKvCsbQtd3bVVmkOSo1OichAcKTu7uqAgYVBSh6NpjcRQJyYh1dXi5ru6AX3nU3sHJol6ASSR1CF29omQwfhg8OQg8LcmAC1iAOQQyFAsCx9TNtaGCDAPCSEQBkyQEDACDO5yI4jAvwhVAQSKGcgIcAARhBaGjujYhPjUnAKHg-Ch%2BBRqMSetUYWC4UMqKNxuC4XIoBRpkguP4KGJ7rSiP8mdERqg8ALErCmRjsbjhdFOdzxLz%2BYKHuzzhQwGA8Ag4kqiFAXmrjQjhaK4dbJra-ltrf9-iAlCAAG5k8QULH0OQYECMojhEC9EN8IPREOuW5zDBEACMSi2IaxCBOBvDRCQMFotGTAJDdSzObzBe6IdosTjfFLeK663LwZAxfjdabReKDVsJdz%2BYm0aC%2BCzkebuv1hrkvbLKZApooaqnbb7TajIARS9rK9n8pxtE32b7E2drtDEDkKHU0y4TxQAHlqPh9JIkABlKDWahoTAgdZAA)

::: code-group

```javascript [Example]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";

const query = `
  query Tokens($page: ConnectionArgs!, $after: DateTime, $afterPrice: DateTime, $filter: TokenFilter) {
    assets {
      tokens(page: $page, after: $after, afterPrice: $afterPrice, filter: $filter) {
        pageData {
          count
          limit
          offset
        }
        page {
          pageInfo {
            endCursor
            hasNextPage
          }
          edges {
            node {
              id
              name
              symbol
              icon
              marketCap
              price {
                amount
                scalingFactor
              }
              contracts {
                symbol
                scalingFactor
                address
                chain
                id
              }
            }
          }
        }
      }
    }
  }`;

const vars = {
  page: {
    first: 5,
    before: null,
    after: null,
    last: null,
  },
  after: null,
  afterPrice: null,
  filter: {
    address: null,
    chains: null,
    ids: null,
    symbols: null,
  },
};

const getAssetsTokens = async () => {
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
      // Handle the result
    });
};

getAssetsTokens();
```

```js [Variables]
{
  "page": {
    "first": Float,
    "before": String | null,
    "after": String | null,
    "last": Float | null
  },
  "after": DateTime | null,
  "afterPrice": DateTime | null,
  "filter": {
    "address": [String!] | null,
    "chains": [AssetChain!] | null,
    "ids": [String!] | null,
    "symbols": [String!] | null
  }
}
```

:::

<div ref="refAssetsTokens"/>

## Get Assets Supported Chains

Get Assets Supported Chains provides information about the supported chains for assets on the platform. The API return a list of supported chains, including Ethereum, Binance Smart Chain, Solana, and others.

[Query GraphQL directly here](https://gql-router.xdefi.services/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAMowAO5EeKCYAwgBYCGAlkgM5HAA6SRRZhw4IUXXvwFEOFKjTpM2nPgIC%2BfVSAA0IAG7M8rZgCMANgg4YQ2kIwTMw%2BS5htUOKAGanWAc0YoAeXJ8ZhRWCCQSKENyNBdVIA)

::: code-group

```javascript [Example]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const query = `
  query SupportedChains {
    assets {
      supportedChains
    }
  }`;

const getSupportedChains = async () => {
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
      // Handle the result
    });
};

getSupportedChains();
```

:::

<div ref="refAssetsSupportedChains"/>

## Get Assets Crypto Currencies

Get Assets Crypto Currencies provides information about cryptocurrencies on various blockchains, including Ethereum, Binance Smart Chain, and Solana. The API returns data such as the cryptocurrency's name, symbol, icon, type, external data, scaling factor, chain, market cap, and price.

[Query GraphQL directly here](https://gql-router.dev.xdefi.services/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAMKEAOKEJMeeyUAlggM4AUAJOQIYDmC6UhCRIEUFI2EBBPLxYBCADREOAM0YAbFPkFkClarXpIoBAGKbteZR26qrABTyMoAogBFu2gCqNENuytBTx8-BABKImAAHSQiIm4WFgQUFijY%2BPioCioaOgZmdh5%2BQS4%2BBGV1LR0VKqtlQPwnFzdbeybnVwb2vFLGvEiYuMz44oQQ7nThkayIGFQMmfiNP0YURaWIVVVk9enMgF8NzLGppdHygEkkVQgz8-iAC0SAOQQADxQHcuOl5DA8iwIHhfodQfEEGB%2BGkhg94kgIGAEPc4URGGBwTMkNxEJiRiwCHAAEYQDR4zIuYTk%2BIofQIalED5WbEaCYMuDcPAAaxSJG45AZLCg3BWSF4Zm44mBDKgz0YSAZ5E6yNhqMyOLmC32DyO2pmup1oINYOGuoOIEUIAAbpzGNwiRpWBgQKroiAxm7BKr4m71HgWOsMEQAKyKY5u-qeohIGAaMmmsPDX2WfBR71EN2y7jylhRmNxxMjN3o3NB-MaQuZN0E4mk0uCcuLA6ViM9ZquPOxiuLVtWTtx2Lmy3kCAB1QrXiPFAAeXI%2BC8kiQAGVsoxKM6QAcgA)

::: code-group

```javascript [Example]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const query = `
  query CryptoCurrencies($page: ConnectionArgs!, $filter: CryptoCurrencyFilter, $afterPrice: DateTime, $after: DateTime) {
    assets {
      cryptoCurrencies(page: $page, filter: $filter, afterPrice: $afterPrice, after: $after) {
        pageData {
          count
          limit
          offset
        }
        page {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              name
              symbol
              icon
              type
              externalData
              marketCap
              scalingFactor
              chain
              price {
                amount
              }
            }
          }
        }
      }
    }
  }`;

const vars = {
  page: {
    first: 5,
    after: null,
  },
  filter: {
    chains: null,
    ids: null,
    symbols: null,
  },
  afterPrice: null,
  after: null,
};

const getCryptoCurrencies = async () => {
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
      // Handle the result
    });
};

getCryptoCurrencies();
```

```js [Variables]
{
  "page": {
    "first": Float,
    "after": String | null
  },
  "filter": {
    "chains": [AssetChain!] | null,
    "ids": [String!] | null,
    "symbols": [String!] | null
  },
  "afterPrice": DateTime | null,
  "after": DateTime | null
}
```

:::

<div ref="refAssetsCryptoCurrencies"/>

## Get Crypto Assets

Get Crypto Assets provides information about crypto assets on various blockchains, including Ethereum, Binance Smart Chain, and Solana. The API returns data such as the crypto asset's name, symbol, icon, type, external data, scaling factor, chain, market cap, and price.

[Query GraphQL directly here](https://gql-router.xdefi.services/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAMKEAOKEAggM60Iq0AUAJAJZLkwrpEDaZApRr1G1PAHNaAQgC6MgJRFgAHSREiAQzFMV6zZqgUqdBk2aduvIhy49lajYaMALLZwMuiUCKjxaUCheLmAIUOxwWgA2tCGG7GDxmpFakgjJREhaiJnkeOxQCPrO3kS0UDGckgBigVR4mZq05Fp4ANbRnBml3jkQMKiZAL6ZtARwAEYQ0Zkowj0uo87LwyAANCAAbm3sWpPRCLQYIE6aqiBWPBd8-PFn3hdQ7p4YRBcAoiiu%2BAjwF-Flpo5Oo1psflownhjpgNiByBBaCgAGZdSSuFAAeXI%2BC0KHYfgAysZ2JQTiBhkA)

Chains supported in [Get Assets Supported Chains](#get-assets-supported-chains)

::: code-group

```javascript [Example]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const query = `
  query CryptoAssets($input: [CryptoAssetArgs!]!) {
  assets {
    cryptoAssets(input: $input) {
      chain
      contract
      decimals
      id
      image
      name
      price {
        scalingFactor
        amount
      }
      symbol
      type
    }
  }
}`;

const vars = {
  input: [
    {
      chain: "Bitcoin", // [!code highlight]
    },
    {
      chain: "Ethereum", // [!code highlight]
    },
  ],
};

const getCryptoAssets = async () => {
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
      // Handle the result
    });
};

getCryptoAssets();
```

```js [Variables]
{
  input: [
    {
      chain: String,
    },
    ...
  ]
}
```

:::

<div ref="refAssetsCrypto"/>

## Get Assets Fiat Currencies

Get Assets Fiat Currencies provides information about fiat currencies on various blockchains, including Ethereum, Binance Smart Chain, and Solana. The API returns data such as the fiat currency's name, symbol, scaling factor, character, and price.

[Query GraphQL directly here](https://gql-router.dev.xdefi.services/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAGICWAhigMIx57JRkIDOAFACQAOFA5guiLUISJAigoyIgIJ5eLAIQAaIhwBmZADYp8g8lVr1GBctvwqOFNTryCAIlQQAVMogtWbABTxkoAog46LogAlETAADpIREQULCwIKCzhUTExGgZ0DEhMrGw8-ILcfAgqGma2quU2Kh66qnV4tdb43r7%2Bli14bX5hkdFpMQUIgRQpA4MxUBAwqKmTMZquZCjzCxBqagmrE2kAvmtpw%2BMLQyUAkkhqECenMchghiwQeIcLABZxAHIIAB4onhKb32wPuYH4yX6dxiSAgYAQt2hRDIYFBkyQFEQaMGLAIcAARhBNNi0iwoBQlkheCQKBIXiSpp88LSbAyiFwfH5EUjYnAZnNdncDoLJsKhcCxSCBsK9iAlCAAG4UHwUfGaVgYEBQogREDDXWCbUxXUaPAsVYYIgAViUh11jQNRCQME0xOltoGJq0rMtRp1IBRLEdztd8z2HuNIAdlpDmgj-saPQQwZdbtl8q4EHNaiWvHeKAA8lx8FQpEgAMpQHxcNCYEB7IA)

::: code-group

```javascript [Example]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const query = `
  query FiatCurrencies($page: ConnectionArgs!, $filter: FiatCurrencyFilter, $after: DateTime, $afterPrice: DateTime) {
    assets {
      fiatCurrencies(page: $page, filter: $filter, after: $after, afterPrice: $afterPrice) {
        pageData {
          count
          limit
          offset
        }
        page {
          pageInfo {
            endCursor
            hasNextPage
          }
          edges {
            node {
              id
              name
              symbol
              scalingFactor
              character
              price {
                amount
              }
            }
          }
        }
      }
    }
  }`;

const vars = {
  page: {
    first: 5, // [!code highlight]
    after: null, // [!code highlight]
  },
  filter: {
    ids: null, // [!code highlight]
  },
  after: null, // [!code highlight]
  afterPrice: null, // [!code highlight]
};

const getFiatCurrencies = async () => {
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
      // Handle the result
    });
};

getFiatCurrencies();
```

```js [Variables]
{
  "page": {
    "first": Float,
    "after": String | null
  },
  "filter": {
    "ids": [String!] | null
  },
  "after": DateTime | null,
  "afterPrice": DateTime | null
}
```

:::

<div ref="refAssetsFiatCurrencies"/>

## Get Trending Tokens

Get Trending Tokens provides information about trending tokens Top Market Cap/Gainers/Losers. The API returns data such as the token's symbol, scaling factor, address, chain, fees, defi protocols, and external data. 

### Get Top Market Cap Tokens

[Query GraphQL directly here](https://gql-router.xdefi.services/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABACoQAOAsgIZ4DWCKAwteUcADpJFHUDOfRn3ZcePFBRr1GLNp25ie-QSgCSYUYqJQAFtQCWSPpsVJqiE2PJ59UBCIVbecCDFSXFfKNQA2hgOYAYtRQEngeYnC0DMysAErUSHQRPGAGPgQAEvr%2BOilEafoZADIQAO75vj4k%2BoilFY5aVTWI2bkRAL4RfARwAEYQPhEoBOQIll0Kkx0gADQgAG60%2BtR9Pgh8GCBzIDoI1GD4m5g75BB8KABmfrkoAPJjeNQo%2BhBIAMpQNuRoJx1AA)

::: code-group

```javascript [Example]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";

const query = `query TopMarketCap {
  assets {
    topMarketCap {
      assetId
      chains
      name
      price {
        amount
        scalingFactor
        marketCapRank
        dailyHigh
        dailyLow
        allTimeLow
        allTimeHigh
      }
      symbol
      type
    }
  }
}`;

const getTopMarketCapTokens = async () => {
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
      // Handle the result
    });
};

getTopMarketCapTokens();
```

:::

<div ref="refAssetsTrendingTopMarket"/>

### Get Gainers Tokens

[Query GraphQL directly here](https://gql-router.xdefi.services/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABADIQDO%2B5RwAOkkUQIbmUrV0ONEA2FVNet24s2ASTBDhRKAAsmASyTkpwpE0SruABzwKoCQV2nM4EGKi3DyUJjyUBzAGJMoKCHitEAvl-IE4ACMIHi8UAm0ELV8uGO8QABoQADcmPSZAngRyDBBEkFkEJjAqXPztChQAM3sHWRQAeUi8JhQFCCQAZSg9bTRMEG8gA)

::: code-group

```javascript [Example]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";

const query = `query Gainers {
  assets {
    gainers {
      assetId
      chains
      name
      price {
        amount
        scalingFactor
      }
      symbol
      type
    }
  }
}`;

const getGainersTokens = async () => {
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
      // Handle the result
    });
};

getGainersTokens();
```

:::

<div ref="refAssetsTrendingGainers"/>

### Get Losers Tokens

[Query GraphQL directly here](https://gql-router.xdefi.services/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOICGAlkvgM5HAA6SRRZNNCKdjzLRA5pWp5uTPnzYcUASTBjxRKAAshNeeKRlE6vgAc8FKAno7xWiDFSm%2BNKGQA2VfgDEyUFBDzWAvtZoE4ACMIe2sUAl0EHV9eGO8QABoQADcyAzJA%2BwQaDBBEkCUEMjBaXPzdCBoUADNHfiUUAHlIvDIUCggkAGUoA100TBBvIA)

::: code-group

```javascript [Example]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";

const query = `query Losers {
  assets {
    losers {
      assetId
      chains
      name
      price {
        amount
        scalingFactor
      }
      symbol
      type
    }
  }
}`;

const getLosersTokens = async () => {
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
      // Handle the result
    });
};

getLosersTokens();
```

:::

<div ref="refAssetsTrendingLosers"/>

## Get LP Tokens

Get LP Tokens is fully the same structure as Get Assets Tokens but it’s like "Low Priority" tokens. The API returns data such as the LP token's symbol, scaling factor, address, chain, fees, defi protocols and external data.

[Query GraphQL directly here](https://gql-router.dev.xdefi.services/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABADIAKAKhANbIDOAFACQAOAhgOYLpEDCESJAigoAlgICCeDnQCEAGiJMAZqIA2KfDyq0kAMXWa8ipm2VGeAETaaKoxCbNGyeUVG5Frt%2BwgCURYAAdJCIiNjo6BBQ6AODQ0LUWHXoGdi4eVk4ERVUNLSVco0UnfNNzfGLyvBc3DzLnV3d-IJD40LSELzZY1rbQqAgYVDi%2BhPtRFBHRiGVlSMne%2BIBfKfiOntH2rIBJJGUIDc3Q5DBeGDw6CDxV0YALcIA5BAAPFDIsm%2BXP47AuGJajqEkBAwAhDoCiANUHg2CJ-t9NqIwAjRnQCHAAEYQNQovp0KBsNSiJAcPSwlBXXFtNhgMB4BARKnxKD3YlM0LKBBggEQvoAN0JuHZRBWiwhoNULggFIGanBvP6rKQwtCbgEKqISDYiGFooVet5LyMWrUXSZSPNUKZWp1Ys2cDYeFoKF4bBYTJYjW5wu1g2GdtGBohaMx2KZKAILAQuKDfVjoVjBtFSxA8hAAtcbAxagZGBAPMCIA6hZ4PNChdUF0mGCIAFZ5KtCyVrjWkDA1DjWksG60K4Z8CX5YWQ1i1HRB22Oz22oWkePW%2B21NP4oWWWxifOeJOl42QDS6QzN5rFyNuyMm1UJ4vlxeGrUrx3gim0ywIHQUMoiRxbigAPJRmExAEABlKBXBYNBMBAJYgA)

::: code-group

```javascript [Example]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const query = `
  query LPTokens($page: ConnectionArgs!, $filter: TokenFilter, $after: DateTime, $afterPrice: DateTime) {
    assets {
      lpTokens(page: $page, filter: $filter, after: $after, afterPrice: $afterPrice) {
        pageData {
          count
          limit
          offset
        }
        page {
          pageInfo {
            endCursor
            hasNextPage
          }
          edges {
            node {
              contracts {
                id
                symbol
                scalingFactor
                address
                chain
                fee {
                  value
                }
                defiProtocol {
                  chain
                  icon
                  name
                }
              }
              externalData
              id
              icon
              name
              marketCap
              price {
                amount
              }
              symbol
              type
            }
          }
        }
      }
    }
  }`;

const vars = {
  page: {
    first: 5,
    after: null,
    before: null,
    last: null,
  },
  filter: {
    symbols: null,
    ids: null,
    chains: null,
    address: null,
  },
  after: null,
  afterPrice: null,
};

const getAssetsLPTokens = async () => {
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
      // Handle the result
    });
};
```

```js [Variables]
{
  "page": {
    "first": Float,
    "after": String | null,
    "before": String | null,
    "last": Float | null
  },
  "filter": {
    "symbols": [String!] | null,
    "ids": [String!] | null,
    "chains": [AssetChain!] | null,
    "address": [String!] | null
  },
  "after": DateTime | null,
  "afterPrice": DateTime | null
}
```

:::

<div ref="refAssetsLPTokens"/>

## Composite Tokens

<div align="center">Coming soon!</div>

<div ref="refAssetsCompositeTokens"/>

## Subscription Service

Subscription Service is a service that allows you to subscribe to real-time updates for assets and prices. Flow the below steps to subscribe to the service:

1. Get all added by user asset ids
   ![Get all added by user asset ids](../assets/images/subscription-service.png)
2. Subscribe on them using subscription service
3. Keep up to date his assets and total amount (on the top of wallet)

When you subscribe to the service, you will receive real-time updates for the assets and prices you are interested in. This allows you to stay informed about the latest changes in the market and make informed decisions about your investments. Checkout the websockets API for more information.

[Here is the example for Subscription Assets Prices](https://subscription-service.dev.xdefi.services/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGcYCMtQBOAlgA4rERIAEAyngSeZUgBQAkxYW61A2rRQkkAcwCEAXQCU1YAB0a1UiSgJWXHtU7cZ8xdWpQAFgENiSBQYNdLV5cVWzbV6ibgQYqZ9QC%2B3rACecLgQADbeKAGkCN5IbjH6hlRCJlAoWE6JBiZgYIQIWFjeBsZmFlnUgcFhxZVQJqHmIgBiqSgQhLVgCABmxAAKhBDtUGGZLi4OVLUlpuYz1HGItX4VNomrk6PlLggAHigIhHGhACImKCbecCaEANYIKADCJqT%2B9Y2irWkdtqurIB8QA)

::: code-group

```javascript [Example]
import * as pkg from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const { gql, ApolloClient, InMemoryCache } = pkg;

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://subscription-service.dev.xdefi.services/graphql",
  }),
);

const query = gql`
  subscription Subscription($ids: [String!]) {
    price(ids: $ids) {
      chain
      id
      price {
        amount
      }
      symbol
      type
      name
      contracts {
        address
        chain
        symbol
        scalingFactor
        defiProtocol {
          icon
          chain
          name
        }
        id
      }
      icon
      externalData
      marketCap
      scalingFactor
    }
  }
`;

const vars = {
  ids: [],
};

const subscriptionServices = async () => {
  if (loading) {
    setLoading(false);
    return;
  }
  setLoading(true);
  setResponse({});

  const client = new ApolloClient({
    link: wsLink,
    cache: new InMemoryCache(),
  });

  client
    .subscribe({
      query,
      variables: vars,
    })
    .subscribe({
      next: (data) => {
        console.log(data);
        // Handle the data
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log("completed");
      },
    });
};

subscriptionServices();
```

:::

<div ref="refSubscriptionService"/>

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'

import AssetsTokens from '../components/AssetsTokens.jsx'
import AssetsSupportedChains from '../components/AssetsSupportedChains.jsx'
import AssetsCryptoCurrencies from '../components/AssetsCryptoCurrencies.jsx'
import AssetsCrypto from '../components/AssetsCrypto.jsx'
import AssetsFiatCurrencies from '../components/AssetsFiatCurrencies.jsx'
import AssetsTrendingTokens from '../components/AssetsTrendingTokens.jsx'
import AssetsLPTokens from '../components/AssetsLPTokens.jsx'
import SubscriptionService from '../components/SubscriptionService.jsx'

const refAssetsTokens = ref()
const refAssetsSupportedChains = ref()
const refAssetsCryptoCurrencies = ref()
const refAssetsFiatCurrencies = ref()
const refAssetsCrypto = ref()
const refAssetsTrendingTopMarket = ref()
const refAssetsTrendingGainers = ref()
const refAssetsTrendingLosers = ref()
const refAssetsLPTokens = ref()
const refSubscriptionService = ref()
onMounted(() => {
  const rootAssetsTokens = createRoot(refAssetsTokens.value)
  rootAssetsTokens.render(createElement(AssetsTokens, {}, null))
  const rootAssetsSupportedChains = createRoot(refAssetsSupportedChains.value)
  rootAssetsSupportedChains.render(createElement(AssetsSupportedChains, {}, null))
  const rootAssetsCryptoCurrencies = createRoot(refAssetsCryptoCurrencies.value)
  rootAssetsCryptoCurrencies.render(createElement(AssetsCryptoCurrencies, {}, null))
  const rootAssetsFiatCurrencies = createRoot(refAssetsFiatCurrencies.value)
  rootAssetsFiatCurrencies.render(createElement(AssetsFiatCurrencies, {}, null))
  const rootAssetsCrypto = createRoot(refAssetsCrypto.value)
  rootAssetsCrypto.render(createElement(AssetsCrypto, {}, null))
  const rootAssetsTrendingTopMarket = createRoot(refAssetsTrendingTopMarket.value)
  rootAssetsTrendingTopMarket.render(createElement(AssetsTrendingTokens, { type: 'top' }, null))
  const rootAssetsTrendingGainers = createRoot(refAssetsTrendingGainers.value)
  rootAssetsTrendingGainers.render(createElement(AssetsTrendingTokens, { type: 'gainers' }, null))
  const rootAssetsTrendingLosers = createRoot(refAssetsTrendingLosers.value)
  rootAssetsTrendingLosers.render(createElement(AssetsTrendingTokens, { type: 'losers' }, null))
  const rootAssetsLPTokens = createRoot(refAssetsLPTokens.value)
  rootAssetsLPTokens.render(createElement(AssetsLPTokens, {}, null))
  const rootSubscriptionService = createRoot(refSubscriptionService.value)
  rootSubscriptionService.render(createElement(SubscriptionService, {}, null))
})
</script>
