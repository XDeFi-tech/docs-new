# Indexers API

## Overview

XDEFI provides Indexers API for developers to fetch balances, transactions, fees across many blockchains supported by Ctrl Wallet.

The base URL for all API endpoints is: https://gql-router.xdefi.services/graphql.

<details>
<summary>Here are the chains supported by the Indexers API:</summary>

| Chain               | Key                 | Base chain    |
| ------------------- | ------------------- | ------------- |
| Akash               | `akash`             | CosmosChain   |
| Arbitrum            | `arbitrum`          | EVM           |
| Aurora              | `aurora`            | EVM           |
| Avalanche           | `avalanche`         | EVM           |
| Axelar              | `axelar`            | CosmosChain   |
| Binance             | `binance`           | BinanceChain  |
| Binance Smart Chain | `binanceSmartChain` | EVM           |
| Bitcoin             | `bitcoin`           | BitcoinChain  |
| Bitcoin Cash        | `bitcoincash`       | BitcoinChain  |
| Canto               | `cantoEVM`          | EVM           |
| Cosmos Hub          | `cosmos`            | CosmosChain   |
| Crescent            | `crescent`          | CosmosChain   |
| Cronos              | `cronosEVM`         | EVM           |
| Dogecoin            | `dogecoin`          | BitcoinChain  |
| Ethereum            | `ethereum`          | EVM           |
| Fantom              | `fantom`            | EVM           |
| Juno                | `juno`              | CosmosChain   |
| Kava                | `kava`              | CosmosChain   |
| Kujira              | `kujira`            | CosmosChain   |
| Litecoin            | `litecoin`          | BitcoinChain  |
| Maya Protocol       | `mayachain`         | MayaChain     |
| Near                | `near`              | NearChain     |
| Optimism            | `optimism`          | EVM           |
| Osmosis             | `osmosis`           | CosmosChain   |
| Polygon             | `polygon`           | EVM           |
| Solana              | `solana`            | SolanaChain   |
| Stargaze            | `stargaze`          | StargazeChain |
| Stride              | `stride`            | CosmosChain   |
| ThorChain           | `thorchain`         | ThorChain     |
| Tron                | `tron`              | TronChain     |

</details>

## Get Balance

::: code-group

```javascript [EVM Chain]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const query = `query GetBalances($address: String!, $first: Int, $after: String) {
  ${chain.key} { // [!code highlight]
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
    "apollographql-client-name": "docs-indexers-api",
    "apollographql-client-version": "v1.0",
  },
  body: JSON.stringify({
    query,
    variables: {
      address: address // Input address // [!code highlight]
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
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const query = `query GetBalances($address: String!, $tokenAddresses: [String!]) {
  ${chain.key} { // [!code highlight]
    balances(address: $address, tokenAddresses: $tokenAddresses) {
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
      address: address // Input address // [!code highlight]
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
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const query = `query GetBalances($address: String!) {
  ${chain.key} { // [!code highlight]
    balances(address: $address) {
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
    "apollographql-client-name": "docs-indexers-api",
    "apollographql-client-version": "v1.0",
  },
  body: JSON.stringify({
    query,
    variables: {
      address: address, // Input address // [!code highlight]
    },
  }),
})
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    // Do something with the result
  });
```

:::

<div ref="refGetBalance"/>

## Get Gas Fee

::: code-group

```javascript [Default Gas Fee]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const query = `query GetGasFee {
  ${chain.key} { // [!code highlight]
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
    "apollographql-client-name": "docs-indexers-api",
    "apollographql-client-version": "v1.0",
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
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const query = `query GetFee {
  ${chain.key} { // [!code highlight]
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
    "apollographql-client-name": "docs-indexers-api",
    "apollographql-client-version": "v1.0",
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

## UTXOs (Bitcoin, Bitcoin Cash, Dogecoin, Litecoin)

### Get Unspent Transaction Outputs (UTXOs)

::: code-group

```javascript [Get UTXOs]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const query = `query GetUnspentTxOutputsV5($address: String!, $page: Int!) {
  ${chain.key} { // [!code highlight]
    unspentTxOutputsV5(address: $address, page: $page) {
      oIndex
      oTxHash
      value {
        value
      }
      scriptHex
      oTxHex
      isCoinbase
      address
    }
  }
}`;

await fetch(GRAPHQL_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "apollographql-client-name": "docs-indexers-api",
    "apollographql-client-version": "v1.0",
  },
  body: JSON.stringify({
    query,
    variables: {
      address: address, // Input address // [!code highlight]
      page: 1,
    },
  }),
})
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    // Do something with the result
  });
```

:::

<div ref="refGetUTXOs"/>

### Broadcast Transaction

::: code-group

```javascript [Broadcast Transaction]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
const query = `query BroadcastTransaction($rawHex: String!) {
  ${chain.key} { // [!code highlight]
    broadcastTransaction(rawHex: $rawHex)
  }
}`;

await fetch(GRAPHQL_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "apollographql-client-name": "docs-indexers-api",
    "apollographql-client-version": "v1.0",
  },
  body: JSON.stringify({
    query,
    variables: {
      rawHex: rawHex, // Input raw transaction hex // [!code highlight]
    },
  }),
})
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    // Do something with the result
  });
```

:::

View more about raw transaction hex [here](https://www.blockchain.com/explorer/assets/btc/decode-transaction).

<div ref="refBroadcastTransaction"/>

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'

import GetBalance from '../components/GetBalance.jsx'
import GetTransactions from '../components/GetTransactions.jsx'
import GetGasFee from '../components/GetGasFee.jsx'
import GetUTXOs from '../components/GetUTXOs.jsx'
import BroadcastTransaction from '../components/BroadcastTransaction.jsx'

const refGetBalance = ref()
const refGetTransaction = ref()
const refGetGasFee = ref()
const refGetUTXOs = ref()
const refBroadcastTransaction = ref()
onMounted(() => {
  const rootGetBalance = createRoot(refGetBalance.value)
  rootGetBalance.render(createElement(GetBalance, {}, null))
  const rootGetTransaction = createRoot(refGetTransaction.value)
  rootGetTransaction.render(createElement(GetTransactions, {}, null))
  const rootGetGasFee = createRoot(refGetGasFee.value)
  rootGetGasFee.render(createElement(GetGasFee, {}, null))
  const rootGetUTXOs = createRoot(refGetUTXOs.value)
  rootGetUTXOs.render(createElement(GetUTXOs, {}, null))
  const rootBroadcastTransaction = createRoot(refBroadcastTransaction.value)
  rootBroadcastTransaction.render(createElement(BroadcastTransaction, {}, null))
})
</script>
