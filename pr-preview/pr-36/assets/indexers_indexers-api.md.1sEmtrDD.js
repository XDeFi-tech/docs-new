import{r as e,R as s,c as m}from"./chunks/client.r8mSQ1EB.js";import{L as f,P as v}from"./chunks/PlayIcon.2awFFRWP.js";import{c as u}from"./chunks/common.HiEjcPH8.js";import{h as B,l as x,c as A,m as b,U as q,o as N}from"./chunks/framework.bM0IY85J.js";const D=()=>{const o="https://gql-router.xdefi.services/graphql",[y,t]=e.useState(!1),[d,l]=e.useState({}),[k,F]=e.useState(void 0),[p,E]=e.useState(void 0),[r,h]=e.useState("");e.useEffect(()=>{k?u.find(i=>{i.key===k&&(E(i),h(i.exampleAddress||""))}):(E(void 0),h("")),l({})},[k]);const g=async()=>{const i=`query GetBalances($address: String!, $tokenAddresses: [String!]) {
      ${p.key} {
        balances(address: $address, tokenAddresses: $tokenAddresses) {
          address
          amount {
            value
          }
        }
      }
    }`;await fetch(o,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:i,variables:{address:r,tokenAddresses:null}})}).then(n=>n.json()).then(n=>{l(n)}).catch(n=>{l(n)}).finally(()=>{t(!1)})},C=async()=>{const i=`query GetBalances($address: String!, $first: Int, $after: String) {
      ${p.key} {
        balances(address: $address, first: $first, after: $after) {
          address
          amount {
            value
          }
        }
      }
    }`;await fetch(o,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:i,variables:{address:r,first:1,after:null}})}).then(n=>n.json()).then(n=>{l(n)}).catch(n=>{l(n)}).finally(()=>{t(!1)})},a=async()=>{const i=`query GetBalances($address: String!) {
      ${p.key} {
        balances(address: $address) {
          address
          amount {
            value
          }
        }
      }
    }`;await fetch(o,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:i,variables:{address:r}})}).then(n=>n.json()).then(n=>{l(n)}).catch(n=>{l(n)}).finally(()=>{t(!1)})},c=async()=>{if(t(!0),l({}),!p){alert("Please select a chain first!"),t(!1);return}if(!r){alert("Please enter an address!"),t(!1);return}switch(p.baseChain){case"CosmosChain":g();break;case"EVM":C();break;default:a();break}};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:i=>F(i.target.value)},s.createElement("option",{value:void 0},"Select a chain"),u.map(i=>s.createElement("option",{key:i.key,value:i.key},i.label,i.baseChain&&s.createElement(s.Fragment,null," (",i.baseChain,")")))))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("span",null,"Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"address",name:"Address",value:r,className:"max-sm:w-300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:i=>h(i.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:c,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:y},y?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(d,null,2))))},T=()=>{const o="https://gql-router.xdefi.services/graphql",[y,t]=e.useState({}),[d,l]=e.useState(!1),[k,F]=e.useState(void 0),[p,E]=e.useState(void 0),[r,h]=e.useState("");e.useEffect(()=>{k?u.find(i=>{i.key===k&&(E(i),h(i.exampleAddress||""))}):(E(void 0),h("")),t({})},[k]);const g=async()=>{const i=`query GetTransactions($address: String!, $first: Int, $after: String) {
      ${p.key} {
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
    }`;await fetch(o,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:i,variables:{address:r,first:1,after:null}})}).then(n=>n.json()).then(n=>{t(n)}).catch(n=>{t(n)}).finally(()=>{l(!1)})},C=async()=>{const i=`query GetTransactions($address: String!, $first: Int, $after: String) {
      ${p.key} {
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
    }`;await fetch(o,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:i,variables:{address:r,first:1,after:null}})}).then(n=>n.json()).then(n=>{t(n)}).catch(n=>{t(n)}).finally(()=>{l(!1)})},a=async()=>{const i=`query GetTransactions($address: String!, $first: Int!, $after: String) {
      ${p.key} {
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
    }`;await fetch(o,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:i,variables:{address:r,first:1,after:null}})}).then(n=>n.json()).then(n=>{t(n)}).catch(n=>{t(n)}).finally(()=>{l(!1)})},c=async()=>{if(l(!0),t({}),!p){alert("Please select a chain first!"),l(!1);return}if(!r){alert("Please enter an address!"),l(!1);return}switch(p.baseChain){case"CosmosChain":g();break;case"EVM":C();break;default:a();break}};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:i=>F(i.target.value)},s.createElement("option",{value:void 0},"Select a chain"),u.map(i=>s.createElement("option",{key:i.key,value:i.key},i.label,i.baseChain&&s.createElement(s.Fragment,null," (",i.baseChain,")")))))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("span",null,"Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"address",name:"Address",value:r,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:i=>h(i.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:c,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:d},d?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(y,null,2))))},P=()=>{const o="https://gql-router.xdefi.services/graphql",[y,t]=e.useState({}),[d,l]=e.useState(!1),[k,F]=e.useState(void 0),[p,E]=e.useState(void 0);e.useEffect(()=>{k?u.find(h=>{h.key===k&&E(h)}):E(void 0),t({})},[k]);const r=async()=>{if(l(!0),t({}),!p){alert("Please select a chain first!"),l(!1);return}let h="";switch(p.key){case"ethereum":case"cantoEVM":case"cronosEVM":case"gnosis":h=`query GetFee {
          ${p.key} {
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
        }`;break;default:h=`query GetGasFee {
          ${p.key} {
            fee {
              high
              low
              medium
            }
          }
        }`;break}await fetch(o,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:h})}).then(g=>g.json()).then(g=>{t(g)}).catch(g=>{t(g)}).finally(()=>{l(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:h=>F(h.target.value)},s.createElement("option",{value:void 0},"Select a chain"),u.map(h=>s.createElement("option",{key:h.key,value:h.key},h.label,h.baseChain&&s.createElement(s.Fragment,null," (",h.baseChain,")"))))))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:r,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:d},d?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(y,null,2))))},S=()=>{const o="https://gql-router.xdefi.services/graphql",[y,t]=e.useState({}),[d,l]=e.useState(!1),[k,F]=e.useState(void 0),[p,E]=e.useState(void 0),[r,h]=e.useState(""),g=u.filter(a=>a.UTXO);e.useEffect(()=>{k?g.find(a=>{a.key===k&&(E(a),h(a.exampleAddress||""))}):(E(void 0),h("")),t({})},[k]);const C=async()=>{if(l(!0),t({}),!p){alert("Please select a chain first!"),l(!1);return}if(!r){alert("Please enter an address!"),l(!1);return}await fetch(o,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:`query GetUnspentTxOutputsV5($address: String!, $page: Int!) {
      bitcoin {
        unspentTxOutputsV5(address: $address, page: $page) {
          oIndex
          oTxHash
          value {
            value
          }
          scriptHex
          oTxHex
          isCoinbase
          address
        }
      }
    }`,variables:{address:r,page:1}})}).then(c=>c.json()).then(c=>{t(c)}).catch(c=>{t(c)}).finally(()=>{l(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:a=>F(a.target.value)},s.createElement("option",{value:void 0},"Select a chain"),g.map(a=>s.createElement("option",{key:a.key,value:a.key},a.label,a.baseChain&&s.createElement(s.Fragment,null," (",a.baseChain,")")))))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("span",null,"Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"address",name:"Address",value:r,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:a=>h(a.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:C,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:d},d?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(y,null,2))))},_=()=>{const o="https://gql-router.xdefi.services/graphql",[y,t]=e.useState({}),[d,l]=e.useState(!1),[k,F]=e.useState(void 0),[p,E]=e.useState(void 0),[r,h]=e.useState(""),g=u.filter(a=>a.UTXO);e.useEffect(()=>{k?g.find(a=>{a.key===k&&E(a)}):E(void 0),h(""),t({})},[k]);const C=async()=>{if(l(!0),t({}),!p){alert("Please select a chain first!"),l(!1);return}if(!r){alert("Please enter a raw transaction hex!"),l(!1);return}const a=`query BroadcastTransaction($rawHex: String!) {
      ${p.key} {
        broadcastTransaction(rawHex: $rawHex)
      }
    }`;await fetch(o,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"xdefi-docs","apollographql-client-version":"v1.0"},body:JSON.stringify({query:a,variables:{rawHex:r}})}).then(c=>c.json()).then(c=>{t(c)}).catch(c=>{t(c)}).finally(()=>{l(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:a=>F(a.target.value)},s.createElement("option",{value:void 0},"Select a chain"),g.map(a=>s.createElement("option",{key:a.key,value:a.key},a.label,a.baseChain&&s.createElement(s.Fragment,null," (",a.baseChain,")")))))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start"},s.createElement("span",null,"Raw Transaction Hex:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"raw-hex",name:"Raw Hex",value:r,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an raw transaction hex",onChange:a=>h(a.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:C,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:d},d?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(y,null,2))))},G=q(`<h1 id="indexers-api" tabindex="-1">Indexers API <a class="header-anchor" href="#indexers-api" aria-label="Permalink to &quot;Indexers API&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>XDEFI provides Indexers API for developers to fetch balances, transactions, fees across many blockchains supported by XDEFI Wallet.</p><p>The base URL for all API endpoints is: <a href="https://gql-router.xdefi.services/graphql" target="_blank" rel="noreferrer">https://gql-router.xdefi.services/graphql</a>.</p><details><summary>Here are the chains supported by the Indexers API:</summary><table><thead><tr><th>Chain</th><th>Key</th><th>Base chain</th></tr></thead><tbody><tr><td>Akash</td><td><code>akash</code></td><td>CosmosChain</td></tr><tr><td>Arbitrum</td><td><code>arbitrum</code></td><td>EVM</td></tr><tr><td>Aurora</td><td><code>aurora</code></td><td>EVM</td></tr><tr><td>Avalanche</td><td><code>avalanche</code></td><td>EVM</td></tr><tr><td>Axelar</td><td><code>axelar</code></td><td>CosmosChain</td></tr><tr><td>Binance</td><td><code>binance</code></td><td>BinanceChain</td></tr><tr><td>Binance Smart Chain</td><td><code>binanceSmartChain</code></td><td>EVM</td></tr><tr><td>Bitcoin</td><td><code>bitcoin</code></td><td>BitcoinChain</td></tr><tr><td>Bitcoin Cash</td><td><code>bitcoincash</code></td><td>BitcoinChain</td></tr><tr><td>Canto</td><td><code>cantoEVM</code></td><td>EVM</td></tr><tr><td>Cosmos Hub</td><td><code>cosmos</code></td><td>CosmosChain</td></tr><tr><td>Crescent</td><td><code>crescent</code></td><td>CosmosChain</td></tr><tr><td>Cronos</td><td><code>cronosEVM</code></td><td>EVM</td></tr><tr><td>Dogecoin</td><td><code>dogecoin</code></td><td>BitcoinChain</td></tr><tr><td>Ethereum</td><td><code>ethereum</code></td><td>EVM</td></tr><tr><td>Fantom</td><td><code>fantom</code></td><td>EVM</td></tr><tr><td>Juno</td><td><code>juno</code></td><td>CosmosChain</td></tr><tr><td>Kava</td><td><code>kava</code></td><td>CosmosChain</td></tr><tr><td>Kujira</td><td><code>kujira</code></td><td>CosmosChain</td></tr><tr><td>Litecoin</td><td><code>litecoin</code></td><td>BitcoinChain</td></tr><tr><td>Maya Protocol</td><td><code>mayachain</code></td><td>MayaChain</td></tr><tr><td>Near</td><td><code>near</code></td><td>NearChain</td></tr><tr><td>Optimism</td><td><code>optimism</code></td><td>EVM</td></tr><tr><td>Osmosis</td><td><code>osmosis</code></td><td>CosmosChain</td></tr><tr><td>Polygon</td><td><code>polygon</code></td><td>EVM</td></tr><tr><td>Solana</td><td><code>solana</code></td><td>SolanaChain</td></tr><tr><td>Stargaze</td><td><code>stargaze</code></td><td>StargazeChain</td></tr><tr><td>Stride</td><td><code>stride</code></td><td>CosmosChain</td></tr><tr><td>ThorChain</td><td><code>thorchain</code></td><td>ThorChain</td></tr><tr><td>Tron</td><td><code>tron</code></td><td>TronChain</td></tr></tbody></table></details><h2 id="get-balance" tabindex="-1">Get Balance <a class="header-anchor" href="#get-balance" aria-label="Permalink to &quot;Get Balance&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-5G2JP" id="tab-fnKllAV" checked="checked"><label for="tab-fnKllAV">EVM Chain</label><input type="radio" name="group-5G2JP" id="tab-gxGEdAC"><label for="tab-gxGEdAC">CosmosChain</label><input type="radio" name="group-5G2JP" id="tab-XXijpQq"><label for="tab-XXijpQq">Other Chain</label></div><div class="blocks"><div class="language-javascript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefi.services/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
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
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;apollographql-client-name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docs-indexers-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;apollographql-client-version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;v1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefi.services/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefi.services/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
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
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;apollographql-client-name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docs-indexers-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;apollographql-client-version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;v1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div></div></div>`,7),w=q(`<h2 id="get-activity-history" tabindex="-1">Get Activity History <a class="header-anchor" href="#get-activity-history" aria-label="Permalink to &quot;Get Activity History&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-7NlgC" id="tab-Quu430h" checked="checked"><label for="tab-Quu430h">EVM Chain</label><input type="radio" name="group-7NlgC" id="tab-KW9CfcM"><label for="tab-KW9CfcM">CosmosChain</label><input type="radio" name="group-7NlgC" id="tab-dzFy2q3"><label for="tab-dzFy2q3">Other Chain</label></div><div class="blocks"><div class="language-javascript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefi.services/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
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
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;apollographql-client-name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docs-indexers-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;apollographql-client-version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;v1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefi.services/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
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
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;apollographql-client-name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docs-indexers-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;apollographql-client-version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;v1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefi.services/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div></div></div>`,2),O=q(`<h2 id="get-gas-fee" tabindex="-1">Get Gas Fee <a class="header-anchor" href="#get-gas-fee" aria-label="Permalink to &quot;Get Gas Fee&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-j7ISi" id="tab-4jNz3vR" checked="checked"><label for="tab-4jNz3vR">Default Gas Fee</label><input type="radio" name="group-j7ISi" id="tab-uZCULtv"><label for="tab-uZCULtv">EIP1559 Gas Fee (Ethereum, Canto, Cronos)</label></div><div class="blocks"><div class="language-javascript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefi.services/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
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
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;apollographql-client-name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docs-indexers-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;apollographql-client-version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;v1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  body: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    query,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Do something with the result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefi.services/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
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
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;apollographql-client-name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docs-indexers-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;apollographql-client-version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;v1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  body: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    query,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Do something with the result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div></div></div>`,2),$=q(`<h2 id="utxos-bitcoin-bitcoin-cash-dogecoin-litecoin" tabindex="-1">UTXOs (Bitcoin, Bitcoin Cash, Dogecoin, Litecoin) <a class="header-anchor" href="#utxos-bitcoin-bitcoin-cash-dogecoin-litecoin" aria-label="Permalink to &quot;UTXOs (Bitcoin, Bitcoin Cash, Dogecoin, Litecoin)&quot;">​</a></h2><h3 id="get-unspent-transaction-outputs-utxos" tabindex="-1">Get Unspent Transaction Outputs (UTXOs) <a class="header-anchor" href="#get-unspent-transaction-outputs-utxos" aria-label="Permalink to &quot;Get Unspent Transaction Outputs (UTXOs)&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-eTaAY" id="tab-uLZKdv2" checked="checked"><label for="tab-uLZKdv2">Get UTXOs</label></div><div class="blocks"><div class="language-javascript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefi.services/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`query GetUnspentTxOutputsV5($address: String!, $page: Int!) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">chain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    unspentTxOutputsV5(address: $address, page: $page) {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      oIndex</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      oTxHash</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      value {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        value</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      scriptHex</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      oTxHex</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      isCoinbase</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      address</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GRAPHQL_ENDPOINT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  headers: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Content-Type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;apollographql-client-name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docs-indexers-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;apollographql-client-version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;v1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  body: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    query,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    variables: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      address: address, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Input address</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      page: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Do something with the result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div></div></div>`,3),I=q(`<h3 id="broadcast-transaction" tabindex="-1">Broadcast Transaction <a class="header-anchor" href="#broadcast-transaction" aria-label="Permalink to &quot;Broadcast Transaction&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-9g0H0" id="tab-SzYhZV2" checked="checked"><label for="tab-SzYhZV2">Broadcast Transaction</label></div><div class="blocks"><div class="language-javascript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefi.services/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`query BroadcastTransaction($rawHex: String!) {</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">chain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    broadcastTransaction(rawHex: $rawHex)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GRAPHQL_ENDPOINT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  headers: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Content-Type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;apollographql-client-name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docs-indexers-api&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;apollographql-client-version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;v1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  body: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    query,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    variables: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      rawHex: rawHex, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Input raw transaction hex</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Do something with the result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span></code></pre></div></div></div><p>View more about raw transaction hex <a href="https://www.blockchain.com/explorer/assets/btc/decode-transaction" target="_blank" rel="noreferrer">here</a>.</p>`,3),Q=JSON.parse('{"title":"Indexers API","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Indexers API | XDEFI Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"indexers/indexers-api.md","filePath":"indexers/indexers-api.md","lastUpdated":1713253021000}'),j={name:"indexers/indexers-api.md"},J=Object.assign(j,{setup(o){const y=B(),t=B(),d=B(),l=B(),k=B();return x(()=>{m(y.value).render(e.createElement(D,{},null)),m(t.value).render(e.createElement(T,{},null)),m(d.value).render(e.createElement(P,{},null)),m(l.value).render(e.createElement(S,{},null)),m(k.value).render(e.createElement(_,{},null))}),(F,p)=>(N(),A("div",null,[G,b("div",{ref_key:"refGetBalance",ref:y},null,512),w,b("div",{ref_key:"refGetTransaction",ref:t},null,512),O,b("div",{ref_key:"refGetGasFee",ref:d},null,512),$,b("div",{ref_key:"refGetUTXOs",ref:l},null,512),I,b("div",{ref_key:"refBroadcastTransaction",ref:k},null,512)]))}});export{Q as __pageData,J as default};
