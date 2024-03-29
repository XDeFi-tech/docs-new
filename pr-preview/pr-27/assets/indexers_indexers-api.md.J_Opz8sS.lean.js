import{r as k,R as s,c as F}from"./chunks/client.r8mSQ1EB.js";import{L as B,P as m}from"./chunks/PlayIcon.2awFFRWP.js";import{h as y,l as f,c as v,m as C,U as u,o as A}from"./chunks/framework.hRQuqQRW.js";const b=[{key:"akash",label:"Akash",baseChain:"CosmosChain"},{key:"arbitrum",label:"Arbitrum",baseChain:"EVM"},{key:"aurora",label:"Aurora",baseChain:"EVM"},{key:"avalanche",label:"Avalanche",baseChain:"EVM"},{key:"axelar",label:"Axelar",baseChain:"CosmosChain"},{key:"binance",label:"Binance",baseChain:"binance"},{key:"binanceSmartChain",label:"Binance Smart Chain",baseChain:"EVM"},{key:"bitcoin",label:"Bitcoin"},{key:"bitcoincash",label:"Bitcoin Cash"},{key:"cantoEVM",label:"Canto",baseChain:"EVM"},{key:"cosmos",label:"Cosmos Hub",baseChain:"CosmosChain"},{key:"crescent",label:"Crescent",baseChain:"CosmosChain"},{key:"cronosEVM",label:"Cronos",baseChain:"EVM"},{key:"dogecoin",label:"Dogecoin"},{key:"ethereum",label:"Ethereum"},{key:"fantom",label:"Fantom",baseChain:"EVM"},{key:"juno",label:"Juno",baseChain:"CosmosChain"},{key:"kava",label:"Kava",baseChain:"CosmosChain"},{key:"kujira",label:"Kujira",baseChain:"CosmosChain"},{key:"litecoin",label:"Litecoin"},{key:"mars",label:"Mars",baseChain:"CosmosChain"},{key:"mayachain",label:"Maya Protocol"},{key:"near",label:"NEAR"},{key:"optimism",label:"Optimism",baseChain:"EVM"},{key:"osmosis",label:"Osmosis",baseChain:"CosmosChain"},{key:"polygon",label:"Polygon",baseChain:"EVM"},{key:"sei",label:"SEI",baseChain:"CosmosChain"},{key:"solana",label:"Solana"},{key:"stargaze",label:"Stargaze"},{key:"stride",label:"Stride",baseChain:"CosmosChain"},{key:"terra",label:"Terra Luna"},{key:"terraClassic",label:"Terra Classic"},{key:"thorchain",label:"ThorChain"},{key:"tron",label:"Tron"}],q=()=>{const[E,d]=k.useState(void 0),[l,e]=k.useState("");return k.useEffect(()=>{E?b.find(i=>{i.key===E&&localStorage.setItem("chain",JSON.stringify(i))}):localStorage.removeItem("chain"),e("")},[E]),k.useEffect(()=>{localStorage.setItem("address",l)},[l]),s.createElement("div",{className:"flex items-center gap-4"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:i=>d(i.target.value)},s.createElement("option",{value:void 0},"Select a chain"),b.map(i=>s.createElement("option",{key:i.key,value:i.key},i.label,i.baseChain&&s.createElement(s.Fragment,null," (",i.baseChain,")")))))),E&&s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"address",name:"Address",value:l,className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:i=>e(i.target.value)}))))},P=()=>{const E="https://gql-router.xdefiservices.com/graphql",[d,l]=k.useState(!1),[e,i]=k.useState({}),r=async(t,n)=>{const p=`query GetBalances($address: String!, $tokenAddresses: [String!]) {
      ${t.key} {
        balances(address: $address, tokenAddresses: $tokenAddresses) {
          address
          amount {
            value
          }
        }
      }
    }`;await fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:p,variables:{address:n,tokenAddresses:null}})}).then(a=>a.json()).then(a=>{i(a)}).catch(a=>{i(a)}).finally(()=>{l(!1)})},o=async(t,n)=>{const p=`query GetBalances($address: String!, $first: Int, $after: String) {
      ${t.key} {
        balances(address: $address, first: $first, after: $after) {
          address
          amount {
            value
          }
        }
      }
    }`;await fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:p,variables:{address:n,first:1,after:null}})}).then(a=>a.json()).then(a=>{i(a)}).catch(a=>{i(a)}).finally(()=>{l(!1)})},g=async(t,n)=>{const p=`query GetBalances($address: String!) {
      ${t.key} {
        balances(address: $address) {
          address
          amount {
            value
          }
        }
      }
    }`;await fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:p,variables:{address:n}})}).then(a=>a.json()).then(a=>{i(a)}).catch(a=>{i(a)}).finally(()=>{l(!1)})},c=async()=>{l(!0),i({});const t=JSON.parse(localStorage.getItem("chain")),n=localStorage.getItem("address");if(!t){alert("Please select a chain first!"),l(!1);return}if(!n){alert("Please enter an address!"),l(!1);return}switch(t.baseChain){case"CosmosChain":r(t,n);break;case"EVM":o(t,n);break;default:g(t,n);break}};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:c,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:d},d?s.createElement(s.Fragment,null,s.createElement(B,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(m,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(e,null,2))))},D=({chain:E})=>{const d="https://gql-router.xdefiservices.com/graphql",[l,e]=k.useState({}),[i,r]=k.useState(!1),o=async(n,p)=>{const a=`query GetTransactions($address: String!, $first: Int, $after: String) {
      ${n.key} {
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
    }`;await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:a,variables:{address:p,first:1,after:null}})}).then(h=>h.json()).then(h=>{e(h)}).catch(h=>{e(h)}).finally(()=>{r(!1)})},g=async(n,p)=>{const a=`query GetTransactions($address: String!, $first: Int, $after: String) {
      ${n.key} {
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
    }`;await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:a,variables:{address:p,first:1,after:null}})}).then(h=>h.json()).then(h=>{e(h)}).catch(h=>{e(h)}).finally(()=>{r(!1)})},c=async(n,p)=>{const a=`query GetTransactions($address: String!, $first: Int!, $after: String) {
      ${n.key} {
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
    }`;await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:a,variables:{address:p,first:1,after:null}})}).then(h=>h.json()).then(h=>{e(h)}).catch(h=>{e(h)}).finally(()=>{r(!1)})},t=async()=>{r(!0),e({});const n=JSON.parse(localStorage.getItem("chain")),p=localStorage.getItem("address");if(!n){alert("Please select a chain first!"),r(!1);return}if(!p){alert("Please enter an address!"),r(!1);return}switch(n.baseChain){case"CosmosChain":o(n,p);break;case"EVM":g(n,p);break;default:c(n,p);break}};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:t,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:i},i?s.createElement(s.Fragment,null,s.createElement(B,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(m,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(l,null,2))))},S=({chain:E})=>{const d="https://gql-router.xdefiservices.com/graphql",[l,e]=k.useState({}),[i,r]=k.useState(!1);k.useState("");const o=async()=>{r(!0),e({});const g=JSON.parse(localStorage.getItem("chain"));if(!g){alert("Please select a chain first!"),r(!1);return}let c="";switch(g.key){case"ethereum":case"cantoEVM":case"cronosEVM":case"gnosis":c=`query GetFee {
          ${g.key} {
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
        }`;break;default:c=`query GetGasFee {
          ${g.key} {
            fee {
              high
              low
              medium
            }
          }
        }`;break}await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:c})}).then(t=>t.json()).then(t=>{e(t)}).catch(t=>{e(t)}).finally(()=>{r(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:o,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:i},i?s.createElement(s.Fragment,null,s.createElement(B,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(m,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(l,null,2))))},N=u("",5),T=u("",2),x=u("",2),_=u("",2),j=JSON.parse('{"title":"Indexers API","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Indexers API | XDEFI Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"indexers/indexers-api.md","filePath":"indexers/indexers-api.md","lastUpdated":1711707378000}'),G={name:"indexers/indexers-api.md"},V=Object.assign(G,{setup(E){const d=y(),l=y(),e=y(),i=y();return f(()=>{F(d.value).render(k.createElement(q,{},null)),F(l.value).render(k.createElement(P,{},null)),F(e.value).render(k.createElement(D,{},null)),F(i.value).render(k.createElement(S,{},null))}),(r,o)=>(A(),v("div",null,[N,C("div",{ref_key:"refIndexerAPIComponent",ref:d},null,512),T,C("div",{ref_key:"refGetBalance",ref:l},null,512),x,C("div",{ref_key:"refGetTransaction",ref:e},null,512),_,C("div",{ref_key:"refGetGasFee",ref:i},null,512)]))}});export{j as __pageData,V as default};
