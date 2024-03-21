### Detect XDEFI Wallet with Cosmos Base Chain

To detect whether your browser is running XDEFI Wallet, you can use the following code:

```javascript
if (window.xfi) {
  console.log("XDEFI Wallet detected");
  // Your code here
}
```

Notice: `window.xfi` which is a global object added by XDEFI Wallet.

### Connect to XDEFI Wallet

To connect to XDEFI Wallet (access the user's [blockchain - like Ethereum] account(s)), you can use the following code:

```javascript
// Connect & get accounts
await window.xfi.keplr.enable(subChainId);
const offlineSigner = window.xfi.keplr.getOfflineSigner(subChainId);
const accounts = offlineSigner.getAccounts();
console.log("Account connected:", accounts[0].address);
```

`enable` method can receive one or more chain-id as an array. When the array of chain-id is passed, you can request permissions for all chains that have not yet been authorized at once.

If the user cancels the unlock or rejects the permission, an error will be thrown.

### Experience functions

When your account is connected to XDEFI Wallet, let's start experiencing more functions.

#### Get the current account

```javascript
await window.xfi.keplr.enable(subChainId);
const offlineSigner = window.xfi.keplr.getOfflineSigner(subChainId);
await offlineSigner
  .getAccounts()
  .then((accounts) => {
    console.log("Accounts:", accounts[0].address);
    // Do something with the accounts
  })
  .catch((error) => console.log(error));
```

Above code will return `Promise<Array[Object]>` with the current account address. If wallet can not be found, return `[]` instead of `throw Error`

Above code will return `Promise<Signature | RPC: 2.0>`

#### Get Address / Public Key

```javascript
window.xfi.keplr
  .getKey(subChainId)()
  .then((data) => {
    console.log(data);
    // Do something with the data
  })
  .catch((error) => console.log(error));
```

If the webpage has permission and Keplr is unlocked, this function will return the address and public key in the following format:

```javascript
{
  'name': 'string';
  'algo': 'string';
  'pubKey': 'Uint8Array';
  'address': 'Uint8Array';
  'bech32Address': 'string';
  'isNanoLedger': 'boolean';
}
```

#### Sign Direct / Protobuf

```typescript
window.xfi.keplr.signDirect(
    chainId:string,
    signer:string,
    signDoc: {
      /** SignDoc bodyBytes */
      bodyBytes?: Uint8Array | null;
      /** SignDoc authInfoBytes */
      authInfoBytes?: Uint8Array | null;
      /** SignDoc chainId */
      chainId?: string | null;
      /** SignDoc accountNumber */
      accountNumber?: Long | null;
    }
  )
  .then((signResponse: DirectSignResponse) => {
    console.log(signResponse)
    // Do something with the signResponse
  })
  .catch((error) => console.log(error));
```

#### Request Transaction Broadcasting

```typescript
window.xfi.keplr.sendTx(
    chainId: subChainId,
    tx: Uint8Array,
    mode: BroadcastMode
  )
  .then((data: Uint8Array) => {
    console.log(data)
    // Do something with the data
  })
  .catch((error) => console.log(error));
```

This function requests Keplr to delegate the broadcasting of the transaction to Keplr's LCD endpoints (rather than the webpage broadcasting the transaction). This method returns the transaction hash if it succeeds to broadcast, if else the method will throw an error. When Keplr broadcasts the transaction, Keplr will send the notification on the transaction's progress.

#### Request Signature for Arbitrary Message

```typescript
await window.xfi.keplr.signArbitrary(
    chainId: string,
    signer: string,
    data: string | Uint8Array
  )
  .then((signature: StdSignature) => {
    console.log(signature)
    // Do something with the signature
  })

await window.xfi.keplr.verifyArbitrary(
    chainId: string,
    signer: string,
    data: string | Uint8Array,
    signature: StdSignature
  )
  .then((result: boolean) => {
    console.log(result)
    // Do something with the result
  })
```

When using the `signArbitrary` API, if the `data` parameter type is string, the signature page displays as plain text.

Using `verifyArbitrary`, you can verify the results requested by `signArbitrary` API or `signAmino` API that has been requested with the ADR-36 spec standards.

`verifyArbitrary` has been only implemented for simple usage. `verifyArbitrary` returns the result of the verification of the current selected account's sign doc. If the account is not the currently selected account, it would throw an error.
