# Extension Wallet Litecoin Integration

Develop Litecoin dApps

### Transfer request

- [Parameters description](./extension-detect-xdefi-providers#request-parameters-description)
  ​​

```javascript
window.xfi.litecoin.request(
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

### Accounts request

```javascript
if (window.xfi && window.xfi.litecoin) {
  window.xfi.request(
    { method: "request_accounts", params: [] },
    (error, accounts) => console.log(`Litecoin accounts ${accounts}`),
  );
}
```

#### Result example

```json
{
  "error": null,
  "result": ["ltc1qsl07yp7x8997762pdqwmncs7ej84lsxae83yjt"]
}
```

### Events

#### chainChanged

```javascript
if (window.xfi && window.xfi.litecoin) {
  const provider = window.xfi.litecoin;
  provider.on("chainChanged", (obj) => {
    console.log(`chainChanged::${obj.chainId}`, obj);
  });
}
```

#### accountsChanged

```javascript
if (window.xfi && window.xfi.litecoin) {
  const provider = window.xfi.litecoin;
  provider.on("accountsChanged", (obj) => {
    console.log(`accountsChanged::${obj.chainId}`, obj);
  });
}
```
