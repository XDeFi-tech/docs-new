# Mobile Wallet Ethereum Integration

This document provides details on integrating Ethereum with the mobile wallet application. The integration supports various functionalities such as sending transactions, signing messages, and interacting with smart contracts.

## Installation & Setup

### Install dependencies

The document uses the appkit of Reown to deploy. Please refer to the documentation at [here](https://docs.reown.io/appkit/overview).

```bash
npm install @reown/appkit @reown/appkit-adapter-ethers
```

### Initialize the appkit

```javascript
import { createAppKit } from '@reown/appkit'
import { EthereumAdapter } from '@reown/appkit-adapter-ethers'
import { mainnet, polygon } from '@reown/appkit/networks'

// Create adapter
const ethereumAdapter = new EthereumAdapter()

// Instantiate AppKit
const modal = createAppKit({
  adapters: [ethereumAdapter],
  networks: [mainnet, polygon],
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
  provider = state['eip155']
})
```

## Methods

### personal_sign
This method calculates an Ethereum specific signature.

#### Example
```javascript
const result = await provider.request({
  method: 'personal_sign',
  params: ['message to sign', 'your_account_address']
});
```

#### Parameters
- `message`: The message to sign.
- `account`: The address to sign with.

#### Returns
- `signature`: The signature.

### eth_signTypedData
This method calculates an Ethereum-specific signature for typed data.

#### Example
```javascript
const result = await provider.request({
  method: 'eth_signTypedData',
  params: ['your_account_address', {
    types: {
      EIP712Domain: [
        { name: 'name', type: 'string' },
        { name: 'version', type: 'string' },
        { name: 'chainId', type: 'uint256' },
        { name: 'verifyingContract', type: 'address' }
      ],
      Person: [
        { name: 'name', type: 'string' },
        { name: 'wallet', type: 'address' }
      ],
      Mail: [
        { name: 'from', type: 'Person' },
        { name: 'to', type: 'Person' },
        { name: 'contents', type: 'string' }
      ]
    },
    primaryType: 'Mail',
    domain: {
      name: 'Ether Mail',
      version: '1',
      chainId: 1,
      verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'
    },
    message: {
      from: { name: 'Cow', wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826' },
      to: { name: 'Bob', wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB' },
      contents: 'Hello, Bob!'
    }
  }]
});
```

#### Parameters
- `account`: The address to sign with.
- `message`: The message to sign containing type information, a domain separator, and data.

#### Returns
- The signature.

### eth_sendTransaction
This method creates a new message call transaction or a contract creation.

#### Example
```javascript
const result = await provider.request({
  method: 'eth_sendTransaction',
  params: [{
    from: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',
    to: '0xBDE1EAE59cE082505bB73fedBa56252b1b9C60Ce',
    data: '0x',
    gasPrice: '0x029104e28c',
    gas: '0x5208',
    value: '0x00'
  }]
});
```

#### Parameters
- `from`: The address the transaction is sent from.
- `to`: The address the transaction is directed to.
- `data`: The compiled code of a contract OR the hash of the invoked method signature and encoded parameters.
- `value`: (Optional) Integer of the value sent with this transaction.
- `gas`: (Optional) Integer of the gas provided for the transaction execution.
- `gasPrice`: (Optional) Integer of the gasPrice used for each paid gas.
- `nonce`: (Optional) Integer of a nonce.

#### Returns
- The transaction hash.

### eth_signTransaction
This method signs a transaction.

#### Example
```javascript
const result = await provider.request({
  method: 'eth_signTransaction',
  params: [{
    from: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',
    to: '0xd46e8dd67c5d32be8058bb8eb970870f07244567',
    data: '0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675',
    gas: '0x76c0', // 30400
    gasPrice: '0x9184e72a000', // 10000000000000
    value: '0x9184e72a', // 2441406250
    nonce: '0x117' // 279
  }]
});
```

#### Parameters
- `from`: The address the transaction is sent from.
- `to`: The address the transaction is directed to.
- `data`: The compiled code of a contract OR the hash of the invoked method signature and encoded parameters.
- `value`: (Optional) Integer of the value sent with this transaction.
- `gas`: (Optional) Integer of the gas provided for the transaction execution.
- `gasPrice`: (Optional) Integer of the gasPrice used for each paid gas.
- `nonce`: (Optional) Integer of a nonce.

#### Returns
- The signed transaction data.

### eth_sendRawTransaction
This method sends a raw transaction to the network.

#### Example
```javascript
const result = await provider.request({
  method: 'eth_sendRawTransaction',
  params: ['0x0dcd4dc5de97a88909b4913353263fed8164be4388d4d8b3f058c672db1e677a']
});
```

#### Parameters
- The raw transaction data.

#### Returns
- The transaction hash.

### wallet_switchEthereumChain
This method is used to switch the Ethereum chain.

#### Example
```javascript
const result = await provider.request({
  method: 'wallet_switchEthereumChain',
  params: [{ chainId: '0x1' }]
});
```

#### Parameters
- `chainId`: The chain ID of the Ethereum chain to switch to.

#### Returns
- Return true if the chain is switched successfully.

### wallet_addEthereumChain
This method is used to add a new Ethereum chain.

#### Example
```javascript
const result = await provider.request({
  method: 'wallet_addEthereumChain',
  params: [{
    chainId: "0x64",
    chainName: "Gnosis",
    rpcUrls: [
      "https://rpc.gnosischain.com"
    ],
    iconUrls: [
      "https://xdaichain.com/fake/example/url/xdai.svg",
      "https://xdaichain.com/fake/example/url/xdai.png"
    ],
    nativeCurrency: {
      name: "XDAI",
      symbol: "XDAI",
      decimals: 18
    },
    blockExplorerUrls: [
      "https://blockscout.com/poa/xdai/"
    ]
  }]
});
```

#### Parameters
- `chainId`: The chain ID of the Ethereum chain to add.
- `chainName`: The name of the Ethereum chain to add.
- `rpcUrls`: The RPC URLs of the Ethereum chain to add.
- `blockExplorerUrls`: The block explorer URLs of the Ethereum chain to add.
- `nativeCurrency`: The native currency of the Ethereum chain to add.
- `iconUrls`: The icon URLs of the Ethereum chain to add.

#### Returns
- Return true if the chain is added successfully.


#### wallet_getCapabilities
This method is used to get the capabilities of the wallet.

#### Example
```javascript
const result = await provider.request({
  method: 'wallet_getCapabilities',
  params: ["0xd46e8dd67c5d32be8058bb8eb970870f07244567", ["0x2105", "0x14A34"]]
});
```

#### Parameters
- `account`: (Optional) The address of the account to get the capabilities of.
- `chainIds`: (Optional) The chain IDs of the Ethereum chains to get the capabilities of.

#### Returns
- List of capabilities supported by the wallet.
- For example:
```json
{
  "0x1": {
     "paymasterService": {
       "supported": true,
     },
     "atomicBatch": {
       "supported": true,
     },
   },
   "0x14A34": {
      "paymasterService": {
        "supported": false,
      },
   },
}
```

For more details, refer to the [Ethereum RPC Reference](https://docs.reown.com/advanced/multichain/rpc-reference/ethereum-rpc).
