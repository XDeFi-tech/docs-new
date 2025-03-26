# Mobile Wallet Cosmos Integration

This document provides details on integrating Cosmos with the mobile wallet application. The integration supports various functionalities such as retrieving account information and signing transactions.

## Installation & Setup

### Install dependencies

The document uses the appkit of Reown to deploy. Please refer to the documentation at [here](https://docs.reown.io/appkit/overview).

```bash
npm install @reown/appkit @reown/appkit-adapter-cosmos
```

### Initialize the appkit

```javascript
import { createAppKit } from '@reown/appkit/core'
import { defineChain } from '@reown/appkit/networks'

const cosmos = defineChain({
  id: 'cosmoshub-4',
  caipNetworkId: 'cosmos:cosmoshub-4',
  chainNamespace: 'cosmos',
  name: 'Cosmos Hub',
  nativeCurrency: {
    name: 'Cosmos',
    symbol: 'ATOM',
    decimals: 18
  },
  rpcUrls: {
    default: { http: ['https://rpc.walletconnect.org/v1'] }
  },
  blockExplorerUrls: {
    default: { name: 'Mintscan', url: 'https://mintscan.io/cosmos' }
  }
})
const osmosis = defineChain({
  id: 'osmosis-1',
  caipNetworkId: 'cosmos:osmosis-1',
  chainNamespace: 'cosmos',
  name: 'Osmosis',
  nativeCurrency: {  name: 'Osmosis', symbol: 'OSMO', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.walletconnect.org/v1'] }
  },
  blockExplorerUrls: {
    default: { name: 'Mintscan', url: 'https://mintscan.io/osmosis' }
  }
})

// Instantiate AppKit
const modal = createAppKit({
  adapters: [],
  networks: [cosmos, osmosis],
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
  provider = state['cosmos']
})
```

## Methods

### cosmos_getAccounts
This method returns an array of key pairs available to sign from the wallet mapped with an associated algorithm and address on the blockchain.

#### Example
```javascript
const result = await provider.request({
  method: 'cosmos_getAccounts',
  params: {}
});
```

#### Returns
- `Array`: Array of accounts:
  - `algo`: Algorithm used for signing.
  - `address`: Corresponding address for keypair.
  - `pubkey`: Base64 encoded public key for keypair.

### cosmos_signDirect
This method returns a signature for the provided document to be signed targeting the requested signer address corresponding to the keypair returned by the account data.

#### Example
```javascript
const result = await provider.request({
  method: 'cosmos_signDirect',
  params: {
    signerAddress: 'cosmos1sguafvgmel6f880ryvq8efh9522p8zvmrzlcrq',
    signDoc: {
      chainId: 'cosmoshub-4',
      accountNumber: '1',
      authInfoBytes: 'CgoKABIECgIIARgBEhMKDQoFdWNvc20SBDIwMDAQwJoM',
      bodyBytes: 'CpABChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEnAKLWNvc21vczFwa3B0cmU3ZmRrbDZnZnJ6bGVzamp2aHhobGMzcjRnbW1rOHJzNhItY29zbW9zMXF5cHF4cHE5cWNyc3N6ZzJwdnhxNnJzMHpxZzN5eWM1bHp2N3h1GhAKBXVjb3NtEgcxMjM0NTY3'
    }
  }
});
```

#### Parameters
- `signerAddress`: Corresponding address for keypair.
- `signDoc`: Document to be signed:
  - `chainId`: Identifier of blockchain.
  - `accountNumber`: Blockchain account number.
  - `authInfoBytes`: Encoded authentication information.
  - `bodyBytes`: Encoded body of message to sign.

#### Returns
- `signature`: Corresponding signature for signed document.
- `signed`: Signed document.

### cosmos_signAmino
This method returns a signature for the provided document to be signed targeting the requested signer address corresponding to the keypair returned by the account data.

#### Example
```javascript
const result = await provider.request({
  method: 'cosmos_signAmino',
  params: {
    signerAddress: 'cosmos1sguafvgmel6f880ryvq8efh9522p8zvmrzlcrq',
    signDoc: {
      chain_id: 'foochain',
      account_number: '7',
      sequence: '54',
      memo: 'hello, world',
      msgs: [],
      fee: { amount: [], gas: '23' }
    }
  }
});
```

#### Parameters
- `signerAddress`: Corresponding address for keypair.
- `signDoc`: Document to be signed:
  - `chain_id`: Identifier of blockchain.
  - `account_number`: Blockchain account number.
  - `sequence`: Blockchain account sequence.
  - `memo`: Amino message memo.
  - `msgs`: Array of amino messages to be signed.
  - `fee`: Fee description object.

#### Returns
- `signature`: Corresponding signature for signed document.
- `signed`: Signed document.

For more details, refer to the [Cosmos RPC Reference](https://docs.reown.com/advanced/multichain/rpc-reference/cosmos-rpc).
