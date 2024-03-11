# Detect XDEFI Providers

The XDeFi browser extension will inject objects called `xfi` and `ethereum` on the `window` object of any web application the user visits. To detect if a browser extension using this API is installed, you can check for the existence of the `xfi` and `ethereum` object.

## Multichain dApp example

[Multichain vue example](https://github.com/XDeFi-tech/examples-dapps-sdk/tree/main/multichain/multichain-vue-example)

## Detection example

```javascript
if ("xfi" in window) {
  // Detecting the XDeFi providers: xfi and ethereum
  console.log(window.xfi, window.ethereum);
  console.log(window.xfi, window.xfi && window.xfi.ethereum);
  this.ethereum = window.ethereum;
  this.xfiObject = window.xfi;
}
```

## Request parameters description

`from` - the address from which the request is coming

`recipient` - the address on which the request is targeted

`feeRate` - units per transaction size → [precise description](http://docs.xchainjs.org/xchain-client/overview.html?highlight=feeRate#transfer)

`amount` - request transaction amount

`memo` - text hint for the request
