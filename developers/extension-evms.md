# Extension Wallet Ethereum Integration

Develop EVM based dApps

## Introduction

- [web3.js introduction](https://web3js.readthedocs.io/en/v1.3.4/getting-started.html)
- [ether.js introduction](https://docs.ethers.io/v5/getting-started/)

## Example dApp

- [web3 vue example](https://github.com/XDeFi-tech/examples-dapps-sdk/tree/main/ethereum/web3/web3-example-vue)

## Integrate Ethereum dApps with XDEFI

### `window.xfi.ethereum`

XDEFI injects `window.xfi.ethereum` as an [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) compatible provider;

As a dApp developer, you can check if `window.xfi && window.xfi.ethereum` is defined.

If it is, XDEFI is injected.

You can use it with regular ethereum libraries such as web3 or ethersjs.

**Using web3.js**

```javascript
// In Node.js use: const Web3 = require('web3');

let web3 = window.xfi && window.xfi.ethereum && new Web3(window.xfi.ethereum);

if (!web3) {
  // XDEFI is not injected
}
```

**Using ethers.js**

```javascript
const provider =
  window.xfi &&
  window.xfi.ethereum &&
  new ethers.providers.Web3Provider(window.xfi.ethereum);

if (!provider) {
  // XDEFI is not injected
}
```

### `window.ethereum`

If **Pretend to be MetaMask** option is enabled in the dApps Settings Providers page, this would make XDEFI overrides `window.ethereum` and pretend to be MetaMask by having `window.ethereum.isMetaMask` and `window.ethereum._metamask` set to `true`

**Using web3.js**

```javascript
// In Node.js use: const Web3 = require('web3');

let web3 = new Web3(window.ethereum);

**Using ethers.js**

const provider = new ethers.providers.Web3Provider(window.ethereum)
```

### Using onboard.js

Follow the getting started tutorial: [https://docs.blocknative.com/onboard](https://docs.blocknative.com/onboard)

And add the entry of `xdefi` to the `wallets` option.

```javascript
{
  walletName: "xdefi";
}
```

Example of integration with onboard.js: [https://github.com/blocknative/react-demo/blob/master/src/services.js#L71](https://github.com/blocknative/react-demo/blob/master/src/services.js#L71) ( live demo [https://reactdemo.blocknative.com/](https://reactdemo.blocknative.com/))
