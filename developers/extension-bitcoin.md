# Extension Wallet Bitcoin Integration

Develop Bitcoin dApps

Our BTC connection also implements the [sats-connect](https://docs.xverse.app/sats-connect/) interface for signing transactions. To use please install this [library](https://www.npmjs.com/package/@xdefi/btc-connect).

### Transfer request

- [Parameters description](./extension-detect-xdefi-providers#request-parameters-description)

```javascript
window.xfi.bitcoin.request(
  {
    method: "transfer",
    params: [
      {
        feeRate,
        from,
        recipient,
        amount,
        memo,
      },
    ],
  },
  (error, result) => {
    console.debug(error, result);
    this.lastResult = { error, result };
  },
);
```

### Change network

```javascript
window.xfi.bitcoin.changeNetwork("testnet"); //active network becomes testnet
window.xfi.bitcoin.changeNetwork("mainnet"); //active network becomes mainnet
```

### Accounts request (Mainnet)

```javascript
if (window.xfi && window.xfi.bitcoin) {
  window.xfi.bitcoin.request(
    { method: "request_accounts", params: [] },
    (error, accounts) => console.log(`Bitcoin accounts ${accounts}`),
  );
}
```

#### Result example

```json
{
  "error": null,
  "result": ["bc1qst9xyekxekaep7tk4wd7lmrwdyc9laqngx5qpr"]
}
```

### Accounts Request (Testnet)

```javascript
if (window.xfi && window.xfi.bitcoin) {
  window.xfi.bitcoin.changeNetwork("testnet");
  window.xfi.bitcoin.request(
    { method: "request_accounts", params: [] },
    (error, accounts) => console.log(`Bitcoin accounts ${accounts}`),
  );
}
```

#### Result example

```json
{
  "error": null,
  "result": ["tb1......"]
}
```

### Events

#### chainChanged

```javascript
if (window.xfi && window.xfi.bitcoin) {
  const provider = window.xfi.bitcoin;
  provider.on("chainChanged", (obj) => {
    console.log(`chainChanged::${obj.chainId}`, obj);
  });
}
```

#### accountsChanged

```javascript
if (window.xfi && window.xfi.bitcoin) {
  const provider = window.xfi.bitcoin;
  provider.on("accountsChanged", (obj) => {
    console.log(`accountsChanged::${obj.chainId}`, obj);
  });
}
```

### Get Addresses (sats-connect)

The `getAddresses` method allows you to retrieve Bitcoin addresses and their associated details using the sats-connect interface.

#### Parameters
- `purposes`: An array of address purposes to retrieve (e.g., payment, stacks, ordinals)
- `message`(optional): A message to be displayed to the user in the request prompt.



#### Example

```javascript
//Approach 1: using sats-connect
import { AddressPurpose, request } from "sats-connect";

const response = await request('getAddresses', {
  purposes: [AddressPurpose.Payment]
});

//Approach 2: using xfi inpage provider
window.xfi.bitcoin.request({
  method: 'request_accounts_and_keys',
  params: {
    purposes: ['payment']
  }
});
```

#### Response
Returns an array of address objects with the following properties:
- `address`: The Bitcoin address string
- `publicKey`: The public key associated with the address
- `purpose`: The purpose of the address (e.g., "payment")
- `addressType`: The type of Bitcoin address (e.g., "P2WPKH")
- `walletType`: The type of wallet (e.g., "software")

#### Response Example

```json
[
  {
    "address": "bitcoin_address",
    "publicKey": "public_key",
    "purpose": "payment",
    "addressType": "P2WPKH",
    "walletType": "software"
  }
]
```

### Sign PSBT (Partially Signed Bitcoin Transaction)

The `sign_psbt` method allows you to sign a Partially Signed Bitcoin Transaction (PSBT). This is useful for creating and signing complex Bitcoin transactions.

#### Parameters:
- `psbt`: A base64 encoded PSBT string
- `signInputs`: An object containing:
  - Address-input index pairs (key: address, value: array of input indices to sign)
- `allowedSignHash`: Signing hash type
- `broadcast`: Boolean indicating whether to broadcast the transaction after signing (default: false)

```javascript
//Approach 1: using sats-connect
import { request } from "sats-connect";

const response = await request('signPsbt', {
  psbt: 'cHN...',
  signInputs: {
    "bitcoin_address": [0],
  },
  allowedSignHash: 1,
  broadcast: false,
});

//Approach 2: using xfi inpage provider
window.xfi.bitcoin.request({
  method: 'sign_psbt',
  params: {
    psbt: 'cHN...',
    signInputs: {
      "bc1q...": [0],
    },
    allowedSignHash: 1,
    broadcast: false,
  },
});
```

#### Result example

```json
{
  "status": "success",
  "result": {
    "psbt": "signed_psbt_base64_string",
    "txid": "transaction_id_if_broadcast_true"
  }
}
```
