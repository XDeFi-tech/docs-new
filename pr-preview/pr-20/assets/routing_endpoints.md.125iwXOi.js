import{_ as s,c as i,o as a,U as n}from"./chunks/framework.FOlhu2W0.js";const F=JSON.parse('{"title":"Endpoints","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Endpoints | XDEFI Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"routing/endpoints.md","filePath":"routing/endpoints.md","lastUpdated":1710863541000}'),t={name:"routing/endpoints.md"},l=n(`<h1 id="endpoints" tabindex="-1">Endpoints <a class="header-anchor" href="#endpoints" aria-label="Permalink to &quot;Endpoints&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#chains">chains/</a></li><li><a href="#tokens-mainnet-all">tokens/mainnet/all/</a></li><li><a href="#providers">providers/</a></li><li><a href="#graphql">graphql/</a></li></ul></nav><p>In this page, we list the main API public endpoints.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>For the sake of avoiding redundancy, some endpoints, returning the same data or serving the same functions as our Graph QL API, are not listed here.</p></div><h2 id="chains" tabindex="-1">chains/ <a class="header-anchor" href="#chains" aria-label="Permalink to &quot;chains/&quot;">​</a></h2><p>Returns a list of supported chains (i.e. chains you can swap assets within or chains you can bridge to). List of supported chain as of Q2 2023:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;BNB&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;BTC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;BCH&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;LTC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ETH&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;THOR&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DOGE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;BSC&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POLYGON&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;FTM&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AVAX&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ARBITRUM&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;AURORA&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;NEAR&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SOL&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;COSMOS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;OSMOSIS&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h2 id="tokens-mainnet-all" tabindex="-1">tokens/mainnet/all/ <a class="header-anchor" href="#tokens-mainnet-all" aria-label="Permalink to &quot;tokens/mainnet/all/&quot;">​</a></h2><p>Returns a list of all supported tokens in the following format:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;id&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;7f38d14d-169c-4a4c-97ba-6e1fa4a77d8a&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;chain&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;POLYGON&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;symbol&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;EASY&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;label&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;EASY&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;name&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;POLYGON.EASY&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;address&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;0xdb3b3b147a030f032633f6c4bebf9a2fb5a882b5&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;list_providers&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;b86510b8-a730-44cd-977e-748df4fddc08&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;decimal&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><ul><li><code>id</code> is an internal uid for a given crypto asset</li><li><code>chain</code> is one of the supported chains found in endpoint chains/</li><li><code>name</code> is the token name in the chain.symbol format</li><li><code>list_providers</code> contains provider ids, found in providers/ endpoint (see below)</li></ul></div><h2 id="providers" tabindex="-1">providers/ <a class="header-anchor" href="#providers" aria-label="Permalink to &quot;providers/&quot;">​</a></h2><p>List of available providers for swapping and bridging:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;id&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;9cbdfbc0-c5b7-4814-b8cb-04d0b083b3a6&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;name&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Thorchain&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;time&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;60&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;icon&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://miro.medium.com/max/3150/1*KkoJRE6ICrE70mNegVeY_Q.png&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><ul><li><code>id</code> is an internal uid</li><li><code>name</code> is the provider&#39;s name</li><li><code>time</code> is the typical duration of for a swap/bridge to complete for a given a provider</li><li><code>icon</code> is a url to the provider&#39;s logo</li></ul></div><h2 id="graphql" tabindex="-1">graphql/ <a class="header-anchor" href="#graphql" aria-label="Permalink to &quot;graphql/&quot;">​</a></h2><p>Entry point to our Graph QL schema (see <a href="./routing-graph-ql-api">Routing Graph QL API</a> section for more details).</p>`,17),e=[l];function p(h,o,k,d,r,c){return a(),i("div",null,e)}const E=s(t,[["render",p]]);export{F as __pageData,E as default};
