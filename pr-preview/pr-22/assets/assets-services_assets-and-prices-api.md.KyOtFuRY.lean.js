import{r as e,R as s,c as d}from"./chunks/client.MWnTFKPL.js";import{L as c,P as F}from"./chunks/PlayIcon.COpKDN9o.js";import{h as g,l as o,c as C,m as E,U as y,a as u,o as B}from"./chunks/framework.foeC49A9.js";const A="/pr-preview/pr-22/assets/subscription-service.VyDw3PS4.png",m=()=>{const r="https://gql-router.xdefiservices.com/graphql",[t,a]=e.useState({}),[n,l]=e.useState(!1),p=`
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
  }`,h={page:{first:5,before:null,after:null,last:null},after:null,afterPrice:null,filter:{address:null,chains:null,ids:null,symbols:null}},k=async()=>{l(!0),a({}),await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:p,variables:h})}).then(i=>i.json()).then(i=>{a(i)}).catch(i=>{a(i)}).finally(()=>{l(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:k,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:n},n?s.createElement(s.Fragment,null,s.createElement(c,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(F,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(t,null,2))))},f=()=>{const r="https://gql-router.xdefiservices.com/graphql",[t,a]=e.useState({}),[n,l]=e.useState(!1),p=`
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
  }`,h={page:{first:5,after:null},filter:{chains:null,ids:null,symbols:null},afterPrice:null,after:null},k=async()=>{l(!0),a({}),await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:p,variables:h})}).then(i=>i.json()).then(i=>{a(i)}).catch(i=>{a(i)}).finally(()=>{l(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:k,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:n},n?s.createElement(s.Fragment,null,s.createElement(c,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(F,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(t,null,2))))},b=()=>{const r="https://gql-router.xdefiservices.com/graphql",[t,a]=e.useState({}),[n,l]=e.useState(!1),p=`
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
  }`,h={page:{first:5,after:null},filter:{ids:null},after:null,afterPrice:null},k=async()=>{l(!0),a({}),await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:p,variables:h})}).then(i=>i.json()).then(i=>{a(i)}).catch(i=>{a(i)}).finally(()=>{l(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:k,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:n},n?s.createElement(s.Fragment,null,s.createElement(c,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(F,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(t,null,2))))},v=()=>{const r="https://gql-router.xdefiservices.com/graphql",[t,a]=e.useState({}),[n,l]=e.useState(!1),p=`
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
  }`,h={page:{first:5,after:null,before:null,last:null},filter:{symbols:null,ids:null,chains:null,address:null},after:null,afterPrice:null},k=async()=>{l(!0),a({}),await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:p,variables:h})}).then(i=>i.json()).then(i=>{a(i)}).catch(i=>{a(i)}).finally(()=>{l(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:k,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:n},n?s.createElement(s.Fragment,null,s.createElement(c,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(F,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(t,null,2))))},D=()=>{const r="https://subscription-service.dev.xdefi.services/graphql",[t,a]=e.useState({}),[n,l]=e.useState(!1),p=`
  subscription Subscription($ids: [String!]) {
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
  }`,h={ids:[]},k=async()=>{l(!0),a({}),await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:p,variables:h})}).then(i=>{console.log(i)}).catch(i=>{a(i)}).finally(()=>{l(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:k,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:n},n?s.createElement(s.Fragment,null,s.createElement(c,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(F,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(t,null,2))))},q=y("",12),P=y("",4),x=y("",4),T=y("",4),N=E("h3",{id:"composite-tokens",tabindex:"-1"},[u("Composite Tokens "),E("a",{class:"header-anchor",href:"#composite-tokens","aria-label":'Permalink to "Composite Tokens"'},"​")],-1),S=E("div",{align:"center"},"Comming Soon!",-1),I={ref:"refAssetsCompositeTokens"},Q=y("",6),w=JSON.parse('{"title":"Assets and Prices API","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Assets and Prices API | XDEFI Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"assets-services/assets-and-prices-api.md","filePath":"assets-services/assets-and-prices-api.md","lastUpdated":1711439749000}'),_={name:"assets-services/assets-and-prices-api.md"},$=Object.assign(_,{setup(r){const t=g(),a=g(),n=g(),l=g(),p=g();return o(()=>{d(t.value).render(e.createElement(m,{},null)),d(a.value).render(e.createElement(f,{},null)),d(n.value).render(e.createElement(b,{},null)),d(l.value).render(e.createElement(v,{},null)),d(p.value).render(e.createElement(D,{},null))}),(h,k)=>(B(),C("div",null,[q,E("div",{ref_key:"refAssetsTokens",ref:t},null,512),P,E("div",{ref_key:"refAssetsCryptoCurrencies",ref:a},null,512),x,E("div",{ref_key:"refAssetsFiatCurrencies",ref:n},null,512),T,E("div",{ref_key:"refAssetsLPTokens",ref:l},null,512),N,S,E("div",I,null,512),Q,E("div",{ref_key:"refSubscriptionService",ref:p},null,512)]))}});export{w as __pageData,$ as default};
