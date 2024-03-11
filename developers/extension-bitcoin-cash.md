# Extension Wallet Bitcoin Cash Integration

Develop BitcoinCash dApps

## Transfer request

- [Parameters description](https://docs.xdefi.io/docs/technical-documentation/xdefi-extension-integration/detect-xdefi-providers#parameters)

```javascript
window.xfi.bitcoincash.request(
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

## Accounts request

```javascript
if (window.xfi && window.xfi.bitcoincash) {
  window.xfi.bitcoincash.request(
    { method: "request_accounts", params: [] },
    (error, accounts) => console.log(`Bitcoincash accounts ${accounts}`),
  );
}
```

### Result example

```json
{
  "error": null,
  "result": ["bitcoincash:qzxr6zwfhez9g06xmpe4n8xxls36rlkqlyv606v7zh"]
}
```

## Events

### chainChanged

```javascript
if (window.xfi && window.xfi.bitcoincash) {
  const provider = window.xfi.bitcoincash;
  provider.on("chainChanged", (obj) => {
    console.log(`chainChanged::${obj.chainId}`, obj);
  });
}
```

### accountsChanged

```javascript
if (window.xfi && window.xfi.bitcoincash) {
  const provider = window.xfi.bitcoincash;
  provider.on("accountsChanged", (obj) => {
    console.log(`accountsChanged::${obj.chainId}`, obj);
  });
}
```
