import{_ as e,c as a,o as n,U as t}from"./chunks/framework.u_p68rOy.js";const u=JSON.parse('{"title":"Extension Wallet Solana Integration","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Extension Wallet Solana Integration | XDEFI Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/extension-solana.md","filePath":"developers/extension-solana.md","lastUpdated":1711546055000}'),o={name:"developers/extension-solana.md"},i=t('<h1 id="extension-wallet-solana-integration" tabindex="-1">Extension Wallet Solana Integration <a class="header-anchor" href="#extension-wallet-solana-integration" aria-label="Permalink to &quot;Extension Wallet Solana Integration&quot;">​</a></h1><p>Develop Solana dApps</p><p>Example dApp using Solana: <a href="https://xdefi-example-dapps.herokuapp.com/multichain/" target="_blank" rel="noreferrer">https://xdefi-example-dapps.herokuapp.com/multichain/</a> ( <a href="https://github.com/XDeFi-tech/examples-dapps-sdk" target="_blank" rel="noreferrer">https://github.com/XDeFi-tech/examples-dapps-sdk</a> )</p><h3 id="solana-provider" tabindex="-1">Solana Provider <a class="header-anchor" href="#solana-provider" aria-label="Permalink to &quot;Solana Provider&quot;">​</a></h3><p>Similarly to the Phantom Provider, XDEFI Wallet provider exposes different methods in <code>window.solana</code> or <code>window.xfi.solana</code></p><p>Below are the different functions exposed in the provider <code>window.solana</code> <code>window.xfi.solana</code>.</p><h4 id="isxdefi" tabindex="-1"><code>isXDEFI</code> <a class="header-anchor" href="#isxdefi" aria-label="Permalink to &quot;`isXDEFI`&quot;">​</a></h4><p><code>isXDEFI</code> returns true if the provider is XDEFI.</p><h4 id="connect-promise-publickey-publickey" tabindex="-1"><code>connect(): Promise&lt;{publicKey: PublicKey}&gt;</code> <a class="header-anchor" href="#connect-promise-publickey-publickey" aria-label="Permalink to &quot;`connect(): Promise&lt;{publicKey: PublicKey}&gt;`&quot;">​</a></h4><p>It returns the current PublicKey of the connected account.</p><h4 id="disconnect-promise-void" tabindex="-1"><code>disconnect(): Promise&lt;void&gt;</code> <a class="header-anchor" href="#disconnect-promise-void" aria-label="Permalink to &quot;`disconnect(): Promise&lt;void&gt;`&quot;">​</a></h4><p>Disconnect the wallet.</p><h4 id="signtransaction-transaction-transaction-promise-transaction" tabindex="-1"><code>signTransaction(transaction: Transaction): Promise&lt;Transaction&gt;</code> <a class="header-anchor" href="#signtransaction-transaction-transaction-promise-transaction" aria-label="Permalink to &quot;`signTransaction(transaction: Transaction): Promise&lt;Transaction&gt;`&quot;">​</a></h4><p>Add a signature to <code>@solana/web3.js</code> <code>Transaction</code> object;</p><h4 id="signalltransactions-transactions-transaction-promise-transaction" tabindex="-1"><code>signAllTransactions(transactions: Transaction[]): Promise&lt;Transaction[]&gt;</code> <a class="header-anchor" href="#signalltransactions-transactions-transaction-promise-transaction" aria-label="Permalink to &quot;`signAllTransactions(transactions: Transaction[]): Promise&lt;Transaction[]&gt;`&quot;">​</a></h4><p>Add a signature for each <code>@solana/web3.js</code> <code>Transaction</code> object passed in parameters;</p><h4 id="signmessage-message-string-uint8array-display-displayencoding-undefined-promise-signature-string-publickey-string" tabindex="-1"><code>signMessage(message: string | Uint8Array, display?: DisplayEncoding | undefined): Promise&lt;{signature:string, publicKey: string}&gt;</code> <a class="header-anchor" href="#signmessage-message-string-uint8array-display-displayencoding-undefined-promise-signature-string-publickey-string" aria-label="Permalink to &quot;`signMessage(message: string | Uint8Array, display?: DisplayEncoding | undefined): Promise&lt;{signature:string, publicKey: string}&gt;`&quot;">​</a></h4><p>Returns a <code>signature</code> and the <code>publicKey</code> who signed the <code>message</code>;</p>',18),s=[i];function r(c,d,l,p,h,g){return n(),a("div",null,s)}const f=e(o,[["render",r]]);export{u as __pageData,f as default};
