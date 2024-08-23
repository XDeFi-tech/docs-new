import{_ as s,c as i,o as a,U as e}from"./chunks/framework.Ne8MGzTZ.js";const E=JSON.parse('{"title":"Extension Wallet Tron Integration","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Extension Wallet Tron Integration | Ctrl Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/extension-tron.md","filePath":"developers/extension-tron.md","lastUpdated":1724404939000}'),t={name:"developers/extension-tron.md"},n=e(`<h1 id="extension-wallet-tron-integration" tabindex="-1">Extension Wallet Tron Integration <a class="header-anchor" href="#extension-wallet-tron-integration" aria-label="Permalink to &quot;Extension Wallet Tron Integration&quot;">​</a></h1><p>Note: <em>Tron support is currently not available. It will be available from v30 (end of Q3 2024).</em></p><p>Develop Tron dApps</p><p>Example dApp using Tron: <a href="https://main.d2ladgp2r2c4c2.amplifyapp.com/" target="_blank" rel="noreferrer">https://main.d2ladgp2r2c4c2.amplifyapp.com/</a></p><h3 id="tron-provider" tabindex="-1">Tron Provider <a class="header-anchor" href="#tron-provider" aria-label="Permalink to &quot;Tron Provider&quot;">​</a></h3><p>Ctrl Wallet provider exposes different methods in <code>window.xfi.tron</code> or <code>window.tron</code></p><p>Below are functions supported by the provider <code>window.tron</code> or <code>window.xfi.tron</code>.</p><h3 id="accounts-request" tabindex="-1">Accounts Request <a class="header-anchor" href="#accounts-request" aria-label="Permalink to &quot;Accounts Request&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-EZCJp" id="tab-kmUkJ1x" checked="checked"><label for="tab-kmUkJ1x">Request</label><input type="radio" name="group-EZCJp" id="tab-iDlOp2V"><label for="tab-iDlOp2V">Response</label></div><div class="blocks"><div class="language-javascript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> accounts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.xfi.tron.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;eth_requestAccounts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(accounts)</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;TQXoXrsGLVhPM9jp2DNyQhnuZn2UcnSm8m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div></div></div><h3 id="sign-message-v2" tabindex="-1">Sign Message V2 <a class="header-anchor" href="#sign-message-v2" aria-label="Permalink to &quot;Sign Message V2&quot;">​</a></h3><p><code>signMessageV2(message: string, privateKey?: string): Promise&lt;string&gt;;</code></p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-HsAB2" id="tab-cRo8SgM" checked="checked"><label for="tab-cRo8SgM">Request</label><input type="radio" name="group-HsAB2" id="tab-gXDX2m2"><label for="tab-gXDX2m2">Response</label></div><div class="blocks"><div class="language-javascript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> signature</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.xfi.tron.tronWeb.trx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">signMessageV2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello World&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(signature);</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0xb6a8a33133bcc490ac028f85aa370ada2b7368e55cf274ab5cce246365e2e8724566a388293b21c03dbfbe71ee1cf2df02487e54176ea09cce602e134ff87d8d1c&quot;</span></span></code></pre></div></div></div><h3 id="get-block-by-number" tabindex="-1">Get Block By Number <a class="header-anchor" href="#get-block-by-number" aria-label="Permalink to &quot;Get Block By Number&quot;">​</a></h3><p><code>getBlockByNumber(index: number): Promise&lt;{ blockID: string }&gt;;</code></p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-4Vapn" id="tab-p-eO6Va" checked="checked"><label for="tab-p-eO6Va">Request</label><input type="radio" name="group-4Vapn" id="tab-gIc4nu3"><label for="tab-gIc4nu3">Response</label></div><div class="blocks"><div class="language-javascript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> response</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.xfi.tron.tronWeb.trx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBlockByNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(response);</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;blockID&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;00000000000000644df09e6883a3a7900814f8d78cf47b255b7ed284527a773d&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;block_header&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;raw_data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;number&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;txTrieRoot&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0000000000000000000000000000000000000000000000000000000000000000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;witness_address&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;414b4778beebb48abe0bc1df42e92e0fe64d0c8685&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;parentHash&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0000000000000063ed8544c4c17fc053dfc729e610673c783bcdc3cf0781b07f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;timestamp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1529891811000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;witness_signature&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;277d4440e2feb552b6d2d557ba407f68310887020fcc7ef6e2733286a0d13c703ebf2306293bda9d2ddac09835be67583c736a65494115825b6f4ab6a15f1e0f01&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><p>More features coming soon...</p>`,16),l=[n];function p(h,o,k,r,d,c){return a(),i("div",null,l)}const u=s(t,[["render",p]]);export{E as __pageData,u as default};
