# Extension Wallet Dogecoin Integration

Develop Dogecoin dApps

## Accounts request

```javascript
if (window.xfi && window.xfi.dogecoin) {
  window.xfi.dogecoin.request(
    { method: "request_accounts", params: [] },
    (error, accounts) => console.log(`Dogecoin accounts ${accounts}`),
  );
}
```

### Result example

```json
{
  "error": null,
  "result": ["dogeaddress"]
}
```

## Transfer request

```javascript
const { asset, from, recipient, amount, memo } = {
  asset: {
    chain: "DOGE",
    symbol: "DOGE",
    ticker: "DOGE",
  },
  from: "xxxx", // DOGE address
  recipient: "yyyy", // DOGE address
  // equivalent to 5.0 DOGE
  amount: {
    amount: 50000000,
    decimals: 8,
  },
  memo: "hint", // optional
};
window.xfi.dogecoin.request(
  {
    method: "transfer",
    params: [
      {
        asset,
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

## Events

### chainChanged

```javascript
if (window.xfi && window.xfi.dogecoin) {
  const provider = window.xfi.dogecoin;
  provider.on("chainChanged", (obj) => {
    console.log(`chainChanged::${obj.chainId}`, obj);
  });
}
```

### accountsChanged

```javascript
if (window.xfi && window.xfi.dogecoin) {
  const provider = window.xfi.dogecoin;
  provider.on("accountsChanged", (obj) => {
    console.log(`accountsChanged::${obj.chainId}`, obj);
  });
}
```
