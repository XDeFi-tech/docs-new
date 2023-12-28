---
description: How you can add Celestia network parameters to XDEFI wallet.
prev:
  text: "Integrating Leap for developers"
  link: "/developers/leap"
next:
  text: "Integrate Celestia for service providers"
  link: "/developers/integrate-celestia"
---

# XDEFI integration with Celestia

<!-- markdownlint-disable MD033 -->
<script setup>
import constants from '/.vitepress/constants/constants.js'
</script>

This guide will go over how you can add Celestia network parameters
to XDEFI wallet.

The example in this guide is for {{constants.mochaChainId}}
testnet, and the same workflow can be used for any Celestia network.

## Install XDEFI

XDEFI is the leading self custodial multichain wallet that allow users to interact with more than 200 blockchains in an all in platform where you can easily manage your assets, nft's and directly in the wallet.

You can learn more and download XDEFI on
[the XDEFI Wallet website](https://www.xdefi.io/).

Alternatively, you can
download and install the Chrome extension directly.

## Add Celestia network parameters

Click on the `Settings` icon in the right bottom corner of the extension. You should be able to see a `Manage Networks` lign.

You can
then add the following parameters:

- Custom Chain name: `Mocha testnet`
- Rest URL: `https://api-mocha.pops.one`
- New RPC URL: `https://rpc-mocha.pops.one`
- Currency symbol: `TIA`
- Address prefix: `celestia`
- Demon: `utia`
- Symbol image URL (optional):
  `https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/celestiatestnet/images/celestia.svg`
- Explorer URL (optional): `https://testnet.mintscan.io/celestia-testnet`
- Coin Type: `118`
- Decimals: `6`
- Gas rate Tiny: `0.1`
- Gas rate Low: `0.25`
- Gas rate Average: `0.5`

Now, click `Add a custom chain` and you will be able to view your Celestia
account balance and transactions in Cosmostation wallet.

Switch chains to "Mocha testnet" and you'll see that you're connected
to Celestia's Mocha testnet!
