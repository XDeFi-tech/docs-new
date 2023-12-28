import { HeadConfig } from "vitepress";

const telegramSVG = ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57347 13.2411C5.65818 13.2678 5.74595 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6858 15.9067 12.077 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z" fill="currentColor"/>
</svg>`;

const { BASE: base = "/" } = process.env;

// https://vitepress.dev/concepts/site-config
export default {
  lang: "en-US",
  title: "XDEFI Docs",
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
    // [
    //   "link",
    //   {
    //     rel: "icon",
    //     type: "image/svg+xml",
    //     href: "/favicons/favicon-dark.svg",
    //     media: "(prefers-color-scheme: dark)",
    //   },
    // ],
    [
      "link",
      {
        rel: "icon",
        href: "/favicons/favicon.png",
        type: "image/png",
      },
    ],
    // [
    //   "link",
    //   {
    //     rel: "icon",
    //     type: "image/png",
    //     href: "/favicons/favicon-dark.png",
    //     media: "(prefers-color-scheme: dark)",
    //   },
    // ],
    [
      "link",
      {
        rel: "shortcut icon",
        href: "/favicons/favicon.ico",
        type: "image/x-icon",
      },
    ],
    // [
    //   "link",
    //   {
    //     rel: "icon",
    //     type: "image/x-icon",
    //     href: "/favicons/favicon-dark.ico",
    //     media: "(prefers-color-scheme: dark)",
    //   },
    // ],
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
    // ['meta', { property: 'og:title', content: 'XDEFI' }],
    // ['meta', { property: 'og:description', content: 'One Wallet for all your assets.' }],
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
    // https://vitepress.dev/concepts/default-theme-config
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
      pattern: "https://github.com/XDeFi-tech/docs/edit/main/:path",
      text: "Edit this page on GitHub",
    },

    logo: {
      alt: "XDEFI Logo",
      light: "/img/logo-light.svg",
      dark: "/img/logo-dark.svg",
    },

    siteTitle: false,

    socialLinks: [
      { icon: "github", link: "https://github.com/XDeFi-tech/docs" },
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
            ? `XDEFI Docs`
            : `${pageData.title} | XDEFI Docs`,
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
        { text: "About XDEFI", link: "/about/xdefi-technologies/overview" },
        { text: "Developers", link: "/developers/overview" },
        { text: "Routing", link: "/routing/overview" },
        { text: "Community", link: "/community/overview" },
        {
          text: "Quick integration",
          items: [
            {
              text: "Install Extension Wallet",
              link: "https://xdefi.io",
            },
            {
              text: "Extension Wallet",
              link: "/developers/extension-integration",
            },
            {
              text: "Install Mobile Wallet",
              link: "https://xdefi.io",
            },
            { text: "Mobile Wallet", link: "/developers/mobile-integration" },
          ],
        },
      ],
    },
  ];
}

function sidebarHome() {
  return [
    {
      text: "About",
      collapsed: true,
      items: [
        {
          text: "XDEFI Technologies",
          collapsed: true,
          items: [
            {
              text: "Overview",
              link: "/about/xdefi-technologies/overview.mdx",
            },
            {
              text: "Blockchains",
              link: "/about/xdefi-technologies/supported-blockchains",
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
                  text: "Customise RPC",
                  link: "/about/xdefi-technologies/customise-rpc",
                },
              ],
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
          collapsed: true,
          items: [
            {
              text: "Overview",
              link: "/about/xdefi-token/xdefi",
            },
            {
              text: "How to Buy",
              link: "/about/xdefi-token/buying",
            },
            {
              text: "Revenue",
              link: "/about/xdefi-token/revenue",
            },
            {
              text: "Staking $XDEFI",
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
      collapsed: true,
      items: [
        { text: "Overview", link: "/developers/overview" },
        {
          text: "Build a dApp",
          collapsed: true,
          items: [
            { text: "Cosmos", link: "/developers/build-dapp-cosmos" },
            { text: "EVM", link: "/developers/build-dapp-evm" },
            { text: "Near", link: "/developers/build-dapp-near" },
            { text: "Solana", link: "/developers/build-dapp-solana" },
            { text: "UTXO", link: "/developers/build-dapp-utxo" },
          ],
        },
        {
          text: "Build a Cosmos dApp",
          collapsed: true,
          items: [
            { text: "Configuration", link: "/developers/configuration-cosmos" },
            { text: "Let's dev", link: "/developers/lets-dev-cosmos" },
          ],
        },
      ],
    },
    {
      text: "Routing",
      collapsed: true,
      items: [
        { text: "Overview", link: "/routing/overview" },
        { text: "Endpoints", link: "/routing/endpoints" },
        { text: "Routing Graph QL API", link: "/routing/routing-graph-ql-api" },
        {
          text: "Query and Mutation details",
          link: "/routing/query-mutation-details",
        },
        { text: "Step-by-step Swap example", link: "/routing/swap-example" },
        {
          text: "Integration",
          collapsed: true,
          items: [
            { text: "Snipet", link: "/routing/snipet" },
            { text: "Widget", link: "/routing/widget" },
          ],
        },
      ],
    },
    {
      text: "Community",
      collapsed: true,
      items: [
        { text: "Overview", link: "/community/overview" },
        {
          text: "Channels",
          collapsed: true,
          items: [
            { text: "Discord", link: "/community/discord" },
            { text: "Telegram", link: "/community/telegram" },
            { text: "X", link: "/community/x" },
          ],
        },
      ],
    },
  ];
}
