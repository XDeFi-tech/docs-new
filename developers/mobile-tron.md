# Mobile Wallet Tron Integration

This document provides details on integrating Tron with the mobile wallet application. The integration supports various functionalities such as connecting to the wallet, signing transactions, and signing messages.

## Installation & Setup

### Install dependencies

The document uses the Tron Web3 library. Please refer to the documentation at [here](https://developers.tron.network/docs/walletconnect-tron).

```bash
npm install @tronweb3/walletconnect-tron
```

### Initialize the WalletConnect Wallet

```javascript
import { WalletConnectWallet, WalletConnectChainID } from '@tronweb3/walletconnect-tron';

const wallet = new WalletConnectWallet({
  network: WalletConnectChainID.Mainnet,
  options: {
    relayUrl: 'wss://relay.walletconnect.com',
    projectId: 'your_project_id',
    metadata: {
      name: 'Your DApp Name',
      description: 'Your DApp Description',
      url: 'https://your-dapp-url.com',
      icons: ['https://your-dapp-url.com/icon.png']
    }
  },
  web3ModalConfig: {
    themeMode: 'dark',
    themeVariables: {
      '--w3m-z-index': 1000
    },
    explorerRecommendedWalletIds: [
      '1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369',
      '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0'
    ]
  }
});
```

## How to connect to the wallet

### Connect to the Wallet

Use `wallet.connect()` to connect to your wallet. Your DApp will connect automatically if it has been connected before. Otherwise, a WalletConnect QRCode will be displayed.

#### Example
```javascript
const { address } = await wallet.connect();
console.log('Connected address:', address);
```

### Disconnect from the Wallet

Use `wallet.disconnect()` to disconnect from your wallet.

#### Example
```javascript
try {
  await wallet.disconnect();
  console.log('Disconnected successfully');
} catch (error) {
  console.log('disconnect:', error);
}
```

## Methods

### Sign Transaction

Sign a provided transaction object.

#### Example
```javascript
try {
  const signature = await wallet.signTransaction(transaction);
  console.log('Transaction signature:', signature);
} catch (error) {
  console.log('signTransaction:', error);
}
```

#### Parameters
- `transaction`: Tron Transaction object.

### Sign Message

Sign a string message.

#### Example
```javascript
try {
  const signature = await wallet.signMessage('hello world');
  console.log('Message signature:', signature);
} catch (error) {
  console.log('signMessage:', error);
}
```

#### Parameters
- `message`: The message to be signed.

### Check Connect Status

Check the connection status.

#### Example
```javascript
const { address } = await wallet.checkConnectStatus();
if (address) {
  console.log('Wallet is connected:', address);
} else {
  console.log('Wallet is not connected');
}
```

For more details, refer to the [WalletConnect Tron Documentation](https://developers.tron.network/docs/walletconnect-tron).
