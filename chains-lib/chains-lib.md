# Chains Lib Documentation

[Chainslib](https://github.com/XDeFi-tech/chains) is a TypeScript library is designed to provide a unified interface for working with multiple blockchain networks, allowing developers to interact with various blockchain chains seamlessly. It supports a wide range of features and blockchain networks, making it a versatile tool for blockchain development.

## Features

Chainslib offers the following key features:

- **Hardware Wallet Support:** It provides integration with Ledger and Trezor hardware wallets for enhanced security in blockchain transactions.
- **Wallet Types:** You can work with both seed phrase and private key wallets for managing your blockchain assets.
- **Standardized RPC Interface:** The library offers a consistent RPC interface for fetching blockchain information and broadcasting transactions across different supported chains.

## Supported Chains

<details>
<summary>Chainslib currently supports the following blockchain networks:</summary>

- Bitcoin
- Bitcoin Cash
- Litecoin
- Dogecoin
- Ethereum
- BNB Smart Chain
- Avalanche
- Polygon
- Optimism
- Arbitrum
- Fantom
- Other EVM-compatible chains
- Cosmos
- Osmosis
- Juno
- Other IBC-Compatible Chains
- THORChain
- BNB Beacon Chain
- Solana

</details>

## Installation

To use Chainslib in your TypeScript project, you can install it via npm or yarn:

```bash
npm install @xdefi-tech/chains
# or
yarn add @xdefi-tech/chains
```

## Usage

Here's a basic example of how to use this library in your TypeScript application:

### 1. Import Required Modules

```typescript
import { BitcoinProvider } from "./chain.provider";
import LedgerSigner from "./ledger.signer";
import { MsgBody, Msg } from "../msg";
```

### 2. Initialize Bitcoin Provider

Initialize the Bitcoin provider with the necessary configurations:

```typescript
const provider = new BitcoinProvider(new IndexerDataSource(BITCOIN_MANIFEST));
```

### 3. Create Transaction Input

Define the transaction input data, including the sender (from), recipient (to), and the amount to send.

```typescript
const txInput: MsgBody = {
  from: "FROM ADDRESS",
  to: "TO ADDRESS",
  amount: 0.000001,
};
```

### 4. Create a Transaction Message

Create a transaction message using the provider:

```typescript
const message: Msg = provider.createMsg(txInput);
```

### 5. Sign the Transaction with Ledger

Use the LedgerSigner to sign the transaction. Provide the message and the derivation path:

```typescript
const transport = await Transport.create();
const signer = new LedgerSigner(transport);
const derivationPath = "m/84'/0'/0'/0/0";

await signer.sign(message, derivationPath);
// finally close
transport.close();
```

### 6. Broadcast the Transaction

Now that the transaction is signed, you can broadcast it to the Bitcoin network using the BitcoinProvider. This step assumes that the transaction is already signed within the `message`.

```typescript
await provider.broadcast([message]);
```

## Retrieving a Transaction

### 1. Get Transaction Hash

If you have a transaction hash, you can retrieve the transaction details. Use the `getTransaction` method of the BitcoinProvider:

```typescript
const txHash = "TX HAS";
const txData = await provider.getTransaction(txHash);
```

The `txData` object will contain transaction details, including the transaction hash.

## Disclaimer

This library is provided as-is, and we make no warranties or guarantees regarding its functionality or security. Always exercise caution and proper security practices when working with blockchain assets.

Happy blockchain development! 🚀🔗
