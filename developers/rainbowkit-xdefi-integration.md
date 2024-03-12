# RainbowKit XDEFI Integration

You can import individual wallets from `'@rainbow-me/rainbowkit/wallets'` along with the `connectorsForWallets` function to build your own list of wallets with their necessary connectors. This way you have full control over which wallets to display, and in which order.

For example, you can choose to only show Rainbow along with generic fallback wallets.

```javascript
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  rainbowWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [rainbowWallet, walletConnectWallet],
    },
  ],
  {
    appName: "My RainbowKit App",
    projectId: "YOUR_PROJECT_ID",
  },
);
```

You can then pass your connectors to Wagmi's `createConfig`.

```javascript
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { createConfig } from 'wagmi';

const connectors = connectorsForWallets(/* ... */);

const config = createConfig({
  connectors,
  {/* Wagmi config */}
});

const queryClient = new QueryClient();

const App = () => (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider {...etc}>
        {/* Your App */}
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>
);
```

### Built-in XDEFI Wallets

First, you need to install the `@rainbow-me/rainbowkit/wallets` package and then import the dApp:

```javascript
import { xdefiWallet } from "@rainbow-me/rainbowkit/wallets";
```

### Examples

Here are examples: Show Rainbow, MetaMask, Coinbase and XDEFI along with generic fallback wallets.

```javascript
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  rainbowWallet,
  xdefiWallet
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Suggested',
      wallets: [
        rainbowWallet,
        xdefiWallet,
        metaMaskWallet,
        coinbaseWallet,
        walletConnectWallet,
      ],
    },
  ],
  { appName: 'RainbowKit App', projectId: 'YOUR_PROJECT_ID' },
);
```

> Reminder: The order of the wallets array defines the order in which wallets will be displayed in the UI.

You also can use the `groupName` key to name different wallet groups. This is useful if you want to communicate to your users which wallets you recommend, as well as other possible wallets.

Recommend Rainbow and MetaMask, but also offer Coinbase along with generic fallback wallets.

```javascript
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  rainbowWallet,
  xdefiWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [rainbowWallet, metaMaskWallet],
    },
    {
      groupName: "Others",
      wallets: [xdefiWallet, coinbaseWallet, walletConnectWallet],
    },
  ],
  { appName: "RainbowKit App", projectId: "YOUR_PROJECT_ID" },
);
```
