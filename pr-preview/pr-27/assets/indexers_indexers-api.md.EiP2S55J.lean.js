import{r,R as s,c as y}from"./chunks/client.r8mSQ1EB.js";import{L as m,P as b}from"./chunks/PlayIcon.2awFFRWP.js";import{h as C,l as A,c as v,m as u,U as B,o as q}from"./chunks/framework.hRQuqQRW.js";const f=[{key:"akash",label:"Akash",baseChain:"CosmosChain",chainId:"akashnet-2"},{key:"arbitrum",label:"Arbitrum",baseChain:"EVM"},{key:"aurora",label:"Aurora",baseChain:"EVM"},{key:"avalanche",label:"Avalanche",baseChain:"EVM"},{key:"axelar",label:"Axelar",baseChain:"CosmosChain",chainId:"axelar-dojo-1"},{key:"binance",label:"Binance",baseChain:"binance"},{key:"binanceSmartChain",label:"Binance Smart Chain",baseChain:"EVM"},{key:"bitcoin",label:"Bitcoin"},{key:"bitcoincash",label:"Bitcoin Cash"},{key:"cantoEVM",label:"Canto",baseChain:"EVM"},{key:"cosmos",label:"Cosmos Hub",baseChain:"CosmosChain",chainId:"cosmoshub-4"},{key:"crescent",label:"Crescent",baseChain:"CosmosChain",chainId:"crescent-1"},{key:"cronosEVM",label:"Cronos",baseChain:"EVM"},{key:"dogecoin",label:"Dogecoin"},{key:"ethereum",label:"Ethereum",baseChain:"EVM"},{key:"fantom",label:"Fantom",baseChain:"EVM"},{key:"juno",label:"Juno",baseChain:"CosmosChain",chainId:"juno-1"},{key:"kava",label:"Kava",baseChain:"CosmosChain",chainId:"kava_2222-10"},{key:"kujira",label:"Kujira",baseChain:"CosmosChain",chainId:"kaiyo-1"},{key:"litecoin",label:"Litecoin"},{key:"mars",label:"Mars",baseChain:"CosmosChain",chainId:"mars-1"},{key:"mayachain",label:"Maya Protocol"},{key:"near",label:"NEAR"},{key:"optimism",label:"Optimism",baseChain:"EVM"},{key:"osmosis",label:"Osmosis",baseChain:"CosmosChain",chainId:"osmosis-1"},{key:"polygon",label:"Polygon",baseChain:"EVM"},{key:"sei",label:"SEI",baseChain:"CosmosChain",chainId:"atlantic-2"},{key:"solana",label:"Solana"},{key:"stargaze",label:"Stargaze"},{key:"stride",label:"Stride",baseChain:"CosmosChain",chainId:"stride-1"},{key:"terra",label:"Terra Luna"},{key:"terraClassic",label:"Terra Classic"},{key:"thorchain",label:"ThorChain"},{key:"tron",label:"Tron"}],D=()=>{const[c,p]=r.useState(void 0);return r.useEffect(()=>{c?f.find(i=>{i.key===c&&localStorage.setItem("chain",JSON.stringify(i))}):localStorage.removeItem("chain")},[c]),s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Please select a chain to interact with the XDEFI Wallet:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",onChange:i=>p(i.target.value)},s.createElement("option",{value:void 0},"Select a chain"),f.map(i=>s.createElement("option",{key:i.key,value:i.key},i.label,i.baseChain&&s.createElement(s.Fragment,null," (",i.baseChain,")")))))))},P=()=>{const c="https://gql-router.xdefiservices.com/graphql",[p,i]=r.useState(!1),[t,e]=r.useState({}),h=async a=>{const n=`query GetBalances($address: String!, $tokenAddresses: [String!]) {
      ${a.key} {
        balances(address: $address, tokenAddresses: $tokenAddresses) {
          amount {
            value
          }
        }
      }
    }`;await window.xfi.keplr.enable(a.chainId);const d=await(await window.xfi.keplr.getOfflineSigner(a.chainId)).getAccounts();await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:n,variables:{address:d[0].address,tokenAddresses:null}})}).then(l=>l.json()).then(l=>{e(l)}).catch(l=>{e(l)}).finally(()=>{i(!1)})},F=async a=>{const n=`query GetBalances($address: String!, $first: Int, $after: String) {
      ${a.key} {
        balances(address: $address, first: $first, after: $after) {
          amount {
            value
          }
        }
      }
    }`;await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:n,variables:{address:window.ethereum.accounts[0],first:1,after:null}})}).then(k=>k.json()).then(k=>{e(k)}).catch(k=>{e(k)}).finally(()=>{i(!1)})},g=async a=>{const n=`query GetBalances($address: String!) {
      ${a.key} {
        balances(address: $address) {
          amount {
            value
          }
        }
      }
    }`;await window.xfi[a.key].request({method:"request_accounts",params:[]},(k,d)=>{fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:n,variables:{address:d[0]}})}).then(l=>l.json()).then(l=>{e(l)}).catch(l=>{e(l)}).finally(()=>{i(!1)})})},o=async()=>{if(i(!0),e({}),window.xfi){const a=JSON.parse(localStorage.getItem("chain"));if(!a){alert("Please select a chain first!"),i(!1);return}switch(a.baseChain){case"CosmosChain":h(a);break;case"EVM":F(a);break;default:g(a);break}}else{alert("XDEFI Wallet not detected! Please install the XDEFI Wallet extension."),i(!1);return}};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:o,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:p},p?s.createElement(s.Fragment,null,s.createElement(m,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(b,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(t,null,2))))},S=({chain:c})=>{const p="https://gql-router.xdefiservices.com/graphql",[i,t]=r.useState({}),[e,h]=r.useState(!1),F=async n=>{const k=`query GetTransactions($address: String!, $first: Int, $after: String) {
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
    }`;await window.xfi.keplr.enable(n.chainId);const l=await(await window.xfi.keplr.getOfflineSigner(n.chainId)).getAccounts();await fetch(p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:k,variables:{address:l[0].address,first:1,after:null}})}).then(E=>E.json()).then(E=>{t(E)}).catch(E=>{t(E)}).finally(()=>{h(!1)})},g=async n=>{const k=`query GetTransactions($address: String!, $first: Int, $after: String) {
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
    }`;await fetch(p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:k,variables:{address:window.ethereum.accounts[0],first:1,after:null}})}).then(d=>d.json()).then(d=>{t(d)}).catch(d=>{t(d)}).finally(()=>{h(!1)})},o=async n=>{const k=`query GetTransactions($address: String!, $first: Int!, $after: String) {
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
    }`;await window.xfi[n.key].request({method:"request_accounts",params:[]},(d,l)=>{fetch(p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:k,variables:{address:l[0],first:1,after:null}})}).then(E=>E.json()).then(E=>{t(E)}).catch(E=>{t(E)}).finally(()=>{h(!1)})})},a=async()=>{if(h(!0),t({}),window.xfi){const n=JSON.parse(localStorage.getItem("chain"));if(!n){alert("Please select a chain first!"),h(!1);return}switch(n.baseChain){case"CosmosChain":F(n);break;case"EVM":g(n);break;default:o(n);break}}else{alert("XDEFI Wallet not detected! Please install the XDEFI Wallet extension."),h(!1);return}};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:a,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:e},e?s.createElement(s.Fragment,null,s.createElement(m,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(b,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(i,null,2))))},x=({chain:c})=>{const p="https://gql-router.xdefiservices.com/graphql",[i,t]=r.useState({}),[e,h]=r.useState(!1);r.useState("");const F=async()=>{h(!0),t({});const g=JSON.parse(localStorage.getItem("chain"));if(!g){alert("Please select a chain first!"),h(!1);return}let o="";switch(g.key){case"ethereum":case"cantoEVM":case"cronosEVM":case"gnosis":o=`query GetFee {
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
        }`;break;default:o=`query GetGasFee {
          ${g.key} {
            fee {
              high
              low
              medium
            }
          }
        }`;break}await fetch(p,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:o})}).then(a=>a.json()).then(a=>{t(a)}).catch(a=>{t(a)}).finally(()=>{h(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:F,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:e},e?s.createElement(s.Fragment,null,s.createElement(m,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(b,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(i,null,2))))},I=B("",5),T=B("",2),N=B("",2),w=B("",2),j=JSON.parse('{"title":"Indexers API","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Indexers API | XDEFI Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"indexers/indexers-api.md","filePath":"indexers/indexers-api.md","lastUpdated":1711702784000}'),_={name:"indexers/indexers-api.md"},V=Object.assign(_,{setup(c){const p=C(),i=C(),t=C(),e=C();return A(()=>{y(p.value).render(r.createElement(D,{},null)),y(i.value).render(r.createElement(P,{},null)),y(t.value).render(r.createElement(S,{},null)),y(e.value).render(r.createElement(x,{},null))}),(h,F)=>(q(),v("div",null,[I,u("div",{ref_key:"refIndexerAPIComponent",ref:p},null,512),T,u("div",{ref_key:"refGetBalance",ref:i},null,512),N,u("div",{ref_key:"refGetTransaction",ref:t},null,512),w,u("div",{ref_key:"refGetGasFee",ref:e},null,512)]))}});export{j as __pageData,V as default};
