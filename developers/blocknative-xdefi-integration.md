# BlockNative XDEFI Integration

First, your app need to install the core Onboard library, the injected wallets module and optionally ethers js to support browser extension and mobile wallets:

```bash
yarn add @web3-onboard/core @web3-onboard/injected-wallets ethers
```

Then initialize in your app:

```js
import Onboard from "@web3-onboard/core";
import xdefiWalletModule from "@web3-onboard/xdefi";

// initialize the module with options
const xdefiWalletSdk = xdefiWalletModule();

const onboard = Onboard({
  // ... other Onboard options
  wallets: [
    xdefiWalletSdk(),
    //... other wallets
  ],
});

const connectedWallets = await onboard.connectWallet();
console.log(connectedWallets);
```
