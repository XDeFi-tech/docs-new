# Extension Wallet Cosmos Integration

Develop Cosmos based chains dApps

XDEFI Wallet integrates Cosmos based chains.

It allows dApps to be developed on Cosmos based chains.

It injects a Keplr Provider in `window.xfi.keplr` and if Keplr isn't instantiated, takes Keplr wallet `window.keplr` object and allow you to use its basic API via CosmJS.

### Use cosmos-kit

XDEFI Wallet is part of [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) package to help you connect to many different wallets.

Here is an [example](https://github.com/cosmology-tech/cosmos-kit/blob/main/packages/example/pages/_app.tsx#L34) of how to use cosmos-kit.

### How to detect XDEFI’s Keplr provider

As the official Keplr guide mentioned [here](https://docs.keplr.app/api/);

```javascript
window.onload = async () => {
  if (!window.xfi?.keplr) {
    alert("Please install XDEFI extension");
  } else {
    const chainId = "cosmoshub-4";
    const keplr = window.xfi.keplr;

    // Enabling before using the Keplr is recommended.
    // This method will ask the user whether to allow access if they haven't visited this website.
    // Also, it will request that the user unlock the wallet if the wallet is locked.
    await keplr.enable(chainId);

    const offlineSigner = keplr.getOfflineSigner(chainId);

    // You can get the address/public keys by `getAccounts` method.
    // It can return the array of address/public key.
    // But, currently, Keplr extension manages only one address/public key pair.
    // XXX: This line is needed to set the sender address for SigningCosmosClient.
    const accounts = await offlineSigner.getAccounts();

    // Initialize the gaia api with the offline signer that is injected by Keplr extension.
    const cosmJS = new SigningCosmosClient(
      "https://lcd-cosmoshub.keplr.app",
      accounts[0].address,
      offlineSigner,
    );
  }
};
```

#### Differentiate Keplr and XDEFI `window.keplr`

If you’d like to differentiate Keplr and XDEFI `window.keplr`, you can use `window.keplr.isXDEFI` to check if it’s XDEFI’s Keplr provider.

```javascript
if (window.keplr.isXDEFI) {
  // this is XDEFI's Keplr provider
} else {
  // this is Keplr's Keplr provider
}
```

#### Chains supported on XDEFI

As of release v26, XDEFI supports the following chains (chainId).

- Cosmos Hub, `cosmoshub-4`
- Osmosis, `osmosis-1`
- Axelar, `axelar-dojo-1`
- JUNO, `juno-1`
- Crescent, `crescent-1`
- KAVA, `kava_2222-10`
- Stargaze, `stargaze-1`
- Akash, `akashnet-2`
- Crypto Org, `crypto-org-chain-mainnet-1`
- Kujira, `kaiyo-1`
- Sei Testnet, `atlantic-2`
- Stride, `stride-1`
- Mars Protocol, `mars-1`

### Basic API

Please find the Full Basic API on [Keplr website](https://docs.keplr.app/api/)

#### Using with Typescript

```javascript
import { Window as KeplrWindow } from "@keplr-wallet/types";

declare global {
  interface Window extends KeplrWindow {}
}
```

The `@keplr-wallet/types` package has the type definition related to Keplr. If you’re using TypeScript, run `npm install --save-dev @keplr-wallet/types` or `yarn add -D @keplr-wallet/types` to install `@keplr-wallet/types`. Then, you can add the `@keplr-wallet/types` window to a global window object and register the Keplr related types.

#### Connect using `enable`

```javascript
enable(chainIds: string[]): Promise<void>
```

The `window.keplr.enable(chainIds)` method requests the extension to be unlocked if it’s currently locked. If the user hasn’t given permission to the webpage, it will ask the user to give permission for the webpage to access XDEFI.

#### Get Address / Public Key

```javascript
getKey(chainId: string): Promise<{
  // Name of the selected key store.
  name: string;
  algo: string;
  pubKey: Uint8Array;
  address: Uint8Array;
  bech32Address: string;
}>
```

#### Sign Amino

```javascript
signAmino(chainId: string, signer: string, signDoc: StdSignDoc): Promise<AminoSignResponse>
```

Similar to CosmJS OfflineSigner’s signAmino, but Keplr’s signAmino takes the chain-id as a required parameter. Signs Amino-encoded StdSignDoc.

#### Sign Direct (Protobuf)

```javascript
signDirect(chainId:string, signer:string, signDoc: {
  /** SignDoc bodyBytes */
  bodyBytes?: Uint8Array | null;

  /** SignDoc authInfoBytes */
  authInfoBytes?: Uint8Array | null;

  /** SignDoc chainId */
  chainId?: string | null;

  /** SignDoc accountNumber */
  accountNumber?: Long | null;
}): Promise<DirectSignResponse>
```

Similar to CosmJS OfflineDirectSigner’s signDirect, but Keplr’s signDirect takes the chain-id as a required parameter. Signs Proto-encoded StdSignDoc.

#### Request Transaction Broadcasting

```javascript
sendTx(
  chainId: string,
  tx: Uint8Array,
  mode: BroadcastMode
): Promise<Uint8Array>;
```

This function requests Keplr to delegates the broadcasting of the transaction to Keplr’s LCD endpoints (rather than the webpage broadcasting the transaction). This method returns the transaction hash if it succeeds to broadcast, if else the method will throw an error. When Keplr broadcasts the transaction, Keplr will send the notification on the transaction’s progress.

#### Request Signature for Arbitrary Message

```javascript
signArbitrary(
  chainId: string,
  signer: string,
  data: string | Uint8Array
): Promise<StdSignature>;
verifyArbitrary(
  chainId: string,
  signer: string,
  data: string | Uint8Array,
  signature: StdSignature
): Promise<boolean>;
```

See [Keplr Docs](https://docs.keplr.app/api/#request-signature-for-arbitrary-message)

#### Limitations

We don’t support yet (13-Jan-2023)

- `signEthereum`
- Secret Network / SecretJS
- Suggest Chain `experimentalSuggestChain`

### Use with CosmJS

Please find how to use XDEFI’s Keplr Provider using CosmJS on [Keplr website](https://docs.keplr.app/api/cosmjs.html)

Connect to XDEFI’s Keplr Provider using CosmJS

```javascript
// Enabling before using the Keplr is recommended.
// This method will ask the user whether or not to allow access if they haven't visited this website.
// Also, it will request user to unlock the wallet if the wallet is locked.
await window.keplr.enable(chainId);

const offlineSigner = window.getOfflineSigner(chainId);

// You can get the address/public keys by `getAccounts` method.
// It can return the array of address/public key.
// But, currently, Keplr extension manages only one address/public key pair.
// XXX: This line is needed to set the sender address for SigningCosmosClient.
const accounts = await offlineSigner.getAccounts();

// Initialize the gaia api with the offline signer that is injected by Keplr extension.
const cosmJS = new SigningCosmosClient(
  "https://lcd-cosmoshub.keplr.app/rest",
  accounts[0].address,
  offlineSigner,
);
```

### Suggest Chain _(Experimental Feature)_

XDEFI follows the same `suggest-chain`, `suggest-chain-info` interface as [Keplr's suggest-chain method](https://docs.keplr.app/api/suggest-chain.html). This allows frontends to add their chain to the wallet, if the user should accept it.

The dApps can achieve by either making a connection request with the chainID, and if the user doesn't already have it and it is supported by chain-registry, we will ask them to add it.

We follow the same ChainInfo interface set out by Keplr to add a new custom chain, it should have the data as follows:

```javascript
interface ChainInfo {
  readonly rpc: string;
  readonly rest: string;
  readonly chainId: string;
  readonly chainName: string;
  /**
  * This indicates the type of coin that can be used for stake.
  * You can get actual currency information from Currencies.
  */
  readonly stakeCurrency: Currency;
  readonly walletUrlForStaking?: string;
  readonly bip44: {
      coinType: number;
  };
  readonly alternativeBIP44s?: BIP44[];
  readonly bech32Config: Bech32Config;

  readonly currencies: AppCurrency[];
  /**
  * This indicates which coin or token can be used for fee to send transaction.
  * You can get actual currency information from Currencies.
  */
  readonly feeCurrencies: FeeCurrency[];

  /**
  * Indicate the features supported by this chain. Ex) cosmwasm, secretwasm ...
  */
  readonly features?: string[];
}
```

You can then make a request follows and add the custom chain:

```javascript
await window.xfi.keplr.experimentalSuggestChain({
  chainId: "my-test-chain",
  chainName: "my test chain",
  bech32Config: {
    bech32PrefixAccAddr: "cosmos",
    bech32PrefixAccPub: "cosmospub",
    bech32PrefixValAddr: "cosmosvaloper",
    bech32PrefixValPub: "cosmosvaloperpub",
    bech32PrefixConsAddr: "cosmosvalcons",
    bech32PrefixConsPub: "cosmosvalconspub",
  },
  bip44: {
    coinType: 118,
  },
  currencies: [
    {
      coinDenom: "stake",
      coinMinimalDenom: "stake",
      coinDecimals: 6,
      coinGeckoId: "cosmos",
      coinImageUrl:
        "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
      feeCurrency: true,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "stake",
      coinMinimalDenom: "stake",
      coinDecimals: 6,
      coinGeckoId: "cosmos",
      coinImageUrl:
        "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
      feeCurrency: true,
    },
  ],
  rest: "http://127.0.0.1:1317",
  rpc: "http://127.0.0.1:9090",
});
```
