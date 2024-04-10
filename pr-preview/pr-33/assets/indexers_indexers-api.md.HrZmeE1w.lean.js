import{r as e,R as s,c as m}from"./chunks/client.r8mSQ1EB.js";import{L as f,P as v}from"./chunks/PlayIcon.2awFFRWP.js";import{c as u}from"./chunks/common.HiEjcPH8.js";import{h as B,l as x,c as A,m as b,U as q,o as D}from"./chunks/framework.wbZudmzd.js";const T=()=>{const o="https://gql-router.xdefi.services/graphql",[y,t]=e.useState(!1),[d,l]=e.useState({}),[k,F]=e.useState(void 0),[p,E]=e.useState(void 0),[r,h]=e.useState("");e.useEffect(()=>{k?u.find(i=>{i.key===k&&(E(i),h(i.exampleAddress||""))}):(E(void 0),h("")),l({})},[k]);const g=async()=>{const i=`query GetBalances($address: String!, $tokenAddresses: [String!]) {
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
    }`;await fetch(o,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:i,variables:{address:r}})}).then(n=>n.json()).then(n=>{l(n)}).catch(n=>{l(n)}).finally(()=>{t(!1)})},c=async()=>{if(t(!0),l({}),!p){alert("Please select a chain first!"),t(!1);return}if(!r){alert("Please enter an address!"),t(!1);return}switch(p.baseChain){case"CosmosChain":g();break;case"EVM":C();break;default:a();break}};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:i=>F(i.target.value)},s.createElement("option",{value:void 0},"Select a chain"),u.map(i=>s.createElement("option",{key:i.key,value:i.key},i.label,i.baseChain&&s.createElement(s.Fragment,null," (",i.baseChain,")")))))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("span",null,"Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"address",name:"Address",value:r,className:"max-sm:w-300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:i=>h(i.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:c,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:y},y?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(d,null,2))))},N=()=>{const o="https://gql-router.xdefi.services/graphql",[y,t]=e.useState({}),[d,l]=e.useState(!1),[k,F]=e.useState(void 0),[p,E]=e.useState(void 0),[r,h]=e.useState("");e.useEffect(()=>{k?u.find(i=>{i.key===k&&(E(i),h(i.exampleAddress||""))}):(E(void 0),h("")),t({})},[k]);const g=async()=>{const i=`query GetTransactions($address: String!, $first: Int, $after: String) {
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
    }`;await fetch(o,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"xdefi-docs","apollographql-client-version":"v1.0"},body:JSON.stringify({query:a,variables:{rawHex:r}})}).then(c=>c.json()).then(c=>{t(c)}).catch(c=>{t(c)}).finally(()=>{l(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:a=>F(a.target.value)},s.createElement("option",{value:void 0},"Select a chain"),g.map(a=>s.createElement("option",{key:a.key,value:a.key},a.label,a.baseChain&&s.createElement(s.Fragment,null," (",a.baseChain,")")))))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start"},s.createElement("span",null,"Raw Transaction Hex:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"raw-hex",name:"Raw Hex",value:r,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an raw transaction hex",onChange:a=>h(a.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:C,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:d},d?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(y,null,2))))},G=q("",7),w=q("",2),O=q("",2),$=q("",3),I=q("",3),Q=JSON.parse('{"title":"Indexers API","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Indexers API | XDEFI Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"indexers/indexers-api.md","filePath":"indexers/indexers-api.md","lastUpdated":1712738469000}'),j={name:"indexers/indexers-api.md"},J=Object.assign(j,{setup(o){const y=B(),t=B(),d=B(),l=B(),k=B();return x(()=>{m(y.value).render(e.createElement(T,{},null)),m(t.value).render(e.createElement(N,{},null)),m(d.value).render(e.createElement(P,{},null)),m(l.value).render(e.createElement(S,{},null)),m(k.value).render(e.createElement(_,{},null))}),(F,p)=>(D(),A("div",null,[G,b("div",{ref_key:"refGetBalance",ref:y},null,512),w,b("div",{ref_key:"refGetTransaction",ref:t},null,512),O,b("div",{ref_key:"refGetGasFee",ref:d},null,512),$,b("div",{ref_key:"refGetUTXOs",ref:l},null,512),I,b("div",{ref_key:"refBroadcastTransaction",ref:k},null,512)]))}});export{Q as __pageData,J as default};
