# Extension Wallet NEAR Integration

Develop NEAR dApps

## NEAR wallet-selector

XDEFI is a provider available in NEAR [wallet-selector](https://github.com/near/wallet-selector) project. This allows dApp developer to allow XDEFI Wallet users to connect to their dApp with a single click.

## window.xfi.near object

XDEFI Wallet provides a z object that dApp developers can use to interact with the XDEFI Wallet. The `window.xfi.near` object is available after the window.onLoad event is fired.

It is recommended to use the NEAR wallet-selector project to integrate XDEFI Wallet with your dApp. The wallet-selector project will take care of the `window.xfi.near` object for you.

### window.xfi.near.request

Here is a sample code to request XDEFI Wallet to connect to a dApp.

```javascript
window.xfi.near.request({
  method: "connect",
});
```

**Methods**

There are 4 methods available in `window.xfi.near.request` object.

**connect**

Returns a promise that resolves to a `address[]` object.

```javascript
const addresses = await window.xfi.near.request({
  method: "connect",
});
```

**disconnect**

Disconnects the dApp from XDEFI Wallet.

```javascript
await window.xfi.near.request({
  method: "disconnect",
});
```

**signAndSendTransaction**

Signs and sends a transaction to the blockchain. Returns the transaction hash.

```javascript
type Transaction = {
  signerId: string;
  publicKey: PublicKey;
  nonce: BN;
  receiverId: string;
  actions: Action[];
  blockHash: Uint8Array;
};

const transaction : Transaction = {...};

const txHash: string = await window.xfi.near.request({
  method: 'signAndSendTransaction',
  params: {
    transaction
  },
})
```

**signAndSendTransactions**

Signs and sends multiple transactions to the blockchain. Returns the transaction hashes.

```javascript
type Transaction = {
  signerId: string;
  publicKey: PublicKey;
  nonce: BN;
  receiverId: string;
  actions: Action[];
  blockHash: Uint8Array;
};

const transactions: Transaction[] = [{...}];

const txHashes: string[] = await window.xfi.near.request({
  method: 'signAndSendTransactions',
  params: {
    transactions
  },
})
```

**Other function signatures**

The previous functions are the most commonly used functions. However, there are other functions available in `window.xfi.near` object. See below the full list of functions.

```javascript
connect: (network?: NETWORKS) => Promise<INearAccount[]>
disconnect: () => Promise<void>
signAndSendTransaction: (
  transaction: NearTransaction
) => Promise<NearFinalExecutionOutcome>
signAndSendTransactions: (
  transactions: Array<NearTransaction>
) => Promise<Array<NearFinalExecutionOutcome>>
```
