# Indexers API

## Overview

XDEFI provide GraphQL API for developers to interact with the XDEFI Wallet. Some services that can be accessed through the API are: get balance, get gas fee, and get transaction. Make sure to install the XDEFI Wallet extension.

The base URL for all API endpoints is: `https://gql-router.xdefiservices.com/graphql`.

<details>
<summary>Here are the chains supported by the XDEFI Wallet:</summary>

| Name                | Key                 | Base chain    | Chain ID (Cosmos) |
| ------------------- | ------------------- | ------------- | ----------------- |
| Akash               | `akash`             | CosmosChain   | `akashnet-2`      |
| Arbitrum            | `arbitrum`          | EVM           |                   |
| Aurora              | `aurora`            | EVM           |                   |
| Avalanche           | `avalanche`         | EVM           |                   |
| Axelar              | `axelar`            | CosmosChain   | `axelar-dojo-1`   |
| Binance             | `binance`           | BinanceChain  |                   |
| Binance Smart Chain | `binanceSmartChain` | EVM           |                   |
| Bitcoin             | `bitcoin`           | BitcoinChain  |                   |
| Bitcoin Cash        | `bitcoincash`       | BitcoinChain  |                   |
| Canto EVM           | `cantoEVM`          | EVM           |                   |
| Cosmos Hub          | `cosmos`            | CosmosChain   | `cosmoshub-4`     |
| Crescent            | `crescent`          | CosmosChain   | `crescent-1`      |
| Cronos EVM          | `cronosEVM`         | EVM           |                   |
| Dogecoin            | `dogecoin`          | BitcoinChain  |                   |
| Ethereum            | `ethereum`          | EVM           |                   |
| Fantom              | `fantom`            | EVM           |                   |
| Juno                | `juno`              | CosmosChain   | `juno-1`          |
| Kava                | `kava`              | CosmosChain   | `kava-4`          |
| Kujira              | `kujira`            | CosmosChain   | `kaiyo-1`         |
| Litecoin            | `litecoin`          | BitcoinChain  |                   |
| Mars                | `mars`              | CosmosChain   | `mars-1`          |
| Maya Protocol       | `mayachain`         | MayaChain     |                   |
| Near                | `near`              | NearChain     |                   |
| Optimism            | `optimism`          | EVM           |                   |
| Osmosis             | `osmosis`           | CosmosChain   | `osmosis-1`       |
| Polygon             | `polygon`           | EVM           |                   |
| Sei                 | `sei`               | CosmosChain   | `atlantic-2`      |
| Solana              | `solana`            | SolanaChain   |                   |
| Stargaze            | `stargaze`          | StargazeChain |                   |
| Stride              | `stride`            | CosmosChain   | `stride-1`        |
| Terra               | `terra`             | TerraChain    |                   |
| Terra Classic       | `terraClassic`      | TerraChain    |                   |
| ThorChain           | `thorchain`         | ThorChain     |                   |
| Tron                | `tron`              | TronChain     |                   |

</details>

<div ref="refIndexerAPIComponent"/>

## Get Balance

::: code-group

```javascript [EVM Chain]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefiservices.com/graphql";
const query = `query GetBalances($address: String!, $first: Int, $after: String) {
  ${chain.key} {
    balances(address: $address, first: $first, after: $after) {
      amount {
        value
      }
    }
  }
}`;

await fetch(GRAPHQL_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query,
    variables: {
      address: window.xfi.ethereum.accounts[0] || window.ethereum.accounts[0],
      first: 1,
      after: null,
    },
  }),
})
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    // Do something with the result
  });
```

```javascript [CosmosChain]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefiservices.com/graphql";
const query = `query GetBalances($address: String!, $tokenAddresses: [String!]) {
  ${chain.key} {
    balances(address: $address, tokenAddresses: $tokenAddresses) {
      amount {
        value
      }
    }
  }
}`;

await window.xfi.keplr.enable(chain.chainId);
const offlineSigner = await window.xfi.keplr.getOfflineSigner(chain.chainId);
const accounts = await offlineSigner.getAccounts();
await fetch(GRAPHQL_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query,
    variables: {
      address: accounts[0].address,
      tokenAddresses: null,
    },
  }),
})
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    // Do something with the result
  });
```

```javascript [Other Chain]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefiservices.com/graphql";
const query = `query GetBalances($address: String!) {
  ${chain.key} {
    balances(address: $address) {
      amount {
        value
      }
    }
  }
}`;

await window.xfi[chain.key].request(
  { method: "request_accounts", params: [] },
  (error, accounts) => {
    fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          address: accounts[0],
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // Do something with the result
      });
  },
);
```

:::

<div ref="refGetBalance"/>

## Get Transaction

::: code-group

```javascript [EVM Chain]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefiservices.com/graphql";
const query = `query GetTransactions($address: String!, $first: Int, $after: String) {
  ${chain.key} {
    transactions(address: $address, first: $first, after: $after) {
      edges {
        node {
          blockNumber
          hash
          status
          timestamp
          transfers {
            amount {
              value
            }
            fromAddress
            toAddress
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
}`;

await fetch(GRAPHQL_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query,
    variables: {
      address: window.xfi.ethereum.accounts[0] || window.ethereum.accounts[0],
      first: 1,
      after: null,
    },
  }),
})
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    // Do something with the result
  });
```

```javascript [CosmosChain]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefiservices.com/graphql";
const query = `query GetTransactions($address: String!, $first: Int, $after: String) {
  ${chain.key} {
    transactions(address: $address, first: $first, after: $after) {
      edges {
        node {
          blockHeight
          hash
          signers
          status
          timestamp
          transfers {
            amount {
              value
            }
            fromAddress
            toAddress
          }
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
    }
  }
}`;

await window.xfi.keplr.enable(chain.chainId);
const offlineSigner = await window.xfi.keplr.getOfflineSigner(chain.chainId);
const accounts = await offlineSigner.getAccounts();
await fetch(GRAPHQL_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query,
    variables: {
      address: accounts[0].address,
      first: 1,
      after: null,
    },
  }),
})
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    // Do something with the result
  });
```

```javascript [Other Chain]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefiservices.com/graphql";
const query = `query GetTransactions($address: String!, $first: Int!, $after: String) {
  ${chain.key} {
    transactionsV3(address: $address, first: $first, after: $after) {
      edges {
        node {
          blockNumber
          hash
          status
          timestamp
          inputs {
            amount {
              value
            }
            address
          }
          outputs {
            amount {
              value
            }
            address
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
}`;

await window.xfi[chain.key].request(
  { method: "request_accounts", params: [] },
  (error, accounts) => {
    fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          address: accounts[0],
          first: 1,
          after: null,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // Do something with the result
      });
  },
);
```

:::

<div ref="refGetTransaction"/>

## Get Gas Fee

::: code-group

```javascript [Default Gas Fee]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefiservices.com/graphql";
const query = `query GetGasFee {
  ${chain.key} {
    fee {
      high
      low
      medium
    }
  }
}`;

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
    // Do something with the result
  });
```

```javascript [EIP1559 Gas Fee (Ethereum, Canto, Cronos)]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefiservices.com/graphql";
const query = `query GetFee {
  ${chain.key} {
    fee {
      defaultGasPrice
      high {
        maxFeePerGas
        baseFeePerGas
        priorityFeePerGas
      }
      low {
        baseFeePerGas
        maxFeePerGas
        priorityFeePerGas
      }
      medium {
        baseFeePerGas
        maxFeePerGas
        priorityFeePerGas
      }
    }
  }
}`;
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
    // Do something with the result
  });
```

:::

<div ref="refGetGasFee"/>

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'

import IndexerAPIComponent from '../components/IndexerAPIComponent.jsx'

import GetBalance from '../components/GetBalance.jsx'
import GetTransactions from '../components/GetTransactions.jsx'
import GetGasFee from '../components/GetGasFee.jsx'

const refIndexerAPIComponent = ref()
const refGetBalance = ref()
const refGetTransaction = ref()
const refGetGasFee = ref()
onMounted(() => {
  const rootIndexerAPIComponent = createRoot(refIndexerAPIComponent.value)
  rootIndexerAPIComponent.render(createElement(IndexerAPIComponent, {}, null))
  const rootGetBalance = createRoot(refGetBalance.value)
  rootGetBalance.render(createElement(GetBalance, {}, null))
  const rootGetTransaction = createRoot(refGetTransaction.value)
  rootGetTransaction.render(createElement(GetTransactions, {}, null))
  const rootGetGasFee = createRoot(refGetGasFee.value)
  rootGetGasFee.render(createElement(GetGasFee, {}, null))
})
</script>
