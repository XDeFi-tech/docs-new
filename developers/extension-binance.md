# Extension Wallet Binance Integration

Develop Binance dApps

## Transfer request

- [Parameters description](https://docs.xdefi.io/docs/technical-documentation/xdefi-extension-integration/detect-xdefi-providers#parameters)

```javascript
const { asset, from, recipient, amount, memo } \= {
  asset: {
    chain: "BNB",
    symbol: "BNB",
    ticker: "BNB",
  },
  from: 'xxxx',
  recipient: 'yyyy',
  amount: {
    amount: 500,
    decimals: 8
  },

  memo: 'hint'
};

window.xfi.binance.request({
  method: "transfer",
  params: [{
    asset,
    from,
    recipient,
    amount,
    memo,
  }],
},

(error, result) => {
  console.debug(error, result);
  this.lastResult \= { error, result };
});
```

## Accounts request

```javascript
if (window.xfi && window.xfi.binance) {
  window.xfi.binance.request(
    { method: "request_accounts", params: [] },
    (error, accounts) => console.log(`Binance accounts ${accounts}`),
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
if (window.xfi && window.xfi.binance) {
  const provider = window.xfi.binance;
  provider.on("chainChanged", (obj) => {
    console.log(`chainChanged::${obj.chainId}`, obj);
  });
}
```

#### accountsChanged

```javascript
if (window.xfi && window.xfi.binance) {
  const provider = window.xfi.binance;
  provider.on("accountsChanged", (obj) => {
    console.log(`accountsChanged::${obj.chainId}`, obj);
  });
}
```
