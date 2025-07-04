---
prev:
  text: "💻 Developers"
  link: "/developers/introduction"
next:
  text: "Detect XDEFI Providers"
  link: "./extension-detect-xdefi-providers"
---

# Extension Wallet Integration

Ctrl Wallet injects into the window object to dapps multiple wallet providers to send requests (signing, send and broadcast, get accounts information) to the browser extension.

- window.xfi
  - window.xfi.binance : [Binance Beacon Chain provider](./extension-binance)
  - window.xfi.bitcoin : [Bitcoin provider](./extension-bitcoin)
  - window.xfi.bitcoincash : [Bitcoin Cash provider](./extension-bitcoin-cash)
  - window.xfi.dogecoin: [Dogecoin provider](./extension-dogecoin)
  - window.xfi.litecoin : [Litecoin provider](./extension-litecoin)
  - window.xfi.solana : [Solana provider](./extension-solana)
  - window.xfi.thorchain: [Thorchain provider](./extension-thorchain)
  - window.xfi.tron: [Tron provider](./extension-tron)
- window.ethereum : [Ethereum provider](./extension-evms)
- window.keplr : [Keplr/Cosmos chains provider](./extension-cosmos)
- window.cardano
  - window.cardano.ctrl: [Cardano provider](./extension-cardano)
  - window.cardano.xdefi: [Cardano provider](./extension-cardano)
