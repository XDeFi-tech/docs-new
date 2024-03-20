# Avalanche (AVAX)

Avalanche is an open-source platform for launching decentralized applications and enterprise blockchain deployments in one interoperable, highly scalable ecosystem. Avalanche is the first decentralized platform that confirms transactions in under one second, supports the entirety of the Ethereum development toolkit, and enables millions of independent validators to participate as full block producers.

This document is based on the EVMs (Ethereum Virtual Machine) and the Ethereum network.

### Detect XDEFI Wallet with Ethereum

To detect whether your browser is running XDEFI Wallet, you can use the following code:

```javascript
if (
  (typeof window.ethereum !== "undefined" && window.ethereum?._XDEFI) ||
  window.xfi
) {
  console.log("XDEFI Wallet detected");
  // Your code here
}
```

Notice: `window.ethereum` is a standard Ethereum provider object, and `window.ethereum._XDEFI` is a property added by XDEFI Wallet. If `window.ethereum` is not available, you can also check `window.xfi` which is a global object added by XDEFI Wallet.

The XDEFI Wallet on Ethereum JavaScript provider API is specified by [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) and [EIP-6963](https://eips.ethereum.org/EIPS/eip-6963). Support `window.ethereum` only and removal `window.web3`

<div ref="refDetectWallet"/>

### Connect/Disconnect to XDEFI Wallet

To connect to XDEFI Wallet (access the user's [blockchain - like Ethereum] account(s)), you can use the following code:

```javascript
// Connect & get accounts
window.ethereum.request({method: 'eth_accounts'});
// Alias for connection
window.ethereum.request({method: 'eth_requestAccounts'});​
// Check if dapp connected
window.ethereum.isConnected();
// Check if the caller's current permissions
window.ethereum.request({method: 'wallet_getPermissions'});
// Check if request the given permissions
window.ethereum.request({method: 'wallet_requestPermissions'});
```

To disconnect from XDEFI Wallet, please use:

```javascript
window.ethereum.disconnect();
```

### Experience functions

When your account is connected to XDEFI Wallet, let's start experiencing more functions.

#### Get the current account

```javascript
window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
  if (accounts.length > 0) {
    console.log("Current account:", accounts[0]);
    // Do something with the account
  } else {
    console.log("No account connected");
    // Do something else
  }
});
```

Above code will return `Promise<Array[String]>` with the current account address. If wallet can not be found, return `[]` instead of `throw Error`

#### Check wallet whether it is connected(exists) or not

```javascript
window.ethereum
  .request({ method: "has_wallet", params: ["ethereum"] })
  .then(() => {
    // Wallet is connected
  })
  .catch((e) => {
    // Wallet not found (not exist)
  });
```

Above code will return `Promise<Boolean>` with the current account address. If wallet can not be found, return `false` instead of `throw Error`

#### Sign Transaction

```javascript
// Example Sign Transactionconst
const signature = window.ethereum.request({
  method: 'eth_signTransaction',
  params: [
    "from": "string",
    "to": "string",
    "gas": "string",
    "gasPrice": "string",
    "value": "string",
    "data": "string",
    "nonce": "string"
  ]
});
```

Above code will return `Promise<Signature | RPC: 2.0>`

#### Transfer

```javascript
window.ethereum.request({
  method: "eth_sendTransaction",
  params: [
    {
      from: "string",
      to: "string",
      gas: "string",
      gasPrice: "string",
      value: "string",
      data: "string",
      nonce: "string",
    },
  ],
});
```

Return `Promise<String>` with the transaction hash

#### Decrypt Message

```javascript
window.ethereum
  .request({ method: "eth_decrypt", params: [encryptedMessage, accounts[0]] })
  .then((decryptedMessage) =>
    console.log("The decrypted message is:", decryptedMessage),
  )
  .catch((error) => console.log(error.message));
```

Above code will return `Promise<String>` with the decrypted message

#### Get Encryption Public Key

Return `Promise<String>` with the public key

```javascript
let encryptionPublicKey;
window.ethereum
  .request({
    method: "eth_getEncryptionPublicKey",
    params: [accounts[0]], // You must have access to the specified account
  })
  .then((result) => {
    encryptionPublicKey = result;
  })
  .catch((error) => {
    if (error.code === 4001) {
      // EIP-1193 userRejectedRequest error
      console.log("Can't encrypt anything without the key.");
    } else {
      console.error(error);
    }
  });
```

#### Encrypt Message

```javascript
const ethUtil = require('ethereumjs-util');
const encryptedMessage = ethUtil.bufferToHex(
  Buffer.from(
    JSON.stringify(
      sigUtil.encrypt(
        {
          publicKey: encryptionPublicKey,
          data: 'Hello, World!,
          version: 'x25519-xsalsa20-poly1305',
        }
      )
    ),
    'utf8'
  )
);
```

#### Add Ethereum Chain

```javascript
window.ethereum.request
interface AddEthereumChainParameter {
  chainId: string; // A 0x-prefix hex string
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string; // 2-6 characters long
    decimals: 18;
  };
  rpcUrls: string[];
  blockExplorerUrls?: string[];
  iconUrls?: string[]; // Currently ignored
}
```

Return `Promise<void>` with the result

#### Switch Ethereum Chain

Return `Promise<void>` with the result, and an error otherwise

```javascript
try {
  await window.await ethereum.request({
  method: 'wallet_switchEthereumChain',
    params: [{ chainId: '0xf00' }],
  });
} catch (switchError) {
  if (switchError.code === 4902) {
    try {
      await ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0xf00',
            chainName: '...',
            rpcUrls: ['https://...'] /* ... */,
          },
        ],
      });
    } catch (addError) {
      // handle "add" error
    }
  }
  // handle other "switch" errors
}
```

#### Watch Asset

Return true if the token was added, false otherwise

```javascript
window.ethereum
  .request({
    method: "wallet_watchAsset",
    params: {
      type: "ERC20",
      options: {
        address: "0x1234567890123456789012345678901234567890",
        symbol: "FOO",
        decimals: 18,
        image: "https://example.com/token-image.png",
      },
    },
  })
  .then((success) => {
    if (success) {
      console.log("FOO successfully added to wallet!");
    } else {
      throw new Error("Something went wrong.");
    }
  })
  .catch(console.error);
```

#### RPC Request

Return `Promise<Ethereum RPC>` Currently only support HTTP(s) method Reference: [RPC Method](http://google.com)

```javascript
window.ethereum.request({method: '<Method>', params: [args1,....]})
```

### Subscription

Support subscribe using JSON-RPC notifications. This allows clients to wait for events instead of polling for them. All results will be released at `data` event.

#### Methods

```javascript
// For Subscribe
window.ethereum
  .request({
    method: "eth_subscribe",
    params: ["<type>", "<options>"],
  })
  .then((subscriptionId) => {
    console.log("Subscription ID:", subscriptionId);
    // Do something with the subscription ID
  });

// For Unsubscribe
window.ethereum.request({
  method: "eth_unsubscribe",
  params: ["<Subscription ID>"],
});
```

#### Example

```javascript
// Subscribe for event
const subscriptionID = window.ethereum.request({method: 'eth_subscribe', params: ["logs", {
  address: "0x1234567890123456789012345678901234567890",
  topics: ["0x1234567890123456789012345678901234567890123456789012345678901234"]
})
// You can listen for incoming notifications by
window.ethereum.on("data", data => {
  // Do the rest of your work with data
})
```

### Events

Currently we only support some action events from Wallet

```javascript
window.ethereum.on('event_name', callback);
​//Example
window.ethereum.on('close', () => window.location.reload());
window.ethereum.on('accountsChanged', () => window.location.reload());
```

#### Events supported

| Events            | Trigger                                       |
| ----------------- | --------------------------------------------- |
| `accountsChanged` | Receive when active account changed in Wallet |
| `networkChanged`  | Receive when active network changed in Wallet |
| `chainChanged`    | Receive when active chain changed in Wallet   |
| `close`           | Alias for disconnect event                    |
| `disconnect`      | Receive when disconnecting from Wallet        |

#### Methods supported

| Methods                | Description           |
| ---------------------- | --------------------- |
| `on(event, callback)`  | Add event listener    |
| `off(event, callback)` | Remove event listener |

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'

import DetectWallet from '../components/DetectWallet.jsx'

const refDetectWallet = ref()
const refConnectWallet = ref()
onMounted(() => {
  const rootDetectWallet = createRoot(refDetectWallet.value)
  rootDetectWallet.render(createElement(DetectWallet, {
    chainId: 'ethereum',
  }, null))
})
</script>
