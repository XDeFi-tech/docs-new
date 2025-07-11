# Sats Connect Ctrl (fka XDEFI) Integration

### Get started

Best way to get started with Sats Connect is to install the library in your Bitcoin application.

```bash
npm install sats-connect
```

For Ctrl (fka XDEFI) wallet integration, you can also use the specialized library:

```bash
npm install @xdefi/btc-connect
```

Ctrl wallet implements the [sats-connect interface](https://docs.xverse.app/sats-connect/) for signing Bitcoin transactions and provides two integration approaches:

- Standard `sats-connect` library (recommended)
- `@xdefi/btc-connect` - XDEFI's custom implementation

> Note: Both libraries provide the same functionality, but `@xdefi/btc-connect` is specifically optimized for Ctrl wallet integration

### Using standard sats-connect

```bash
npm install sats-connect
```

### Import the library

```javascript
import { AddressPurpose, request } from "sats-connect";
```

### Get wallet addresses

```javascript
const getAddresses = async () => {
  try {
    const response = await request("getAddresses", {
      purposes: [AddressPurpose.Payment],
      message: "Please connect your Bitcoin wallet",
    });

    console.log("Bitcoin addresses:", response.result.addresses);
  } catch (error) {
    console.error("Failed to get addresses:", error);
  }
};
```

### Sign PSBT (Partially Signed Bitcoin Transaction)

```javascript
const signPsbt = async psbtBase64 => {
  try {
    const response = await request("signPsbt", {
      psbt: psbtBase64,
      signInputs: {
        bitcoin_address: [0], // Sign input 0 for this address
      },
      allowedSignHash: 1,
      broadcast: false,
    });

    console.log("Signed PSBT:", response.result.psbt);
  } catch (error) {
    console.error("Failed to sign PSBT:", error);
  }
};
```

### Alternative: Using xfi inpage provider

```javascript
// Direct integration with Ctrl wallet provider
if (window.xfi && window.xfi.bitcoin) {
  // Get addresses
  window.xfi.bitcoin.request({
    method: "request_accounts_and_keys",
    params: {
      purposes: ["payment"],
    },
  });

  // Sign PSBT
  window.xfi.bitcoin.request({
    method: "sign_psbt",
    params: {
      psbt: "cHN...",
      signInputs: {
        "bc1q...": [0],
      },
      allowedSignHash: 1,
      broadcast: false,
    },
  });
}
```

### Complete example

```javascript
import { AddressPurpose, request } from "sats-connect";

const BitcoinApp = () => {
  const [addresses, setAddresses] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    try {
      const response = await request("getAddresses", {
        purposes: [AddressPurpose.Payment],
        message: "Connect to Bitcoin wallet",
      });

      setAddresses(response.result.addresses);
      setIsConnected(true);
    } catch (error) {
      console.error("Connection failed:", error);
    }
  };

  const signTransaction = async psbt => {
    try {
      const response = await request("signPsbt", {
        psbt: psbt,
        signInputs: {
          [addresses[0].address]: [0],
        },
        broadcast: false,
      });

      console.log("Transaction signed:", response.result.psbt);
    } catch (error) {
      console.error("Signing failed:", error);
    }
  };

  return (
    <div>
      {!isConnected ? (
        <button onClick={connectWallet}>Connect Ctrl Wallet</button>
      ) : (
        <div>
          <p>Connected Address: {addresses[0]?.address}</p>
          <button onClick={() => signTransaction("your_psbt_here")}>
            Sign Transaction
          </button>
        </div>
      )}
    </div>
  );
};
```

### Additional resources

- [Sats Connect docs](https://docs.xverse.app/sats-connect/)
- [XDEFI Bitcoin Integration](./extension-bitcoin)
- [Bitcoin dApp Development Guide](./bitcoin)
