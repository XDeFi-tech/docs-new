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
    owner: "0xOwnerWalletAddress", // The wallet address of the owner // [!code highlight]
    tokenAddress: "0xTokenContractAddress", // The contract address of the token // [!code highlight]
    amount: "1", // Amount of the token to deposit // [!code highlight]
    chain: "ethereum", // The blockchain network, e.g., 'ethereum' // [!code highlight]
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
    address: "0xYourWalletAddress", // Your wallet address // [!code highlight]
    tokenAddress: "0xTokenContractAddress", // The contract address of the token // [!code highlight]
    amount: "1", // Amount of the token to withdraw // [!code highlight]
    chain: "ethereum", // The blockchain network, e.g., 'ethereum' // [!code highlight]
    recipient: "0xRecipientWalletAddress", // The recipient's wallet address // [!code highlight]
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
    address: "0xYourWalletAddress", // Your wallet address // [!code highlight]
    tokenAddress: "0xTokenContractAddress", // The contract address of the token // [!code highlight]
    amount: "1", // Amount of the token to transfer // [!code highlight]
    chain: "ethereum", // The blockchain network, e.g., 'ethereum' // [!code highlight]
    recipient: "0xRecipientWalletAddress", // The recipient's wallet address // [!code highlight]
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
    address: "0xYourWalletAddress", // Your wallet address // [!code highlight]
    minDestinationAmount: "1", // Minimum amount of the token to consume // [!code highlight]
    destinationChain: "ethereum", // The blockchain network, e.g., 'ethereum' // [!code highlight]
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
