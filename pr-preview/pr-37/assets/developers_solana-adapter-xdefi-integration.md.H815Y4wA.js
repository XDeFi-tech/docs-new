import{_ as a,c as s,o as i,U as n}from"./chunks/framework.i1RgKMpI.js";const c=JSON.parse('{"title":"Solana Adapter XDEFI Integration","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Solana Adapter XDEFI Integration | XDEFI Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/solana-adapter-xdefi-integration.md","filePath":"developers/solana-adapter-xdefi-integration.md","lastUpdated":1713254726000}'),l={name:"developers/solana-adapter-xdefi-integration.md"},t=n(`<h1 id="solana-adapter-xdefi-integration" tabindex="-1">Solana Adapter XDEFI Integration <a class="header-anchor" href="#solana-adapter-xdefi-integration" aria-label="Permalink to &quot;Solana Adapter XDEFI Integration&quot;">​</a></h1><h1 id="extension-wallet-solana-integration" tabindex="-1">Extension Wallet Solana Integration <a class="header-anchor" href="#extension-wallet-solana-integration" aria-label="Permalink to &quot;Extension Wallet Solana Integration&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#using-solana-adapter">Using Solana Adapter</a><ul><li><a href="#solana-adapter-not-installed">Solana Adapter not installed</a></li><li><a href="#solana-adapter-already-installed">Solana Adapter already installed</a></li></ul></li><li><a href="#using-xdefi-provider">Using XDEFI Provider</a></li><li><a href="#using-xdefi-sdk">Using XDEFI SDK</a></li></ul></nav><h2 id="using-solana-adapter" tabindex="-1">Using Solana Adapter <a class="header-anchor" href="#using-solana-adapter" aria-label="Permalink to &quot;Using Solana Adapter&quot;">​</a></h2><h3 id="solana-adapter-not-installed" tabindex="-1">Solana Adapter not installed <a class="header-anchor" href="#solana-adapter-not-installed" aria-label="Permalink to &quot;Solana Adapter not installed&quot;">​</a></h3><p>Install the latest wallets package:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @solana/wallet-adapter-xdefi@latest</span></span></code></pre></div><p>Once installed, you can add XDEFI Wallet by making adding this part of code:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { XDEFIWalletAdapter } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`@solana/wallet-adapter-xdefi\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* ... other adapters ... */</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`@solana/wallet-adapter-wallets\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> wallets</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useMemo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> XDEFIWalletAdapter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ... other adapters ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">WalletProvider</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> autoConnect</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> wallets</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{wallets}&gt;</span></span></code></pre></div><h3 id="solana-adapter-already-installed" tabindex="-1">Solana Adapter already installed <a class="header-anchor" href="#solana-adapter-already-installed" aria-label="Permalink to &quot;Solana Adapter already installed&quot;">​</a></h3><p>Install the latest wallets package:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @solana/wallet-adapter-wallets@latest</span></span></code></pre></div><p>Once installed, you can add XDEFI Wallet by making 2 changes:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  XDEFIWalletAdapter, </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* ... other adapters ... */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`@solana/wallet-adapter-wallets\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> wallets</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useMemo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> XDEFIWalletAdapter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ... other adapters ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">WalletProvider</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> autoConnect</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> wallets</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{wallets}&gt;</span></span></code></pre></div><h2 id="using-xdefi-provider" tabindex="-1">Using XDEFI Provider <a class="header-anchor" href="#using-xdefi-provider" aria-label="Permalink to &quot;Using XDEFI Provider&quot;">​</a></h2><h2 id="using-xdefi-sdk" tabindex="-1">Using XDEFI SDK <a class="header-anchor" href="#using-xdefi-sdk" aria-label="Permalink to &quot;Using XDEFI SDK&quot;">​</a></h2><p>TBD</p>`,17),e=[t];function p(h,d,k,r,o,g){return i(),s("div",null,e)}const y=a(l,[["render",p]]);export{c as __pageData,y as default};
