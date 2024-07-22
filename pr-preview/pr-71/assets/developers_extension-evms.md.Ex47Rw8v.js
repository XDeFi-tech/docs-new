import{_ as s,c as e,o as i,U as a}from"./chunks/framework.FAvVAX8S.js";const E=JSON.parse('{"title":"Extension Wallet Ethereum Integration","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Extension Wallet Ethereum Integration | Ctrl Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/extension-evms.md","filePath":"developers/extension-evms.md","lastUpdated":1721634100000}'),t={name:"developers/extension-evms.md"},n=a(`<h1 id="extension-wallet-ethereum-integration" tabindex="-1">Extension Wallet Ethereum Integration <a class="header-anchor" href="#extension-wallet-ethereum-integration" aria-label="Permalink to &quot;Extension Wallet Ethereum Integration&quot;">​</a></h1><p>Develop EVM based dApps</p><h3 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h3><ul><li><a href="https://web3js.readthedocs.io/en/v1.3.4/getting-started.html" target="_blank" rel="noreferrer">web3.js introduction</a></li><li><a href="https://docs.ethers.io/v5/getting-started/" target="_blank" rel="noreferrer">ether.js introduction</a></li></ul><h3 id="example-dapp" tabindex="-1">Example dApp <a class="header-anchor" href="#example-dapp" aria-label="Permalink to &quot;Example dApp&quot;">​</a></h3><ul><li><a href="https://github.com/XDeFi-tech/examples-dapps-sdk/tree/main/ethereum/web3/web3-example-vue" target="_blank" rel="noreferrer">web3 vue example</a></li></ul><h3 id="integrate-ethereum-dapps-with-xdefi" tabindex="-1">Integrate Ethereum dApps with XDEFI <a class="header-anchor" href="#integrate-ethereum-dapps-with-xdefi" aria-label="Permalink to &quot;Integrate Ethereum dApps with XDEFI&quot;">​</a></h3><h4 id="window-xfi-ethereum" tabindex="-1"><code>window.xfi.ethereum</code> <a class="header-anchor" href="#window-xfi-ethereum" aria-label="Permalink to &quot;\`window.xfi.ethereum\`&quot;">​</a></h4><p>XDEFI injects <code>window.xfi.ethereum</code> as an <a href="https://eips.ethereum.org/EIPS/eip-1193" target="_blank" rel="noreferrer">EIP-1193</a> compatible provider;</p><p>As a dApp developer, you can check if <code>window.xfi &amp;&amp; window.xfi.ethereum</code> is defined.</p><p>If it is, XDEFI is injected.</p><p>You can use it with regular ethereum libraries such as web3 or ethersjs.</p><p><strong>Using web3.js</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// In Node.js use: const Web3 = require(&#39;web3&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> web3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.xfi </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.xfi.ethereum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Web3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(window.xfi.ethereum);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">web3) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // XDEFI is not injected</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>Using ethers.js</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> provider</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  window.xfi </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  window.xfi.ethereum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ethers.providers.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Web3Provider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(window.xfi.ethereum);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">provider) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // XDEFI is not injected</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="window-ethereum" tabindex="-1"><code>window.ethereum</code> <a class="header-anchor" href="#window-ethereum" aria-label="Permalink to &quot;\`window.ethereum\`&quot;">​</a></h4><p>If <strong>Pretend to be MetaMask</strong> option is enabled in the dApps Settings Providers page, this would make XDEFI overrides <code>window.ethereum</code> and pretend to be MetaMask by having <code>window.ethereum.isMetaMask</code> and <code>window.ethereum._metamask</code> set to <code>true</code></p><p><strong>Using web3.js</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// In Node.js use: const Web3 = require(&#39;web3&#39;);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> web3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Web3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(window.ethereum);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Using ethers.js</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> provider</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ethers.providers.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Web3Provider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(window.ethereum)</span></span></code></pre></div><h4 id="using-onboard-js" tabindex="-1">Using onboard.js <a class="header-anchor" href="#using-onboard-js" aria-label="Permalink to &quot;Using onboard.js&quot;">​</a></h4><p>Follow the getting started tutorial: <a href="https://docs.blocknative.com/onboard" target="_blank" rel="noreferrer">https://docs.blocknative.com/onboard</a></p><p>And add the entry of <code>xdefi</code> to the <code>wallets</code> option.</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  walletName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xdefi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Example of integration with onboard.js: <a href="https://github.com/blocknative/react-demo/blob/master/src/services.js#L71" target="_blank" rel="noreferrer">https://github.com/blocknative/react-demo/blob/master/src/services.js#L71</a> (live demo <a href="https://reactdemo.blocknative.com/" target="_blank" rel="noreferrer">https://reactdemo.blocknative.com/</a>)</p>`,25),h=[n];function p(l,r,o,d,k,c){return i(),e("div",null,h)}const m=s(t,[["render",p]]);export{E as __pageData,m as default};