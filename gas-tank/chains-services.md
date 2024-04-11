## Chains

### Get all Tokens

This endpoint allows users to retrieve information about all tokens available on the Gas Tank platform.

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/chains/tokens`, {
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
  "additionalProp1": {
    "name": "string",
    "key": "string",
    "chainId": "string",
    "native": {
      "symbol": "string",
      "decimals": 0,
      "address": "string",
      "actions": [
        "string"
      ]
    },
    "tokens": [
      {
        "name": "string",
        "symbol": "string",
        "decimals": 0,
        "address": "string",
        "actions": [
          "string"
        ]
      }
    ]
  },
  "additionalProp2": {
    "name": "string",
    "key": "string",
    "chainId": "string",
    "native": {
      "symbol": "string",
      "decimals": 0,
      "address": "string",
      "actions": [
        "string"
      ]
    },
    "tokens": [
      {
        "name": "string",
        "symbol": "string",
        "decimals": 0,
        "address": "string",
        "actions": [
          "string"
        ]
      }
    ]
  },
  ...
}
```

:::

### Get dispatchers information

This endpoint provides information about the dispatchers on the Gas Tank platform.

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/chains/dispatchers-info`, {
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
  "additionalProp1": {
    "chain": "string",
    "address": "string",
    "balance": "string",
    "status": "string",
    "threshold": "string"
  },
  "additionalProp2": {
    "chain": "string",
    "address": "string",
    "balance": "string",
    "status": "string",
    "threshold": "string"
  },
  ...
}
```

:::

### Get chains Operational status

This endpoint provides information about the status of all supported chains on the Gas Tank platform.

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/chains/status`, {
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
  "operational": true,
  "chains": [
    {
      "chain": "string",
      "operational": true,
      "actions": {
        "increase": true,
        "withdraw": true,
        "consume": true
      },
      "extras": {
        "address": "string",
        "balance": "string",
        "threshold": "string",
        "status": "string"
      },
      "comment": "string"
    },
    ...
  ]
}
```

:::
