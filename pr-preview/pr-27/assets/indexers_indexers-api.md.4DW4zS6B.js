import{r as l,R as s,c as m}from"./chunks/client.r8mSQ1EB.js";import{L as f,P as v}from"./chunks/PlayIcon.2awFFRWP.js";import{h as B,l as x,c as q,m as b,U as A,o as D}from"./chunks/framework.hRQuqQRW.js";const o=[{key:"akash",label:"Akash",baseChain:"CosmosChain",exampleAddress:"akash17jl24w9qft3u6sy3gc053r40jq3r6qgrwzmtzw"},{key:"arbitrum",label:"Arbitrum",baseChain:"EVM",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"aurora",label:"Aurora",baseChain:"EVM",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"avalanche",label:"Avalanche",baseChain:"EVM",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"axelar",label:"Axelar",baseChain:"CosmosChain",exampleAddress:"axelar1q2nyv5mwsu5r07x6djpgvm0jl9l9a5v88pf62z"},{key:"binance",label:"Binance",baseChain:"BinanceChain",exampleAddress:"0x9ef9f4360c606c7AB4db26b016007d3ad0aB86a0"},{key:"binanceSmartChain",label:"Binance Smart Chain",baseChain:"EVM",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"bitcoin",label:"Bitcoin",exampleAddress:"bc1qzhdzx9nr5l98xm7aeu3xuycvy59ae2lws69dcf"},{key:"bitcoincash",label:"Bitcoin Cash",exampleAddress:"qrcuqadqrzp2uztjl9wn5sthepkg22majyxw4gmv6p"},{key:"cantoEVM",label:"Canto",baseChain:"EVM",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"cosmos",label:"Cosmos Hub",baseChain:"CosmosChain",exampleAddress:"cosmos1066eud7hrjwdda3gqjpnt9jez5vrqa7t2yf3q4"},{key:"crescent",label:"Crescent",baseChain:"CosmosChain",exampleAddress:"cre180xq2msa9etr5t2wyvvds0vw08aq0xrgtt64r2"},{key:"cronosEVM",label:"Cronos",baseChain:"EVM",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"dogecoin",label:"Dogecoin",exampleAddress:"DBgHW1Shjyk91fusm9hm3HcryNBwaFwZbQ"},{key:"ethereum",label:"Ethereum",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"fantom",label:"Fantom",baseChain:"EVM",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"juno",label:"Juno",baseChain:"CosmosChain",exampleAddress:"juno1juczud9nep06t0khghvm643hf9usw45r4v7lq6"},{key:"kava",label:"Kava",baseChain:"CosmosChain",exampleAddress:"kava14vk3997r4ea4m7eej7ugmr503ru768fxrjfcrh"},{key:"kujira",label:"Kujira",baseChain:"CosmosChain",exampleAddress:"kujira1k4ruuv5qhgzh5pg8w2yyxlh478gqjms2y3kfzk"},{key:"litecoin",label:"Litecoin",exampleAddress:"ltc1q8g4sjzaexe3vslzs3tuz7ndj38pdf20yph2ygs"},{key:"mayachain",label:"Maya Protocol",exampleAddress:"maya1800h9r7yuhme285agzt7uyntfyva9n42azpcwy"},{key:"near",label:"NEAR",exampleAddress:"relay.tg"},{key:"optimism",label:"Optimism",baseChain:"EVM",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"osmosis",label:"Osmosis",baseChain:"CosmosChain",exampleAddress:"osmo12zwq8pcmmgwsl95rueqsf65avfg5zcj00f5mea"},{key:"polygon",label:"Polygon",baseChain:"EVM",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"solana",label:"Solana",exampleAddress:"9bPRsbBTnL4Lm5yPQ9bcSbcri7byVhVS8JewgwGW17wa"},{key:"stargaze",label:"Stargaze",baseChain:"CosmosChain",exampleAddress:"stars1kekv8xqg7aj628l8av4d95cm79y8lw3c5lr28x"},{key:"stride",label:"Stride",baseChain:"CosmosChain",exampleAddress:"stride13m5frgegu9fycmve77myxfmnelyjndpq34kmmq"},{key:"thorchain",label:"ThorChain",exampleAddress:"thor14mh37ua4vkyur0l5ra297a4la6tmf95mt96a55"},{key:"tron",label:"Tron",exampleAddress:"TPtBq2DHJifyyn2suCu5Mj5xudfNtfxD4f"}],P=()=>{const r="https://gql-router.xdefiservices.com/graphql",[E,n]=l.useState(!1),[d,t]=l.useState({}),[p,y]=l.useState(void 0),[h,c]=l.useState(void 0),[k,e]=l.useState("");l.useEffect(()=>{p?o.find(i=>{i.key===p&&(c(i),e(i.exampleAddress||""))}):(c(void 0),e("")),t({})},[p]);const g=async()=>{const i=`query GetBalances($address: String!, $tokenAddresses: [String!]) {
      ${h.key} {
        balances(address: $address, tokenAddresses: $tokenAddresses) {
          address
          amount {
            value
          }
        }
      }
    }`;await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:i,variables:{address:k,tokenAddresses:null}})}).then(a=>a.json()).then(a=>{t(a)}).catch(a=>{t(a)}).finally(()=>{n(!1)})},F=async()=>{const i=`query GetBalances($address: String!, $first: Int, $after: String) {
      ${h.key} {
        balances(address: $address, first: $first, after: $after) {
          address
          amount {
            value
          }
        }
      }
    }`;await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:i,variables:{address:k,first:1,after:null}})}).then(a=>a.json()).then(a=>{t(a)}).catch(a=>{t(a)}).finally(()=>{n(!1)})},C=async()=>{const i=`query GetBalances($address: String!) {
      ${h.key} {
        balances(address: $address) {
          address
          amount {
            value
          }
        }
      }
    }`;await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:i,variables:{address:k}})}).then(a=>a.json()).then(a=>{t(a)}).catch(a=>{t(a)}).finally(()=>{n(!1)})},u=async()=>{if(n(!0),t({}),!h){alert("Please select a chain first!"),n(!1);return}if(!k){alert("Please enter an address!"),n(!1);return}switch(h.baseChain){case"CosmosChain":g();break;case"EVM":F();break;default:C();break}};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:i=>y(i.target.value)},s.createElement("option",{value:void 0},"Select a chain"),o.map(i=>s.createElement("option",{key:i.key,value:i.key},i.label,i.baseChain&&s.createElement(s.Fragment,null," (",i.baseChain,")")))))),s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"address",name:"Address",value:k,className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:i=>e(i.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:u,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:E},E?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(d,null,2))))},N=()=>{const r="https://gql-router.xdefiservices.com/graphql",[E,n]=l.useState({}),[d,t]=l.useState(!1),[p,y]=l.useState(void 0),[h,c]=l.useState(void 0),[k,e]=l.useState("");l.useEffect(()=>{p?o.find(i=>{i.key===p&&(c(i),e(i.exampleAddress||""))}):(c(void 0),e("")),n({})},[p]);const g=async()=>{const i=`query GetTransactions($address: String!, $first: Int, $after: String) {
      ${h.key} {
        transactions(address: $address, first: $first, after: $after) {
          edges {
            node {
              blockHeight
              hash
              signers
              status
              timestamp
              transfers {
                amount {
                  value
                }
                fromAddress
                toAddress
              }
            }
          }
          pageInfo {
            hasPreviousPage
            hasNextPage
          }
        }
      }
    }`;await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:i,variables:{address:k,first:1,after:null}})}).then(a=>a.json()).then(a=>{n(a)}).catch(a=>{n(a)}).finally(()=>{t(!1)})},F=async()=>{const i=`query GetTransactions($address: String!, $first: Int, $after: String) {
      ${h.key} {
        transactions(address: $address, first: $first, after: $after) {
          edges {
            node {
              blockNumber
              hash
              status
              timestamp
              transfers {
                amount {
                  value
                }
                fromAddress
                toAddress
              }
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
      }
    }`;await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:i,variables:{address:k,first:1,after:null}})}).then(a=>a.json()).then(a=>{n(a)}).catch(a=>{n(a)}).finally(()=>{t(!1)})},C=async()=>{const i=`query GetTransactions($address: String!, $first: Int!, $after: String) {
      ${h.key} {
        transactionsV3(address: $address, first: $first, after: $after) {
          edges {
            node {
              blockNumber
              hash
              status
              timestamp
              inputs {
                amount {
                  value
                }
                address
              }
              outputs {
                amount {
                  value
                }
                address
              }
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
      }
    }`;await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:i,variables:{address:k,first:1,after:null}})}).then(a=>a.json()).then(a=>{n(a)}).catch(a=>{n(a)}).finally(()=>{t(!1)})},u=async()=>{if(t(!0),n({}),!h){alert("Please select a chain first!"),t(!1);return}if(!k){alert("Please enter an address!"),t(!1);return}switch(h.baseChain){case"CosmosChain":g();break;case"EVM":F();break;default:C();break}};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:i=>y(i.target.value)},s.createElement("option",{value:void 0},"Select a chain"),o.map(i=>s.createElement("option",{key:i.key,value:i.key},i.label,i.baseChain&&s.createElement(s.Fragment,null," (",i.baseChain,")")))))),s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"address",name:"Address",value:k,className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:i=>e(i.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:u,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:d},d?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(E,null,2))))},S=()=>{const r="https://gql-router.xdefiservices.com/graphql",[E,n]=l.useState({}),[d,t]=l.useState(!1),[p,y]=l.useState(void 0),[h,c]=l.useState(void 0);l.useEffect(()=>{p?o.find(e=>{e.key===p&&c(e)}):c(void 0),n({})},[p]);const k=async()=>{if(t(!0),n({}),!h){alert("Please select a chain first!"),t(!1);return}let e="";switch(h.key){case"ethereum":case"cantoEVM":case"cronosEVM":case"gnosis":e=`query GetFee {
          ${h.key} {
            fee {
              defaultGasPrice
              high {
                maxFeePerGas
                baseFeePerGas
                priorityFeePerGas
              }
              low {
                baseFeePerGas
                maxFeePerGas
                priorityFeePerGas
              }
              medium {
                baseFeePerGas
                maxFeePerGas
                priorityFeePerGas
              }
            }
          }
        }`;break;default:e=`query GetGasFee {
          ${h.key} {
            fee {
              high
              low
              medium
            }
          }
        }`;break}await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})}).then(g=>g.json()).then(g=>{n(g)}).catch(g=>{n(g)}).finally(()=>{t(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:e=>y(e.target.value)},s.createElement("option",{value:void 0},"Select a chain"),o.map(e=>s.createElement("option",{key:e.key,value:e.key},e.label,e.baseChain&&s.createElement(s.Fragment,null," (",e.baseChain,")"))))))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:k,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:d},d?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(E,null,2))))},T=A(`<h1 id="indexers-api" tabindex="-1">Indexers API <a class="header-anchor" href="#indexers-api" aria-label="Permalink to &quot;Indexers API&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>XDEFI provides Indexers API for developers to fetch balances, transactions, fees across many blockchains supported by XDEFI Wallet.</p><p>The base URL for all API endpoints is: <code>https://gql-router.xdefiservices.com/graphql</code>.</p><details><summary>Here are the chains supported by the Indexers API:</summary><table><thead><tr><th>Name</th><th>Key</th><th>Base chain</th></tr></thead><tbody><tr><td>Akash</td><td><code>akash</code></td><td>CosmosChain</td></tr><tr><td>Arbitrum</td><td><code>arbitrum</code></td><td>EVM</td></tr><tr><td>Aurora</td><td><code>aurora</code></td><td>EVM</td></tr><tr><td>Avalanche</td><td><code>avalanche</code></td><td>EVM</td></tr><tr><td>Axelar</td><td><code>axelar</code></td><td>CosmosChain</td></tr><tr><td>Binance</td><td><code>binance</code></td><td>BinanceChain</td></tr><tr><td>Binance Smart Chain</td><td><code>binanceSmartChain</code></td><td>EVM</td></tr><tr><td>Bitcoin</td><td><code>bitcoin</code></td><td>BitcoinChain</td></tr><tr><td>Bitcoin Cash</td><td><code>bitcoincash</code></td><td>BitcoinChain</td></tr><tr><td>Canto EVM</td><td><code>cantoEVM</code></td><td>EVM</td></tr><tr><td>Cosmos Hub</td><td><code>cosmos</code></td><td>CosmosChain</td></tr><tr><td>Crescent</td><td><code>crescent</code></td><td>CosmosChain</td></tr><tr><td>Cronos EVM</td><td><code>cronosEVM</code></td><td>EVM</td></tr><tr><td>Dogecoin</td><td><code>dogecoin</code></td><td>BitcoinChain</td></tr><tr><td>Ethereum</td><td><code>ethereum</code></td><td>EVM</td></tr><tr><td>Fantom</td><td><code>fantom</code></td><td>EVM</td></tr><tr><td>Juno</td><td><code>juno</code></td><td>CosmosChain</td></tr><tr><td>Kava</td><td><code>kava</code></td><td>CosmosChain</td></tr><tr><td>Kujira</td><td><code>kujira</code></td><td>CosmosChain</td></tr><tr><td>Litecoin</td><td><code>litecoin</code></td><td>BitcoinChain</td></tr><tr><td>Maya Protocol</td><td><code>mayachain</code></td><td>MayaChain</td></tr><tr><td>Near</td><td><code>near</code></td><td>NearChain</td></tr><tr><td>Optimism</td><td><code>optimism</code></td><td>EVM</td></tr><tr><td>Osmosis</td><td><code>osmosis</code></td><td>CosmosChain</td></tr><tr><td>Polygon</td><td><code>polygon</code></td><td>EVM</td></tr><tr><td>Solana</td><td><code>solana</code></td><td>SolanaChain</td></tr><tr><td>Stargaze</td><td><code>stargaze</code></td><td>StargazeChain</td></tr><tr><td>Stride</td><td><code>stride</code></td><td>CosmosChain</td></tr><tr><td>ThorChain</td><td><code>thorchain</code></td><td>ThorChain</td></tr><tr><td>Tron</td><td><code>tron</code></td><td>TronChain</td></tr></tbody></table></details><h2 id="get-balance" tabindex="-1">Get Balance <a class="header-anchor" href="#get-balance" aria-label="Permalink to &quot;Get Balance&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-IBBXt" id="tab-dBkEqcw" checked="checked"><label for="tab-dBkEqcw">EVM Chain</label><input type="radio" name="group-IBBXt" id="tab-vA8XQyU"><label for="tab-vA8XQyU">CosmosChain</label><input type="radio" name="group-IBBXt" id="tab-AGvIXrX"><label for="tab-AGvIXrX">Other Chain</label></div><div class="blocks"><div class="language-javascript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefiservices.com/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`query GetBalances($address: String!, $first: Int, $after: String) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">chain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    balances(address: $address, first: $first, after: $after) {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      amount {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        value</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GRAPHQL_ENDPOINT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  headers: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Content-Type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  body: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    query,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    variables: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      address: address </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Input address</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      first: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      after: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Do something with the result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefiservices.com/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`query GetBalances($address: String!, $tokenAddresses: [String!]) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">chain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    balances(address: $address, tokenAddresses: $tokenAddresses) {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      amount {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        value</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GRAPHQL_ENDPOINT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  headers: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Content-Type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  body: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    query,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    variables: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      address: address </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Input address</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      tokenAddresses: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Do something with the result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefiservices.com/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`query GetBalances($address: String!) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">chain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    balances(address: $address) {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      amount {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        value</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GRAPHQL_ENDPOINT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  headers: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Content-Type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  body: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    query,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    variables: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      address: address, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Input address</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Do something with the result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div></div></div>`,7),G=A(`<h2 id="get-transaction" tabindex="-1">Get Transaction <a class="header-anchor" href="#get-transaction" aria-label="Permalink to &quot;Get Transaction&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-OVXKD" id="tab-hX3XFJV" checked="checked"><label for="tab-hX3XFJV">EVM Chain</label><input type="radio" name="group-OVXKD" id="tab-RUUawuZ"><label for="tab-RUUawuZ">CosmosChain</label><input type="radio" name="group-OVXKD" id="tab-gYWnUol"><label for="tab-gYWnUol">Other Chain</label></div><div class="blocks"><div class="language-javascript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefiservices.com/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`query GetTransactions($address: String!, $first: Int, $after: String) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">chain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    transactions(address: $address, first: $first, after: $after) {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      edges {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        node {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          blockNumber</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          hash</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          status</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          timestamp</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          transfers {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            amount {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              value</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            fromAddress</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            toAddress</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      pageInfo {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        hasNextPage</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        hasPreviousPage</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GRAPHQL_ENDPOINT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  headers: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Content-Type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  body: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    query,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    variables: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      address: address </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Input address</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      first: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      after: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Do something with the result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefiservices.com/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`query GetTransactions($address: String!, $first: Int, $after: String) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">chain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    transactions(address: $address, first: $first, after: $after) {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      edges {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        node {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          blockHeight</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          hash</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          signers</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          status</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          timestamp</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          transfers {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            amount {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              value</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            fromAddress</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            toAddress</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      pageInfo {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        hasPreviousPage</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        hasNextPage</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GRAPHQL_ENDPOINT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  headers: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Content-Type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  body: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    query,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    variables: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      address: address </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Input address</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      first: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      after: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Do something with the result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefiservices.com/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`query GetTransactions($address: String!, $first: Int!, $after: String) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">chain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    transactionsV3(address: $address, first: $first, after: $after) {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      edges {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        node {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          blockNumber</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          hash</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          status</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          timestamp</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          inputs {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            amount {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              value</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            address</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          outputs {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            amount {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              value</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            address</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      pageInfo {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        hasNextPage</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        hasPreviousPage</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GRAPHQL_ENDPOINT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  headers: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Content-Type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  body: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    query,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    variables: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      address: address </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Input address</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      first: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      after: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Do something with the result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div></div></div>`,2),j=A(`<h2 id="get-gas-fee" tabindex="-1">Get Gas Fee <a class="header-anchor" href="#get-gas-fee" aria-label="Permalink to &quot;Get Gas Fee&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-EV70D" id="tab-_K-4XFz" checked="checked"><label for="tab-_K-4XFz">Default Gas Fee</label><input type="radio" name="group-EV70D" id="tab-7QjPBFa"><label for="tab-7QjPBFa">EIP1559 Gas Fee (Ethereum, Canto, Cronos)</label></div><div class="blocks"><div class="language-javascript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefiservices.com/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`query GetGasFee {</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">chain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    fee {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      high</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      low</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      medium</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GRAPHQL_ENDPOINT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  headers: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Content-Type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  body: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    query,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Do something with the result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefiservices.com/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`query GetFee {</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">chain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    fee {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      defaultGasPrice</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      high {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        maxFeePerGas</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        baseFeePerGas</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        priorityFeePerGas</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      low {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        baseFeePerGas</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        maxFeePerGas</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        priorityFeePerGas</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      medium {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        baseFeePerGas</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        maxFeePerGas</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        priorityFeePerGas</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GRAPHQL_ENDPOINT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  headers: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Content-Type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  body: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    query,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Do something with the result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div></div></div>`,2),O=JSON.parse('{"title":"Indexers API","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Indexers API | XDEFI Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"indexers/indexers-api.md","filePath":"indexers/indexers-api.md","lastUpdated":1711712583000}'),w={name:"indexers/indexers-api.md"},V=Object.assign(w,{setup(r){const E=B(),n=B(),d=B();return x(()=>{m(E.value).render(l.createElement(P,{},null)),m(n.value).render(l.createElement(N,{},null)),m(d.value).render(l.createElement(S,{},null))}),(t,p)=>(D(),q("div",null,[T,b("div",{ref_key:"refGetBalance",ref:E},null,512),G,b("div",{ref_key:"refGetTransaction",ref:n},null,512),j,b("div",{ref_key:"refGetGasFee",ref:d},null,512)]))}});export{O as __pageData,V as default};
