import{_ as s,c as i,o as a,U as t}from"./chunks/framework.FOlhu2W0.js";const g=JSON.parse('{"title":"Campaigns Service API","description":"","frontmatter":{"prev":{"text":"Routing API","link":"/routing/introduction"},"next":false,"head":[["meta",{"name":"og:title","content":"Campaigns Service API | XDEFI Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"campaigns/campaigns-service-api.md","filePath":"campaigns/campaigns-service-api.md","lastUpdated":1710863541000}'),e={name:"campaigns/campaigns-service-api.md"},n=t(`<h1 id="campaigns-service-api" tabindex="-1">Campaigns Service API <a class="header-anchor" href="#campaigns-service-api" aria-label="Permalink to &quot;Campaigns Service API&quot;">​</a></h1><p>Welcome to the XDEFI Campaigns Service API documentation. This API allows third-party websites to connect a list of addresses from an external source to the XDEFI Wallet&#39;s internal list of opted-in ad</p><h3 id="base-url" tabindex="-1">Base URL <a class="header-anchor" href="#base-url" aria-label="Permalink to &quot;Base URL&quot;">​</a></h3><p>The base URL for all API endpoints is: <code>https://compaign-ts.xdefi.services/api</code></p><h3 id="workflow" tabindex="-1">Workflow <a class="header-anchor" href="#workflow" aria-label="Permalink to &quot;Workflow&quot;">​</a></h3><p>The high-level workflow for the XDEFI Campaigns Service API is as follows:</p><ol><li>A third-party website sends a list of addresses from any XDEFI-supported chain to the Campaigns Service API. These addresses fulfill certain criteria determined by the third-party website.</li><li>XDEFI maintains an internal list of user addresses that have opted into the Campaigns feature in XDEFI Wallet.</li><li>The Campaigns Service API cross-references the third-party list of addresses with the internal list of opted-in addresses.</li><li>If there is a match between a third-party address and an opted-in address, the corresponding EVM address is identified.</li><li>A request is made to the Campaigns Service API from a website like Galxe, using an endpoint such as <code>https://compaign-ts.xdefi.services/api/campaigns/{campaign_name}/address/{evm_address}/</code>.</li><li>The request includes a user&#39;s EVM address.</li><li>If the user&#39;s EVM address meets both criteria: <ul><li>The EVM address is in the XDEFI list of opted-in addresses (indicating participation in the campaign).</li><li>The corresponding SOL address is in the third-party list of addresses (indicating completion of the task).</li></ul></li><li>If the criteria are met, the API returns TRUE to Galxe.</li></ol><p>Note: The requested address will always be in the EVM format, but the corresponding address could be on any XDEFI-supported chain.</p><h3 id="swagger-documentation" tabindex="-1">Swagger Documentation <a class="header-anchor" href="#swagger-documentation" aria-label="Permalink to &quot;Swagger Documentation&quot;">​</a></h3><p>You can find the Swagger documentation for the XDEFI Campaigns Service API <a href="https://compaign-ts.xdefi.services/documentation/v1.0.0" target="_blank" rel="noreferrer">here</a>.</p><h2 id="endpoints" tabindex="-1">Endpoints <a class="header-anchor" href="#endpoints" aria-label="Permalink to &quot;Endpoints&quot;">​</a></h2><h3 id="create-event" tabindex="-1">Create Event <a class="header-anchor" href="#create-event" aria-label="Permalink to &quot;Create Event&quot;">​</a></h3><p>Create a new event for a campaign.</p><ul><li>Method: POST</li><li>Endpoint: <code>/events</code></li><li>Request format: JSON</li><li>Response format: JSON</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ZN2bp" id="tab-1c5lcI8" checked="checked"><label for="tab-1c5lcI8">Request Body</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;address&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0x...&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;campaign&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;campignName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;partnerName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;routing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;partnerKey&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;abc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;metadata&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><p>The request body should include the following parameters:</p><table><thead><tr><th>Field</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>address</code></td><td>string</td><td>Yes</td><td>The user&#39;s address.</td></tr><tr><td><code>campaign</code></td><td>string</td><td>Yes</td><td>The name of the campaign.</td></tr><tr><td><code>partnerName</code></td><td>string</td><td>Yes</td><td>The name of the partner.</td></tr><tr><td><code>partnerKey</code></td><td>string</td><td>Yes</td><td>The key of the partner.</td></tr><tr><td><code>metadata</code></td><td>object</td><td>Yes</td><td>Additional metadata for the event.</td></tr></tbody></table><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-M1Jft" id="tab-YoB_0ea" checked="checked"><label for="tab-YoB_0ea">Example Request</label><input type="radio" name="group-M1Jft" id="tab-pMw20Bo"><label for="tab-pMw20Bo">Example Response</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">POST</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">events </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">HTTP</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: compaign</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.xdefi.services</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">api</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Content</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: application</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">json</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;address&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0x1234567890abcdef&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;campaign&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;campignName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;partnerName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;routing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;partnerKey&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;abc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;metadata&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;address&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0x1234567890abcdef&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;metadata&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;createdAt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;updatedAt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;publishedAt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h3 id="check-campaign-address" tabindex="-1">Check Campaign Address <a class="header-anchor" href="#check-campaign-address" aria-label="Permalink to &quot;Check Campaign Address&quot;">​</a></h3><p>Check if all partners have reported the address for a given campaign.</p><ul><li>Method: GET</li><li>Endpoint: <code>/campaign/{name}/address/{address}</code></li><li>Response format: JSON</li></ul><p><strong>Parameters</strong></p><table><thead><tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code></td><td>string</td><td>Yes</td><td>The name of the campaign.</td></tr><tr><td><code>address</code></td><td>string</td><td>Yes</td><td>The address to check for campaign participation.</td></tr></tbody></table><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-RgfY6" id="tab-bEGAki9" checked="checked"><label for="tab-bEGAki9">Example Request</label><input type="radio" name="group-RgfY6" id="tab-ivCrBvn"><label for="tab-ivCrBvn">Example Response</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GET</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">campaign</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mycampaign</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">address</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x1234567890abcdef</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> HTTP</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: compaign</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.xdefi.services</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">api</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;result&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;events&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;address&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0x1234567890abcdef&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;partnerName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;string&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><p>This response indicates that all partners have reported the address <code>0x1234567890abcdef</code> for the campaign with the name <code>mycampaign</code>.</p><h3 id="opt-in" tabindex="-1">Opt-in <a class="header-anchor" href="#opt-in" aria-label="Permalink to &quot;Opt-in&quot;">​</a></h3><p>Opt-in a user to the campaigns service.</p><ul><li>Method: POST</li><li>Endpoint: <code>/campaigns/opt-in</code></li><li>Request format: JSON</li><li>Response format: JSON</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-wEMe4" id="tab-Ta8FAxX" checked="checked"><label for="tab-Ta8FAxX">Request Body</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;userId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dfsjnsekjdfbgjkdfgkjdfjkgbdfjkgk&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;addresses&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;chain&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ETH&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;address&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0xE9752bf95F4cF73cf8b45e75D88756EC8D48845c&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><p>The request body should include the following parameters:</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>userId</code></td><td>string</td><td>Yes</td><td>The user ID.</td></tr><tr><td><code>addresses</code></td><td>array</td><td>Yes</td><td>An array of address objects, each containing the chain (string) and address (string).</td></tr></tbody></table><h3 id="opt-out" tabindex="-1">Opt-out <a class="header-anchor" href="#opt-out" aria-label="Permalink to &quot;Opt-out&quot;">​</a></h3><p>Opt-out a user from the campaigns service.</p><ul><li>Method: POST</li><li>Endpoint: <code>/campaigns/opt-out</code></li><li>Request format: JSON</li><li>Response format: JSON</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-qu38w" id="tab-rCr_cpV" checked="checked"><label for="tab-rCr_cpV">Request Body</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;userId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dfsjnsekjdfbgjkdfgkjdfjkgbdfjkgk&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><p>The request body should include the following parameters:</p><table><thead><tr><th>Parameter</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>userId</code></td><td>string</td><td>Yes</td><td>The user ID.</td></tr></tbody></table><p>Please refer to the Swagger documentation for detailed information on these endpoints, including their HTTP methods, request and response schemas, and any additional parameters or headers required.</p>`,38),h=[n];function l(p,d,r,k,o,E){return a(),i("div",null,h)}const u=s(e,[["render",l]]);export{g as __pageData,u as default};
