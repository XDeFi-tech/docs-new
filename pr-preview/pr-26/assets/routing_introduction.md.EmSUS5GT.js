import{_ as t,c as i,o as a,U as e}from"./chunks/framework.u_p68rOy.js";const g=JSON.parse('{"title":"Routing API","description":"","frontmatter":{"prev":{"text":"XDEFI Wallet Integration","link":"/developers/xdefi-wallet-integration"},"next":{"text":"Endpoints","link":"./endpoints"},"head":[["meta",{"name":"og:title","content":"Routing API | XDEFI Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"routing/introduction.md","filePath":"routing/introduction.md","lastUpdated":1711546055000}'),s={name:"routing/introduction.md"},n=e(`<h1 id="routing-api" tabindex="-1">Routing API <a class="header-anchor" href="#routing-api" aria-label="Permalink to &quot;Routing API&quot;">​</a></h1><p><em>Comprehensive description of the routing service and its endpoints</em></p><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><ul><li><a href="#introduction">Introduction</a></li><li><a href="./endpoints">Endpoints</a></li><li><a href="./routing-graph-ql-api">Routing Graph QL API</a></li><li><a href="./query-mutation-details">Query and Mutation details</a></li><li><a href="./swap-example">Step by step Swap example</a></li><li><a href="./widget-integration">Widget Integration</a></li></ul><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>This project provides a multi-step process to request and execute cross-chain swaps via a REST API.</p><p>First, given a pair tokenA/tokenB, with assets belonging to the same chain or separate chains, an optimal route is found to swap from tokenA to tokenB. Once the route is found, the necessary transaction data are returned for signing and execution.</p><h2 id="connecting-to-the-api" tabindex="-1">Connecting to the API <a class="header-anchor" href="#connecting-to-the-api" aria-label="Permalink to &quot;Connecting to the API&quot;">​</a></h2><p>Before connecting to the API, one needs to go through the XDEFI VPN to access it or to whitelist the IP address. API endpoints share the same root URL: <a href="https://routingapi.xdefiservices.com/" target="_blank" rel="noreferrer">https://routingapi.xdefiservices.com/</a>.</p><p>To check the health status of the API just send a GET request to the above URL:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-52Ej5" id="tab-BRI_BwV" checked="checked"><label for="tab-BRI_BwV">Request</label><input type="radio" name="group-52Ej5" id="tab-KQH-33e"><label for="tab-KQH-33e">Response</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://routingapi.xdefiservices.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">response </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(response.status);</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;status&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;OK&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div>`,11),o=[n];function r(h,p,l,d,c,u){return a(),i("div",null,o)}const E=t(s,[["render",r]]);export{g as __pageData,E as default};
