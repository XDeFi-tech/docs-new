import{_ as a,c as s,o as i,U as e}from"./chunks/framework.1KCT1uUD.js";const t="/pr-preview/pr-86/assets/solana-xdefi-integration-nextjs-template.EcjzlZI8.jpg",l="/pr-preview/pr-86/assets/solana-no-wallets-available.iI5d0fYQ.jpg",n="/pr-preview/pr-86/assets/solana-detected-wallet-standard.9We_ssqc.jpg",p="/pr-preview/pr-86/assets/solana-wallet-not-installed.DO-AhpmP.jpg",f=JSON.parse('{"title":"Solana Adapter XDEFI Integration","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Solana Adapter XDEFI Integration | Ctrl Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/solana-adapter-xdefi-integration.md","filePath":"developers/solana-adapter-xdefi-integration.md","lastUpdated":1738746273000}'),r={name:"developers/solana-adapter-xdefi-integration.md"},h=e('<h1 id="solana-adapter-xdefi-integration" tabindex="-1">Solana Adapter XDEFI Integration <a class="header-anchor" href="#solana-adapter-xdefi-integration" aria-label="Permalink to &quot;Solana Adapter XDEFI Integration&quot;">​</a></h1><h3 id="get-started" tabindex="-1">Get started <a class="header-anchor" href="#get-started" aria-label="Permalink to &quot;Get started&quot;">​</a></h3><p>Best way to start with solana dApps is to use <a href="https://github.com/solana-developers/create-solana-dapp/tree/main/packages/create-solana-dapp" target="_blank" rel="noreferrer">create-solana-dapp</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create-solana-dapp@latest</span></span></code></pre></div><p>create-solana-dapp supports <code>React</code> and <code>NextJs</code> version. We&#39;ll use <code>NextJs</code> version. <img src="'+t+'" alt="image"></p><h3 id="xdefiwalletadapter-vs-wallet-standard" tabindex="-1">XDEFIWalletAdapter vs Wallet Standard <a class="header-anchor" href="#xdefiwalletadapter-vs-wallet-standard" aria-label="Permalink to &quot;XDEFIWalletAdapter vs Wallet Standard&quot;">​</a></h3><p>Ctrl Wallet implements <a href="https://github.com/wallet-standard/wallet-standard" target="_blank" rel="noreferrer">Wallet Standard</a> and does not require any specific adapter to get started with Solana and Ctrl Wallet.</p><blockquote><p>You can read more about Wallet Standard <a href="https://docs.phantom.app/developer-powertools/wallet-standard" target="_blank" rel="noreferrer">here</a>.</p></blockquote><p>However, XDEFIWalletAdapter provide Ctrl Wallet installation info when Ctrl Wallet is not installed. Which might be useful in many cases. So, in case you want maintain supported wallets list, you&#39;ll need to use Adapters for parlicular wallets or maintain your own wallet connect modal with supported wallets list.</p><p>Here how looks when you have no adapter provided to <code>WalletProvider</code> and no wallet installed <img src="'+l+'" alt="image"></p><blockquote><p>which might be ok for experienced users but pretty confusing for newcomers.</p></blockquote><p>And here how it looks when user have some wallet installed which implements Wallet Standard <img src="'+n+`" alt="image"></p><h3 id="using-solana-adapter" tabindex="-1">Using Solana Adapter <a class="header-anchor" href="#using-solana-adapter" aria-label="Permalink to &quot;Using Solana Adapter&quot;">​</a></h3><p>Solana provides wallet adapters in two flavors: individual packages for each wallet or single tree-shakeable package which contains all wallet adapters available. We&#39;ll use later one. you can see all available adapters <a href="https://github.com/anza-xyz/wallet-adapter/blob/master/PACKAGES.md#wallets" target="_blank" rel="noreferrer">here</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @solana/wallet-adapter-wallets@latest</span></span></code></pre></div><p>Once installed, you can add Ctrl Wallet by making adding this part of code:</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  XDEFIWalletAdapter, </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* ... other adapters ... */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`@solana/wallet-adapter-wallets\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> onError</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useCallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">error</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WalletError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(error);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, []);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> wallets</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useMemo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> XDEFIWalletAdapter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ... other adapters ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">WalletProvider</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> autoConnect</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> wallets</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{wallets}  </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onError</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{onError}&gt;</span></span></code></pre></div><blockquote><p><code>web/components/solana/solana-provider.tsx</code></p></blockquote><p>Default behaviour of the <code>onError</code> callback is just log error. But what we need from it - is to redirect user to wallet home/installation page when user clicked on not installed wallet inside &quot;Connect Wallet&quot; modal <img src="`+p+`" alt="image"></p><blockquote><p>it will just log and error and do nothing when you will try to connect not installed wallet</p></blockquote><p>Let&#39;s fix this:</p><div class="language-tsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Adapter,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  WalletError,</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  WalletNotReadyError, </span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  WalletReadyState, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@solana/wallet-adapter-base&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> onError</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useCallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">error</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WalletError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">walletAdapter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Adapter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    error </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WalletNotRea</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">dyError &amp;&amp;</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    walletAdapter?.readyState </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WalletReadyState.NotDetected </span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ) {</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(walletAdapter?.url, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;_blank&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span></span>
<span class="line diff add"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(error);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, []);</span></span></code></pre></div><blockquote><p>Now, when user will try to connect Ctrl Wallet while it is not installed, user will be taken to Ctrl Wallet home page in a new window.</p></blockquote><h3 id="additional-resources" tabindex="-1">Additional Resources <a class="header-anchor" href="#additional-resources" aria-label="Permalink to &quot;Additional Resources&quot;">​</a></h3><ul><li><a href="https://github.com/solana-developers/create-solana-dapp" target="_blank" rel="noreferrer">create-solana-dapp</a></li><li><a href="https://github.com/anza-xyz/wallet-adapter" target="_blank" rel="noreferrer">Solana Wallet Adapter</a></li><li><a href="https://github.com/anza-xyz/wallet-adapter/tree/master/packages/starter" target="_blank" rel="noreferrer">Solana Wallet Adapter Samples</a></li><li><a href="https://github.com/wallet-standard/wallet-standard" target="_blank" rel="noreferrer">Wallet Standard</a></li></ul>`,25),d=[h];function k(o,E,c,g,y,u){return i(),s("div",null,d)}const m=a(r,[["render",k]]);export{f as __pageData,m as default};
