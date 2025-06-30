# Mobile Wallet Cardano Integration

This document provides details on integrating Cardano with the mobile wallet application. The integration supports various functionalities such as retrieving account information, signing transactions, and signing data based on the [CIP-30 specification](https://cips.cardano.org/cip/CIP-30).

## Installation & Setup

### Install dependencies

The document uses the appkit of Reown to deploy. Please refer to the documentation at [here](https://docs.reown.io/appkit/overview).

```bash
npm install @reown/appkit
```

### Initialize the appkit

```javascript
import { createAppKit } from '@reown/appkit/core'
import { defineChain } from '@reown/appkit/networks'

const cardano = defineChain({
  id: 'cardano-mainnet',
  caipNetworkId: 'cip34:1-764824073',
  chainNamespace: 'cip34',
  name: 'Cardano Mainnet',
  nativeCurrency: {
    name: 'Cardano',
    symbol: 'ADA',
    decimals: 6
  },
  rpcUrls: {
    default: { http: ['https://rpc.walletconnect.org/v1'] }
  },
  blockExplorerUrls: {
    default: { name: 'Cardanoscan', url: 'https://cardanoscan.io' }
  }
})

// Instantiate AppKit
const modal = createAppKit({
  adapters: [],
  networks: [cardano],
  projectId,
  themeMode: 'light',
  features: {
    analytics: true
  },
  metadata: {
    name: 'AppKit HTML Example',
    description: 'AppKit HTML Example',
    url: 'https://reown.com/appkit',
    icons: []
  }
})

// Subscribe to state changes
modal.subscribeProviders(state => {
  provider = state['cip34']
})
```

## Methods

### cardano_getBalance
This method returns the total balance available of the wallet

#### Example
```javascript
const result = await provider.request({
  method: 'cardano_getBalance',
  params: {}
});
```

#### Returns
- The total balance as CBOR-encoded value.

### cardano_getNetworkId
This method returns the network ID of the currently connected network.

#### Example
```javascript
const result = await provider.request({
  method: 'cardano_getNetworkId',
  params: {}
});
```

#### Returns
- Network identifier (0 for testnet, 1 for mainnet).

### cardano_getUtxos
This method returns a list of all UTXOs (unspent transaction outputs) controlled by the wallet.

#### Example
```javascript
const result = await provider.request({
  method: 'cardano_getUtxos',
  params: [
    `cbor<value>_encoded`
    { page: 0, limit: 50 } // Optional: pagination
  ]
});
```

#### Parameters
- `amount`: (Optional) Minimum ADA and token value to filter UTXO.
- `paginate`: (Optional) Pagination object with page and limit.

#### Returns
- Array of CBOR-encoded TransactionUnspentOutput objects or null.

### cardano_getCollateral
This method returns UTXOs that are suitable for use as collateral inputs for transactions with Plutus script witnesses.

#### Example
```javascript
const result = await provider.request({
  method: 'cardano_getCollateral',
  params: {}
});
```

#### Returns
- Array of CBOR-encoded TransactionUnspentOutput objects suitable for collateral.

### cardano_getUsedAddresses
This method returns a list of all used addresses controlled by the wallet.

#### Example
```javascript
const result = await provider.request({
  method: 'cardano_getUsedAddresses',
  params: [
    { page: 0, limit: 50 } // Optional: pagination
  ]
});
```

#### Parameters
- `paginate`: (Optional) Pagination object with page and limit.

#### Returns
- Array of hex-encoded address bytes.

### cardano_getUnusedAddresses
This method returns a list of unused addresses controlled by the wallet.

#### Example
```javascript
const result = await provider.request({
  method: 'cardano_getUnusedAddresses',
  params: []
});
```

#### Returns
- Array of hex-encoded unused address bytes.

### cardano_getChangeAddress
This method returns an address owned by the wallet that should be used as a change address.

#### Example
```javascript
const result = await provider.request({
  method: 'cardano_getChangeAddress',
  params: []
});
```

#### Returns
- Hex-encoded change address bytes.

### cardano_signTx
This method requests that a user sign the unsigned portions of the supplied transaction.

#### Example
```javascript
const result = await provider.request({
  method: 'cardano_signTx',
  params: [
    'cbor_encoded_transaction', // CBOR-encoded transaction
    false // Optional: whether to allow partial signing
  ]
});
```

#### Parameters
- `tx`: CBOR-encoded transaction to be signed.
- `partialSign`: (Optional) Boolean indicating if partial signing is allowed.

#### Returns
- CBOR-encoded transaction witness set containing the signatures.

### cardano_submitTx
This method requests that a transaction be submitted to the Cardano network.

#### Example
```javascript
const result = await provider.request({
  method: 'cardano_submitTx',
  params: [
    'cbor_encoded_signed_transaction' // CBOR-encoded signed transaction
  ]});
```

#### Parameters
- `tx`: CBOR-encoded signed transaction to be submitted.

#### Returns
- Transaction hash (32-byte hex string) for tracking the transaction.

For more details, refer to the [CIP-30 Cardano dApp-Wallet Web Bridge](https://cips.cardano.org/cip/CIP-30).
