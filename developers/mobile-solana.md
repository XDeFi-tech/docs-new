# Mobile Wallet Solana Integration

This document provides details on integrating Solana with the mobile wallet application. The integration supports various functionalities such as retrieving account information, signing messages, and sending transactions.

## Installation & Setup

### Install dependencies

The document uses the appkit of Reown to deploy. Please refer to the documentation at [here](https://docs.reown.io/appkit/overview).

```bash
npm install @reown/appkit @reown/appkit-adapter-solana
```

### Initialize the appkit

```javascript
import { createAppKit } from '@reown/appkit'
import { SolanaAdapter } from '@reown/appkit-adapter-solana'
import { solana, solanaTestnet } from '@reown/appkit/networks'

// Create adapter
const solanaAdapter = new SolanaAdapter()

// Instantiate AppKit
const modal = createAppKit({
  adapters: [solanaAdapter],
  networks: [solana, solanaTestnet],
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
  provider = state['solana']
})
```

## Methods

### solana_getAccounts
This method returns an array of public keys available to sign from the wallet.

#### Example
```javascript
const result = await provider.request({
  method: 'solana_getAccounts',
  params: {}
});
```

#### Returns
- `Array`: Array of accounts:
  - `pubkey`: Public key for keypair.

### solana_signMessage
This method returns a signature for the provided message from the requested signer address.

#### Example
```javascript
const result = await provider.request({
  method: 'solana_signMessage',
  params: {
    message: 'base58_encoded_message',
    pubkey: 'your_public_key'
  }
});
```

#### Parameters
- `message`: The message to be signed (base58 encoded).
- `pubkey`: Public key of the signer.

#### Returns
- `signature`: Corresponding signature for signed message.

### solana_signTransaction
This method returns a signature over the provided instructions by the targeted public key.

#### Example
```javascript
const result = await provider.request({
  method: 'solana_signTransaction',
  params: {
    transaction: 'base64_encoded_transaction'
  }
});
```

#### Parameters
- `transaction`: Base64-encoded serialized transaction.

#### Returns
- `signature`: Corresponding signature for signed instructions.
- `transaction`: Optional: base64-encoded serialized transaction.

### solana_signAndSendTransaction
This method is responsible for signing and sending a transaction to the Solana network.

#### Example
```javascript
const result = await provider.request({
  method: 'solana_signAndSendTransaction',
  params: {
    transaction: 'base64_encoded_transaction',
    sendOptions: {
      skipPreflight: true,
      preflightCommitment: 'finalized'
    }
  }
});
```

#### Parameters
- `transaction`: The whole transaction serialized and encoded with base64.
- `sendOptions`: Options for sending the transaction:
  - `skipPreflight`: Skip preflight checks.
  - `preflightCommitment`: Preflight commitment level.

#### Returns
- `signature`: The signature of the transaction encoded with base58 used as transaction id.

For more details, refer to the [Solana RPC Reference](https://docs.reown.com/advanced/multichain/rpc-reference/solana-rpc).
