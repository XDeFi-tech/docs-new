import{r as t,R as s,c as o}from"./chunks/client.r8mSQ1EB.js";import{L as g,P as c}from"./chunks/PlayIcon.2awFFRWP.js";import{h as y,l as F,c as u,m as h,U as m,a as p,o as b}from"./chunks/framework.1VnR4o6F.js";function C(){const l="https://gql-router.xdefi.services/graphql",[n,i]=t.useState({}),[e,k]=t.useState(!1),r=`
  query BridgeableTokens($bridgeToken: BridgeTokenInput) {
    routingV2 {
      bridgeableTokens(bridgeToken: $bridgeToken) {
        asset {
          id
          chain
          name
        }
      }
    }
  }`,d={bridgeToken:{address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",name:"ETH.USDC"}},E=async()=>{k(!0),i({}),await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:r,variables:d})}).then(a=>a.json()).then(a=>{i(a)}).catch(a=>{i(a)}).finally(()=>{k(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:E,className:"flex justify-center items-center gap-2 bg-[#05C92F] text-[#001405] px-4 py-2 border-solid border-[1px] border-[#001405] rounded-full",disabled:e},e?s.createElement(s.Fragment,null,s.createElement(g,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(c,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#05C92F] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},JSON.stringify(n,null,2))))}const B=m("",15),f=h("p",null,[p("A comprehensive routing example, from requesting a route to getting transaction data, is shown in the "),h("a",{href:"./overview"},"Overview"),p(" section.")],-1),q=JSON.parse('{"title":"Routing Graph QL API","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Routing Graph QL API | Ctrl Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"routing/routing-graph-ql-api.md","filePath":"routing/routing-graph-ql-api.md","lastUpdated":1725148893000}'),A={name:"routing/routing-graph-ql-api.md"},V=Object.assign(A,{setup(l){const n=y();return F(()=>{o(n.value).render(t.createElement(C,{},null))}),(i,e)=>(b(),u("div",null,[B,h("div",{ref_key:"frame",ref:n},null,512),f]))}});export{q as __pageData,V as default};
