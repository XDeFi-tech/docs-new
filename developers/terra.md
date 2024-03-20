# Terra (LUNA)

Welcome to the XDEFI Wallet Terra integration guide.

### Detect XDEFI Wallet with Terra

To detect whether your browser is running XDEFI Wallet, you can use the following code:

```javascript
if (window.xfi) {
  console.log("XDEFI Wallet detected");
  // Your code here
}
```

Notice: `window.xfi` which is a global object added by XDEFI Wallet.

<div ref="refDetectWallet"/>

### Connect to XDEFI Wallet

To connect to XDEFI Wallet (access the user's [blockchain - like Ethereum] account(s)), you can use the following code:

```javascript
// Connect & get accounts
window.xfi.terra.request(
  { method: "request_accounts", params: [] },
  (error, accounts) => {
    if (error) {
      console.error(error);
      return;
    } else {
      console.log("Account connected:", accounts[0]);
    }
  },
);
```

### Experience functions

When your account is connected to XDEFI Wallet, let's start experiencing more functions.

#### Get the current account

```javascript
window.xfi.terra.request(
  { method: "request_accounts", params: [] },
  (error, accounts) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("Accounts:", accounts);
    // Do something with the accounts
  },
);
```

Above code will return `Promise<Array[String]>` with the current account address. If wallet can not be found, return `[]` instead of `throw Error`

Above code will return `Promise<Signature | RPC: 2.0>`

#### Transfer

```javascript
window.xfi.terra.request(
  {
    method: "transfer",
    params: [
      {
        asset: "string",
        from: "string",
        recipient: "string",
        amount: "string",
        memo: "string",
      },
    ],
  },
  (error, result) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("Transaction hash:", result);
  },
);
```

Return `Promise<String>` with the transaction hash

### Events

Currently we only support some action events from Wallet

```javascript
window.xfi.terra.on('event_name', callback);
​//Example
window.xfi.terra.on('close', () => window.location.reload());
window.xfi.terra.on('accountsChanged', () => window.location.reload());
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
    chainId: 'terra',
  }, null))
})
</script>
