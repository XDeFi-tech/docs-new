import{_ as s,c as i,o as a,U as n}from"./chunks/framework.F134IlkF.js";const g=JSON.parse('{"title":"Mobile Wallet Cosmos Integration","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Mobile Wallet Cosmos Integration | Ctrl Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/mobile-cosmos.md","filePath":"developers/mobile-cosmos.md","lastUpdated":1742980559000}'),e={name:"developers/mobile-cosmos.md"},l=n(`<h1 id="mobile-wallet-cosmos-integration" tabindex="-1">Mobile Wallet Cosmos Integration <a class="header-anchor" href="#mobile-wallet-cosmos-integration" aria-label="Permalink to &quot;Mobile Wallet Cosmos Integration&quot;">​</a></h1><p>This document provides details on integrating Cosmos with the mobile wallet application. The integration supports various functionalities such as retrieving account information and signing transactions.</p><h2 id="installation-setup" tabindex="-1">Installation &amp; Setup <a class="header-anchor" href="#installation-setup" aria-label="Permalink to &quot;Installation &amp; Setup&quot;">​</a></h2><h3 id="install-dependencies" tabindex="-1">Install dependencies <a class="header-anchor" href="#install-dependencies" aria-label="Permalink to &quot;Install dependencies&quot;">​</a></h3><p>The document uses the appkit of Reown to deploy. Please refer to the documentation at <a href="https://docs.reown.io/appkit/overview" target="_blank" rel="noreferrer">here</a>.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @reown/appkit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @reown/appkit-adapter-cosmos</span></span></code></pre></div><h3 id="initialize-the-appkit" tabindex="-1">Initialize the appkit <a class="header-anchor" href="#initialize-the-appkit" aria-label="Permalink to &quot;Initialize the appkit&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createAppKit } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@reown/appkit/core&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineChain } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@reown/appkit/networks&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cosmos</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineChain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cosmoshub-4&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  caipNetworkId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cosmos:cosmoshub-4&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  chainNamespace: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cosmos&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Cosmos Hub&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  nativeCurrency: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Cosmos&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    symbol: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ATOM&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    decimals: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rpcUrls: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    default: { http: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://rpc.walletconnect.org/v1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  blockExplorerUrls: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    default: { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Mintscan&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://mintscan.io/cosmos&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> osmosis</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineChain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;osmosis-1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  caipNetworkId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cosmos:osmosis-1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  chainNamespace: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cosmos&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Osmosis&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  nativeCurrency: {  name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Osmosis&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, symbol: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;OSMO&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, decimals: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rpcUrls: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    default: { http: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://rpc.walletconnect.org/v1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  blockExplorerUrls: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    default: { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Mintscan&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://mintscan.io/osmosis&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Instantiate AppKit</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> modal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createAppKit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  adapters: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  networks: [cosmos, osmosis],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  projectId,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeMode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;light&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  features: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    analytics: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  metadata: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;AppKit HTML Example&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    description: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;AppKit HTML Example&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://reown.com/appkit&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    icons: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Subscribe to state changes</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">modal.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">subscribeProviders</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">state</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  provider </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> state[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cosmos&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="cosmos-getaccounts" tabindex="-1">cosmos_getAccounts <a class="header-anchor" href="#cosmos-getaccounts" aria-label="Permalink to &quot;cosmos_getAccounts&quot;">​</a></h3><p>This method returns an array of key pairs available to sign from the wallet mapped with an associated algorithm and address on the blockchain.</p><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> provider.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cosmos_getAccounts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  params: {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><ul><li><code>Array</code>: Array of accounts: <ul><li><code>algo</code>: Algorithm used for signing.</li><li><code>address</code>: Corresponding address for keypair.</li><li><code>pubkey</code>: Base64 encoded public key for keypair.</li></ul></li></ul><h3 id="cosmos-signdirect" tabindex="-1">cosmos_signDirect <a class="header-anchor" href="#cosmos-signdirect" aria-label="Permalink to &quot;cosmos_signDirect&quot;">​</a></h3><p>This method returns a signature for the provided document to be signed targeting the requested signer address corresponding to the keypair returned by the account data.</p><h4 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> provider.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cosmos_signDirect&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  params: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    signerAddress: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cosmos1sguafvgmel6f880ryvq8efh9522p8zvmrzlcrq&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    signDoc: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      chainId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cosmoshub-4&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      accountNumber: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      authInfoBytes: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;CgoKABIECgIIARgBEhMKDQoFdWNvc20SBDIwMDAQwJoM&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      bodyBytes: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;CpABChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEnAKLWNvc21vczFwa3B0cmU3ZmRrbDZnZnJ6bGVzamp2aHhobGMzcjRnbW1rOHJzNhItY29zbW9zMXF5cHF4cHE5cWNyc3N6ZzJwdnhxNnJzMHpxZzN5eWM1bHp2N3h1GhAKBXVjb3NtEgcxMjM0NTY3&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><ul><li><code>signerAddress</code>: Corresponding address for keypair.</li><li><code>signDoc</code>: Document to be signed: <ul><li><code>chainId</code>: Identifier of blockchain.</li><li><code>accountNumber</code>: Blockchain account number.</li><li><code>authInfoBytes</code>: Encoded authentication information.</li><li><code>bodyBytes</code>: Encoded body of message to sign.</li></ul></li></ul><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><ul><li><code>signature</code>: Corresponding signature for signed document.</li><li><code>signed</code>: Signed document.</li></ul><h3 id="cosmos-signamino" tabindex="-1">cosmos_signAmino <a class="header-anchor" href="#cosmos-signamino" aria-label="Permalink to &quot;cosmos_signAmino&quot;">​</a></h3><p>This method returns a signature for the provided document to be signed targeting the requested signer address corresponding to the keypair returned by the account data.</p><h4 id="example-2" tabindex="-1">Example <a class="header-anchor" href="#example-2" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> provider.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cosmos_signAmino&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  params: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    signerAddress: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;cosmos1sguafvgmel6f880ryvq8efh9522p8zvmrzlcrq&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    signDoc: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      chain_id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foochain&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      account_number: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;7&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      sequence: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;54&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      memo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hello, world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      msgs: [],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      fee: { amount: [], gas: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;23&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><ul><li><code>signerAddress</code>: Corresponding address for keypair.</li><li><code>signDoc</code>: Document to be signed: <ul><li><code>chain_id</code>: Identifier of blockchain.</li><li><code>account_number</code>: Blockchain account number.</li><li><code>sequence</code>: Blockchain account sequence.</li><li><code>memo</code>: Amino message memo.</li><li><code>msgs</code>: Array of amino messages to be signed.</li><li><code>fee</code>: Fee description object.</li></ul></li></ul><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><ul><li><code>signature</code>: Corresponding signature for signed document.</li><li><code>signed</code>: Signed document.</li></ul><p>For more details, refer to the <a href="https://docs.reown.com/advanced/multichain/rpc-reference/cosmos-rpc" target="_blank" rel="noreferrer">Cosmos RPC Reference</a>.</p>`,32),t=[l];function h(p,k,r,E,o,d){return a(),i("div",null,t)}const y=s(e,[["render",h]]);export{g as __pageData,y as default};
