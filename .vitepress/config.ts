import { HeadConfig } from "vitepress";

const telegramSVG = ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57347 13.2411C5.65818 13.2678 5.74595 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6858 15.9067 12.077 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z" fill="currentColor"/>
</svg>`;

const { BASE: base = "/" } = process.env;

// https://vitepress.dev/concepts/site-config
export default {
  lang: "en-US",
  title: "XDEFI Dev Docs",
  description: "One Wallet for all your assets.",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  base: base,
  markdown: {
    math: true,
  },
  sitemap: {
    hostname: "https://docs.xdefi.io",
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicons/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/favicons/favicon.png",
        type: "image/png",
      },
    ],
    [
      "link",
      {
        rel: "shortcut icon",
        href: "/favicons/favicon.ico",
        type: "image/x-icon",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#fff" }],
    ["meta", { name: "theme-color", content: "#fff" }],
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      },
    ],
    [
      "meta",
      {
        property: "description",
        content: "One Wallet for all your assets.",
      },
    ],
    ["meta", { httpEquiv: "Content-Language", content: "en" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:image", content: "/XDEFI-og.png" }],
    [
      "meta",
      {
        name: "twitter:site:domain",
        content: "docs.xdefi.io",
      },
    ],
    [
      "meta",
      {
        name: "twitter:url",
        content: "https://docs.xdefi.io",
      },
    ],
    ["meta", { name: "og:image", content: "/public/img/XDEFI-og.png" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "XDEFI" }],
    [
      "script",
      {},
      `
      window.chatbaseConfig = {
        chatbotId: "",
      }
      `,
    ],
    [
      "script",
      {
        src: "https://www.chatbase.co/embed.min.js",
        id: "",
        defer: true,
      },
    ],
    [
      "script",
      {
        src: "https://plausible.xdefi.org/js/plausible.js",
        "data-domain": "docs.xdefi.io",
        defer: "true",
      },
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config#default-theme-config
    nav: nav(),
    outline: {
      level: "deep",
    },

    search: {
      provider: "local",
      options: {
        detailedView: true,
      },
    },

    sidebar: {
      "/": sidebarHome(),
    },

    editLink: {
      pattern: "https://github.com/XDeFi-tech/docs-new/edit/main/:path",
      text: "Edit this page on GitHub",
    },

    siteTitle: "XDEFI Dev Docs",

    socialLinks: [
      { icon: "github", link: "https://github.com/XDeFi-tech" },
      { icon: "twitter", link: "https://twitter.com/xdefi_wallet" },
      { icon: "discord", link: "https://discord.com/invite/xdefiwallet" },
      { icon: { svg: telegramSVG }, link: "https://t.me/xdefi_announcements" },
    ],

    transformHead(assets: string[]): HeadConfig[] {
      const tomatogroteskLightFont = assets.find(
        (file) => /TomatoGrotesk-Light\.\w+\.otf/,
      );
      const tomatogroteskRegularFont = assets.find(
        (file) => /TomatoGrotesk-Regular\.\w+\.otf/,
      );
      const tomatogroteskBoldFont = assets.find(
        (file) => /TomatoGrotesk-Bold\.\w+\.otf/,
      );

      const headConfig: HeadConfig[] = [];

      if (tomatogroteskLightFont) {
        headConfig.push([
          "link",
          {
            rel: "preload",
            href: tomatogroteskLightFont,
            as: "font",
            type: "font/opentype",
            crossorigin: "",
          },
        ]);
      }

      if (tomatogroteskRegularFont) {
        headConfig.push([
          "link",
          {
            rel: "preload",
            href: tomatogroteskRegularFont,
            as: "font",
            type: "font/opentype",
            crossorigin: "",
          },
        ]);
      }

      if (tomatogroteskBoldFont) {
        headConfig.push([
          "link",
          {
            rel: "preload",
            href: tomatogroteskBoldFont,
            as: "font",
            type: "font/opentype",
            crossorigin: "",
          },
        ]);
      }
      return headConfig;
    },
  },
  transformPageData(pageData) {
    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push([
      "meta",
      {
        name: "og:title",
        content:
          pageData.frontmatter.layout === "home"
            ? `XDEFI Dev Docs`
            : `${pageData.title} | XDEFI Dev Docs`,
      },
      {
        name: "og:description",
        content: pageData.frontmatter.layout === `${pageData.description}`,
      },
    ]);
  },
};

function nav() {
  return [
    {
      text: "Quick start",
      items: [
        {
          text: "About XDEFI Technologies",
          link: "/about/xdefi-technologies/introduction",
        },
        { text: "About $XDEFI token", link: "/about/xdefi-token/introduction" },
        { text: "Developers", link: "/developers/introduction" },
        {
          text: "XDEFI Wallet Integration",
          link: "/developers/xdefi-wallet-integration",
        },
        { text: "Routing API", link: "/routing/introduction" },
        {
          text: "Campaigns Service API",
          link: "/campaigns/campaigns-service-api",
        },
        {
          items: [
            {
              text: "Install Extension Wallet",
              link: "https://xdefi.io",
            },
            {
              text: "Install Mobile Wallet",
              link: "https://xdefi.io",
            },
          ],
        },
      ],
    },
  ];
}

function sidebarHome() {
  return [
    {
      text: "General Documentation",
      link: "https://docs.xdefi.io/docs",
    },
    {
      text: "About XDEFI",
      link: "/about/xdefi",
      collapsed: true,
      items: [
        {
          text: "XDEFI Technologies",
          link: "/about/xdefi-technologies/introduction",
          collapsed: true,
          items: [
            {
              text: "Introduction",
              link: "/about/xdefi-technologies/introduction",
            },
            {
              text: "Blockchains",
              link: "/about/xdefi-technologies/supported-blockchains",
              collapsed: true,
              items: [
                {
                  text: "Native integration",
                  link: "/about/xdefi-technologies/native-integration",
                },
                {
                  text: "Custom integration",
                  link: "/about/xdefi-technologies/custom-integration",
                },
              ],
            },
            {
              text: "FAQ",
              link: "/about/xdefi-technologies/faq",
            },
            {
              text: "Hardware Wallets",
              link: "/about/xdefi-technologies/supported-hardware-wallets",
            },
            {
              text: "How to",
              collapsed: true,
              items: [
                {
                  text: "Add a Custom Network",
                  link: "/about/xdefi-technologies/add-custom-network",
                },
                {
                  text: "Change Custom RPC",
                  link: "/about/xdefi-technologies/change-custom-rpc",
                },
              ],
            },
            {
              text: "NFT's",
              link: "/about/xdefi-technologies/supported-nfts",
            },
            {
              text: "Products",
              collapsed: true,
              items: [
                {
                  text: "Extension Wallet",
                  link: "/about/xdefi-technologies/extension-wallet",
                },
                {
                  text: "Mobile Wallet",
                  link: "/about/xdefi-technologies/mobile-wallet",
                },
                {
                  text: "Routing API",
                  link: "/about/xdefi-technologies/routing-api",
                },
                {
                  text: "Web App",
                  link: "/about/xdefi-technologies/web-app",
                },
              ],
            },
            {
              text: "Security",
              collapsed: true,
              items: [
                {
                  text: "Audits",
                  link: "/about/xdefi-technologies/audits",
                },
                {
                  text: "Bug Bounty Program",
                  link: "/about/xdefi-technologies/bug-bounty-program",
                },
              ],
            },
          ],
        },
        {
          text: "$XDEFI Token",
          link: "/about/xdefi-token/introduction",
          collapsed: true,
          items: [
            {
              text: "Introduction",
              link: "/about/xdefi-token/introduction",
            },
            {
              text: "Buy $XDEFI",
              link: "/about/xdefi-token/buy-xdefi",
            },
            {
              text: "Revenue",
              link: "/about/xdefi-token/revenue",
            },
            {
              text: "Staking",
              link: "/about/xdefi-token/staking",
            },
            {
              text: "Tokenomics",
              link: "/about/xdefi-token/tokenomics",
            },
            {
              text: "Utility",
              link: "/about/xdefi-token/utility",
            },
          ],
        },
      ],
    },
    {
      text: "Developers",
      link: "/developers/introduction",
      items: [],
    },
    {
      text: "XDEFI Wallet Integration",
      link: "/developers/xdefi-wallet-integration",
      collapsed: true,
      items: [
        {
          text: "Extension",
          link: "/developers/extension-wallet",
          collapsed: true,
          items: [
            {
              text: "Introduction",
              link: "/developers/extension-wallet",
            },
            {
              text: "Detect XDEFI Providers",
              link: "/developers/extension-detect-xdefi-providers",
            },
            {
              text: "Binance",
              link: "/developers/extension-binance",
            },
            {
              text: "Bitcoin",
              link: "/developers/extension-bitcoin",
            },
            {
              text: "Bitcoin Cash",
              link: "/developers/extension-bitcoin-cash",
            },
            {
              text: "Dogecoin",
              link: "/developers/extension-dogecoin",
            },
            {
              text: "Litecoin",
              link: "/developers/extension-litecoin",
            },
            {
              text: "NEAR",
              link: "/developers/extension-near",
            },
            {
              text: "Solana",
              link: "/developers/extension-solana",
            },
            {
              text: "Terra",
              link: "/developers/extension-terra",
            },
            {
              text: "Thorchain",
              link: "/developers/extension-thorchain",
            },
            {
              text: "Ethereum (EVM's)",
              link: "/developers/extension-evms",
            },
            {
              text: "Cosmos",
              link: "/developers/extension-cosmos",
            },
          ],
        },
        {
          text: "Mobile",
          link: "/developers/mobile-wallet",
          collapsed: true,
          items: [
            {
              text: "Introduction",
              link: "/developers/mobile-wallet",
            },
            {
              text: "Binance",
              link: "/developers/mobile-binance",
            },
            {
              text: "Bitcoin",
              link: "/developers/mobile-bitcoin",
            },
            {
              text: "Bitcoin Cash",
              link: "/developers/mobile-bitcoin-cash",
            },
            {
              text: "Dogecoin",
              link: "/developers/mobile-dogecoin",
            },
            {
              text: "Litecoin",
              link: "/developers/mobile-litecoin",
            },
            {
              text: "NEAR",
              link: "/developers/mobile-near",
            },
            {
              text: "Solana",
              link: "/developers/mobile-solana",
            },
            {
              text: "Terra",
              link: "/developers/mobile-terra",
            },
            {
              text: "Thorchain",
              link: "/developers/mobile-thorchain",
            },
            {
              text: "Ethereum (EVM's)",
              link: "/developers/mobile-ethereum",
            },
            {
              text: "Cosmos",
              link: "/developers/mobile-cosmos",
            },
          ],
        },
        {
          text: "Libraries Integration",
          link: "/developers/libraries-integration",
          collapsed: true,
          items: [
            {
              text: "Introduction",
              link: "/developers/libraries-integration",
            },
            {
              text: "BlockNative",
              link: "/developers/blocknative-xdefi-integration",
            },
            {
              text: "CosmosKit",
              link: "/developers/cosmoskit-xdefi-integration",
            },
            {
              text: "RainbowKit",
              link: "/developers/rainbowkit-xdefi-integration",
            },
            {
              text: "Solana Adapter",
              link: "/developers/solana-adapter-xdefi-integration",
            },
          ],
        },
        {
          text: "Blockchains Integration",
          link: "/developers/blockchains-integration",
          collapsed: true,
          items: [
            {
              text: "Introduction",
              link: "/developers/blockchains-integration",
            },
            {
              text: "EVM Chains",
              link: "/developers/ethereum",
              collapsed: true,
              items: [
                {
                  text: "Ethereum(ETH)",
                  link: "/developers/ethereum",
                },
                {
                  text: "Arbitrum(AETH)",
                  link: "/developers/arbitrum",
                },
                {
                  text: "Aurora (AURORA)",
                  link: "/developers/aurora",
                },
                {
                  text: "Avalanche (AVAX)",
                  link: "/developers/avalanche",
                },
                {
                  text: "BNB Smart Chain (BNB)",
                  link: "/developers/bnb-smart-chain",
                },
                {
                  text: "Canto (CANTO)",
                  link: "/developers/canto",
                },
                {
                  text: "Cronos (CRO)",
                  link: "/developers/cronos",
                },
                {
                  text: "Fantom (FTM)",
                  link: "/developers/fantom",
                },
                {
                  text: "Gnosis (xDAI)",
                  link: "/developers/gnosis",
                },
                {
                  text: "Optimism (ETH)",
                  link: "/developers/optimism",
                },
                {
                  text: "Polygon (MATIC)",
                  link: "/developers/polygon",
                },
              ],
            },
            {
              text: "Cosmos Chains",
              link: "/developers/cosmos",
              collapsed: true,
              items: [
                {
                  text: "Cosmos Hub (ATOM)",
                  link: "/developers/cosmos",
                },
                {
                  text: "Akash (AKT)",
                  link: "/developers/akash",
                },
                {
                  text: "Axelar (AXL)",
                  link: "/developers/axelar",
                },
                {
                  text: "Crescent (CRE)",
                  link: "/developers/crescent",
                },
                {
                  text: "Crypto.Org (CRO)",
                  link: "/developers/crypto-org",
                },
                {
                  text: "Juno (JUNO)",
                  link: "/developers/juno",
                },
                {
                  text: "Kava (KAVA)",
                  link: "/developers/kava",
                },
                {
                  text: "Kujira (KUJI)",
                  link: "/developers/kujira",
                },
                {
                  text: "Mars (MARS)",
                  link: "/developers/mars",
                },
                {
                  text: "Osmosis (OSMO)",
                  link: "/developers/osmosis",
                },
                {
                  text: "Sei Testnet (SEI)",
                  link: "/developers/sei",
                },
                {
                  text: "Stargaze (STARS)",
                  link: "/developers/stargaze",
                },
                {
                  text: "Stride (STRD)",
                  link: "/developers/stride",
                },
              ],
            },
            {
              text: "Bitcoin (BTC)",
              link: "/developers/bitcoin",
            },
            {
              text: "Bitcoin Cash (BCH)",
              link: "/developers/bitcoin-cash",
            },
            {
              text: "BNB Beacon Chain (BNB)",
              link: "/developers/bnb-beacon-chain",
            },
            {
              text: "Dogecoin (DOGE)",
              link: "/developers/dogecoin",
            },
            {
              text: "Litecoin (LTC)",
              link: "/developers/litecoin",
            },
            {
              text: "Maya Protocol (MAYA)",
              link: "/developers/maya",
            },
            {
              text: "NEAR (NEAR)",
              link: "/developers/near",
            },
            {
              text: "Solana (SOL)",
              link: "/developers/solana",
            },
            {
              text: "Terra (LUNA)",
              link: "/developers/terra",
            },
            {
              text: "Thorchain (RUNE)",
              link: "/developers/thorchain",
            },
          ],
        },
      ],
    },
    {
      text: "Blockchain Data APIs",
      link: "/indexers/indexers-api",
      collapsed: true,
      items: [
        {
          text: "Indexers API",
          link: "/indexers/indexers-api",
          items: [],
        },
        {
          text: "Assets & Prices API",
          link: "/assets-services/assets-and-prices-api",
          items: [],
        },
        {
          text: "Staking API",
          link: "/staking/staking-api",
          items: [],
        },
      ],
    },
    {
      text: "Routing API",
      link: "/routing/introduction",
      collapsed: true,
      items: [
        { text: "Introduction", link: "/routing/introduction" },
        { text: "Endpoints", link: "/routing/endpoints" },
        { text: "Routing Graph QL API", link: "/routing/routing-graph-ql-api" },
        {
          text: "Query and Mutation details",
          link: "/routing/query-mutation-details",
        },
        { text: "Step-by-step Swap example", link: "/routing/swap-example" },
      ],
    },
    {
      text: "Gas Tank API",
      link: "/gas-tank/gas-tank-api",
      items: [],
    },
    {
      text: "Swap Widget",
      link: "/swap-widget/widget-integration",
      items: [],
    },
    {
      text: "Partners APIs",
      link: "/campaigns/campaigns-service-api",
      collapsed: true,
      items: [
        {
          text: "Campaigns Service API",
          link: "/campaigns/campaigns-service-api",
          items: [],
        },
      ],
    },
    {
      text: "Chains Lib",
      link: "/chains-lib/chains-lib",
      items: [],
    },
    {
      text: "Community",
      collapsed: true,
      items: [
        { text: "X", link: "https://twitter.com/xdefi_wallet" },
        { text: "Discord", link: "https://discord.gg/xdefi" },
        { text: "Telegram", link: "https://t.me/xdefi_announcements" },
        { text: "GitHub", link: "https://github.com/XDeFi-tech" },
        { text: "Blog", link: "https://xdefi.io/blog" },
        {
          text: "$XDEFI on Coingecko",
          link: "https://www.coingecko.com/en/coins/xdefi",
        },
      ],
    },
  ];
}
