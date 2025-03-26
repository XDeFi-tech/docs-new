# Mobile Wallet Dogecoin Integration

This document provides details on integrating Dogecoin with the mobile wallet application. The integration supports various functionalities such as sending transactions, retrieving account addresses, and signing messages.


## Installation & Setup

### Install dependencies

The document uses the appkit of Reown to deploy. Please refer to the documentation at [here](https://docs.reown.io/appkit/overview).

```bash
npm install @reown/appkit @reown/appkit-adapter-bitcoin
```

### Initialize the appkit

```javascript
import { createAppKit } from '@reown/appkit'
import { BitcoinAdapter } from '@reown/appkit-adapter-bitcoin'
import { defineChain } from '@reown/appkit/networks'

const dogecoin = defineChain({
  id: '1a91e3dace36e2be3bf030a65679fe821',
  caipNetworkId: 'bip122:1a91e3dace36e2be3bf030a65679fe821',
  chainNamespace: 'bip122',
  name: 'Dogecoin',
  nativeCurrency: {
    name: 'Dogecoin',
    symbol: 'DOGE', 
    decimals: 8
  },
  rpcUrls: {
    default: { http: ['https://rpc.walletconnect.org/v1'] }
  }
})

// Create adapter
const bitcoinAdapter = new BitcoinAdapter()

// Instantiate AppKit
const modal = createAppKit({
  adapters: [bitcoinAdapter],
  networks: [dogecoin],
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
  provider = state['bip122']
})
```

## Methods

### sendTransfer
This method is used to sign and submit a transfer of any amount of Dogecoin to a single recipient address.

#### Example
```javascript
const result = await provider.request({
  method: 'sendTransfer',
  params: {
    account: 'your_account_address',
    recipientAddress: 'recipient_address',
    amount: 100000000,
    memo: 'memo'
  }
});
```

#### Parameters
- `account`: The connected account's first external address.
- `recipientAddress`: The recipient's public address.
- `amount`: The amount of Dogecoin to send, denominated in satoshis.
- `memo`: (Optional) The OP_RETURN value as a hex string without 0x prefix.

#### Returns
- `txid`: The transaction id as a hex string without 0x prefix.


### getAccountAddresses
This method returns all current addresses needed for a dapp to fetch all UTXOs, calculate the total balance, and prepare transactions.

#### Example
```javascript
const result = await provider.request({
  method: 'getAccountAddresses',
  params: {
    account: 'your_account_address',
  }
});
```

#### Parameters
- `account`: The connected account's first external address.

#### Returns
- An array of objects containing:
  - `address`: Public address belonging to the account.
  - `publicKey`: (Optional) Public key for the derivation path in hex.
  - `path`: (Optional) Derivation path of the address.

### signPsbt
This method can be used to request the signature of a Partially Signed Bitcoin Transaction (PSBT).

#### Example
```javascript
const result = await provider.request({
  method: 'signPsbt',
  params: {
    account: 'your_account_address',
    psbt: 'base64_encoded_psbt',
    signInputs: [
      {
        index: 0,
        hash: 'transaction_hash',
      }
    ],
    broadcast: true
  }
});
```

#### Parameters
- `account`: The connected account's first external address.
- `psbt`: Base64 encoded string of the PSBT to sign.
- `signInputs`: Array of objects specifying which inputs to sign.
- `broadcast`: (Optional) Whether to finalize and broadcast the transaction after signing it.

#### Returns
- `psbt`: The base64 encoded signed PSBT.
- `txid`: (Optional) The transaction ID if the transaction was broadcasted.

### signMessage
This method is used to sign a message with one of the connected account's addresses

#### Example
```javascript
const result = await provider.request({
  method: 'signMessage',
  params: {
    account: 'your_account_address',
    message: 'message',
  }
});
```

#### Parameters
- `account`: The connected account's first external address.
- `message`: The message to be signed by the wallet.


#### Returns
- `address`: The Dogecoin address used to sign the message.
- `signature`: Hex encoded bytes of the signature.

For more details, refer to the [Dogecoin RPC Reference](https://docs.reown.com/advanced/multichain/rpc-reference/dogecoin-rpc). 
