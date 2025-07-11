---
prev:
  text: "🔹 Mobile Wallet Integration"
  link: "./mobile-wallet"
next:
  text: "Cosmoskit"
  link: "./cosmoskit-xdefi-integration"
---

# Libraries Integration

Ctrl Wallet is also integrated in a large panel of libraries to make it accessible to any developer's needs.

You can access the list from here:

- [CosmosKit](./cosmoskit-xdefi-integration)
- [RainbowKit](./rainbowkit-xdefi-integration)
- [Sats Connect](./sats-connect-xdefi-integration)
- [Solana Adapter](./solana-adapter-xdefi-integration)

## Alternative Wallet Adapters

Some popular wallet adapter libraries are **not compatible** with Ctrl wallet as they are designed for specific wallet ecosystems:

- **TronLink Adapter** (`@tronweb3/tronwallet-adapter-tronlink`) - Designed specifically for TronLink wallet, not compatible with Ctrl
- **Phantom Adapter** - Solana-specific adapter for Phantom wallet
- **MetaMask Adapter** - Specific to MetaMask wallet

> **Note**: Ctrl wallet has its own native providers (e.g., `window.xfi.tron` for Tron) and doesn't require these third-party adapters. Use Ctrl's native integration methods instead.

For Tron integration with Ctrl wallet, please refer to:
- [Extension Tron Integration](./extension-tron)
- [Mobile Tron Integration](./mobile-tron)
