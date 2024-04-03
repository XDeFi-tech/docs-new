import{r as e,R as s,c as m}from"./chunks/client.r8mSQ1EB.js";import{L as f,P as v}from"./chunks/PlayIcon.2awFFRWP.js";import{h as B,l as x,c as A,m as b,U as q,o as D}from"./chunks/framework._TRSxhFR.js";const u=[{key:"akash",label:"Akash",baseChain:"CosmosChain",exampleAddress:"akash17jl24w9qft3u6sy3gc053r40jq3r6qgrwzmtzw"},{key:"arbitrum",label:"Arbitrum",baseChain:"EVM",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"aurora",label:"Aurora",baseChain:"EVM",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"avalanche",label:"Avalanche",baseChain:"EVM",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"axelar",label:"Axelar",baseChain:"CosmosChain",exampleAddress:"axelar1q2nyv5mwsu5r07x6djpgvm0jl9l9a5v88pf62z"},{key:"binance",label:"Binance",baseChain:"BinanceChain",exampleAddress:"0x9ef9f4360c606c7AB4db26b016007d3ad0aB86a0"},{key:"binanceSmartChain",label:"Binance Smart Chain",baseChain:"EVM",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"bitcoin",label:"Bitcoin",exampleAddress:"bc1qzhdzx9nr5l98xm7aeu3xuycvy59ae2lws69dcf",UTXO:!0},{key:"bitcoincash",label:"Bitcoin Cash",exampleAddress:"qrcuqadqrzp2uztjl9wn5sthepkg22majyxw4gmv6p",UTXO:!0},{key:"cantoEVM",label:"Canto",baseChain:"EVM",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"cosmos",label:"Cosmos Hub",baseChain:"CosmosChain",exampleAddress:"cosmos1066eud7hrjwdda3gqjpnt9jez5vrqa7t2yf3q4"},{key:"crescent",label:"Crescent",baseChain:"CosmosChain",exampleAddress:"cre180xq2msa9etr5t2wyvvds0vw08aq0xrgtt64r2"},{key:"cronosEVM",label:"Cronos",baseChain:"EVM",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"dogecoin",label:"Dogecoin",exampleAddress:"DBgHW1Shjyk91fusm9hm3HcryNBwaFwZbQ",UTXO:!0},{key:"ethereum",label:"Ethereum",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"fantom",label:"Fantom",baseChain:"EVM",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"juno",label:"Juno",baseChain:"CosmosChain",exampleAddress:"juno1juczud9nep06t0khghvm643hf9usw45r4v7lq6"},{key:"kava",label:"Kava",baseChain:"CosmosChain",exampleAddress:"kava14vk3997r4ea4m7eej7ugmr503ru768fxrjfcrh"},{key:"kujira",label:"Kujira",baseChain:"CosmosChain",exampleAddress:"kujira1k4ruuv5qhgzh5pg8w2yyxlh478gqjms2y3kfzk"},{key:"litecoin",label:"Litecoin",exampleAddress:"ltc1q8g4sjzaexe3vslzs3tuz7ndj38pdf20yph2ygs",UTXO:!0},{key:"mayachain",label:"Maya Protocol",exampleAddress:"maya1800h9r7yuhme285agzt7uyntfyva9n42azpcwy"},{key:"near",label:"NEAR",exampleAddress:"relay.tg"},{key:"optimism",label:"Optimism",baseChain:"EVM",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"osmosis",label:"Osmosis",baseChain:"CosmosChain",exampleAddress:"osmo12zwq8pcmmgwsl95rueqsf65avfg5zcj00f5mea"},{key:"polygon",label:"Polygon",baseChain:"EVM",exampleAddress:"0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"},{key:"solana",label:"Solana",exampleAddress:"9bPRsbBTnL4Lm5yPQ9bcSbcri7byVhVS8JewgwGW17wa"},{key:"stargaze",label:"Stargaze",baseChain:"CosmosChain",exampleAddress:"stars1kekv8xqg7aj628l8av4d95cm79y8lw3c5lr28x"},{key:"stride",label:"Stride",baseChain:"CosmosChain",exampleAddress:"stride13m5frgegu9fycmve77myxfmnelyjndpq34kmmq"},{key:"thorchain",label:"ThorChain",exampleAddress:"thor14mh37ua4vkyur0l5ra297a4la6tmf95mt96a55"},{key:"tron",label:"Tron",exampleAddress:"TPtBq2DHJifyyn2suCu5Mj5xudfNtfxD4f"}],N=()=>{const o="https://gql-router.xdefiservices.com/graphql",[y,t]=e.useState(!1),[d,l]=e.useState({}),[k,F]=e.useState(void 0),[p,E]=e.useState(void 0),[r,h]=e.useState("");e.useEffect(()=>{k?u.find(i=>{i.key===k&&(E(i),h(i.exampleAddress||""))}):(E(void 0),h("")),l({})},[k]);const c=async()=>{const i=`query GetBalances($address: String!, $tokenAddresses: [String!]) {
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
    }`;await fetch(o,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:i,variables:{address:r}})}).then(n=>n.json()).then(n=>{l(n)}).catch(n=>{l(n)}).finally(()=>{t(!1)})},g=async()=>{if(t(!0),l({}),!p){alert("Please select a chain first!"),t(!1);return}if(!r){alert("Please enter an address!"),t(!1);return}switch(p.baseChain){case"CosmosChain":c();break;case"EVM":C();break;default:a();break}};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:i=>F(i.target.value)},s.createElement("option",{value:void 0},"Select a chain"),u.map(i=>s.createElement("option",{key:i.key,value:i.key},i.label,i.baseChain&&s.createElement(s.Fragment,null," (",i.baseChain,")")))))),s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"address",name:"Address",value:r,className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:i=>h(i.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:g,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:y},y?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(d,null,2))))},T=()=>{const o="https://gql-router.xdefiservices.com/graphql",[y,t]=e.useState({}),[d,l]=e.useState(!1),[k,F]=e.useState(void 0),[p,E]=e.useState(void 0),[r,h]=e.useState("");e.useEffect(()=>{k?u.find(i=>{i.key===k&&(E(i),h(i.exampleAddress||""))}):(E(void 0),h("")),t({})},[k]);const c=async()=>{const i=`query GetTransactions($address: String!, $first: Int, $after: String) {
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
    }`;await fetch(o,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:i,variables:{address:r,first:1,after:null}})}).then(n=>n.json()).then(n=>{t(n)}).catch(n=>{t(n)}).finally(()=>{l(!1)})},g=async()=>{if(l(!0),t({}),!p){alert("Please select a chain first!"),l(!1);return}if(!r){alert("Please enter an address!"),l(!1);return}switch(p.baseChain){case"CosmosChain":c();break;case"EVM":C();break;default:a();break}};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:i=>F(i.target.value)},s.createElement("option",{value:void 0},"Select a chain"),u.map(i=>s.createElement("option",{key:i.key,value:i.key},i.label,i.baseChain&&s.createElement(s.Fragment,null," (",i.baseChain,")")))))),s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"address",name:"Address",value:r,className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:i=>h(i.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:g,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:d},d?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(y,null,2))))},P=()=>{const o="https://gql-router.xdefiservices.com/graphql",[y,t]=e.useState({}),[d,l]=e.useState(!1),[k,F]=e.useState(void 0),[p,E]=e.useState(void 0);e.useEffect(()=>{k?u.find(h=>{h.key===k&&E(h)}):E(void 0),t({})},[k]);const r=async()=>{if(l(!0),t({}),!p){alert("Please select a chain first!"),l(!1);return}let h="";switch(p.key){case"ethereum":case"cantoEVM":case"cronosEVM":case"gnosis":h=`query GetFee {
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
        }`;break}await fetch(o,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:h})}).then(c=>c.json()).then(c=>{t(c)}).catch(c=>{t(c)}).finally(()=>{l(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:h=>F(h.target.value)},s.createElement("option",{value:void 0},"Select a chain"),u.map(h=>s.createElement("option",{key:h.key,value:h.key},h.label,h.baseChain&&s.createElement(s.Fragment,null," (",h.baseChain,")"))))))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:r,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:d},d?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(y,null,2))))},S=()=>{const o="https://gql-router.xdefiservices.com/graphql",[y,t]=e.useState({}),[d,l]=e.useState(!1),[k,F]=e.useState(void 0),[p,E]=e.useState(void 0),[r,h]=e.useState(""),c=u.filter(a=>a.UTXO);e.useEffect(()=>{k?c.find(a=>{a.key===k&&(E(a),h(a.exampleAddress||""))}):(E(void 0),h("")),t({})},[k]);const C=async()=>{if(l(!0),t({}),!p){alert("Please select a chain first!"),l(!1);return}if(!r){alert("Please enter an address!"),l(!1);return}await fetch(o,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-indexers-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:`query GetUnspentTxOutputsV5($address: String!, $page: Int!) {
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
    }`,variables:{address:r,page:1}})}).then(g=>g.json()).then(g=>{t(g)}).catch(g=>{t(g)}).finally(()=>{l(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:a=>F(a.target.value)},s.createElement("option",{value:void 0},"Select a chain"),c.map(a=>s.createElement("option",{key:a.key,value:a.key},a.label,a.baseChain&&s.createElement(s.Fragment,null," (",a.baseChain,")")))))),s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"address",name:"Address",value:r,className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:a=>h(a.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:C,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:d},d?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(y,null,2))))},w=()=>{const o="https://gql-router.xdefiservices.com/graphql",[y,t]=e.useState({}),[d,l]=e.useState(!1),[k,F]=e.useState(void 0),[p,E]=e.useState(void 0),[r,h]=e.useState(""),c=u.filter(a=>a.UTXO);e.useEffect(()=>{k?c.find(a=>{a.key===k&&E(a)}):E(void 0),h(""),t({})},[k]);const C=async()=>{if(l(!0),t({}),!p){alert("Please select a chain first!"),l(!1);return}if(!r){alert("Please enter a raw transaction hex!"),l(!1);return}const a=`query BroadcastTransaction($rawHex: String!) {
      ${p.key} {
        broadcastTransaction(rawHex: $rawHex)
      }
    }`;await fetch(o,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"xdefi-docs","apollographql-client-version":"v1.0"},body:JSON.stringify({query:a,variables:{rawHex:r}})}).then(g=>g.json()).then(g=>{t(g)}).catch(g=>{t(g)}).finally(()=>{l(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Chain:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"chain-select",name:"chain-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:a=>F(a.target.value)},s.createElement("option",{value:void 0},"Select a chain"),c.map(a=>s.createElement("option",{key:a.key,value:a.key},a.label,a.baseChain&&s.createElement(s.Fragment,null," (",a.baseChain,")")))))),s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Raw Transaction Hex:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"raw-hex",name:"Raw Hex",value:r,className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an raw transaction hex",onChange:a=>h(a.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:C,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:d},d?s.createElement(s.Fragment,null,s.createElement(f,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(v,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(y,null,2))))},_=q("",7),G=q("",2),O=q("",2),j=q("",3),$=q("",3),L=JSON.parse('{"title":"Indexers API","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Indexers API | XDEFI Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"indexers/indexers-api.md","filePath":"indexers/indexers-api.md","lastUpdated":1712114416000}'),I={name:"indexers/indexers-api.md"},M=Object.assign(I,{setup(o){const y=B(),t=B(),d=B(),l=B(),k=B();return x(()=>{m(y.value).render(e.createElement(N,{},null)),m(t.value).render(e.createElement(T,{},null)),m(d.value).render(e.createElement(P,{},null)),m(l.value).render(e.createElement(S,{},null)),m(k.value).render(e.createElement(w,{},null))}),(F,p)=>(D(),A("div",null,[_,b("div",{ref_key:"refGetBalance",ref:y},null,512),G,b("div",{ref_key:"refGetTransaction",ref:t},null,512),O,b("div",{ref_key:"refGetGasFee",ref:d},null,512),j,b("div",{ref_key:"refGetUTXOs",ref:l},null,512),$,b("div",{ref_key:"refBroadcastTransaction",ref:k},null,512)]))}});export{L as __pageData,M as default};
