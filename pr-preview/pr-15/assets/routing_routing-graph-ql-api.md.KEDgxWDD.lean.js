import{r as t,R as s,L as o,P as g,c}from"./chunks/PlayIcon.Rq__nHh2.js";import{h as y,l as F,c as u,m as h,U as m,a as p,o as b}from"./chunks/framework.lH7PT3ke.js";function B(){const l="https://gql-router.xdefi.services/graphql",[n,i]=t.useState({}),[e,k]=t.useState(!1),r=`
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
  }`,d={bridgeToken:{address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",name:"ETH.USDC"}},E=async()=>{k(!0),i({}),await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:r,variables:d})}).then(a=>a.json()).then(a=>{i(a)}).catch(a=>{i(a)}).finally(()=>{k(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:E,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:e},e?s.createElement(s.Fragment,null,s.createElement(o,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(g,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(n,null,2))))}const C=m("",15),f=h("p",null,[p("A comprehensive routing example, from requesting a route to getting transaction data, is shown in the "),h("a",{href:"./overview"},"Overview"),p(" section.")],-1),D=JSON.parse('{"title":"Routing Graph QL API","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Routing Graph QL API | XDEFI Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"routing/routing-graph-ql-api.md","filePath":"routing/routing-graph-ql-api.md","lastUpdated":1710424550000}'),A={name:"routing/routing-graph-ql-api.md"},q=Object.assign(A,{setup(l){const n=y();return F(()=>{c(n.value).render(t.createElement(B,{},null))}),(i,e)=>(b(),u("div",null,[C,h("div",{ref_key:"frame",ref:n},null,512),f]))}});export{D as __pageData,q as default};