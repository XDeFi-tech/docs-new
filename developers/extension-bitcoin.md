# Extension Wallet Bitcoin Integration

Develop Bitcoin dApps

Our BTC connection also implements the [sats-connect](https://docs.xverse.app/sats-connect/) interface for signing transactions. To use please install this [library](https://www.npmjs.com/package/@xdefi/btc-connect).

### Transfer request

- [Parameters description](https://docs.xdefi.io/docs/technical-documentation/xdefi-extension-integration)

```javascript
window.xfi.bitcoin.request(
  {
    method: "transfer",
    params: [
      {
        feeRate,
        from,
        recipient,
        amount,
        memo,
      },
    ],
  },
  (error, result) => {
    console.debug(error, result);
    this.lastResult = { error, result };
  },
);
```

### Change network

```javascript
window.xfi.bitcoin.changeNetwork("testnet"); //active network becomes testnet
window.xfi.bitcoin.changeNetwork("mainnet"); //active network becomes mainnet
```

### Accounts request (Mainnet)

```javascript
if (window.xfi && window.xfi.bitcoin) {
  window.xfi.bitcoin.request(
    { method: "request_accounts", params: [] },
    (error, accounts) => console.log(`Bitcoin accounts ${accounts}`),
  );
}
```

#### Result example

```json
{
  "error": null,
  "result": ["bc1qst9xyekxekaep7tk4wd7lmrwdyc9laqngx5qpr"]
}
```

### Accounts Request (Testnet)

```javascript
if (window.xfi && window.xfi.bitcoin) {
  window.xfi.bitcoin.changeNetwork("testnet");
  window.xfi.bitcoin.request(
    { method: "request_accounts", params: [] },
    (error, accounts) => console.log(`Bitcoin accounts ${accounts}`),
  );
}
```

#### Result example

```json
{
  "error": null,
  "result": ["tb1......"]
}
```

### Events

#### chainChanged

```javascript
if (window.xfi && window.xfi.bitcoin) {
  const provider = window.xfi.bitcoin;
  provider.on("chainChanged", (obj) => {
    console.log(`chainChanged::${obj.chainId}`, obj);
  });
}
```

#### accountsChanged

```javascript
if (window.xfi && window.xfi.bitcoin) {
  const provider = window.xfi.bitcoin;
  provider.on("accountsChanged", (obj) => {
    console.log(`accountsChanged::${obj.chainId}`, obj);
  });
}
```
