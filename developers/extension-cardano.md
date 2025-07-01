# Extension Wallet Cardano Integration

Develop Cardano based dApps

It injects a CIP-30 compatible provider in `window.cardano.ctrl` and follows the [CIP-30 specification](https://cips.cardano.org/cip/CIP-30) for dApp-wallet communication.

### Introduction

- [CIP-30: Cardano dApp-Wallet Web Bridge documentation](https://cips.cardano.org/cip/CIP-30)

### How to detect XDEFI's Cardano provider

As the official [CIP-30 guide](https://cips.cardano.org/cip/CIP-30) mentioned:

```javascript
window.onload = async () => {
  if (!window.cardano?.ctrl) {
    alert("Please install XDEFI extension");
  } else {
    const cardanoWallet = window.cardano.ctrl;

    // Enabling before using the Cardano wallet is recommended.
    // This method will ask the user whether to allow access if they haven't visited this website.
    // Also, it will request that the user unlock the wallet if the wallet is locked.
    const api = await cardanoWallet.enable();

    // You can get the balance using getBalance method
    const balance = await api.getBalance();

    // Get all used addresses
    const usedAddresses = await api.getUsedAddresses();

    console.log("Wallet connected successfully");
  }
};
```

### Integrate Cardano dApps with Ctrl (fka XDEFI)

#### `window.cardano.ctrl`

Ctrl (fka XDEFI) injects `window.cardano.ctrl` as a [CIP-30](https://cips.cardano.org/cip/CIP-30) compatible provider;

As a dApp developer, you can check if `window.cardano && window.cardano.ctrl` is defined.

If it is, XDEFI is injected and supports Cardano.

You can use it with regular Cardano libraries such as cardano-serialization-lib.

**Basic Connection Example**

```javascript
// Check if Ctrl (fka XDEFI) is available
if (window.cardano && window.cardano.ctrl) {
  const cardanoWallet = window.cardano.ctrl;

  // Enable the wallet (request connection)
  try {
    const api = await cardanoWallet.enable();
    console.log("Connected to Ctrl wallet");

    // Now you can use the API methods
    const balance = await api.getBalance();
    const addresses = await api.getUsedAddresses();
  } catch (error) {
    console.error("Failed to connect:", error);
  }
} else {
  console.log("Ctrl (fka XDEFI) is not installed");
}
```

### Basic API

Please find the Full Basic API on [CIP-30 specification](https://cips.cardano.org/cip/CIP-30)

#### Connect using `enable`

```javascript
enable(): Promise<CardanoWalletApi>
```

The `window.cardano.ctrl.enable()` method requests the extension to be unlocked if it's currently locked. If the user hasn't given permission to the webpage, it will ask the user to give permission for the webpage to access XDEFI. This method follows the [CIP-30 enable specification](https://cips.cardano.org/cip/CIP-30).

#### Get Network ID

```javascript
getNetworkId(): Promise<number>
```

Returns the network ID of the currently connected network. Returns `0` for testnet and `1` for mainnet. See [CIP-30 getNetworkId](https://cips.cardano.org/cip/CIP-30).

#### Get Balance

```javascript
getBalance(): Promise<cbor<value>>
```

Returns the total balance available of the wallet as CBOR-encoded value. This is the same as summing the results of `getUtxos()`, but maintained by the wallet in a more efficient manner. See [CIP-30 getBalance](https://cips.cardano.org/cip/CIP-30).

#### Get UTXOs

```javascript
getUtxos(amount?: cbor<value>, paginate?: Paginate): Promise<cbor<TransactionUnspentOutput>[] | null>
```

Returns a list of all UTXOs (unspent transaction outputs) controlled by the wallet. If `amount` is provided, filters UTXOs by minimum value. See [CIP-30 getUtxos](https://cips.cardano.org/cip/CIP-30).

#### Get Collateral

```javascript
getCollateral(amount?: cbor<value>): Promise<cbor<TransactionUnspentOutput>[] | null>
```

Returns UTXOs suitable for use as collateral inputs for transactions with Plutus script witnesses. The maximum amount is typically 5 ADA. See [CIP-30 getCollateral](https://cips.cardano.org/cip/CIP-30).

#### Get Used Addresses

```javascript
getUsedAddresses(paginate?: Paginate): Promise<Address[]>
```

Returns a list of all used addresses controlled by the wallet. These are addresses that have been included in some on-chain transaction. See [CIP-30 getUsedAddresses](https://cips.cardano.org/cip/CIP-30).

#### Get Unused Addresses

```javascript
getUnusedAddresses(): Promise<Address[]>
```

Returns a list of unused addresses controlled by the wallet. See [CIP-30 getUnusedAddresses](https://cips.cardano.org/cip/CIP-30).

#### Get Change Address

```javascript
getChangeAddress(): Promise<Address>
```

Returns an address owned by the wallet that should be used as a change address to return leftover assets during transaction creation. See [CIP-30 getChangeAddress](https://cips.cardano.org/cip/CIP-30).

#### Get Reward Addresses

```javascript
getRewardAddresses(): Promise<Address[]>
```

Returns the reward addresses owned by the wallet. This can return multiple addresses for multi-stake-keys wallets. See [CIP-30 getRewardAddresses](https://cips.cardano.org/cip/CIP-30).

#### Sign Transaction

```javascript
signTx(tx: cbor<transaction>, partialSign?: bool): Promise<cbor<transaction_witness_set>>
```

Requests that a user sign the unsigned portions of the supplied transaction. If `partialSign` is true, the wallet only tries to sign what it can. See [CIP-30 signTx](https://cips.cardano.org/cip/CIP-30).

#### Sign Data

```javascript
signData(addr: Address, payload: Bytes): Promise<DataSignature>
```

This endpoint utilizes the CIP-0008 signing spec for standardization/safety reasons. It allows the dApp to request the user to sign a payload conforming to said spec. See [CIP-30 signData](https://cips.cardano.org/cip/CIP-30).

#### Submit Transaction

```javascript
submitTx(tx: cbor<transaction>): Promise<hash32>
```

Requests that a transaction be sent through the wallet. Returns the transaction ID for the dApp to track. See [CIP-30 submitTx](https://cips.cardano.org/cip/CIP-30).

For more details, refer to the [CIP-30 Cardano dApp-Wallet Web Bridge](https://cips.cardano.org/cip/CIP-30) specification.
