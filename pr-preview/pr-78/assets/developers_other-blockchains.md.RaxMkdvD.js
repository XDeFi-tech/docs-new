import{c as n,r as e}from"./chunks/client.r8mSQ1EB.js";import{D as l}from"./chunks/DetectWallet.wWnFmWqd.js";import{h as i,l as h,c as p,m as k,U as a,o as d}from"./chunks/framework.sUaqCVHh.js";const r=a(`<h1 id="other-blockchains" tabindex="-1">Other Blockchains <a class="header-anchor" href="#other-blockchains" aria-label="Permalink to &quot;Other Blockchains&quot;">​</a></h1><p>Native blockchains supported</p><table><thead><tr><th>Blockchain</th><th>Chain ID</th><th>xfi[chainId]</th></tr></thead><tbody><tr><td>BNB Beacon Chain</td><td><code>binance</code></td><td><code>window.xfi.binance</code></td></tr><tr><td>Bitcoin</td><td><code>bitcoin</code></td><td><code>window.xfi.bitcoin</code></td></tr><tr><td>Bitcoin Cash</td><td><code>bitcoincash</code></td><td><code>window.xfi.bitcoincash</code></td></tr><tr><td>Cosmos</td><td><code>cosmos</code></td><td><code>window.xfi.cosmos</code></td></tr><tr><td>Dogecoin</td><td><code>dogecoin</code></td><td><code>window.xfi.dogecoin</code></td></tr><tr><td>Litecoin</td><td><code>litecoin</code></td><td><code>window.xfi.litecoin</code></td></tr><tr><td>Maya Protocol</td><td><code>mayachain</code></td><td><code>window.xfi.mayachain</code></td></tr><tr><td>NEAR Protocol</td><td><code>near</code></td><td><code>window.xfi.near</code></td></tr><tr><td>Solana</td><td><code>solana</code></td><td><code>window.xfi.solana</code></td></tr><tr><td>Terra</td><td><code>terra</code></td><td><code>window.xfi.terra</code></td></tr><tr><td>THORChain</td><td><code>thorchain</code></td><td><code>window.xfi.thorchain</code></td></tr></tbody></table><h3 id="detect-ctrl-wallet" tabindex="-1">Detect Ctrl Wallet <a class="header-anchor" href="#detect-ctrl-wallet" aria-label="Permalink to &quot;Detect Ctrl Wallet&quot;">​</a></h3><p>To detect whether your browser is running Ctrl Wallet, you can use the following code:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (window.xfi) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Ctrl Wallet detected&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Your code here</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Notice: <code>window.xfi</code> which is a global object added by Ctrl Wallet.</p><p>Below is an example of how to detect Ctrl Wallet with Bitcoin (BTC): <code>window.xfi.bitcoin</code></p>`,8),o=a(`<h3 id="connect-to-ctrl-wallet" tabindex="-1">Connect to Ctrl Wallet <a class="header-anchor" href="#connect-to-ctrl-wallet" aria-label="Permalink to &quot;Connect to Ctrl Wallet&quot;">​</a></h3><p>To connect to Ctrl Wallet (access the user&#39;s [blockchain - like Ethereum] account(s)), you can use the following code:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Connect &amp; get accounts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.xfi[chainId].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;request_accounts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, params: [] },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">accounts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(error);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Account connected:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, accounts[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h3 id="experience-functions" tabindex="-1">Experience functions <a class="header-anchor" href="#experience-functions" aria-label="Permalink to &quot;Experience functions&quot;">​</a></h3><p>When your account is connected to Ctrl Wallet, let&#39;s start experiencing more functions.</p><h4 id="get-the-current-account" tabindex="-1">Get the current account <a class="header-anchor" href="#get-the-current-account" aria-label="Permalink to &quot;Get the current account&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.xfi[chainId].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;request_accounts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, params: [] },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">accounts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(error);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Accounts:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, accounts);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Do something with the accounts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Above code will return <code>Promise&lt;Array[String]&gt;</code> with the current account address. If wallet can not be found, return <code>[]</code> instead of <code>throw Error</code></p><p>Above code will return <code>Promise&lt;Signature | RPC: 2.0&gt;</code></p><h4 id="transfer" tabindex="-1">Transfer <a class="header-anchor" href="#transfer" aria-label="Permalink to &quot;Transfer&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.xfi[chainId].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;transfer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    params: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        asset: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          chain: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          symbol: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          ticker: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        from: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          amount: number,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          decimals: number,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        recipient: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        amount: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        memo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        gasLimit: number, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Optional</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(error);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Transaction hash:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, result);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Return <code>Promise&lt;String&gt;</code> with the transaction hash</p><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><p>Currently we only support some action events from Wallet</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.xfi[chainId].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;event_name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, callback);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//Example</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.xfi[chainId].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;close&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.location.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.xfi[chainId].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;accountsChanged&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.location.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span></code></pre></div><h4 id="events-supported" tabindex="-1">Events supported <a class="header-anchor" href="#events-supported" aria-label="Permalink to &quot;Events supported&quot;">​</a></h4><table><thead><tr><th>Events</th><th>Trigger</th></tr></thead><tbody><tr><td><code>accountsChanged</code></td><td>Receive when active account changed in Wallet</td></tr><tr><td><code>networkChanged</code></td><td>Receive when active network changed in Wallet</td></tr><tr><td><code>chainChanged</code></td><td>Receive when active chain changed in Wallet</td></tr><tr><td><code>close</code></td><td>Alias for disconnect event</td></tr><tr><td><code>disconnect</code></td><td>Receive when disconnecting from Wallet</td></tr></tbody></table><h4 id="methods-supported" tabindex="-1">Methods supported <a class="header-anchor" href="#methods-supported" aria-label="Permalink to &quot;Methods supported&quot;">​</a></h4><table><thead><tr><th>Methods</th><th>Description</th></tr></thead><tbody><tr><td><code>on(event, callback)</code></td><td>Add event listener</td></tr><tr><td><code>off(event, callback)</code></td><td>Remove event listener</td></tr></tbody></table>`,19),b=JSON.parse('{"title":"Other Blockchains","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Other Blockchains | Ctrl Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/other-blockchains.md","filePath":"developers/other-blockchains.md","lastUpdated":1733394388000}'),E={name:"developers/other-blockchains.md"},m=Object.assign(E,{setup(c){const s=i();return i(),h(()=>{n(s.value).render(e.createElement(l,{chainId:"bitcoin"},null))}),(t,g)=>(d(),p("div",null,[r,k("div",{ref_key:"refDetectWallet",ref:s},null,512),o]))}});export{b as __pageData,m as default};
