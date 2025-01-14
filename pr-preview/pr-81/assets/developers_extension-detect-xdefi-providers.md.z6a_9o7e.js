import{_ as e,c as s,o as i,U as t}from"./chunks/framework.n3Rq4UdI.js";const f=JSON.parse('{"title":"Detect Ctrl (fka XDEFI) Providers","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Detect Ctrl (fka XDEFI) Providers | Ctrl Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/extension-detect-xdefi-providers.md","filePath":"developers/extension-detect-xdefi-providers.md","lastUpdated":1736871840000}'),a={name:"developers/extension-detect-xdefi-providers.md"},n=t(`<h1 id="detect-ctrl-fka-xdefi-providers" tabindex="-1">Detect Ctrl (fka XDEFI) Providers <a class="header-anchor" href="#detect-ctrl-fka-xdefi-providers" aria-label="Permalink to &quot;Detect Ctrl (fka XDEFI) Providers&quot;">​</a></h1><p>The Ctrl (fka XDEFI) browser extension will inject objects called <code>xfi</code> and <code>ethereum</code> on the <code>window</code> object of any web application the user visits. To detect if a browser extension using this API is installed, you can check for the existence of the <code>xfi</code> and <code>ethereum</code> object.</p><h3 id="dapp-example" tabindex="-1">DApp example <a class="header-anchor" href="#dapp-example" aria-label="Permalink to &quot;DApp example&quot;">​</a></h3><p>DApp xample: <a href="https://github.com/XDeFi-tech/examples-dapps-sdk" target="_blank" rel="noreferrer">https://github.com/XDeFi-tech/examples-dapps-sdk</a></p><h3 id="detection-example" tabindex="-1">Detection example <a class="header-anchor" href="#detection-example" aria-label="Permalink to &quot;Detection example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xfi&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Detecting the Ctrl (fka XDEFI) providers: xfi and ethereum</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(window.xfi, window.ethereum);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(window.xfi, window.xfi </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.xfi.ethereum);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ethereum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.ethereum;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.xfiObject </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.xfi;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="request-parameters-description" tabindex="-1">Request parameters description <a class="header-anchor" href="#request-parameters-description" aria-label="Permalink to &quot;Request parameters description&quot;">​</a></h3><p><code>from</code> - the address from which the request is coming</p><p><code>recipient</code> - the address on which the request is targeted</p><p><code>feeRate</code> - units per transaction size → <a href="http://docs.xchainjs.org/xchain-client/overview.html?highlight=feeRate#transfer" target="_blank" rel="noreferrer">precise description</a></p><p><code>amount</code> - request transaction amount</p><p><code>memo</code> - text hint for the request</p>`,12),r=[n];function p(o,h,d,l,c,k){return i(),s("div",null,r)}const m=e(a,[["render",p]]);export{f as __pageData,m as default};
