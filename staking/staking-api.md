# Staking API

## Overview

XDEFI offers a staking API that enables developers to engage with the staking features across multiple blockchain networks. This API is crafted for simplicity and ease of use, emphasizing a high degree of abstraction from the complexities of the underlying blockchains..

The base URL for all API endpoints is: https://gql-router.dev.xdefi.services/graphql

Below are the services provided by the staking API.

## CosmosChains

Our staking API extends comprehensive support to a wide array of Cosmos chains using Stride, enabling seamless interactions with their staking functionalities. Supported assets include `ATOM`, `OSMO`, `JUNO`, `STARS`, `LUNA`, `SEI`, `AXL`, `KAVA`, `AKASH`, `STRD`, `KUJI`, and `CRE`.

### Liquid staking

#### Get balance of staked asset on STRIDE

You can use the `getStrideStakedAssetBalance` query to get the balance of a staked asset on STRIDE. The query takes the following parameters:

- `strideAddress`: The STRIDE address for which to get the balance.
- `asset`: The asset for which to get the balance.

::: code-group

```javascript [GetStrideStakedAssetBalance]
const GRAPHQL_ENDPOINT = "https://gql-router.dev.xdefi.services/graphql";
const query = `query GetStrideStakedAssetBalance($strideAddress: String!, $asset: SupportedAssets!) {
  staking {
    getStrideStakedAssetBalance(asset: $asset, strideAddress: $strideAddress) {
      amount
      decimal
      denom
    }
  }
}`;

await fetch(GRAPHQL_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "apollographql-client-name": "docs-staking-api",
    "apollographql-client-version": "v1.0",
  },
  body: JSON.stringify({
    query,
    variables: {
      asset: asset, // Asset selected // [!code highlight]
      strideAddress: address, // Input address // [!code highlight]
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

<div ref="refGetStrideStakedAssetBalance" />

#### Create Staking Transaction on Stride from any Cosmos Chain

You can use the `createStrideLiquidStakingTx` mutation to create a staking transaction on STRIDE from any Cosmos chain. The mutation takes the following parameters:

- `recieverStrideAddr`: The STRIDE address of the recipient.
- `amount`: The amount of the asset to stake.
- `senderAddr`: The address of the sender.
- `senderPubkeyHex`: The public key of the sender.
- `asset`: The asset to stake.
- `timeoutHeight`: The timeout height for the transaction.
- `gasLimit`: The gas limit for the transaction.

::: code-group

```javascript [CreateStrideLiquidStakingTx]
const GRAPHQL_ENDPOINT = "https://gql-router.dev.xdefi.services/graphql";
const query = `query CreateStrideLiquidStakingTx($input: StrideStakingInput!) {
  staking {
  createStrideLiquidStakingTx(input: $input)
  }
}`;

await fetch(GRAPHQL_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "apollographql-client-name": "docs-staking-api",
    "apollographql-client-version": "v1.0",
  },
  body: JSON.stringify({
    query,
    variables: {
      input: {
        recieverStrideAddr: recieverStrideAddr, // Reciever STRIDE address // [!code highlight]
        amount: amount || null, // Amount to stake // [!code highlight]
        senderAddr: senderAddr, // Sender address // [!code highlight]
        senderPubkeyHex: senderPubkeyHex || null, // Sender public key // [!code highlight]
        asset: asset, // Asset selected // [!code highlight]
        timeoutHeight: timeoutHeight, // Timeout height // [!code highlight]
        gasLimit: gasLimit || null, // Gas limit // [!code highlight]
      },
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

<div ref="refCreateStrideLiquidStakingTx" />

### Native staking

#### Get Cosmos Delegations

You can use the `getCosmosDelegations` query to get the delegations of a Cosmos address. The query takes the following parameters:

- `asset`: The asset for which to get the delegations.
- `address`: The address for which to get the delegations.

::: code-group

```javascript [GetCosmosDelegations]
const GRAPHQL_ENDPOINT = "https://gql-router.dev.xdefi.services/graphql";
const query = `query getCosmosDelegations($asset: SupportedAssets!, $address: String!) {
  staking {
    getCosmosDelegations(address: $address, asset: $asset) {
      amount
      decimal
      denom
      validatorAddress
      validatorName
    }
  }
}`;

await fetch(GRAPHQL_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "apollographql-client-name": "docs-staking-api",
    "apollographql-client-version": "v1.0",
  },
  body: JSON.stringify({
    query,
    variables: {
      asset: asset.key, // Asset selected // [!code highlight]
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

<div ref="refGetCosmosDelegations" />

#### Create native staking TX and delegate to validator (Meria, StakeLab or Custom validator’s address)

You can use the `createCosmosDelegateTx` mutation to create a native staking transaction and delegate to a validator. The mutation takes the following parameters:

- `asset`: The asset to stake.
- `validator`: The validator to delegate to. Supported validators: `Meria`, `StakeLab` or `null` (Custom). If validator is `Custom`, you need to provide the `validatorAddress` parameter.
- `validatorAddress`: The address of the custom validator.
- `amount`: The amount to stake.
- `delegatorAddress`: An address related to the chain which the asset is the native asset for.
- `delegatorPubkeyHex`: The public key of the delegator.
- `memo`: Some memo for.
- `gasLimit`: The gas limit.

::: code-group

```javascript [Meria/StakeLab Validator]
const GRAPHQL_ENDPOINT = "https://gql-router.dev.xdefi.services/graphql";
const query = `query CreateCosmosDelegateTx($delegationInput: CosmosDelegationInput!, $validatorAddress: String, $provider: Providers) {
  staking {
    createCosmosDelegateTx(
      delegationInput: $delegationInput
      provider: $provider
      validatorAddress: $validatorAddress
    )
  }
}`;

await fetch(GRAPHQL_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "apollographql-client-name": "docs-staking-api",
    "apollographql-client-version": "v1.0",
  },
  body: JSON.stringify({
    query,
    variables: {
      delegationInput: {
        asset: asset.key, // Asset selected // [!code highlight]
        amount: amount, // Input amount // [!code highlight]
        delegatorAddress: delegatorAddress, // Input delegatorAddress // [!code highlight]
        delegatorPubkeyHex: delegatorPubkeyHex, // Input delegatorPubkeyHex // [!code highlight]
        memo: memo, // Input memo // [!code highlight]
        gasLimit: gasLimit, // Input Gas limit // [!code highlight]
      },
      provider: "Meria" || "StakeLab", // [!code highlight]
    },
  }),
})
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    // Do something with the result
  });
```

```javascript [Custom validator’s address]
const GRAPHQL_ENDPOINT = "https://gql-router.dev.xdefi.services/graphql";
const query = `query CreateCosmosDelegateTx($delegationInput: CosmosDelegationInput!, $validatorAddress: String, $provider: Providers) {
  staking {
    createCosmosDelegateTx(
      delegationInput: $delegationInput
      provider: $provider
      validatorAddress: $validatorAddress
    )
  }
}`;

await fetch(GRAPHQL_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "apollographql-client-name": "docs-staking-api",
    "apollographql-client-version": "v1.0",
  },
  body: JSON.stringify({
    query,
    variables: {
      delegationInput: {
        asset: asset.key, // Asset selected // [!code highlight]
        amount: amount, // Input amount // [!code highlight]
        delegatorAddress: delegatorAddress, // Input delegatorAddress // [!code highlight]
        delegatorPubkeyHex: delegatorPubkeyHex, // Input delegatorPubkeyHex // [!code highlight]
        memo: memo, // Input memo // [!code highlight]
        gasLimit: gasLimit, // Input Gas limit // [!code highlight]
      },
      provider: null,
      validatorAddress: validatorAddress, // Input validatorAddress // [!code highlight]
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

<div ref="refCreateNativeStakingTx" />

## EVMs

### Liquid staking

Our staking API extends comprehensive support to Ethereum chains using LIDO, enabling seamless interactions with their staking functionalities. Supported assets include `ETH` and `MATIC_ERC20`.

#### Get balance of stakes asset on LIDO for stETH

You can use the `getLidoStakedAssetBalance` query to get the balance of a staked asset on LIDO. The query takes the following parameters:

- `asset`: `ETH`
- `address`: The address for which to get the balance.

::: code-group

```javascript [GetLidoStakedBalance]
const GRAPHQL_ENDPOINT = "https://gql-router.dev.xdefi.services/graphql";
const query = `query GetLidoStakedBalance($asset: SupportedAssets!, $address: String!) {
  staking {
    getLidoStakedBalance(address: $address, asset: $asset) {
      amount
      asset
      chain
      decimal
    }
  }
}`;

await fetch(GRAPHQL_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "apollographql-client-name": "docs-staking-api",
    "apollographql-client-version": "v1.0",
  },
  body: JSON.stringify({
    query,
    variables: {
      asset: asset.key, // Asset selected // [!code highlight]
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

<div ref="refGetLidoStakedBalance" />

#### Create staking Tx for ETH/ERC20 on LIDO

You can use the `createLidoStakeTx` query to create a staking transaction on LIDO. The query takes the following parameters:

- `asset`: The asset to stake.
- `address`: The address of the sender.
- `stakeValue`: The amount to stake.
- `nonce`: The nonce for the transaction.

::: code-group

```javascript [CreateLidoStakeTx]
const GRAPHQL_ENDPOINT = "https://gql-router.dev.xdefi.services/graphql";
const query = `query CreateLidoStakeTx($input: LidoStakingInput!) {
  staking {
    createLidoStakeTx(input: $input) {
      chainId
      data
      fromAddress
      nonce
      toAddress
      value
    }
  }
}`;

await fetch(GRAPHQL_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "apollographql-client-name": "docs-staking-api",
    "apollographql-client-version": "v1.0",
  },
  body: JSON.stringify({
    query,
    variables: {
      input: {
        asset: asset.key, // Asset selected // [!code highlight]
        address: address, // Input address // [!code highlight]
        stakeValue: stakeValue, // Input stakeValue // [!code highlight]
        nonce: nonce, // Input nonce // [!code highlight]
      },
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

<div ref="refCreateLidoStakeTx" />

#### Check the allowance for staking erc20 MATIC to stMATIC contract

You can use the `lidoCheckErc20Allowance` query to check the allowance for staking erc20 MATIC to the stMATIC contract. The query takes the following parameters:

- `asset`: `ETH`
- `ownerAddress`: The ethereum address which you try to stake erc20 MATIC on.

::: code-group

```javascript [LidoCheckErc20Allowance]
const GRAPHQL_ENDPOINT = "https://gql-router.dev.xdefi.services/graphql";
const query = `query LidoCheckErc20Allowance($ownerAddress: String!, $asset: SupportedAssets!) {
  staking {
    lidoCheckErc20Allowance(input: {ownerAddress: $ownerAddress, asset: $asset})
  }
}`;

await fetch(GRAPHQL_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "apollographql-client-name": "docs-staking-api",
    "apollographql-client-version": "v1.0",
  },
  body: JSON.stringify({
    query,
    variables: {
      asset: asset.key, // Asset selected // [!code highlight]
      ownerAddress: address, // Input address // [!code highlight]
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

<div ref="refLidoCheckErc20Allowance" />

#### Approve Tx to increase allowance for stMATIC to spend MATIC from the address

You can use the `createErc20ApproveTx` query to create an approval transaction to increase the allowance for stMATIC to spend MATIC from the address. The query takes the following parameters:

- `asset`: `MATIC_ERC20`
- `fromAddress`: The ethereum address which you try to stake erc20 MATIC on.
- `spenderAddress`: The address of the spender.
- `amount`: The amount to approve.
- `nonce`: The nonce for the transaction.

::: code-group

```javascript [CreateErc20ApproveTx]
const GRAPHQL_ENDPOINT = "https://gql-router.dev.xdefi.services/graphql";
const query = `query createErc20ApproveTx($input: Erc20ApproveInput!) {
  staking {
    createErc20ApproveTx(input: $input) {
      chainId
      data
      fromAddress
      nonce
      toAddress
      value
    }
  }
}`;

await fetch(GRAPHQL_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "apollographql-client-name": "docs-staking-api",
    "apollographql-client-version": "v1.0",
  },
  body: JSON.stringify({
    query,
    variables: {
      input: {
        asset: asset.key, // Asset selected // [!code highlight]
        fromAddress: fromAddress, // Input fromAddress // [!code highlight]
        spenderAddress: spenderAddress, // Input spenderAddress // [!code highlight]
        amount: amount, // Input amount // [!code highlight]
        nonce: nonce, // Input nonce // [!code highlight]
      },
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

<div ref="refCreateErc20ApproveTx" />

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'

import GetStrideStakedAssetBalance from '../components/staking/GetStrideStakedAssetBalance.jsx'
import CreateStrideLiquidStakingTx from '../components/staking/CreateStrideLiquidStakingTx.jsx'
import GetCosmosDelegations from '../components/staking/GetCosmosDelegations.jsx'
import CreateCosmosDelegateTx from '../components/staking/CreateCosmosDelegateTx.jsx'
import GetLidoStakedAssetBalance from '../components/staking/GetLidoStakedBalance.jsx'
import CreateLidoStakeTx from '../components/staking/CreateLidoStakeTx.jsx'
import LidoCheckErc20Allowance from '../components/staking/LidoCheckErc20Allowance.jsx'
import CreateErc20ApproveTx from '../components/staking/CreateErc20ApproveTx.jsx'

const refGetStrideStakedAssetBalance = ref()
const refCreateStrideLiquidStakingTx = ref()
const refGetCosmosDelegations = ref()
const refCreateNativeStakingTx = ref()
const refGetLidoStakedBalance = ref()
const refCreateLidoStakeTx = ref()
const refLidoCheckErc20Allowance = ref()
const refCreateErc20ApproveTx = ref()
onMounted(() => {
  const rootGetStrideStakedAssetBalance = createRoot(refGetStrideStakedAssetBalance.value)
  rootGetStrideStakedAssetBalance.render(createElement(GetStrideStakedAssetBalance, {}, null))
  const rootCreateStrideLiquidStakingTx = createRoot(refCreateStrideLiquidStakingTx.value)
  rootCreateStrideLiquidStakingTx.render(createElement(CreateStrideLiquidStakingTx, {}, null))
  const rootGetCosmosDelegations = createRoot(refGetCosmosDelegations.value)
  rootGetCosmosDelegations.render(createElement(GetCosmosDelegations, {}, null))
  const rootCreateNativeStakingTx = createRoot(refCreateNativeStakingTx.value)
  rootCreateNativeStakingTx.render(createElement(CreateCosmosDelegateTx, { }, null))
  const rootGetLidoStakedAssetBalance = createRoot(refCreateNativeStakingTx.value)
  rootGetLidoStakedAssetBalance.render(createElement(CreateCosmosDelegateTx, {}, null))
  const rootGetLidoStakedBalance = createRoot(refGetLidoStakedBalance.value)
  rootGetLidoStakedBalance.render(createElement(GetLidoStakedAssetBalance, {}, null))
  const rootCreateLidoStakeTx = createRoot(refCreateLidoStakeTx.value)
  rootCreateLidoStakeTx.render(createElement(CreateLidoStakeTx, {}, null))
  const rootLidoCheckErc20Allowance = createRoot(refLidoCheckErc20Allowance.value)
  rootLidoCheckErc20Allowance.render(createElement(LidoCheckErc20Allowance, {}, null))
  const rootCreateErc20ApproveTx = createRoot(refCreateErc20ApproveTx.value)
  rootCreateErc20ApproveTx.render(createElement(CreateErc20ApproveTx, {}, null))
})
</script>
