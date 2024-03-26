import{r as e,R as s,c as d}from"./chunks/client.MWnTFKPL.js";import{L as c,P as F}from"./chunks/PlayIcon.COpKDN9o.js";import{h as g,l as u,c as B,m as E,U as y,a as A,o as m}from"./chunks/framework.foeC49A9.js";const f="/pr-preview/pr-22/assets/subscription-service.VyDw3PS4.png",b=()=>{const r="https://gql-router.xdefiservices.com/graphql",[t,a]=e.useState({}),[l,n]=e.useState(!1),p=`
  query Tokens($page: ConnectionArgs!, $after: DateTime, $afterPrice: DateTime, $filter: TokenFilter) {
    assets {
      tokens(page: $page, after: $after, afterPrice: $afterPrice, filter: $filter) {
        pageData {
          count
          limit
          offset
        }
        page {
          pageInfo {
            endCursor
            hasNextPage
          }
          edges {
            node {
              id
              name
              symbol
              icon
              marketCap
              price {
                amount
                scalingFactor
              }
              contracts {
                symbol
                scalingFactor
                address
                chain
                id
              }
            }
          }
        }
      }
    }
  }`,h={page:{first:5,before:null,after:null,last:null},after:null,afterPrice:null,filter:{address:null,chains:null,ids:null,symbols:null}},k=async()=>{n(!0),a({}),await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:p,variables:h})}).then(i=>i.json()).then(i=>{a(i)}).catch(i=>{a(i)}).finally(()=>{n(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:k,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:l},l?s.createElement(s.Fragment,null,s.createElement(c,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(F,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(t,null,2))))},v=()=>{const r="https://gql-router.xdefiservices.com/graphql",[t,a]=e.useState({}),[l,n]=e.useState(!1),p=`
  query CryptoCurrencies($page: ConnectionArgs!, $filter: CryptoCurrencyFilter, $afterPrice: DateTime, $after: DateTime) {
    assets {
      cryptoCurrencies(page: $page, filter: $filter, afterPrice: $afterPrice, after: $after) {
        pageData {
          count
          limit
          offset
        }
        page {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              name
              symbol
              icon
              type
              externalData
              marketCap
              scalingFactor
              chain
              price {
                amount
              }
            }
          }
        }
      }
    }
  }`,h={page:{first:5,after:null},filter:{chains:null,ids:null,symbols:null},afterPrice:null,after:null},k=async()=>{n(!0),a({}),await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:p,variables:h})}).then(i=>i.json()).then(i=>{a(i)}).catch(i=>{a(i)}).finally(()=>{n(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:k,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:l},l?s.createElement(s.Fragment,null,s.createElement(c,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(F,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(t,null,2))))},D=()=>{const r="https://gql-router.xdefiservices.com/graphql",[t,a]=e.useState({}),[l,n]=e.useState(!1),p=`
  query FiatCurrencies($page: ConnectionArgs!, $filter: FiatCurrencyFilter, $after: DateTime, $afterPrice: DateTime) {
    assets {
      fiatCurrencies(page: $page, filter: $filter, after: $after, afterPrice: $afterPrice) {
        pageData {
          count
          limit
          offset
        }
        page {
          pageInfo {
            endCursor
            hasNextPage
          }
          edges {
            node {
              id
              name
              symbol
              scalingFactor
              character
              price {
                amount
              }
            }
          }
        }
      }
    }
  }`,h={page:{first:5,after:null},filter:{ids:null},after:null,afterPrice:null},k=async()=>{n(!0),a({}),await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:p,variables:h})}).then(i=>i.json()).then(i=>{a(i)}).catch(i=>{a(i)}).finally(()=>{n(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:k,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:l},l?s.createElement(s.Fragment,null,s.createElement(c,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(F,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(t,null,2))))},q=()=>{const r="https://gql-router.xdefiservices.com/graphql",[t,a]=e.useState({}),[l,n]=e.useState(!1),p=`
  query LPTokens($page: ConnectionArgs!, $filter: TokenFilter, $after: DateTime, $afterPrice: DateTime) {
    assets {
      lpTokens(page: $page, filter: $filter, after: $after, afterPrice: $afterPrice) {
        pageData {
          count
          limit
          offset
        }
        page {
          pageInfo {
            endCursor
            hasNextPage
          }
          edges {
            node {
              contracts {
                id
                symbol
                scalingFactor
                address
                chain
                fee {
                  value
                }
                defiProtocol {
                  chain
                  icon
                  name
                }
              }
              externalData
              id
              icon
              name
              marketCap
              price {
                amount
              }
              symbol
              type
            }
          }
        }
      }
    }
  }`,h={page:{first:5,after:null,before:null,last:null},filter:{symbols:null,ids:null,chains:null,address:null},after:null,afterPrice:null},k=async()=>{n(!0),a({}),await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:p,variables:h})}).then(i=>i.json()).then(i=>{a(i)}).catch(i=>{a(i)}).finally(()=>{n(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:k,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:l},l?s.createElement(s.Fragment,null,s.createElement(c,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(F,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(t,null,2))))},x=()=>{const[r,t]=e.useState({}),[a,l]=e.useState(!1),n=new WebSocket("wss://subscription-service.dev.xdefi.services/graphql"),p=`subscription Subscription($ids: [String!]) {
    price(ids: $ids) {
      chain
      id
      price {
        amount
      }
      symbol
      type
      name
      contracts {
        address
        chain
        symbol
        scalingFactor
        defiProtocol {
          icon
          chain
          name
        }
        id
      }
      icon
      externalData
      marketCap
      scalingFactor
    }
  }`,h={ids:[]},k=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,o=>{const C=Math.random()*16|0;return(o=="x"?C:C&3|8).toString(16)}),i=async()=>{if(a){n.close(),l(!1);return}l(!0),t({}),n.send(JSON.stringify({type:"connection_init",payload:{}})),n.send(JSON.stringify({type:"subscribe",id:k(),payload:{operationName:"Subscription",httpMultipartParams:{includeCookies:!0},query:p,variables:h}}))};return e.useEffect(()=>{n.onmessage=o=>{t(o.payload.data),l(!1)}},[]),s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:i,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded"},a?s.createElement(s.Fragment,null,s.createElement(c,null),"Listening..."):s.createElement(s.Fragment,null,s.createElement(F,null),"Subscription"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(r,null,2))))},P=y("",12),S=y("",4),T=y("",4),I=y("",4),N=E("h3",{id:"composite-tokens",tabindex:"-1"},[A("Composite Tokens "),E("a",{class:"header-anchor",href:"#composite-tokens","aria-label":'Permalink to "Composite Tokens"'},"​")],-1),Q=E("div",{align:"center"},"Comming Soon!",-1),_={ref:"refAssetsCompositeTokens"},L=y("",6),V=JSON.parse('{"title":"Assets and Prices API","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Assets and Prices API | XDEFI Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"assets-services/assets-and-prices-api.md","filePath":"assets-services/assets-and-prices-api.md","lastUpdated":1711448313000}'),G={name:"assets-services/assets-and-prices-api.md"},K=Object.assign(G,{setup(r){const t=g(),a=g(),l=g(),n=g(),p=g();return u(()=>{d(t.value).render(e.createElement(b,{},null)),d(a.value).render(e.createElement(v,{},null)),d(l.value).render(e.createElement(D,{},null)),d(n.value).render(e.createElement(q,{},null)),d(p.value).render(e.createElement(x,{},null))}),(h,k)=>(m(),B("div",null,[P,E("div",{ref_key:"refAssetsTokens",ref:t},null,512),S,E("div",{ref_key:"refAssetsCryptoCurrencies",ref:a},null,512),T,E("div",{ref_key:"refAssetsFiatCurrencies",ref:l},null,512),I,E("div",{ref_key:"refAssetsLPTokens",ref:n},null,512),N,Q,E("div",_,null,512),L,E("div",{ref_key:"refSubscriptionService",ref:p},null,512)]))}});export{V as __pageData,K as default};
