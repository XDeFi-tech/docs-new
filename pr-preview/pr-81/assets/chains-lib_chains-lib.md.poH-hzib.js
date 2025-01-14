import{_ as i,c as s,o as a,U as t}from"./chunks/framework.n3Rq4UdI.js";const y=JSON.parse('{"title":"Chains Lib Documentation","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Chains Lib Documentation | Ctrl Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"chains-lib/chains-lib.md","filePath":"chains-lib/chains-lib.md","lastUpdated":1736871840000}'),n={name:"chains-lib/chains-lib.md"},e=t(`<h1 id="chains-lib-documentation" tabindex="-1">Chains Lib Documentation <a class="header-anchor" href="#chains-lib-documentation" aria-label="Permalink to &quot;Chains Lib Documentation&quot;">​</a></h1><p><a href="https://github.com/XDeFi-tech/chains-lib" target="_blank" rel="noreferrer">Chainslib</a> is a TypeScript library is designed to provide a unified interface for working with multiple blockchain networks, allowing developers to interact with various blockchain chains seamlessly. It supports a wide range of features and blockchain networks, making it a versatile tool for blockchain development.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><p>Chainslib offers the following key features:</p><ul><li><strong>Hardware Wallet Support:</strong> It provides integration with Ledger and Trezor hardware wallets for enhanced security in blockchain transactions.</li><li><strong>Wallet Types:</strong> You can work with both seed phrase and private key wallets for managing your blockchain assets.</li><li><strong>Standardized RPC Interface:</strong> The library offers a consistent RPC interface for fetching blockchain information and broadcasting transactions across different supported chains.</li></ul><h2 id="supported-chains" tabindex="-1">Supported Chains <a class="header-anchor" href="#supported-chains" aria-label="Permalink to &quot;Supported Chains&quot;">​</a></h2><details><summary>Chainslib currently supports the following blockchain networks:</summary><ul><li>Bitcoin</li><li>Bitcoin Cash</li><li>Litecoin</li><li>Dogecoin</li><li>Ethereum</li><li>BNB Smart Chain</li><li>Avalanche</li><li>Polygon</li><li>Optimism</li><li>Arbitrum</li><li>Fantom</li><li>Other EVM-compatible chains</li><li>Cosmos</li><li>Osmosis</li><li>Juno</li><li>Other IBC-Compatible Chains</li><li>THORChain</li><li>BNB Beacon Chain</li><li>Solana</li></ul></details><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>To use Chainslib in your TypeScript project, you can install it via npm or yarn:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @xdefi-tech/chains</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @xdefi-tech/chains</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Here&#39;s a basic example of how to use this library in your TypeScript application:</p><h3 id="_1-import-required-modules" tabindex="-1">1. Import Required Modules <a class="header-anchor" href="#_1-import-required-modules" aria-label="Permalink to &quot;1. Import Required Modules&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BitcoinProvider } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./chain.provider&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> LedgerSigner </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./ledger.signer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { MsgBody, Msg } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;../msg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="_2-initialize-bitcoin-provider" tabindex="-1">2. Initialize Bitcoin Provider <a class="header-anchor" href="#_2-initialize-bitcoin-provider" aria-label="Permalink to &quot;2. Initialize Bitcoin Provider&quot;">​</a></h3><p>Initialize the Bitcoin provider with the necessary configurations:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> provider</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BitcoinProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IndexerDataSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">BITCOIN_MANIFEST</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><h3 id="_3-create-transaction-input" tabindex="-1">3. Create Transaction Input <a class="header-anchor" href="#_3-create-transaction-input" aria-label="Permalink to &quot;3. Create Transaction Input&quot;">​</a></h3><p>Define the transaction input data, including the sender (from), recipient (to), and the amount to send.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> txInput</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MsgBody</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  from: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;FROM ADDRESS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  to: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;TO ADDRESS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  amount: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.000001</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h3 id="_4-create-a-transaction-message" tabindex="-1">4. Create a Transaction Message <a class="header-anchor" href="#_4-create-a-transaction-message" aria-label="Permalink to &quot;4. Create a Transaction Message&quot;">​</a></h3><p>Create a transaction message using the provider:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> message</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Msg</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> provider.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createMsg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(txInput);</span></span></code></pre></div><h3 id="_5-sign-the-transaction-with-ledger" tabindex="-1">5. Sign the Transaction with Ledger <a class="header-anchor" href="#_5-sign-the-transaction-with-ledger" aria-label="Permalink to &quot;5. Sign the Transaction with Ledger&quot;">​</a></h3><p>Use the LedgerSigner to sign the transaction. Provide the message and the derivation path:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> transport</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Transport.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> signer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LedgerSigner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(transport);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> derivationPath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;m/84&#39;/0&#39;/0&#39;/0/0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> signer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message, derivationPath);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// finally close</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">transport.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h3 id="_6-broadcast-the-transaction" tabindex="-1">6. Broadcast the Transaction <a class="header-anchor" href="#_6-broadcast-the-transaction" aria-label="Permalink to &quot;6. Broadcast the Transaction&quot;">​</a></h3><p>Now that the transaction is signed, you can broadcast it to the Bitcoin network using the BitcoinProvider. This step assumes that the transaction is already signed within the <code>message</code>.</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> provider.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">broadcast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([message]);</span></span></code></pre></div><h2 id="retrieving-a-transaction" tabindex="-1">Retrieving a Transaction <a class="header-anchor" href="#retrieving-a-transaction" aria-label="Permalink to &quot;Retrieving a Transaction&quot;">​</a></h2><h3 id="_1-get-transaction-hash" tabindex="-1">1. Get Transaction Hash <a class="header-anchor" href="#_1-get-transaction-hash" aria-label="Permalink to &quot;1. Get Transaction Hash&quot;">​</a></h3><p>If you have a transaction hash, you can retrieve the transaction details. Use the <code>getTransaction</code> method of the BitcoinProvider:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> txHash</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;TX HAS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> txData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> provider.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getTransaction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(txHash);</span></span></code></pre></div><p>The <code>txData</code> object will contain transaction details, including the transaction hash.</p><h2 id="disclaimer" tabindex="-1">Disclaimer <a class="header-anchor" href="#disclaimer" aria-label="Permalink to &quot;Disclaimer&quot;">​</a></h2><p>This library is provided as-is, and we make no warranties or guarantees regarding its functionality or security. Always exercise caution and proper security practices when working with blockchain assets.</p><p>Happy blockchain development! 🚀🔗</p>`,37),h=[e];function l(r,p,o,k,d,c){return a(),s("div",null,h)}const u=i(n,[["render",l]]);export{y as __pageData,u as default};
