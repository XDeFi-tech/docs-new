---
prev:
  text: "🔹 Extension Wallet Integration"
  link: "/developers/extension-wallet"
next:
  text: "Binance"
  link: "./mobile-binance"
---

# Mobile Wallet Integration

XDEFI Wallet injects into the window object to dapps multiple wallet providers to send requests (signing, send and broadcast, get accounts information) to the browser mobile.

- window.xfi
  - window.xfi.binance : [Binance Beacon Chain provider](./mobile-binance)
  - window.xfi.bitcoin : [Bitcoin provider](./mobile-bitcoin)
  - window.xfi.bitcoincash : [Bitcoin Cash provider](./mobile-bitcoin-cash)
  - window.xfi.dogecoin: [Dogecoin provider](./mobile-dogecoin)
  - window.xfi.litecoin : [Litecoin provider](./mobile-litecoin)
  - window.xfi.near : [NEAR provider](./mobile-near)
  - window.xfi.solana : [Solana provider](./mobile-solana)
  - window.xfi.terra : [Terra provider](./mobile-terra)
  - window.xfi.thorchain: [Thorchain provider](./mobile-thorchain)
- window.ethereum : [Ethereum provider](./mobile-ethereum)
- window.keplr : [Keplr/Cosmos chains provider](./mobile-cosmos)
