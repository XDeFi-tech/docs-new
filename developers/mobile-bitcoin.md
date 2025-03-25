# Mobile Wallet Bitcoin Integration

This document provides details on integrating Bitcoin with the mobile wallet application. The integration supports various functionalities such as sending transactions, retrieving account addresses, and signing messages.

## Methods

### sendTransfer
This method is used to sign and submit a transfer of any amount of Bitcoin to a single recipient address.

#### Parameters
- `account`: The connected account's first external address.
- `recipientAddress`: The recipient's public address.
- `amount`: The amount of Bitcoin to send, denominated in satoshis.
- `changeAddress`: (Optional) The sender's public address to receive change.
- `memo`: (Optional) The OP_RETURN value as a hex string without 0x prefix.

#### Returns
- `txid`: The transaction id as a hex string without 0x prefix.


### getAccountAddresses
This method returns all current addresses needed for a dapp to fetch all UTXOs, calculate the total balance, and prepare transactions.

#### Parameters
- `account`: The connected account's first external address.
- `intentions`: (Optional) Filter what addresses to return, e.g., "payment" or "ordinal".

#### Returns
- An array of objects containing:
  - `address`: Public address belonging to the account.
  - `publicKey`: (Optional) Public key for the derivation path in hex.
  - `path`: (Optional) Derivation path of the address.

### signPsbt
This method can be used to request the signature of a Partially Signed Bitcoin Transaction (PSBT).

#### Parameters
- `account`: The connected account's first external address.
- `psbt`: Base64 encoded string of the PSBT to sign.
- `signInputs`: Array of objects specifying which inputs to sign.
- `broadcast`: (Optional) Whether to finalize and broadcast the transaction after signing it.

#### Returns
- `psbt`: The base64 encoded signed PSBT.
- `txid`: (Optional) The transaction ID if the transaction was broadcasted.

### signMessage
This method is used to sign a message with one of the connected account's addresses.

#### Parameters
- `account`: The connected account's first external address.
- `message`: The message to be signed by the wallet.
- `address`: (Optional) The address whose private key to use for signing the message.
- `protocol`: (Optional) Preferred signature type, default is `"ecdsa"`.

#### Returns
- `address`: The Bitcoin address used to sign the message.
- `signature`: Hex encoded bytes of the signature.
- `messageHash`: (Optional) Hex encoded bytes of the message hash.

