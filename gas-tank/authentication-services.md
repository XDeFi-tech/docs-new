## Authentication

### Multiple Address Login

This endpoint facilitates the generation of JWT tokens for multiple wallet addresses in a single request. The request payload should consist of an array of objects, each containing an address and its corresponding signature. Upon successful validation of the signatures, the server will generate JWT tokens for the provided addresses.

To get signatures, you can use `personal_sign` method from web3.js or ethers.js. Below is an example of how to get a signature using web3.js:

::: code-group

```javascript [Request]
const web3 = new Web3(window.ethereum);
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

const address1 = "0x1234567890123456789012345678901234567890";
const message1 = "Sign this message to authenticate your address with Gas Tank";

const signature1 = await web3.eth.personal.sign(message1, address1);

const address2 = "0x0987654321098765432109876543210987654321";
const message2 = "Sign this message to authenticate your address with Gas Tank";

const signature2 = await web3.eth.personal.sign(message2, address2);

await fetch(`${GAS_TANK_ENDPOINT}/v2/auth/login`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: [
    {
      address: address1, // Address of the user // [!code highlight]
      signature: signature1, // Signature // [!code highlight]
    },
    {
      address: address2, // [!code highlight]
      signature: signature2, // [!code highlight]
    },
    ...
  ],
})
  .then((response) => {
    console.log(response);
    // Handle & do something with the response
  })
```

```json [Response]
{
  "access": "jwt.access.token",
  "refresh": "jwt.refresh.token"
}
```

:::

You can also add new wallets to an existing JWT token. Request will be secured by JWT header. Clients need to submit an array of objects containing the address and signature for each new wallet. The server will validate the signatures and, if successful, update the existing JWT token to include the new wallets and generate new JWT.

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/v2/auth/update`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${jwtToken}`, // JWT token // [!code highlight]
  },
  body: [
    {
      address: newAddress, // [!code highlight]
      signature: newSignature, // [!code highlight]
    },
    ...
  ],
})
  .then((response) => {
    console.log(response);
    // Handle & do something with the response
  })
```

```json [Response]
{
  "access": "jwt.access.token",
  "refresh": "jwt.refresh.token"
}
```

:::

### Refresh JWT Token

Clients can use this endpoint to obtain a new JWT token without re-authenticating, providing a refresh token.

::: code-group

```javascript [Request]
const GAS_TANK_ENDPOINT = "https://gas-tank.xdefi.services";

await fetch(`${GAS_TANK_ENDPOINT}/v2/auth/refresh`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwtToken}`, // JWT token // [!code highlight]
  },
  body: {
    refresh: refreshToken, // Refresh token // [!code highlight]
  },
}).then((response) => {
  console.log(response);
  // Handle & do something with the response
});
```

```json [Response]
{
  "access": "jwt.access.token",
  "refresh": "jwt.refresh.token"
}
```

:::
