import{r as n,R as s,c as C}from"./chunks/client.r8mSQ1EB.js";import{L as f,P as v}from"./chunks/PlayIcon.2awFFRWP.js";import{c as u}from"./chunks/common.HiEjcPH8.js";import{h as b,l as q,c as A,m as B,U as x,o as N}from"./chunks/framework.liv-asgr.js";const T=()=>{const g="https://gql-router.xdefi.services/graphql",[y,t]=n.useState(!1),[d,l]=n.useState({}),[r,F]=n.useState(void 0),[p,E]=n.useState(void 0),[k,h]=n.useState("");n.useEffect(()=>{r?u.find(a=>{a.key===r&&(E(a),h(a.exampleAddress||""))}):(E(void 0),h("")),l({})},[r]);const o=async()=>{const a=`query GetBalances($address: String!, $tokenAddresses: [String!]) {
      ${p.key} {
        balances(address: $address, tokenAddresses: $tokenAddresses) {
          address
          amount {
            value
          }
        }
      }
    }`;await fetch(g,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:a,variables:{address:k,tokenAddresses:null}})}).then(e=>e.json()).then(e=>{l(e)}).catch(e=>{l(e)}).finally(()=>{t(!1)})},m=async()=>{const a=`query GetBalances($address: String!, $first: Int, $after: String) {
      ${p.key} {
        balances(address: $address, first: $first, after: $after) {
          address
          amount {
            value
          }
        }
      }
    }`;await fetch(g,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:a,variables:{address:k,first:1,after:null}})}).then(e=>e.json()).then(e=>{l(e)}).catch(e=>{l(e)}).finally(()=>{t(!1)})},i=async()=>{const a=`query GetBalances($address: String!) {
      ${p.key} {
        balances(address: $address) {
          address
          amount {
            value
          }
        }
      }
    }`;await fetch(g,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:a,variables:{address:k}})}).then(e=>e.json()).then(e=>{l(e)}).catch(e=>{l(e)}).finally(()=>{t(!1)})},c=async()=>{if(t(!0),l({}),!p){alert("Please select a chain first!"),t(!1);return}if(!k){alert("Please enter an address!"),t(!1);return}switch(p.baseChain){case"CosmosChain":o();break;case"EVM":m();break;default:i();break}};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:a=>F(a.target.value)},s.createElement("option",{value:void 0},"Select a chain"),u.map(a=>s.createElement("option",{key:a.key,value:a.key},a.label,a.baseChain&&s.createElement(s.Fragment,null," (",a.baseChain,")")))))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("span",null,"Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"address",name:"Address",value:k,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:a=>h(a.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:c,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:y},y?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(d,null,2))))},P=()=>{const g="https://gql-router.xdefi.services/graphql",[y,t]=n.useState({}),[d,l]=n.useState(!1),[r,F]=n.useState(void 0),[p,E]=n.useState(void 0),[k,h]=n.useState("");n.useEffect(()=>{r?u.find(a=>{a.key===r&&(E(a),h(a.exampleAddress||""))}):(E(void 0),h("")),t({})},[r]);const o=async()=>{const a=`query GetTransactions($address: String!, $first: Int, $after: String) {
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
    }`;await fetch(g,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:a,variables:{address:k,first:1,after:null}})}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{t(e)}).finally(()=>{l(!1)})},m=async()=>{const a=`query GetTransactions($address: String!, $first: Int, $after: String) {
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
    }`;await fetch(g,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:a,variables:{address:k,first:1,after:null}})}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{t(e)}).finally(()=>{l(!1)})},i=async()=>{const a=`query GetTransactions($address: String!, $first: Int!, $after: String) {
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
    }`;await fetch(g,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:a,variables:{address:k,first:1,after:null}})}).then(e=>e.json()).then(e=>{t(e)}).catch(e=>{t(e)}).finally(()=>{l(!1)})},c=async()=>{if(l(!0),t({}),!p){alert("Please select a chain first!"),l(!1);return}if(!k){alert("Please enter an address!"),l(!1);return}switch(p.baseChain){case"CosmosChain":o();break;case"EVM":m();break;default:i();break}};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:a=>F(a.target.value)},s.createElement("option",{value:void 0},"Select a chain"),u.map(a=>s.createElement("option",{key:a.key,value:a.key},a.label,a.baseChain&&s.createElement(s.Fragment,null," (",a.baseChain,")")))))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("span",null,"Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"address",name:"Address",value:k,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:a=>h(a.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:c,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:d},d?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(y,null,2))))},S=()=>{const g="https://gql-router.xdefi.services/graphql",[y,t]=n.useState({}),[d,l]=n.useState(!1),[r,F]=n.useState(void 0),[p,E]=n.useState(void 0);n.useEffect(()=>{r?u.find(h=>{h.key===r&&E(h)}):E(void 0),t({})},[r]);const k=async()=>{if(l(!0),t({}),!p){alert("Please select a chain first!"),l(!1);return}let h="";switch(p.key){case"ethereum":case"cantoEVM":case"cronosEVM":case"gnosis":h=`query GetFee {
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
        }`;break}await fetch(g,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:h})}).then(o=>o.json()).then(o=>{t(o)}).catch(o=>{t(o)}).finally(()=>{l(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:h=>F(h.target.value)},s.createElement("option",{value:void 0},"Select a chain"),u.map(h=>s.createElement("option",{key:h.key,value:h.key},h.label,h.baseChain&&s.createElement(s.Fragment,null," (",h.baseChain,")"))))))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:k,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:d},d?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(y,null,2))))},D=()=>{const g="https://gql-router.xdefi.services/graphql",[y,t]=n.useState({}),[d,l]=n.useState(!1),[r,F]=n.useState(void 0),[p,E]=n.useState(void 0),[k,h]=n.useState(""),o=u.filter(i=>i.UTXO);n.useEffect(()=>{r?o.find(i=>{i.key===r&&(E(i),h(i.exampleAddress||""))}):(E(void 0),h("")),t({})},[r]);const m=async()=>{if(l(!0),t({}),!p){alert("Please select a chain first!"),l(!1);return}if(!k){alert("Please enter an address!"),l(!1);return}await fetch(g,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:`query GetUnspentTxOutputsV5($address: String!, $page: Int!) {
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
    }`,variables:{address:k,page:1}})}).then(c=>c.json()).then(c=>{t(c)}).catch(c=>{t(c)}).finally(()=>{l(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:i=>F(i.target.value)},s.createElement("option",{value:void 0},"Select a chain"),o.map(i=>s.createElement("option",{key:i.key,value:i.key},i.label,i.baseChain&&s.createElement(s.Fragment,null," (",i.baseChain,")")))))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("span",null,"Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"address",name:"Address",value:k,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:i=>h(i.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:m,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:d},d?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(y,null,2))))},w=()=>{const g="https://gql-router.xdefi.services/graphql",[y,t]=n.useState({}),[d,l]=n.useState(!1),[r,F]=n.useState(void 0),[p,E]=n.useState(void 0),[k,h]=n.useState(""),o=u.filter(i=>i.UTXO);n.useEffect(()=>{r?o.find(i=>{i.key===r&&E(i)}):E(void 0),h(""),t({})},[r]);const m=async()=>{if(l(!0),t({}),!p){alert("Please select a chain first!"),l(!1);return}if(!k){alert("Please enter a raw transaction hex!"),l(!1);return}const i=`query BroadcastTransaction($rawHex: String!) {
      ${p.key} {
        broadcastTransaction(rawHex: $rawHex)
      }
    }`;await fetch(g,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"xdefi-docs","apollographql-client-version":"v1.0"},body:JSON.stringify({query:i,variables:{rawHex:k}})}).then(c=>c.json()).then(c=>{t(c)}).catch(c=>{t(c)}).finally(()=>{l(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:i=>F(i.target.value)},s.createElement("option",{value:void 0},"Select a chain"),o.map(i=>s.createElement("option",{key:i.key,value:i.key},i.label,i.baseChain&&s.createElement(s.Fragment,null," (",i.baseChain,")")))))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start"},s.createElement("span",null,"Raw Transaction Hex:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"raw-hex",name:"Raw Hex",value:k,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an raw transaction hex",onChange:i=>h(i.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:m,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:d},d?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(y,null,2))))},_=x("",7),G=x("",2),O=x("",3),$=x("",3),L=JSON.parse('{"title":"Indexers API","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Indexers API | XDEFI Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"indexers/indexers-api.md","filePath":"indexers/indexers-api.md","lastUpdated":1716531337000}'),I={name:"indexers/indexers-api.md"},Q=Object.assign(I,{setup(g){const y=b(),t=b(),d=b(),l=b(),r=b();return q(()=>{C(y.value).render(n.createElement(T,{},null)),C(t.value).render(n.createElement(P,{},null)),C(d.value).render(n.createElement(S,{},null)),C(l.value).render(n.createElement(D,{},null)),C(r.value).render(n.createElement(w,{},null))}),(F,p)=>(N(),A("div",null,[_,B("div",{ref_key:"refGetBalance",ref:y},null,512),G,B("div",{ref_key:"refGetGasFee",ref:d},null,512),O,B("div",{ref_key:"refGetUTXOs",ref:l},null,512),$,B("div",{ref_key:"refBroadcastTransaction",ref:r},null,512)]))}});export{L as __pageData,Q as default};
