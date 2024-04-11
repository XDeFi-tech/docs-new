## Other services

This section provides information about the other services provided by the Gas Tank API. APIs in this section not require JWT token for authentication.

### Get information about the Gas Tank

This endpoint provides information about the conversion rates between different tokens and fees for deposit, withdrawal and consume actions.

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/balances/info`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
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
  "conversionRates": {
    "xdefi": {
      "eth": 0.00003406230336183101,
      "bnb": 0.00020052618581142264,
      "usdc": 0.13496037812654052,
      "usdt": 0.1349557894736842,
      ...
    },
    "eth": {
      "xdefi": 29357.967644682656,
      "usdt": 3763.926315789474,
      ...
    },
    ... // Other pairs
  },
  "spenderAddresses": [
    "0x0E87C393120410d1edd00Ae5b616419795c5B57D"
  ],
  "fees": {
    "deposit": {
      "fees": {
        "high": "357840000000000",
        "medium": "357420000000000",
        "low": "357210000000000"
      }
    },
    "withdraw": {
      "fees": {
        "high": "357840000000000",
        "medium": "357420000000000",
        "low": "357210000000000"
      }
    },
    "consume": {
      "fees": {
        "high": "357840000000000",
        "medium": "357420000000000",
        "low": "357210000000000"
      }
    }
  }
}
```

:::

### Check the health status of the application

This endpoint provides information about the health status of the Gas Tank application.

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/healthcheck`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
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
  "status": "OK",
  "database": "Connected",
  "mnemonic": "Set",
  "nats": "Connected"
}
```

:::
