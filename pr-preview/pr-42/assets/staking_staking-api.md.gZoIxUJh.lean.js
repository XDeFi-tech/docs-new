import{r as e,R as s,c as A}from"./chunks/client.r8mSQ1EB.js";import{L as N,P as T}from"./chunks/PlayIcon.2awFFRWP.js";import{a as S,o as L}from"./chunks/common.HiEjcPH8.js";import{h as q,l as H,c as G,m as B,U as D,o as $}from"./chunks/framework.rFIZIuGe.js";const J=()=>{const F="https://gql-router.dev.xdefi.services/graphql",[k,i]=e.useState(!1),[g,t]=e.useState({}),[l,m]=e.useState(void 0),[o,d]=e.useState(void 0),[r,h]=e.useState("");e.useEffect(()=>{l?S.find(a=>{a.key===l&&d(a)}):d(void 0),h(""),t({})},[l]);const c=async()=>{if(i(!0),t({}),!o){alert("Please select a asset!"),i(!1);return}if(!r){alert("Please enter an address!"),i(!1);return}await fetch(F,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-staking-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:`query GetStrideStakedAssetBalance($strideAddress: String!, $asset: SupportedAssets!) {
      staking {
        getStrideStakedAssetBalance(asset: $asset, strideAddress: $strideAddress) {
          amount
          decimal
          denom
        }
      }
    }`,variables:{asset:o.key,strideAddress:r}})}).then(n=>n.json()).then(n=>{t(n)}).catch(n=>{t(n)}).finally(()=>{i(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Asset:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"asset-select",name:"asset-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:a=>m(a.target.value)},s.createElement("option",{value:void 0},"Select a asset"),S.map(a=>s.createElement("option",{key:a.key,value:a.key},a.label))))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("span",null,"Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"address",name:"Address",value:r,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:a=>h(a.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:c,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:k},k?s.createElement(s.Fragment,null,s.createElement(N,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(T,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(g,null,2))))},Q=()=>{const F="https://gql-router.dev.xdefi.services/graphql",[k,i]=e.useState(!1),[g,t]=e.useState({}),[l,m]=e.useState(void 0),[o,d]=e.useState(void 0),[r,h]=e.useState(""),[c,a]=e.useState(""),[n,x]=e.useState(""),[f,C]=e.useState(""),[y,v]=e.useState(""),[u,b]=e.useState(""),I=()=>{h(""),a(""),x(""),C(""),v(""),b("")};e.useEffect(()=>{l?S.find(E=>{E.key===l&&d(E)}):d(void 0),I(),t({})},[l]);const _=async()=>{if(i(!0),t({}),!o){alert("Please select a asset!"),i(!1);return}if(!r||!c||!n||!f||!y||!u){alert("Please enter all the required fields!"),i(!1);return}await fetch(F,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-staking-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:`query CreateStrideLiquidStakingTx($input: StrideStakingInput!) {
      staking {
      createStrideLiquidStakingTx(input: $input)
      }
    }`,variables:{input:{recieverStrideAddr:r,amount:c,senderAddr:n,senderPubkeyHex:f,asset:o.key,timeoutHeight:y,gasLimit:u}}})}).then(w=>w.json()).then(w=>{t(w)}).catch(w=>{t(w)}).finally(()=>{i(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4"},s.createElement("div",{className:"flex items-center gap-10 max-sm:flex-col max-sm:items-start max-sm:gap-4"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Asset:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"asset-select",name:"asset-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:E=>m(E.target.value)},s.createElement("option",{value:void 0},"Select a asset"),S.map(E=>s.createElement("option",{key:E.key,value:E.key},E.label))))),s.createElement("div",{className:"flex flex-col gap-2 max-sm:gap-4"},s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("div",{className:"sm:w-[180px]"},"Reciever Stride Addres:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"recieverStrideAddr",name:"recieverStrideAddr",value:r,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:E=>h(E.target.value)}))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("div",{className:"sm:w-[180px]"},"Amount:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"number",id:"amount",name:"amount",value:c,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter amount",onChange:E=>a(E.target.value)}))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("div",{className:"sm:w-[180px]"},"Sender Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"senderAddr",name:"senderAddr",value:n,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:E=>x(E.target.value)}))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("div",{className:"sm:w-[180px]"},"Sender Pubkey Hex:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"senderPubkeyHex",name:"senderPubkeyHex",value:f,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter a pubkey hex",onChange:E=>C(E.target.value)}))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("div",{className:"sm:w-[180px]"},"Timeout Height:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"number",id:"timeoutHeight",name:"timeoutHeight",value:y,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter timeout height",onChange:E=>v(E.target.value)}))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("div",{className:"sm:w-[180px]"},"Gas limit:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"number",id:"gasLimit",name:"gasLimit",value:u,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter gas limit",onChange:E=>b(E.target.value)})))))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:_,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:k},k?s.createElement(s.Fragment,null,s.createElement(N,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(T,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(g,null,2))))},V=()=>{const F="https://gql-router.dev.xdefi.services/graphql",[k,i]=e.useState(!1),[g,t]=e.useState({}),[l,m]=e.useState(void 0),[o,d]=e.useState(void 0),[r,h]=e.useState("");e.useEffect(()=>{l?S.find(a=>{a.key===l&&(d(a),h(a.exampleAddress||""))}):(d(void 0),h("")),t({})},[l]);const c=async()=>{if(i(!0),t({}),!o){alert("Please select a asset!"),i(!1);return}if(!r){alert("Please enter an address!"),i(!1);return}await fetch(F,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-staking-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:`query getCosmosDelegations($asset: SupportedAssets!, $address: String!) {
      staking {
        getCosmosDelegations(address: $address, asset: $asset) {
          amount
          decimal
          denom
          validatorAddress
          validatorName
        }
      }
    }`,variables:{asset:o.key,address:r}})}).then(n=>n.json()).then(n=>{t(n)}).catch(n=>{t(n)}).finally(()=>{i(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Asset:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"asset-select",name:"asset-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:a=>m(a.target.value)},s.createElement("option",{value:void 0},"Select a asset"),S.map(a=>s.createElement("option",{key:a.key,value:a.key},a.label))))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("span",null,"Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"address",name:"Address",value:r,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:a=>h(a.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:c,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:k},k?s.createElement(s.Fragment,null,s.createElement(N,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(T,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(g,null,2))))},R=()=>{const F="https://gql-router.dev.xdefi.services/graphql",k=["Meria","StakeLab","Custom"],[i,g]=e.useState(!1),[t,l]=e.useState({}),[m,o]=e.useState(void 0),[d,r]=e.useState(void 0),[h,c]=e.useState(void 0),[a,n]=e.useState(""),[x,f]=e.useState(""),[C,y]=e.useState(""),[v,u]=e.useState(void 0),[b,I]=e.useState(null),[_,E]=e.useState(""),w=()=>{c(void 0),n(""),f(""),y(""),u(void 0),I(null),E("")};e.useEffect(()=>{m?S.find(p=>{p.key===m&&r(p)}):r(void 0),w(),l({})},[m]),e.useEffect(()=>{E("")},[b]);const j=async()=>{if(g(!0),l({}),!d){alert("Please select a asset!"),g(!1);return}if(!h||!a||!x||!C||!v||!b||b==="Custom"&&!_){alert("Please enter all the required fields!"),g(!1);return}const p=`query CreateCosmosDelegateTx($delegationInput: CosmosDelegationInput!, $validatorAddress: String, $provider: Providers) {
      staking {
        createCosmosDelegateTx(
          delegationInput: $delegationInput
          provider: $provider
          validatorAddress: $validatorAddress
        )
      }
    }`;let O={delegationInput:{asset:d.key,amount:h,delegatorAddress:a,delegatorPubkeyHex:x,memo:C,gasLimit:v},provider:b};b==="Custom"&&(O={delegationInput:{asset:d.key,amount:h,delegatorAddress:a,delegatorPubkeyHex:x,memo:C,gasLimit:v},provider:null,validatorAddress:_}),await fetch(F,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-staking-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:p,variables:O})}).then(P=>P.json()).then(P=>{l(P)}).catch(P=>{l(P)}).finally(()=>{g(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4"},s.createElement("div",{className:"flex items-center gap-10 max-sm:flex-col max-sm:items-start max-sm:gap-4"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Asset:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"asset-select",name:"asset-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:p=>o(p.target.value)},s.createElement("option",{value:void 0},"Select a asset"),S.map(p=>s.createElement("option",{key:p.key,value:p.key},p.label))))),s.createElement("div",{className:"flex flex-col gap-2 max-sm:gap-4"},s.createElement("div",{className:"flex items-center gap-4 "},s.createElement("div",{className:"sm:sm:w-[180px]"},"Validator:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"validator-select",name:"validator-select",className:"sm:w-[205px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:p=>I(p.target.value)},s.createElement("option",{value:void 0},"Select a validator"),k.map(p=>s.createElement("option",{key:p,value:p},p))))),b==="Custom"&&s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("div",{className:"sm:w-[180px]"},"Validator Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"validatorAddress",name:"validatorAddress",value:_,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter Delegator Address",onChange:p=>E(p.target.value)}))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("div",{className:"sm:w-[180px]"},"Amount:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"number",id:"amount",name:"amount",value:h,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter amount",onChange:p=>c(p.target.value)}))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("div",{className:"sm:w-[180px]"},"Delegator Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"delegatorAddress",name:"delegatorAddress",value:a,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter delegator address",onChange:p=>n(p.target.value)}))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("div",{className:"sm:w-[180px]"},"Delegator Pubkey Hex:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"delegatorPubkeyHex",name:"delegatorPubkeyHex",value:x,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter a delegator pubkey hex",onChange:p=>f(p.target.value)}))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("div",{className:"sm:w-[180px]"},"Sender Pubkey Hex:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"memo",name:"memo",value:C,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter a sender pubkey hex",onChange:p=>y(p.target.value)}))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("div",{className:"sm:w-[180px]"},"Gas limit:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"number",id:"gasLimit",name:"gasLimit",value:v,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter gas limit",onChange:p=>u(p.target.value)})))))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:j,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:i},i?s.createElement(s.Fragment,null,s.createElement(N,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(T,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(t,null,2))))},M=()=>{const F="https://gql-router.dev.xdefi.services/graphql",[k,i]=e.useState(!1),[g,t]=e.useState({}),[l,m]=e.useState(void 0),[o,d]=e.useState(void 0),[r,h]=e.useState("");e.useEffect(()=>{l?L.find(a=>{a.key===l&&d(a)}):d(void 0),h(""),t({})},[l]);const c=async()=>{if(i(!0),t({}),!o){alert("Please select a asset!"),i(!1);return}if(!r){alert("Please enter an address!"),i(!1);return}await fetch(F,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-staking-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:`query GetLidoStakedBalance($asset: SupportedAssets!, $address: String!) {
      staking {
        getLidoStakedBalance(address: $address, asset: $asset) {
          amount
          asset
          chain
          decimal
        }
      }
    }`,variables:{asset:o.key,address:r}})}).then(n=>n.json()).then(n=>{t(n)}).catch(n=>{t(n)}).finally(()=>{i(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Asset:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"asset-select",name:"asset-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:a=>m(a.target.value)},s.createElement("option",{value:void 0},"Select a asset"),s.createElement("option",{value:"ETH"},"ETH")))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("span",null,"Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"address",name:"Address",value:r,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:a=>h(a.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:c,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:k},k?s.createElement(s.Fragment,null,s.createElement(N,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(T,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(g,null,2))))},Y=()=>{const F="https://gql-router.dev.xdefi.services/graphql",[k,i]=e.useState(!1),[g,t]=e.useState({}),[l,m]=e.useState(void 0),[o,d]=e.useState(void 0),[r,h]=e.useState(""),[c,a]=e.useState(void 0),[n,x]=e.useState(void 0),f=()=>{h(""),a(void 0),x(void 0)};e.useEffect(()=>{l?L.find(y=>{y.key===l&&d(y)}):d(void 0),f(),t({})},[l]);const C=async()=>{if(i(!0),t({}),!o){alert("Please select a asset!"),i(!1);return}if(!r||!c||!n){alert("Please enter all the required fields!"),i(!1);return}await fetch(F,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-staking-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:`query CreateLidoStakeTx($input: LidoStakingInput!) {
      staking {
        createLidoStakeTx(input: $input) {
          chainId
          data
          fromAddress
          nonce
          toAddress
          value
        }
      }
    }`,variables:{input:{asset:o.key,address:r,stakeValue:Number(c),nonce:Number(n)}}})}).then(v=>v.json()).then(v=>{t(v)}).catch(v=>{t(v)}).finally(()=>{i(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4"},s.createElement("div",{className:"flex items-center gap-10 max-sm:flex-col max-sm:items-start max-sm:gap-4"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Asset:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"asset-select",name:"asset-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:y=>m(y.target.value)},s.createElement("option",{value:void 0},"Select a asset"),s.createElement("option",{value:"ETH"},"ETH"),s.createElement("option",{value:"MATIC_ERC20"},"MATIC_ERC20")))),s.createElement("div",{className:"flex flex-col gap-2 max-sm:gap-4"},s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("div",{className:"sm:w-[180px]"},"Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"address",name:"address",value:r,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:y=>h(y.target.value)}))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("div",{className:"sm:w-[180px]"},"Stake Value:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"number",id:"stakeValue",name:"stakeValue",value:c,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter stake value",onChange:y=>a(y.target.value)}))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("div",{className:"sm:w-[180px]"},"Nonce:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"number",id:"nonce",name:"nonce",value:n,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter nonce",onChange:y=>x(y.target.value)})))))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:C,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:k},k?s.createElement(s.Fragment,null,s.createElement(N,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(T,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(g,null,2))))},U=()=>{const F="https://gql-router.dev.${process.env.VITE_BASE_SERVICE}/graphql",[k,i]=e.useState(!1),[g,t]=e.useState({}),[l,m]=e.useState(void 0),[o,d]=e.useState(void 0),[r,h]=e.useState("");e.useEffect(()=>{l?L.find(a=>{a.key===l&&d(a)}):d(void 0),h(""),t({})},[l]);const c=async()=>{if(i(!0),t({}),!o){alert("Please select a asset!"),i(!1);return}if(!r){alert("Please enter an address!"),i(!1);return}await fetch(F,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-staking-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:`query LidoCheckErc20Allowance($ownerAddress: String!, $asset: SupportedAssets!) {
      staking {
        lidoCheckErc20Allowance(input: {ownerAddress: $ownerAddress, asset: $asset})
      }
    }`,variables:{asset:o.key,ownerAddress:r}})}).then(n=>n.json()).then(n=>{t(n)}).catch(n=>{t(n)}).finally(()=>{i(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Asset:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"asset-select",name:"asset-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:a=>m(a.target.value)},s.createElement("option",{value:void 0},"Select a asset"),s.createElement("option",{value:"ETH"},"ETH")))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("span",null,"Owner Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"address",name:"Address",value:r,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:a=>h(a.target.value)})))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:c,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:k},k?s.createElement(s.Fragment,null,s.createElement(N,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(T,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(g,null,2))))},K=()=>{const F="https://gql-router.dev.xdefi.services/graphql",[k,i]=e.useState(!1),[g,t]=e.useState({}),[l,m]=e.useState(void 0),[o,d]=e.useState(void 0),[r,h]=e.useState(""),[c,a]=e.useState(""),[n,x]=e.useState(void 0),[f,C]=e.useState(void 0),y=()=>{h(""),a(""),x(void 0),C(void 0)};e.useEffect(()=>{l?L.find(u=>{u.key===l&&d(u)}):d(void 0),y(),t({})},[l]);const v=async()=>{if(i(!0),t({}),!o){alert("Please select a asset!"),i(!1);return}if(!r||!c||!n||!f){alert("Please enter all the required fields!"),i(!1);return}await fetch(F,{method:"POST",headers:{"Content-Type":"application/json","apollographql-client-name":"docs-staking-api","apollographql-client-version":"v1.0"},body:JSON.stringify({query:`query createErc20ApproveTx($input: Erc20ApproveInput!) {
      staking {
        createErc20ApproveTx(input: $input) {
          chainId
          data
          fromAddress
          nonce
          toAddress
          value
        }
      }
    }`,variables:{input:{asset:o.key,fromAddress:r,spenderAddress:c,amount:Number(n),nonce:Number(f)}}})}).then(b=>b.json()).then(b=>{t(b)}).catch(b=>{t(b)}).finally(()=>{i(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex items-center gap-4"},s.createElement("div",{className:"flex items-center gap-10 max-sm:flex-col max-sm:items-start max-sm:gap-4"},s.createElement("div",{className:"flex items-center gap-4"},s.createElement("span",null,"Asset:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("select",{id:"asset-select",name:"asset-select",className:"bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",onChange:u=>m(u.target.value)},s.createElement("option",{value:void 0},"Select a asset"),s.createElement("option",{value:"MATIC_ERC20"},"MATIC_ERC20")))),s.createElement("div",{className:"flex flex-col gap-2 max-sm:gap-4"},s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("div",{className:"sm:w-[180px]"},"From Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"fromAddress",name:"fromAddress",value:r,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an address",onChange:u=>h(u.target.value)}))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("div",{className:"sm:w-[180px]"},"Spender Address:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"text",id:"spenderAddress",name:"spenderAddress",value:c,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter an spender address",onChange:u=>a(u.target.value)}))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("div",{className:"sm:w-[180px]"},"Amount:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"number",id:"amount",name:"amount",value:n,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter amount",onChange:u=>x(u.target.value)}))),s.createElement("div",{className:"flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2"},s.createElement("div",{className:"sm:w-[180px]"},"Nonce:"),s.createElement("div",{className:"border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit"},s.createElement("input",{type:"number",id:"nonce",name:"nonce",value:f,className:"max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white",placeholder:"Enter nonce",onChange:u=>C(u.target.value)})))))),s.createElement("div",{className:"flex justify-center mt-4"},s.createElement("button",{onClick:v,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:k},k?s.createElement(s.Fragment,null,s.createElement(N,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(T,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(g,null,2))))},X=D("",14),z=D("",4),W=D("",6),Z=D("",4),ss=D("",8),es=D("",4),as=D("",4),is=D("",4),ps=JSON.parse('{"title":"Staking API","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Staking API | XDEFI Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"staking/staking-api.md","filePath":"staking/staking-api.md","lastUpdated":1714120735000}'),ts={name:"staking/staking-api.md"},ds=Object.assign(ts,{setup(F){const k=q(),i=q(),g=q(),t=q(),l=q(),m=q(),o=q(),d=q();return H(()=>{A(k.value).render(e.createElement(J,{},null)),A(i.value).render(e.createElement(Q,{},null)),A(g.value).render(e.createElement(V,{},null)),A(t.value).render(e.createElement(R,{},null)),A(t.value).render(e.createElement(R,{},null)),A(l.value).render(e.createElement(M,{},null)),A(m.value).render(e.createElement(Y,{},null)),A(o.value).render(e.createElement(U,{},null)),A(d.value).render(e.createElement(K,{},null))}),(r,h)=>($(),G("div",null,[X,B("div",{ref_key:"refGetStrideStakedAssetBalance",ref:k},null,512),z,B("div",{ref_key:"refCreateStrideLiquidStakingTx",ref:i},null,512),W,B("div",{ref_key:"refGetCosmosDelegations",ref:g},null,512),Z,B("div",{ref_key:"refCreateNativeStakingTx",ref:t},null,512),ss,B("div",{ref_key:"refGetLidoStakedBalance",ref:l},null,512),es,B("div",{ref_key:"refCreateLidoStakeTx",ref:m},null,512),as,B("div",{ref_key:"refLidoCheckErc20Allowance",ref:o},null,512),is,B("div",{ref_key:"refCreateErc20ApproveTx",ref:d},null,512)]))}});export{ps as __pageData,ds as default};
