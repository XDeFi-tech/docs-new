import{r as p,R as s,c}from"./chunks/client.r8mSQ1EB.js";import{L as F,P as y}from"./chunks/PlayIcon.2awFFRWP.js";import{h as g,l as T,c as u,m as i,a as o,U as E,o as C}from"./chunks/framework.p48Ni__M.js";function m(){const r="https://gql-router.xdefi.services/graphql",[h,a]=p.useState({}),[n,t]=p.useState(!1),k=`
  query ChainsV2 {
    routingV2 {
      chainsV2 {
        name
      }
    }
  }`,d=async()=>{t(!0),a({}),await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:k})}).then(l=>l.json()).then(l=>{a(l)}).catch(l=>{a(l)}).finally(()=>{t(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:d,className:"flex justify-center items-center gap-2 bg-[#05C92F] text-[#001405] px-4 py-2 border-solid border-[1px] border-[#001405] rounded-full",disabled:n},n?s.createElement(s.Fragment,null,s.createElement(F,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(y,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#05C92F] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(h,null,2))))}function Q(){const r="https://gql-router.xdefi.services/graphql",[h,a]=p.useState({}),[n,t]=p.useState(!1),k=`
  query ChainV2($name: String!) {
    routingV2 {
      chainV2(name: $name) {
        name
        tokens {
          asset {
            contract
            symbol
          }
        }
      }
    }
  }`,d={name:"ETH"},l=async()=>{t(!0),a({}),await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:k,variables:d})}).then(e=>e.json()).then(e=>{a(e)}).catch(e=>{a(e)}).finally(()=>{t(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:l,className:"flex justify-center items-center gap-2 bg-[#05C92F] text-[#001405] px-4 py-2 border-solid border-[1px] border-[#001405] rounded-full",disabled:n},n?s.createElement(s.Fragment,null,s.createElement(F,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(y,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#05C92F] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(h,null,2))))}function A(){const r="https://gql-router.xdefi.services/graphql",[h,a]=p.useState({}),[n,t]=p.useState(!1),k=`
  query RouteV2($srcToken: String!, $destToken: String!, $slippage: String!, $addresses: [AddressRouteInputTypeV2!]!, $destAddress: String!, $amountSource: String, $infiniteApproval: Boolean) {
    routingV2 {
      routeV2(srcToken: $srcToken, destToken: $destToken, slippage: $slippage, addresses: $addresses, destAddress: $destAddress, amountSource: $amountSource, infiniteApproval: $infiniteApproval) {
        addresses {
          chain
          address
        }
        destAddress
        priceRate
        priceRateText
        slippage
        priceImpact
        amountIn
        tradesRoute {
          provider {
            id
          }
          amountIn
          amountOut
          minAmountReceived
          assetIn {
            id
          }
          assetOut {
            id
          }
          fee {
            networkFeeDollar
            networkFeeAsset
            inboundFeeDollar
            inboundFeeAsset
            swapFee
            feeRateTransaction
            xdefiSwapFee
            xdefiSwapFeeDollar
          }
          priceRateUsdAssetOut
          priceRateUsdAssetIn
          tradeType
        }
        gasPrices
        approvalInfiniteFlag
        errorBuildingRoute
      }
    }
  }`,d={srcToken:"AVAX.0x63a72806098bd3d9520cc43356dd78afe5d386d9",destToken:"AVAX.0xc7198437980c041c805a1edcba50c1ce5db95118",slippage:"1",addresses:[{chain:"AVAX",address:"0x5329ebC5903bE1Ca544762191343F60EDb5C9Ca3"}],destAddress:"0x5329ebC5903bE1Ca544762191343F60EDb5C9Ca3",amountSource:"0.23",infiniteApproval:null},l=async()=>{t(!0),a({}),await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:k,variables:d})}).then(e=>e.json()).then(e=>{a(e)}).catch(e=>{a(e)}).finally(()=>{t(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:l,className:"flex justify-center items-center gap-2 bg-[#05C92F] text-[#001405] px-4 py-2 border-solid border-[1px] border-[#001405] rounded-full",disabled:n},n?s.createElement(s.Fragment,null,s.createElement(F,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(y,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#05C92F] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(h,null,2))))}const B=E("",9),f=E("",4),b=E("",4),q=i("p",null,[i("strong",null,"Variables:")],-1),v=i("li",null,[i("code",null,"chainName"),o(": This variable is obtained from step "),i("a",{href:"#1.1-get-list-of-supported-chains"},"1.1"),o(".")],-1),x=i("li",null,[i("code",null,"contract"),o(": This variable is obtained from step [1.2](#1.2-get-list-of-assets-for-supported-chain.")],-1),_=i("code",null,"srcToken",-1),D={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},S={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"12.493ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 5522 705","aria-hidden":"true"},w=E("",1),R=[w],V=i("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[i("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[i("mrow",{"data-mjx-texclass":"ORD"},[i("mi",null,"c"),i("mi",null,"h"),i("mi",null,"a"),i("mi",null,"i"),i("mi",null,"n"),i("mi",null,"N"),i("mi",null,"a"),i("mi",null,"m"),i("mi",null,"e")]),i("mo",null,".")])],-1),N=E("",7),I=E("",4),H=JSON.parse('{"title":"Step-by-step Swap example","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Step-by-step Swap example | Ctrl Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"routing/swap-example.md","filePath":"routing/swap-example.md","lastUpdated":1738685759000}'),L={name:"routing/swap-example.md"},M=Object.assign(L,{setup(r){const h=g(),a=g(),n=g();return T(()=>{c(h.value).render(p.createElement(m,{},null)),c(a.value).render(p.createElement(Q,{},null)),c(n.value).render(p.createElement(A,{},null))}),(t,k)=>(C(),u("div",null,[B,i("div",{ref_key:"refChainsV2GraphQL",ref:h},null,512),f,i("div",{ref_key:"refChainV2GraphQL",ref:a},null,512),b,i("div",{ref_key:"refRouteV2",ref:n},null,512),q,i("ul",null,[v,x,i("li",null,[_,o(": This variable has the format `"),i("mjx-container",D,[(C(),u("svg",S,R)),V]),o("{contract} and represents the token to be swapped.")]),N]),I]))}});export{H as __pageData,M as default};
