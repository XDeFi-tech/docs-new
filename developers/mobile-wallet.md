---
prev:
  text: "🔹 Extension Wallet Integration"
  link: "/developers/extension-wallet"
next:
  text: "Bitcoin"
  link: "./mobile-bitcoin"
---

# Mobile Wallet Integration

This document provides details on integrating and interacting with the **Ctrl Mobile Wallet**, which supports multiple blockchain networks and decentralized applications (dApps) via Reown (aka WalletConnect).

## What is Reown?
Reown (aka WalletConnect) is an open protocol for connecting desktop DApps to mobile wallets using end-to-end encryption by scanning a QR code. It allows users to interact with any DApp without compromising their private keys. For more details, visit the [Reown documentation](https://reown.com/).

## Supported Chains with Dapp Connectors

| Chain            | Extension Wallet | Mobile Wallet Dapp            |
|------------------|:----------------:|:-----------------------------:|
| Bitcoin          | ✅               | ✅                            |
| Bitcoin Cash     | ✅               | ❌                            |
| Dogecoin         | ✅               | ✅                            |
| Litecoin         | ✅               | ✅                            |
| Ethereum (EVM's) | ✅               | ✅                            |
| Solana           | ✅               | ✅                            |
| Cosmos           | ✅               | ✅                            |
| Tron             | ✅               | ✅                            |
| Cardano          | ✅               | ✅                            |

## Testing Wallet

To test the wallet integration, visit the [Test Dapp](https://react-app.walletconnect.com).
