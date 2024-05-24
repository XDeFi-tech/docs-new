## Messages

### Construct Deposit Message

This endpoint will generate `messages` parameter for [Deposit balances](#deposit-balance).

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/msg/increase`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    owner: "string", // [!code highlight]
    tokenAddress: "string", // [!code highlight]
    amount: "string", // [!code highlight]
    chain: "string", // [!code highlight]
  }),
}).then((response) => {
  console.log(response);
  // Handle & do something with the response
});
```

```json [Response]
{
  "type": "string",
  "message": "string"
}
```

:::

### Construct Withdraw Message

This endpoint will generate `messages` parameter for [Withdraw balances](#withdraw-balance).

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/msg/withdraw`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    address: "string", // [!code highlight]
    tokenAddress: "string", // [!code highlight]
    amount: "string", // [!code highlight]
    chain: "string", // [!code highlight]
    recipient: "string", // [!code highlight]
  }),
}).then((response) => {
  console.log(response);
  // Handle & do something with the response
});
```

```json [Response]
{
  "type": "string",
  "message": "string"
}
```

:::

### Construct Internal Transfer Message

This endpoint will generate `messages` parameter for [Internal Transfer balances](#internal-transfer).

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/msg/internal-transfer`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    address: "string", // [!code highlight]
    tokenAddress: "string", // [!code highlight]
    amount: "string", // [!code highlight]
    chain: "string", // [!code highlight]
    recipient: "string", // [!code highlight]
  }),
}).then((response) => {
  console.log(response);
  // Handle & do something with the response
});
```

```json [Response]
{
  "type": "string",
  "message": "string"
}
```

:::

### Construct Consume Message

This endpoint will generate `messages` parameter for [Consume balances](#consume-balance).

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/msg/consume`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    address: "string", // [!code highlight]
    minDestinationAmount: "string", // [!code highlight]
    destinationChain: "string", // [!code highlight]
  }),
}).then((response) => {
  console.log(response);
  // Handle & do something with the response
});
```

```json [Response]
{
  "type": "string",
  "message": "string"
}
```

:::
