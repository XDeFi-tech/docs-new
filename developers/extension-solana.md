# Extension Wallet Solana Integration

[[toc]]

## Using Solana Adapter
### Solana Adapter not installed

Install the latest wallets package:
```bash
npm install @solana/wallet-adapter-xdefi@latest
```

Once installed, you can add XDEFI Wallet by making adding this part of code:
```js:line-numbers {0}
import { XDEFIWalletAdapter } from `@solana/wallet-adapter-xdefi`;
import { /* ... other adapters ... */ } from `@solana/wallet-adapter-wallets`;

const wallets = useMemo(
	() => [
		new XDEFIWalletAdapter(), 
		// ... other adapters ...
		  ],
	[]
);

<WalletProvider autoConnect wallets={wallets}>
```

### Solana Adapter already installed

Install the latest wallets package:
```bash
npm install @solana/wallet-adapter-wallets@latest
```

Once installed, you can add XDEFI Wallet by making 2 changes:
```js:line-numbers {0}
import {
	XDEFIWalletAdapter, // [!code ++]
	/* ... other adapters ... */
} from `@solana/wallet-adapter-wallets`;

const wallets = useMemo(
	() => [
		new XDEFIWalletAdapter(), // [!code ++]
		// ... other adapters ...
		  ],
	[]
);

<WalletProvider autoConnect wallets={wallets}>
```

## Using XDEFI Provider


## Using XDEFI SDK

TBD