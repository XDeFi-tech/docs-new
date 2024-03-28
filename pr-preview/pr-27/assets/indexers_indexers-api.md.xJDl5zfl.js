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
  }`,k=async()=>{a(!0),i({}),await fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:h})}).then(r=>r.json()).then(r=>{i(r)}).catch(r=>{i(r)}).finally(()=>{a(!1)})};return s.createElement(s.Fragment,null,s.createElement("div",{className:"flex justify-center"},s.createElement("button",{onClick:k,className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",disabled:e},e?s.createElement(s.Fragment,null,s.createElement(F,null),"Fetching..."):s.createElement(s.Fragment,null,s.createElement(o,null),"Test the query"))),s.createElement("div",{className:"my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},s.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},s.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Response")),s.createElement("pre",{className:"p-5"},JSON.stringify(p,null,2))))},q=y(`<h1 id="indexers-api" tabindex="-1">Indexers API <a class="header-anchor" href="#indexers-api" aria-label="Permalink to &quot;Indexers API&quot;">​</a></h1><h2 id="overall" tabindex="-1">Overall <a class="header-anchor" href="#overall" aria-label="Permalink to &quot;Overall&quot;">​</a></h2><p>XDEFI provide GraphQL API for developers to interact with the XDEFI Wallet. Some services that can be accessed through the API are: get balance, get gas fee, and get transaction. Make sure to install the XDEFI Wallet extension.</p><p>The base URL for all API endpoints is: <code>https://gql-router.xdefiservices.com/graphql</code>.</p><p><em>Note</em>: In this guide, we choose <code>bitcoin</code> chain as an example. Check the <a href="https://gql-router.xdefiservices.com/graphql" target="_blank" rel="noreferrer">GraphQL schema</a> for more information about the available chains and their fields.</p><h2 id="get-balance" tabindex="-1">Get Balance <a class="header-anchor" href="#get-balance" aria-label="Permalink to &quot;Get Balance&quot;">​</a></h2><p><a href="https://gql-router.xdefiservices.com/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoBCAhgDZVJQIDOAFACRVhh7NPpEBlFHgCWSAOYBCAJRFgAHSREiAIxEooEMXMXLlK2vUatO3Xvw5ceTJrIVK9y09aa7HRKnAgxUOh%2B6IAN1pcN0cAXzC9KhtyPwDlKAALKjEox01UPCooFHS9MAQoEThaV393ETB85RKqcQQaoiRPRorHAAdRRniEpy8fPPb3Jg6qPABrGjE2vuUYDrAqFAQwAHkkJuUCBHGABW6EAGEUiVm5gHcEBAmDkUYT%2BgatoiYoWjFxADEclAg8F5eVBJO4PU7PYaOUqTchHKgdABK9AmLwAZmBAi8lgRQcdwec%2BksRDQCAAVbJgT4ANQgNHgBISRJJABkIBcsakSQAJETiJIvWg0UklBCs9mQ6I0IUinl8pqRCVMAhwFS0pooAgdBnKBURNwKhUgAA0IGCoioKhozAwIHsynkIGcvAd-AdKigDqIAHovUQAJrePBECiko4eKy8IjaAAaABEAKJfACSRAA6oLyIpwsaQB0IEwUKjpnyUGstdkUCIIEgBFBRB00JgQOEgA" target="_blank" rel="noreferrer">Query GraphQL directly here</a></p><p>In the example below, we will retrieve your balance of Bitcoin in the XDEFI Wallet.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-woWeQ" id="tab-IH7RLq-" checked="checked"><label for="tab-IH7RLq-">Example</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefiservices.com/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`query GetBalances($address: String!) {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  bitcoin {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    balances(address: $address) {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      address</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      amount {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        value</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      asset {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        chain</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        contract</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        decimals</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        id</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        image</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        name</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        symbol</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        type</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        price {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          amount</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          scalingFactor</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          sparkline</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          yearPriceChange</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          weekPriceChange</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          updatedOn</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          monthPriceChange</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          marketCapRank</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          fdv</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          dayPriceChange</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          dailyTradingVolume</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          dailyLow</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          dailyHigh</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          allTimeLow</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          allTimeHigh</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> testQuery</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.xfi </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.xfi.bitcoin) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;XDEFI Wallet not detected! Please install the XDEFI Wallet extension.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.xfi.bitcoin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;request_accounts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, params: [] },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">accounts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GRAPHQL_ENDPOINT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          headers: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;Content-Type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          body: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            query,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            variables: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              address: accounts[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // Do something with the result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">testQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div></div></div>`,9),x=y(`<h2 id="get-transaction-v2" tabindex="-1">Get Transaction V2 <a class="header-anchor" href="#get-transaction-v2" aria-label="Permalink to &quot;Get Transaction V2&quot;">​</a></h2><p><a href="https://gql-router.xdefiservices.com/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoAqeAhkgM7VQoCWE9AagEwAUAJNWDB4EdOuiIBlFHmZIA5gEIANEV4AHanIQA5eACN84gJKplqjVonMAXgmOmAlEWAAdJESJ7mKKBFnO3Dw9pWgYmVg4eASERMVVo4VEVCx19Q3NNVLgDPGTMq1txdXybBCdXdyCPPWoAG1ooBABhAAtaLQDKqo8ANzrcQO6AX0GqvVroAGtdbPxRoIAzBARO7qC%2B2oGuoJHtjza6FvmPWTUYFDpVtaIE2OOg6jgIGFQr66INrffdtZ-u55QZwub26t1E9w8j2erwq716-QQEKIfyqKKCdBQ1BQMDo9xYiAxjzU8z%2BuyGICUID6Mmo4xEGBAsKILhAYNxGGZID0UBZKgA9HyiABNZ54IgAIQoTRugkSl38AA0ACIAUQAYkYiAB1Oq1ciDFkpGY5FniACMSgNIBSBURHLNAAY3OTKWoIBiFrVmHIWigAPJqfBYiISKAyNRoTAgIZAA" target="_blank" rel="noreferrer">Query GraphQL directly here</a></p><p>In the example below, we will retrieve your transaction history of Bitcoin in the XDEFI Wallet.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-C-3di" id="tab-9YU9Y2w" checked="checked"><label for="tab-9YU9Y2w">Example</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefiservices.com/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`query GetTransactionsV2($address: String!, $pageNumber: Int!, $pageSize: Int!) {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  bitcoin {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    transactionsV2(address: $address, pageNumber: $pageNumber, pageSize: $pageSize) {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      balanceChange {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        value</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      blockNumber</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      fee {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        value</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      hash</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      inputs {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        address</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        amount {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          value</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      outputs {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        address</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        amount {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          value</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      status</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      timestamp</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> testQuery</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.xfi </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.xfi.bitcoin) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;XDEFI Wallet not detected! Please install the XDEFI Wallet extension.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.xfi.bitcoin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;request_accounts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, params: [] },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">accounts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GRAPHQL_ENDPOINT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          headers: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;Content-Type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          body: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            query,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            variables: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              address: accounts[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              pageNumber: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              pageSize: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // Do something with the result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">testQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div></div></div>`,4),D=y(`<h2 id="get-transaction-v3" tabindex="-1">Get Transaction V3 <a class="header-anchor" href="#get-transaction-v3" aria-label="Permalink to &quot;Get Transaction V3&quot;">​</a></h2><p><a href="https://gql-router.xdefiservices.com/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABACp4CGSAzuVCgJYTUBqAzABQAk5YYeCVKuiIBlFHnpIA5gEIANEU4AzeniophASVTzF5JSnzCxE6QEoiwADpIiRAEb0UUCJMs27d8ZRp1GLDh4%2BASE9Xn5BBRU1DUVo9QV9QzxhbgN8C2tbTzsEMCkBd2ycuyQIMAQikpL7cgAbSigEAGEAC0oCquqSgDd63A9uuwBfQaH7OugAawA5eHt8Me6lBEqsoZy%2BuoHi7tHd6vaqVqXqyQAHGBQqLo2iIIiqU%2B7yOAgYVFu7oi2d76J9ndARt3ihLtcvkMHiFntVXu9Put-j9%2BghYSVgUNMd11OQUDAngcSgxELi4Od0dicrA1BA8M8qURzuQCtolBBIZ4jjMEAAPFAABRZaKJdiOAv4PUYBKFBQZS2B%2B2GIDkID6EnIEwEGBASKsIGhgn1wn19ig%2BoUAHpLUQAJrvPBEABCJGa93CISIbgAGgARACiADFNEQAOr1OoIFCDfXxaMYIgARjkMYN6XpCaQMDqdRsytV5wg6iUdXoUlaKAA8ud8Hj-CIoBJzmhMCBhkA" target="_blank" rel="noreferrer">Query GraphQL directly here</a></p><p>In the example below, we will retrieve your transaction history of Bitcoin in the XDEFI Wallet.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-pT36E" id="tab-UotXa0d" checked="checked"><label for="tab-UotXa0d">Example</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefiservices.com/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`query TransactionsV3($address: String!, $first: Int!, $after: String) {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  bitcoin {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    transactionsV3(address: $address, first: $first, after: $after) {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      edges {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        node {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          balanceChange {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            value</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          blockNumber</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          fee {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            value</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          hash</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          inputs {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            address</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            amount {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              value</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          outputs {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            address</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            amount {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              value</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          status</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          timestamp</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        cursor</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      pageInfo {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        hasNextPage</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        hasPreviousPage</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> testQuery</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.xfi </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.xfi.bitcoin) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;XDEFI Wallet not detected! Please install the XDEFI Wallet extension.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    setLoading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.xfi.bitcoin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">request</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;request_accounts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, params: [] },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">accounts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GRAPHQL_ENDPOINT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          headers: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;Content-Type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          body: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            query,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            variables: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              address: accounts[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              first: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              after: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // Do something with the result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">testQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div></div></div>`,4),I=l("h2",{id:"get-gas-fee",tabindex:"-1"},[B("Get Gas Fee "),l("a",{class:"header-anchor",href:"#get-gas-fee","aria-label":'Permalink to "Get Gas Fee"'},"​")],-1),N=l("p",null,[l("a",{href:"https://gql-router.xdefiservices.com/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIokCGAzgGIIJHAA6SRRARgJYpQRdsWbdkQBmDJqxEiAFlwDmMqdKIAbCAHdl0xGC7xtRAL7KTSIyAA0IAG6U8XSh1UJqGEFZAAHCNRSjVBRkUAHkvfEoULggkAGUoBy80TBAjIA",target:"_blank",rel:"noreferrer"},"Query GraphQL directly here")],-1),_=l("p",null,"In the example below gas fee for Bitcoin will be retrieved.",-1),w={class:"vp-code-group vp-adaptive-theme"},T=l("div",{class:"tabs"},[l("input",{type:"radio",name:"group-30e0A",id:"tab-jGj0AQM",checked:"checked"}),l("label",{for:"tab-jGj0AQM"},"Example")],-1),P={class:"blocks"},G=y(`<div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> GRAPHQL_ENDPOINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://gql-router.xdefiservices.com/graphql&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`query GetGasFee {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  bitcoin {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    fee {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      high</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      low</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      medium</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> testQuery</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GRAPHQL_ENDPOINT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    method: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;POST&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    headers: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;Content-Type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    body: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      query,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">result</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // Do something with the result</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">testQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div>`,1),O=JSON.parse('{"title":"Indexers API","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Indexers API | XDEFI Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"indexers/indexers-api.md","filePath":"indexers/indexers-api.md","lastUpdated":1711608666000}'),S={name:"indexers/indexers-api.md"},U=Object.assign(S,{setup(E){const p=c(),i=c(),e=c(),a=c();return u(()=>{g(p.value).render(t.createElement(m,{},null)),g(i.value).render(t.createElement(b,{},null)),g(e.value).render(t.createElement(f,{},null)),g(a.value).render(t.createElement(v,{},null))}),(h,k)=>(A(),C("div",null,[q,l("div",{ref_key:"refGetBalance",ref:p},null,512),x,l("div",{ref_key:"refGetTransactionsV2",ref:i},null,512),D,l("div",{ref_key:"refGetTransactionsV3",ref:e},null,512),I,N,_,l("div",w,[T,l("div",P,[G,l("div",{ref_key:"refGetGasFee",ref:a},null,512)])])]))}});export{O as __pageData,U as default};
