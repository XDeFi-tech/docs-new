# Extension Wallet Tron Integration

Note: *Tron support is currently not available. It will be available from v30 (end of Q3 2024).*

Develop Tron dApps

Example dApp using Tron: [https://main.d2ladgp2r2c4c2.amplifyapp.com/](https://main.d2ladgp2r2c4c2.amplifyapp.com/)

### Tron Provider

XDEFI Wallet provider exposes different methods in `window.xfi.tron` or `window.tron`

Below are functions supported by the provider `window.tron` or `window.xfi.tron`.

### Accounts Request

::: code-group

```javascript [Request]
const accounts = await window.xfi.tron.request({
  method: 'eth_requestAccounts',
})
console.log(accounts)
```

```json [Response]
["TQXoXrsGLVhPM9jp2DNyQhnuZn2UcnSm8m"]
```
:::

### Sign Message V2

`signMessageV2(message: string, privateKey?: string): Promise<string>;`

::: code-group

```javascript [Request]
const signature = await window.xfi.tron.tronWeb.trx.signMessageV2('Hello World');

console.log(signature);

```

```json [Response]
"0xb6a8a33133bcc490ac028f85aa370ada2b7368e55cf274ab5cce246365e2e8724566a388293b21c03dbfbe71ee1cf2df02487e54176ea09cce602e134ff87d8d1c"
```
:::

### Get Block By Number

`getBlockByNumber(index: number): Promise<{ blockID: string }>;`

::: code-group

```javascript [Request]

const response = await window.xfi.tron.tronWeb.trx.getBlockByNumber(1000);

console.log(response);

```

```json [Response]
{
  "blockID": "00000000000000644df09e6883a3a7900814f8d78cf47b255b7ed284527a773d",
  "block_header": {
    "raw_data": {
      "number": 100,
      "txTrieRoot": "0000000000000000000000000000000000000000000000000000000000000000",
      "witness_address": "414b4778beebb48abe0bc1df42e92e0fe64d0c8685",
      "parentHash": "0000000000000063ed8544c4c17fc053dfc729e610673c783bcdc3cf0781b07f",
      "timestamp": 1529891811000
    },
    "witness_signature": "277d4440e2feb552b6d2d557ba407f68310887020fcc7ef6e2733286a0d13c703ebf2306293bda9d2ddac09835be67583c736a65494115825b6f4ab6a15f1e0f01"
  }
}
```
:::

More features coming soon...