# Extension Wallet Thorchain Integration

## Develop Thorchain dApps

- [Transfer request](https://docs.xdefi.io/docs/technical-documentation/xdefi-extension-integration/detect-xdefi-providers#parameters)
  ​​

```javascript
const { asset, from, recipient, amount, memo, gasLimit } = {
  asset: {
    chain: "THOR",
    symbol: "RUNE",
    ticker: "RUNE",
  },
  from: "xxxx",
  recipient: "yyyy",
  amount: {
    amount: 500,
    decimals: 8,
  },
  memo: "hint",
  gasLimit: "10000000", // optional
};
window.xfi.thorchain.request(
  {
    method: "transfer",
    params: [
      {
        asset,
        from,
        recipient,
        amount,
        memo,
        gasLimit,
      },
    ],
  },
  (error, result) => {
    console.debug(error, result);
    this.lastResult = { error, result };
  },
);
```

## Deposit request

- [Parameters description](https://sdk.xdefi.io/docs/HEAD/detect_providers.html#params)
  ​​

```javascript
const { asset, from, recipient, amount, memo, gasLimit } = {
  asset: {
    chain: "THOR",
    symbol: "RUNE",
    ticker: "RUNE",
  },
  from: "xxxx",
  recipient: "yyyy",
  amount: {
    amount: 500,
    decimals: 8,
  },
  memo: "hint",
  gasLimit: "10000000", // optional
};
window.xfi.thorchain.request(
  {
    method: "deposit",
    params: [
      {
        asset,
        from,
        recipient,
        amount,
        memo,
        gasLimit,
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
if (window.xfi && window.xfi.thorchain) {
  window.xfi.thorchain.request(
    { method: "request_accounts", params: [] },
    (error, accounts) => console.log(`Thorchain accounts ${accounts}`),
  );
}
```

### Result example

```json
{
  "error": null,
  "result": ["thor1x7grq39z4l0uud8md0yxxc3q2g5wpygjlsfqgp"]
}
```

## Events

### chainChanged

```javascript
if (window.xfi && window.xfi.thorchain) {
  const provider = window.xfi.thorchain;
  provider.on("chainChanged", (obj) => {
    console.log(`chainChanged::${obj.chainId}`, obj);
  });
}
```

### accountsChanged

```javascript
if (window.xfi && window.xfi.thorchain) {
  const provider = window.xfi.thorchain;
  provider.on("accountsChanged", (obj) => {
    console.log(`accountsChanged::${obj.chainId}`, obj);
  });
}
```
