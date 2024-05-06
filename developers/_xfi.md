### Detect XDEFI Wallet

To detect whether your browser is running XDEFI Wallet, you can use the following code:

```javascript
if (window.xfi) {
  console.log("XDEFI Wallet detected");
  // Your code here
}
```

Notice: `window.xfi` which is a global object added by XDEFI Wallet.

### Connect to XDEFI Wallet

To connect to XDEFI Wallet (access the user's [blockchain - like Ethereum] account(s)), you can use the following code:

```javascript
// Connect & get accounts
window.xfi[chainId].request(
  { method: "request_accounts", params: [] },
  (error, accounts) => {
    if (error) {
      console.error(error);
      return;
    } else {
      console.log("Account connected:", accounts[0]);
    }
  },
);
```

### Experience functions

When your account is connected to XDEFI Wallet, let's start experiencing more functions.

#### Get the current account

```javascript
window.xfi[chainId].request(
  { method: "request_accounts", params: [] },
  (error, accounts) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("Accounts:", accounts);
    // Do something with the accounts
  },
);
```

Above code will return `Promise<Array[String]>` with the current account address. If wallet can not be found, return `[]` instead of `throw Error`

Above code will return `Promise<Signature | RPC: 2.0>`

#### Transfer

```javascript
window.xfi[chainId].request(
  {
    method: "transfer",
    params: [
      {
        asset: {
          chain: "string",
          symbol: "string",
          ticker: "string",
        }
        from: {
          amount: number,
          decimals: number,
        },
        recipient: "string",
        amount: "string",
        memo: "string",
        gasLimit: number, // Optional
      },
    ],
  },
  (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("Transaction hash:", result);
  },
);
```

Return `Promise<String>` with the transaction hash

### Events

Currently we only support some action events from Wallet

```javascript
window.xfi[chainId].on('event_name', callback);
​//Example
window.xfi[chainId].on('close', () => window.location.reload());
window.xfi[chainId].on('accountsChanged', () => window.location.reload());
```

#### Events supported

| Events            | Trigger                                       |
| ----------------- | --------------------------------------------- |
| `accountsChanged` | Receive when active account changed in Wallet |
| `networkChanged`  | Receive when active network changed in Wallet |
| `chainChanged`    | Receive when active chain changed in Wallet   |
| `close`           | Alias for disconnect event                    |
| `disconnect`      | Receive when disconnecting from Wallet        |

#### Methods supported

| Methods                | Description           |
| ---------------------- | --------------------- |
| `on(event, callback)`  | Add event listener    |
| `off(event, callback)` | Remove event listener |
