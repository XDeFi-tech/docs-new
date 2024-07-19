import{r as c,R as e}from"./client.r8mSQ1EB.js";const i=({chainId:r,subChainId:a})=>{const[l,n]=c.useState(void 0),s=async()=>{if(window.xfi){if(!window.xfi[r]){alert("XDEFI Wallet not connected to the correct network!");return}if(r==="ethereum"){await window.ethereum.request({method:"eth_requestAccounts"}).then(o=>n(o[0]));return}if(a){await window.xfi.keplr.enable(a),await window.keplr.getOfflineSigner(a).getAccounts().then(t=>n(t[0].address)).catch(t=>console.log(t));return}await window.xfi[r].request({method:"request_accounts",params:[]},(o,t)=>n(t[0]))}else alert("XDEFI Wallet not detected!")};return e.createElement(e.Fragment,null,e.createElement("div",{className:"flex justify-center"},e.createElement("button",{className:"flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded",onClick:s},"Detect Wallet")),l&&e.createElement("div",{className:"my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]"},e.createElement("div",{className:"px-5 border-b border-[#e2e2e3] dark:border-black"},e.createElement("span",{className:"inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]"},"Address")),e.createElement("pre",{className:"p-5 max-h-[600px] overflow-auto"},l)))};export{i as D};