# RainbowKit XDEFI Integration

### Built-in XDEFI Wallet

You can import individual wallets from `'@rainbow-me/rainbowkit/wallets'` along with the `connectorsForWallets` function to build your own list of wallets with their necessary connectors. This way you have full control over which wallets to display, and in which order.

For example, you can choose to only show Rainbow along with generic fallback wallets.

```javascript
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  xdefiWallet,
  // other wallets
} from "@rainbow-me/rainbowkit/wallets";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [xdefiWallet],
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

### Examples

Here are examples: Show XDEFI Wallet along with generic fallback wallets.

```javascript
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  xdefiWallet,
  // other wallets
} from "@rainbow-me/rainbowkit/wallets";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Suggested",
      wallets: [
        xdefiWallet,
        // other wallets
      ],
    },
  ],
  { appName: "RainbowKit App", projectId: "YOUR_PROJECT_ID" },
);
```

> Reminder: The order of the wallets array defines the order in which wallets will be displayed in the UI.

You also can use the `groupName` key to name different wallet groups. This is useful if you want to communicate to your users which wallets you recommend, as well as other possible wallets.

Recommend XDEFI Wallet along with other wallets in a separate group

```javascript
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  xdefiWallet,
  // other wallets
} from "@rainbow-me/rainbowkit/wallets";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [xdefiWallet],
    },
    {
      groupName: "Others",
      wallets: [
        // other wallets
      ],
    },
  ],
  { appName: "RainbowKit App", projectId: "YOUR_PROJECT_ID" },
);
```
