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

### Custom event

#### Change Key Store Event

When the user switches their key store/account after the webpage has received the information on the key store/account the key that the webpage is aware of may not match the selected key in Keplr which may cause issues in the interactions.

To prevent this from happening, when the key store/account is changed, Keplr emits a `keplr_keystorechange` event to the webpage's window. You can request the new key/account based on this event listener.

```javascript
window.addEventListener("keplr_keystorechange", () => {
  console.log(
    "Key store in Keplr is changed. You may need to refetch the account info.",
  );
});
```

### Suggest Chain

_Warning_: This is an experimental feature.

Keplr's 'suggest chain' feature allows front-ends to request adding new Cosmos-SDK based blockchains that isn't natively integrated to Keplr extension.
If the same chain is already added to Keplr, nothing will happen. If the user rejects the request, an error will be thrown.

This allows all Cosmos-SDK blockchains to have permissionless, instant wallet and transaction signing support for front-ends.

```typescript
await window.xfi.keplr
  .experimentalSuggestChain({
    chainId: "my-new-chain",
    chainName: "my new chain",
    rpc: "http://123.456.789.012:26657",
    rest: "http://123.456.789.012:1317",
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: "cosmos",
      bech32PrefixAccPub: "cosmos" + "pub",
      bech32PrefixValAddr: "cosmos" + "valoper",
      bech32PrefixValPub: "cosmos" + "valoperpub",
      bech32PrefixConsAddr: "cosmos" + "valcons",
      bech32PrefixConsPub: "cosmos" + "valconspub",
    },
    currencies: [
      {
        coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
        gasPriceStep: {
          low: 0.01,
          average: 0.025,
          high: 0.04,
        },
      },
    ],
    stakeCurrency: {
      coinDenom: "ATOM",
      coinMinimalDenom: "uatom",
      coinDecimals: 6,
      coinGeckoId: "cosmos",
    },
  })
  .then(() => console.log("Chain suggested to Keplr"));
```

**Description**

| Key | Description |
| --- | --- |
| `rpc` | Address of RPC endpoint of the chain. Default port is 26657 |
| `rest` | Address of REST/API endpoint of the chain. Default port is 1317. Must be enabled in app.toml |
| `chainId` | Keplr has a feature which automatically detects when the chain-id has changed, and automatically update to support new chain. However, it should be noted that this functionality will only work when the chain-id follows the {identifier}-{version}(ex.cosmoshub-4) format. Therefore, it is recommended that the chain follows the chain-id format. |
| `stakeCurrency` | Information on the staking token of the chain |
| `walletUrlForStaking` | The URL for the staking interface frontend for the chain. If you don't have a staking interface built, you can use [Lunie Light (opens new window)](https://github.com/luniehq/lunie-light) which supports Keplr. |
| `bip44.coinType` | BIP44 coin type for address derivation. We recommend using 118(Cosmos Hub) as this would provide good Ledger hardware wallet compatibility by utilizing the Cosmos Ledger app. |
| `bech32Config` | Bech32 config using the address prefix of the chain |
| `currencies` | (TBD) |
| `feeCurrencies` | List of fee tokens accepted by the chain's validator. Each fee token can have gas price step. Gas price step is used to set the fee of the transaction. If this field is empty, it would use the default gas price step (low: 0.01, average: 0.025, high: 0.04). |
| `features` | `secretwasm` - Secret Network WASM smart contract transaction support `ibc-transfer` - For IBC transfers (ICS 20) enabled chains. For Stargate (cosmos-sdk v0.40+) chains, Keplr will check the on-chain params and automatically enable IBC transfers if it’s available `cosmwasm` - For CosmWasm smart contract support (currently broken, in the process of being fixed) `ibc-go` - For chains that use the ibc-go module separated from the cosmos-sdk |

Keplr supports the basic the `x/bank` module's send feature and balance query. Also, it is able to show the staking reward percentage from the `supply` and `mint` module. (For Stargate chains, Keplr will find the supply through the `bank` module).
