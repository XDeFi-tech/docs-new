# Gas Tank API Documentation

The Gas Tank is a versatile platform that empowers users to manage gas tank balances seamlessly across different blockchain networks. This project facilitates actions such as depositing, withdrawing, internal transferring, and consuming gas tank balances, allowing users to efficiently utilize their resources on EVM, Cosmos-like, and UTXO chains. With support for multiple blockchain environments, The Gas Tank offers users a unified solution for gas utilization across diverse networks.

The base URL for all Gas Tank API is: https://gas-tank.xdefiservices.com

Below are the available services provided by the Gas Tank API. To use the Gas Tank API, you need to have Authorization Token.

## Authentication

### Multiple Address Login

This endpoint facilitates the generation of JWT tokens for multiple wallet addresses in a single request. The request payload should consist of an array of objects, each containing an address and its corresponding signature. Upon successful validation of the signatures, the server will generate JWT tokens for the provided addresses.

::: code-group

```javascript [Login]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

<div ref="refAutLogin" />

### Refresh JWT Token

Clients can use this endpoint to obtain a new JWT token without re-authenticating, providing a refresh token.

::: code-group

```javascript [Resfresh Token]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

<div ref="refRefreshToken" />

## Chains

### Get all Tokens

::: code-group

```javascript [Get All Tokens]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

<div ref="refGetAllTokens" />

### Get chains Operational status

::: code-group

```javascript [Get Chains Status]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

### Get information about the Gas Tank Balances

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

## Balance & Transactions

### Get all balance entries for user

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

### Get balances by address

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

### Get balances by JWT

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

### Increase balance

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

### Withdraw balance

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

### Internal transfer

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

### Consume balance

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

### Get a quote for consuming balance

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

### Get user balance queue update

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

### Get balance queue update by ID

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

### Get pending transactions by address

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

### Get fee for a given amount

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

## Actions messages

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

### Construct Deposit Message

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

### Construct Withdraw Message

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

### Construct Internal Transfer Message

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

### Construct Consume Message

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

## Other services

### Get information about the Gas Tank

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

### Check the health status of the application

::: code-group

```javascript []
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefiservices.com";
```

:::

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'

import AutLogin from '../components/gas-tank/AutLogin.jsx'

const refAutLogin = ref()
onMounted(() => {
  const rootAutLogin = createRoot(refAutLogin.value)
  rootAutLogin.render(createElement(AutLogin, {}, null))
})
</script>
