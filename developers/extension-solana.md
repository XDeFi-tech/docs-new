# Extension Wallet Solana Integration

Develop Solana dApps

Example dApp using Solana: [https://main.d2ladgp2r2c4c2.amplifyapp.com/](https://main.d2ladgp2r2c4c2.amplifyapp.com/)

### Solana Provider

Similarly to the Phantom Provider, Ctrl Wallet provider exposes different methods in `window.solana` or `window.xfi.solana`

Below are the different functions exposed in the provider `window.solana` `window.xfi.solana`.

#### `isXDEFI`

`isXDEFI` returns true if the provider is XDEFI.

#### `connect(): Promise<{publicKey: PublicKey}>`

It returns the current PublicKey of the connected account.

#### `disconnect(): Promise<void>`

Disconnect the wallet.

#### `signTransaction(transaction: Transaction): Promise<Transaction>`

Add a signature to `@solana/web3.js` `Transaction` object;

#### `signAllTransactions(transactions: Transaction[]): Promise<Transaction[]>`

Add a signature for each `@solana/web3.js` `Transaction` object passed in parameters;

#### `signMessage(message: string | Uint8Array, display?: DisplayEncoding | undefined): Promise<{signature:string, publicKey: string}>`

Returns a `signature` and the `publicKey` who signed the `message`;
