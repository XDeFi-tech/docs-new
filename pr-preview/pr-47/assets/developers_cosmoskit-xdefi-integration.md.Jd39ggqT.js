import{_ as s,c as i,o as a,U as t}from"./chunks/framework.ZeyUdLGV.js";const e="/pr-preview/pr-47/assets/cosmos-kit-xdefi-integration.Df91NNGT.jpg",y=JSON.parse('{"title":"CosmosKit XDEFI Integration","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"CosmosKit XDEFI Integration | XDEFI Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/cosmoskit-xdefi-integration.md","filePath":"developers/cosmoskit-xdefi-integration.md","lastUpdated":1718949107000}'),n={name:"developers/cosmoskit-xdefi-integration.md"},l=t(`<h1 id="cosmoskit-xdefi-integration" tabindex="-1">CosmosKit XDEFI Integration <a class="header-anchor" href="#cosmoskit-xdefi-integration" aria-label="Permalink to &quot;CosmosKit XDEFI Integration&quot;">​</a></h1><h3 id="get-started" tabindex="-1">Get started <a class="header-anchor" href="#get-started" aria-label="Permalink to &quot;Get started&quot;">​</a></h3><p>Best way to get started with CosmosKit is to scaffold new app from terminal with <a href="https://github.com/cosmology-tech/create-cosmos-app" target="_blank" rel="noreferrer">create-cosmos-app</a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cosmos-app</span></span></code></pre></div><p>Next, you will need to install 2 packages for the XDEFI:</p><ul><li><code>@cosmos-kit/xdefi</code></li><li><code>@cosmos-kit/xdefi-extension</code></li></ul><p><code>@cosmos-kit/xdefi</code> export all available xdefi wallets (currently only extension available), while if you only want to add a particular one, choose <code>@cosmos-kit/xdefi-extension</code></p><blockquote><p>Note: all these packages export <code>wallets</code> and it&#39;s an array of <code>MainWalletBase</code></p></blockquote><p>Take <code>@cosmos-kit/xdefi</code> for example</p><h3 id="add-cosmos-kit-xdefi" tabindex="-1">add <code>@cosmos-kit/xdefi</code> <a class="header-anchor" href="#add-cosmos-kit-xdefi" aria-label="Permalink to &quot;add \`@cosmos-kit/xdefi\`&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @cosmos-kit/xdefi</span></span></code></pre></div><h3 id="import-the-wallets" tabindex="-1">import the wallets <a class="header-anchor" href="#import-the-wallets" aria-label="Permalink to &quot;import the wallets&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { wallets </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xdefi } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@cosmos-kit/xdefi&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h3 id="add-to-your-provider" tabindex="-1">add to your provider <a class="header-anchor" href="#add-to-your-provider" aria-label="Permalink to &quot;add to your provider&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyCosmosApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">pageProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AppProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ChainProvider</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        chains</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{chains}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        assetLists</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{assets}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        wallets</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xdefi]}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        walletConnectOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// required if \`wallets\` contains mobile wallets</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pageProps} /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ChainProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MyCosmosApp;</span></span></code></pre></div><h3 id="we-re-done" tabindex="-1">we&#39;re done! <a class="header-anchor" href="#we-re-done" aria-label="Permalink to &quot;we&#39;re done!&quot;">​</a></h3><p><img src="`+e+'" alt="image"></p><h3 id="additional-resources" tabindex="-1">Additional resources <a class="header-anchor" href="#additional-resources" aria-label="Permalink to &quot;Additional resources&quot;">​</a></h3><ul><li><a href="https://docs.cosmoskit.com/" target="_blank" rel="noreferrer">CosmosKit docs</a></li></ul>',19),h=[l];function p(o,r,k,d,c,g){return a(),i("div",null,h)}const m=s(n,[["render",p]]);export{y as __pageData,m as default};
