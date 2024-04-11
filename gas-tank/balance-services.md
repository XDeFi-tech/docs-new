## Balance & Transactions

### Get all balance entries for user

This endpoint returns a list of all balance entries per address by using JWT

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/balances`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwtToken}`, // JWT token // [!code highlight]
  },
}).then((response) => {
  console.log(response);
  // Handle & do something with the response
});
```

```json [Response]
{
  "additionalProp1": [
    {
      "id": "string",
      "address": "string",
      "tokenAddress": "string",
      "balance": 0,
      "chain": "string"
    }
  ],
  "additionalProp2": [
    {
      "id": "string",
      "address": "string",
      "tokenAddress": "string",
      "balance": 0,
      "chain": "string"
    }
  ],
  ...
}
```

:::

### Get balances by address

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/balances/${address}`, { // Address to retrieve balances // [!code highlight]
  method: "GET",
  headers: {
    "Content-Type": "application/json"
    "Authorization": `Bearer ${jwtToken}`, // JWT token // [!code highlight]
  },
})
  .then((response) => {
    console.log(response);
    // Handle & do something with the response
  })
```

```json [Response]
[
  {
    "id": "string",
    "address": "string",
    "tokenAddress": "string",
    "balance": 0,
    "chain": "string"
  },
  ...
]
```

:::

### Get total balances by JWT

This endpoint returns a list of total balances for the specified JWT.

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/balances/totals`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwtToken}`, // JWT token // [!code highlight]
  },
}).then((response) => {
  console.log(response);
  // Handle & do something with the response
});
```

```json [Response]
[
  {
    "address": "string",
    "symbol": "string",
    "value": "string",
    "decimals": 0
  },
  ...
]
```

:::

### Increase balance

This endpoint allows users to increase their balance on the Gas Tank platform.

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/balances/increase`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
    "Authorization": `Bearer ${jwtToken}`, // JWT token // [!code highlight]
  },
  body: {
    address: "string", // [!code highlight]
    tokenAddress: "string", // [!code highlight]
    chain: "string", // [!code highlight]
    owner: "string", // [!code highlight]
    spender: "string", // [!code highlight]
    value: "string", // [!code highlight]
    deadline: 0, // [!code highlight]
    v: 0, // [!code highlight]
    r: "string", // [!code highlight]
    s: "string" // [!code highlight]
  },
})
  .then((response) => {
    // Balance increased successfully
  })
  .catch((error) => {
    // Catch & handle the error
  });
```

:::

### Withdraw balance

This endpoint allows users to withdraw their balance from the Gas Tank platform.

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/balances/withdraw`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
    "Authorization": `Bearer ${jwtToken}`, // JWT token // [!code highlight]
  },
  body: {
    address: "string", // [!code highlight]
    tokenAddress: "string", // [!code highlight]
    amount: "string", // [!code highlight]
    chain: "string", // [!code highlight]
    recipient: "string", // [!code highlight]
    message: "string", // [!code highlight]
    signature: "string" // [!code highlight]
  },
})
  .then((response) => {
    // Balance withdrawn successfully
  })
  .catch((error) => {
    // Catch & handle the error
  });
```

:::

### Internal transfer

This endpoint allows users to create an internal transfer task on the Gas Tank platform.

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/balances/transfer`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwtToken}`, // JWT token // [!code highlight]
  },
  body: {
    address: "string", // [!code highlight]
    tokenAddress: "string", // [!code highlight]
    amount: "string", // [!code highlight]
    chain: "string", // [!code highlight]
    recipient: "string", // [!code highlight]
    message: "string", // [!code highlight]
    signature: "string", // [!code highlight]
  },
})
  .then((response) => {
    // Internal transfer task created successfully
  })
  .catch((error) => {
    // Catch & handle the error
  });
```

:::

### Consume balance

This endpoint allows users to consume their balance on the Gas Tank platform.

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/balances/consume`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwtToken}`, // JWT token // [!code highlight]
  },
  body: {
    address: "string", // [!code highlight]
    minDestinationAmount: "string", // [!code highlight]
    destinationAddress: "string", // [!code highlight]
    destinationChain: "string", // [!code highlight]
    message: "string", // [!code highlight]
    signature: "string", // [!code highlight]
  },
})
  .then((response) => {
    // Balance consumed successfully
  })
  .catch((error) => {
    // Catch & handle the error
  });
```

:::

### Get a quote for consuming balance

This endpoint allows users to generate a quote for consuming their balance on the Gas Tank platform.

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/balances/consume/quote`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwtToken}`, // JWT token // [!code highlight]
  },
  body: {
    address: "string", // [!code highlight]
    minDestinationAmount: "string", // [!code highlight]
    destinationChain: "string", // [!code highlight]
  },
})
  .then((response) => {
    console.log(response);
    // Handle & do something with the response
  })
  .catch((error) => {
    // Catch & handle the error
  });
```

```json [Response]
{
  "expectedOutput": "string",
  "fee": "string",
  "spentAssets": [
    {
      "tokenAddress": "string",
      "amount": "string",
      "chain": "string"
    }
  ]
}
```

:::

### Get user balance queue update

This endpoint allows users to get the balance queue update for a specific address.

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/transactions`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwtToken}`, // JWT token // [!code highlight]
  },
})
  .then((response) => {
    console.log(response);
    // Handle & do something with the response
  })
  .catch((error) => {
    // Catch & handle the error
  });
```

```json [Response]
{
  "additionalProp1": [
    {
      "id": "string",
      "type": "string",
      "address": "string",
      "tokenAddress": "string",
      "amount": "string",
      "chain": "string",
      "destinationChain": "string",
      "destinationAddress": "string",
      "permitObject": {},
      "processed": true,
      "processedMetadata": {},
      "pendingTransactions": [
        {
          "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "chain": "ethereum",
          "transactionHash": "0x6b175474e89094c44da98b954eedeac495271d0f",
          "blockNumber": 123456,
          "balanceUpdateId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          "confirmed": false,
          "createdAt": "2023-01-01T00:00:00Z",
          "updatedAt": "2023-01-01T00:00:00Z"
        }
      ],
      "createdAt": "2024-04-11T04:13:07.102Z",
      "updatedAt": "2024-04-11T04:13:07.102Z"
    }
  ],
  ...
}
```

:::

### Get balance queue update by ID

This endpoint allows users to get the balance queue update for a specific ID.

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/transactions/${id}`, {
  method: "GET",
  headers: {
    "Content-Type": "application",
    Authorization: `Bearer ${jwtToken}`, // JWT token // [!code highlight]
  },
})
  .then((response) => {
    console.log(response);
    // Handle & do something with the response
  })
  .catch((error) => {
    // Catch & handle the error
  });
```

```json [Response]
{
  "id": "string",
  "type": "string",
  "address": "string",
  "tokenAddress": "string",
  "amount": "string",
  "chain": "string",
  "destinationChain": "string",
  "destinationAddress": "string",
  "permitObject": {},
  "processed": true,
  "processedMetadata": {},
  "pendingTransactions": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "chain": "ethereum",
      "transactionHash": "0x6b175474e89094c44da98b954eedeac495271d0f",
      "blockNumber": 123456,
      "balanceUpdateId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "confirmed": false,
      "createdAt": "2023-01-01T00:00:00Z",
      "updatedAt": "2023-01-01T00:00:00Z"
    }
  ],
  "createdAt": "2024-04-11T04:17:30.107Z",
  "updatedAt": "2024-04-11T04:17:30.107Z"
}
```

:::

### Get pending transactions by address

This endpoint allows users to get pending transactions for a specific address. Results returned a list of pending transactions.

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(
  `${GAS_TANK_ENDPOINT}/transactions/pending/${address}`, // Address to retrieve pending transaction // [!code highlight]
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`, // JWT token // [!code highlight]
    },
  },
)
  .then((response) => {
    console.log(response);
    // Handle & do something with the response
  })
  .catch((error) => {
    // Catch & handle the error
  });
```

```json [Response]
[
  {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "chain": "ethereum",
    "transactionHash": "0x6b175474e89094c44da98b954eedeac495271d0f",
    "blockNumber": 123456,
    "balanceUpdateId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "confirmed": false,
    "createdAt": "2023-01-01T00:00:00Z",
    "updatedAt": "2023-01-01T00:00:00Z"
  },
  ...
]
```

:::

### Get fee for a given amount

This endpoint allows users to get the fee for a given amount in a specific chain.

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(
  `${GAS_TANK_ENDPOINT}/fees/${chain}`, // Chain to get fee // [!code highlight]
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`, // JWT token // [!code highlight]
    },
  },
)
  .then((response) => {
    console.log(response);
    // Handle & do something with the response
  })
  .catch((error) => {
    // Catch & handle the error
  });
```

```json [Response]
{
  "high": "string",
  "medium": "string",
  "low": "string"
}
```

:::
