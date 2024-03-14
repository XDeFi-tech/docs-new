import{r as n,R as s,L as F,P as y,c}from"./chunks/PlayIcon.Rq__nHh2.js";import{h as g,l as T,c as u,m as i,a as o,U as d,o as C}from"./chunks/framework.YwWGHI2Z.js";function Q(){const E="https://gql-router.xdefi.services/graphql",[h,a]=n.useState({}),[e,p]=n.useState(!1),k=`
  query ChainsV2 {
    routingV2 {
      chainsV2 {
        name
      }
    }
  }`,r=async()=>{p(!0),a({}),await fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:k})}).then(t=>t.json()).then(t=>{a(t)}).catch(t=>{a(t)}).finally(()=>{p(!1)})};return n.useEffect(()=>{r()},[]),s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:r,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:e},e?s.createElement(s.Fragment,null,s.createElement(F,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(y,null),"Fetch"))),s.createElement("pre",{className:"my-4 p-5 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},JSON.stringify(h,null,2)))}function A(){const E="https://gql-router.xdefi.services/graphql",[h,a]=n.useState({}),[e,p]=n.useState(!1),k=`
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
  }`,r={name:"ETH"},t=async()=>{p(!0),a({}),await fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:k,variables:r})}).then(l=>l.json()).then(l=>{a(l)}).catch(l=>{a(l)}).finally(()=>{p(!1)})};return n.useEffect(()=>{t()},[]),s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:t,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:e},e?s.createElement(s.Fragment,null,s.createElement(F,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(y,null),"Fetch"))),s.createElement("pre",{className:"my-4 p-5 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},JSON.stringify(h,null,2)))}function m(){const E="https://gql-router.xdefi.services/graphql",[h,a]=n.useState({}),[e,p]=n.useState(!1),k=`
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
  }`,r={srcToken:"AVAX.0x63a72806098bd3d9520cc43356dd78afe5d386d9",destToken:"AVAX.0xc7198437980c041c805a1edcba50c1ce5db95118",slippage:"1",addresses:[{chain:"AVAX",address:"0x5329ebC5903bE1Ca544762191343F60EDb5C9Ca3"}],destAddress:"0x5329ebC5903bE1Ca544762191343F60EDb5C9Ca3",amountSource:"0.23",infiniteApproval:null},t=async()=>{p(!0),a({}),await fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:k,variables:r})}).then(l=>l.json()).then(l=>{a(l)}).catch(l=>{a(l)}).finally(()=>{p(!1)})};return n.useEffect(()=>{t()},[]),s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:t,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:e},e?s.createElement(s.Fragment,null,s.createElement(F,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(y,null),"Fetch"))),s.createElement("pre",{className:"my-4 p-5 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},JSON.stringify(h,null,2)))}const B=d("",9),f=d("",4),b=d("",4),q=i("p",null,[i("strong",null,"Variables:")],-1),v=i("li",null,[i("code",null,"chainName"),o(": This variable is obtained from step "),i("a",{href:"#1.1-get-list-of-supported-chains"},"1.1"),o(".")],-1),_=i("li",null,[i("code",null,"contract"),o(": This variable is obtained from step [1.2](#1.2-get-list-of-assets-for-supported-chain.")],-1),D=i("code",null,"srcToken",-1),x={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},S={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"12.493ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 5522 705","aria-hidden":"true"},w=d("",1),V=[w],R=i("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[i("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[i("mrow",{"data-mjx-texclass":"ORD"},[i("mi",null,"c"),i("mi",null,"h"),i("mi",null,"a"),i("mi",null,"i"),i("mi",null,"n"),i("mi",null,"N"),i("mi",null,"a"),i("mi",null,"m"),i("mi",null,"e")]),i("mo",null,".")])],-1),I=d("",7),N=d("",4),G=JSON.parse('{"title":"Step-by-step Swap example","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Step-by-step Swap example | XDEFI Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"routing/swap-example.md","filePath":"routing/swap-example.md","lastUpdated":1710410313000}'),L={name:"routing/swap-example.md"},H=Object.assign(L,{setup(E){const h=g(),a=g(),e=g();return T(()=>{c(h.value).render(n.createElement(Q,{},null)),c(a.value).render(n.createElement(A,{},null)),c(e.value).render(n.createElement(m,{},null))}),(p,k)=>(C(),u("div",null,[B,i("div",{ref_key:"refChainsV2GraphQL",ref:h},null,512),f,i("div",{ref_key:"refChainV2GraphQL",ref:a},null,512),b,i("div",{ref_key:"refRouteV2",ref:e},null,512),q,i("ul",null,[v,_,i("li",null,[D,o(": This variable has the format `"),i("mjx-container",x,[(C(),u("svg",S,V)),R]),o("{contract} and represents the token to be swapped.")]),I]),N]))}});export{G as __pageData,H as default};
