import{r as t,R as s,c as g}from"./chunks/client.r8mSQ1EB.js";import{L as F,P as o}from"./chunks/PlayIcon.2awFFRWP.js";import{h as c,l as u,c as C,m as l,U as y,a as B,o as A}from"./chunks/framework.hRQuqQRW.js";const m=()=>{const E="https://gql-router.xdefiservices.com/graphql",[p,i]=t.useState({}),[e,a]=t.useState(!1),h=`
  query GetBalances($address: String!) {
    bitcoin {
      balances(address: $address) {
        address
        amount {
          value
        }
        asset {
          chain
          contract
          decimals
          id
          image
          name
          symbol
          type
          price {
            amount
            scalingFactor
            sparkline
            yearPriceChange
            weekPriceChange
            updatedOn
            monthPriceChange
            marketCapRank
            fdv
            dayPriceChange
            dailyTradingVolume
            dailyLow
            dailyHigh
            allTimeLow
            allTimeHigh
          }
        }
      }
    }
  }`,k=async()=>{if(a(!0),i({}),!window.xfi||!window.xfi.bitcoin){alert("XDEFI Wallet not detected! Please install the XDEFI Wallet extension."),a(!1);return}else await window.xfi.bitcoin.request({method:"request_accounts",params:[]},(r,d)=>{fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:h,variables:{address:d[0]}})}).then(n=>n.json()).then(n=>{i(n)}).catch(n=>{i(n)}).finally(()=>{a(!1)})})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:k,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:e},e?s.createElement(s.Fragment,null,s.createElement(F,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(o,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(p,null,2))))},b=()=>{const E="https://gql-router.xdefiservices.com/graphql",[p,i]=t.useState({}),[e,a]=t.useState(!1),h=`
  query GetTransactionsV2($address: String!, $pageNumber: Int!, $pageSize: Int!) {
    bitcoin {
      transactionsV2(address: $address, pageNumber: $pageNumber, pageSize: $pageSize) {
        balanceChange {
          value
        }
        blockNumber
        fee {
          value
        }
        hash
        inputs {
          address
          amount {
            value
          }
        }
        outputs {
          address
          amount {
            value
          }
        }
        status
        timestamp
      }
    }
  }`,k=async()=>{if(a(!0),i({}),!window.xfi||!window.xfi.bitcoin){alert("XDEFI Wallet not detected! Please install the XDEFI Wallet extension."),a(!1);return}else await window.xfi.bitcoin.request({method:"request_accounts",params:[]},(r,d)=>{fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:h,variables:{address:d[0],pageNumber:1,pageSize:10}})}).then(n=>n.json()).then(n=>{i(n)}).catch(n=>{i(n)}).finally(()=>{a(!1)})})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:k,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:e},e?s.createElement(s.Fragment,null,s.createElement(F,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(o,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(p,null,2))))},f=()=>{const E="https://gql-router.xdefiservices.com/graphql",[p,i]=t.useState({}),[e,a]=t.useState(!1),h=`query TransactionsV3($address: String!, $first: Int!, $after: String) {
    bitcoin {
      transactionsV3(address: $address, first: $first, after: $after) {
        edges {
          node {
            balanceChange {
              value
            }
            blockNumber
            fee {
              value
            }
            hash
            inputs {
              address
              amount {
                value
              }
            }
            outputs {
              address
              amount {
                value
              }
            }
            status
            timestamp
          }
          cursor
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }`,k=async()=>{if(a(!0),i({}),!window.xfi||!window.xfi.bitcoin){alert("XDEFI Wallet not detected! Please install the XDEFI Wallet extension."),a(!1);return}else await window.xfi.bitcoin.request({method:"request_accounts",params:[]},(r,d)=>{fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:h,variables:{address:d[0],first:1,after:null}})}).then(n=>n.json()).then(n=>{i(n)}).catch(n=>{i(n)}).finally(()=>{a(!1)})})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:k,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:e},e?s.createElement(s.Fragment,null,s.createElement(F,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(o,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(p,null,2))))},v=()=>{const E="https://gql-router.xdefiservices.com/graphql",[p,i]=t.useState({}),[e,a]=t.useState(!1),h=`query GetGasFee {
    bitcoin {
      fee {
        high
        low
        medium
      }
    }
  }`,k=async()=>{a(!0),i({}),await fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:h})}).then(r=>r.json()).then(r=>{i(r)}).catch(r=>{i(r)}).finally(()=>{a(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:k,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:e},e?s.createElement(s.Fragment,null,s.createElement(F,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(o,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(p,null,2))))},q=y("",9),x=y("",4),D=y("",4),I=l("h2",{id:"get-gas-fee",tabindex:"-1"},[B("Get Gas Fee "),l("a",{class:"header-anchor",href:"#get-gas-fee","aria-label":'Permalink to "Get Gas Fee"'},"​")],-1),N=l("p",null,[l("a",{href:"https://gql-router.xdefiservices.com/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIokCGAzgGIIJHAA6SRRARgJYpQRdsWbdkQBmDJqxEiAFlwDmMqdKIAbCAHdl0xGC7xtRAL7KTSIyAA0IAG6U8XSh1UJqGEFZAAHCNRSjVBRkUAHkvfEoULggkAGUoBy80TBAjIA",target:"_blank",rel:"noreferrer"},"Query GraphQL directly here")],-1),_=l("p",null,"In the example below gas fee for Bitcoin will be retrieved.",-1),w={class:"vp-code-group vp-adaptive-theme"},T=l("div",{class:"tabs"},[l("input",{type:"radio",name:"group-30e0A",id:"tab-jGj0AQM",checked:"checked"}),l("label",{for:"tab-jGj0AQM"},"Example")],-1),P={class:"blocks"},G=y("",1),O=JSON.parse('{"title":"Indexers API","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Indexers API | XDEFI Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"indexers/indexers-api.md","filePath":"indexers/indexers-api.md","lastUpdated":1711608666000}'),S={name:"indexers/indexers-api.md"},U=Object.assign(S,{setup(E){const p=c(),i=c(),e=c(),a=c();return u(()=>{g(p.value).render(t.createElement(m,{},null)),g(i.value).render(t.createElement(b,{},null)),g(e.value).render(t.createElement(f,{},null)),g(a.value).render(t.createElement(v,{},null))}),(h,k)=>(A(),C("div",null,[q,l("div",{ref_key:"refGetBalance",ref:p},null,512),x,l("div",{ref_key:"refGetTransactionsV2",ref:i},null,512),D,l("div",{ref_key:"refGetTransactionsV3",ref:e},null,512),I,N,_,l("div",w,[T,l("div",P,[G,l("div",{ref_key:"refGetGasFee",ref:a},null,512)])])]))}});export{O as __pageData,U as default};
