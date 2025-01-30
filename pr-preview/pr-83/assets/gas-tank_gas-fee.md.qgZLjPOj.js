import{_ as e,c as t,o as a,U as s}from"./chunks/framework.-7HmjbHR.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":" | Ctrl Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"gas-tank/gas-fee.md","filePath":"gas-tank/gas-fee.md","lastUpdated":1738271089000}'),o={name:"gas-tank/gas-fee.md"},n=s('<h2 id="gas-fee-calculation-across-different-blockchains" tabindex="-1"><strong>Gas Fee Calculation Across Different Blockchains</strong> <a class="header-anchor" href="#gas-fee-calculation-across-different-blockchains" aria-label="Permalink to &quot;**Gas Fee Calculation Across Different Blockchains**&quot;">​</a></h2><h3 id="_1-overview" tabindex="-1"><strong>1. Overview</strong> <a class="header-anchor" href="#_1-overview" aria-label="Permalink to &quot;**1. Overview**&quot;">​</a></h3><p>Gas fees represent the cost required to execute transactions on a blockchain. The calculation depends on the blockchain type, gas price, gas limits, and the size of the transaction. This document outlines how gas fees are determined for different types of blockchains.</p><p>We use our <strong>fees-service</strong>, a worker-based service that fetches gas prices from blockchain RPC nodes for EVM, UTXO, and other chain types. For Cosmos-based chains, we use a fixed gas price list from the <strong><a href="https://github.com/cosmos/chain-registry" target="_blank" rel="noreferrer">chain-registry</a></strong> package on GitHub.</p><p>Gas prices are stored in <strong>Redis</strong>, which serves as a central store for our system. The <strong>fees-service</strong> updates gas prices approximately every <strong>10 seconds</strong> in production. All fee calculations fetch the latest gas price data from <strong>Redis</strong> and apply chain-specific logic to determine transaction costs.</p><hr><h3 id="_2-gas-tank-platform-business-logic" tabindex="-1"><strong>2. Gas Tank Platform Business Logic</strong> <a class="header-anchor" href="#_2-gas-tank-platform-business-logic" aria-label="Permalink to &quot;**2. Gas Tank Platform Business Logic**&quot;">​</a></h3><h5 id="deposit-fees" tabindex="-1"><strong>Deposit Fees</strong> <a class="header-anchor" href="#deposit-fees" aria-label="Permalink to &quot;**Deposit Fees**&quot;">​</a></h5><ul><li><strong>Deposits are completely free for users.</strong></li><li>The <strong>Gas Tank Platform (CTRL Wallet)</strong> covers all deposit fees.</li><li>Deposits are supported on the following chains: <ul><li><strong>Ethereum</strong> (USDC, CTRL)</li><li><strong>Avalanche</strong> (USDC)</li><li><strong>Polygon</strong> (USDC)</li><li><strong>Optimism</strong> (USDC)</li><li><strong>Arbitrum</strong> (USDC)</li><li><strong>Fantom</strong> (axlUSDC)</li><li><strong>Base</strong> (USDC)</li></ul></li><li>Each deposit consists of <strong>two separate transactions</strong>: <ol><li><strong>Permit transaction</strong> – Allows spending of tokens.</li><li><strong>Transfer transaction</strong> – Moves funds into the Gas Tank.</li></ol></li><li><strong>CTRL Wallet pays for both transactions</strong>, allowing deposits even if the user has no native tokens on the deposit chain.</li></ul><h5 id="withdrawal-consume-send-gas-fees" tabindex="-1"><strong>Withdrawal &amp; Consume (Send Gas) Fees</strong> <a class="header-anchor" href="#withdrawal-consume-send-gas-fees" aria-label="Permalink to &quot;**Withdrawal &amp; Consume (Send Gas) Fees**&quot;">​</a></h5><ul><li><strong>Withdrawals and gas consumption (sending gas) are not free</strong>.</li><li><strong>Users must have sufficient balance</strong> in the Gas Tank to cover transaction fees.</li><li>The system supports USDC, CTRL, and axlUSDC as balance types.</li><li><strong>Fee Calculation Steps:</strong><ol><li>Determine the <strong>transaction fee</strong> for the destination chain.</li><li>Convert the fee to a supported token (USDC, CTRL, axlUSDC).</li><li>Check if the user has enough balance to cover the fee.</li><li>Execute the transaction on the destination chain.</li><li>Deduct the transaction fee from the user&#39;s Gas Tank balance.</li></ol></li></ul><h5 id="internal-transfers-migrations" tabindex="-1"><strong>Internal Transfers &amp; Migrations</strong> <a class="header-anchor" href="#internal-transfers-migrations" aria-label="Permalink to &quot;**Internal Transfers &amp; Migrations**&quot;">​</a></h5><ul><li><strong>Internal transfers and wallet migrations are completely free</strong>.</li><li>These actions <strong>do not involve blockchain transactions</strong> and are processed entirely within the Gas Tank Platform.</li><li>No fees are required, as no on-chain transactions occur.</li></ul><hr><h3 id="_3-fee-calculation-by-chain-type" tabindex="-1"><strong>3. Fee Calculation by Chain Type</strong> <a class="header-anchor" href="#_3-fee-calculation-by-chain-type" aria-label="Permalink to &quot;**3. Fee Calculation by Chain Type**&quot;">​</a></h3><h5 id="a-evm-based-blockchains-ethereum-polygon-bsc-etc" tabindex="-1"><strong>A. EVM-Based Blockchains (Ethereum, Polygon, BSC, etc.)</strong> <a class="header-anchor" href="#a-evm-based-blockchains-ethereum-polygon-bsc-etc" aria-label="Permalink to &quot;**A. EVM-Based Blockchains (Ethereum, Polygon, BSC, etc.)**&quot;">​</a></h5><p>EVM-based chains follow two main fee models:</p><h6 id="_1-eip-1559-fee-model-ethereum-polygon-arbitrum-optimism-etc" tabindex="-1"><strong>1. EIP-1559 Fee Model (Ethereum, Polygon, Arbitrum, Optimism, etc.)</strong> <a class="header-anchor" href="#_1-eip-1559-fee-model-ethereum-polygon-arbitrum-optimism-etc" aria-label="Permalink to &quot;**1. EIP-1559 Fee Model (Ethereum, Polygon, Arbitrum, Optimism, etc.)**&quot;">​</a></h6><ul><li>Uses <strong>Base Fee + Priority Tip</strong>.</li><li>The total fee is calculated as:<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Total Fee = Gas Used × (Max Fee Per Gas + Priority Tip)</span></span></code></pre></div></li><li>The <code>maxFeePerGas</code> and <code>priorityTip</code> values are dynamically adjusted based on network demand.</li></ul><h6 id="_2-legacy-gas-price-model-bsc-zksync-aurora-etc" tabindex="-1"><strong>2. Legacy Gas Price Model (BSC, zkSync, Aurora, etc.)</strong> <a class="header-anchor" href="#_2-legacy-gas-price-model-bsc-zksync-aurora-etc" aria-label="Permalink to &quot;**2. Legacy Gas Price Model (BSC, zkSync, Aurora, etc.)**&quot;">​</a></h6><ul><li>Uses a simple formula:<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Total Fee = Gas Used × Gas Price</span></span></code></pre></div></li><li>The <code>gasPrice</code> is a fixed amount set by the network or suggested by wallets.</li></ul><p>✅ <strong>How We Calculate Fees:</strong></p><ol><li>Fetch the latest gas price from Redis.</li><li>Multiply the gas price by the chain’s predefined <strong>gas limit</strong> (e.g., 21,000 for ETH transfers).</li><li>Convert the fee into the desired token.</li></ol><h5 id="b-utxo-based-blockchains-bitcoin-litecoin-dogecoin-etc" tabindex="-1"><strong>B. UTXO-Based Blockchains (Bitcoin, Litecoin, Dogecoin, etc.)</strong> <a class="header-anchor" href="#b-utxo-based-blockchains-bitcoin-litecoin-dogecoin-etc" aria-label="Permalink to &quot;**B. UTXO-Based Blockchains (Bitcoin, Litecoin, Dogecoin, etc.)**&quot;">​</a></h5><p>UTXO-based chains use a different fee model where fees depend on the <strong>size</strong> of the transaction in bytes rather than computational effort.</p><ul><li><strong>Formula:</strong><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Total Fee = Transaction Size × Fee Rate (per byte)</span></span></code></pre></div></li><li>Example:</li><li>If a Bitcoin transaction is <strong>226 bytes</strong> and the fee rate is <strong>50 satoshis/byte</strong>, the total fee is:<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>226 × 50 = 11,300 satoshis (or 0.000113 BTC)</span></span></code></pre></div></li></ul><p>✅ <strong>How We Calculate Fees:</strong></p><ol><li>Fetch the fee rate (satoshis per byte) from Redis.</li><li>Multiply by the standard transaction size (e.g., <strong>226 bytes for Bitcoin</strong>).</li><li>Convert the fee into the desired token.</li></ol><h5 id="c-solana" tabindex="-1"><strong>C. Solana</strong> <a class="header-anchor" href="#c-solana" aria-label="Permalink to &quot;**C. Solana**&quot;">​</a></h5><ul><li>Solana uses a <strong>fixed fee model</strong> where transaction fees are predefined by the network.</li><li>Solana fees are generally very low (e.g., 0.000005 SOL per transaction).</li></ul><p>✅ <strong>How We Calculate Fees:</strong></p><ol><li>Fetch the standard Solana transaction fee from Redis.</li><li>Convert it into the desired token if necessary.</li></ol><h5 id="d-cosmos-based-chains-osmosis-terra-cosmos-hub-etc" tabindex="-1"><strong>D. Cosmos-Based Chains (Osmosis, Terra, Cosmos Hub, etc.)</strong> <a class="header-anchor" href="#d-cosmos-based-chains-osmosis-terra-cosmos-hub-etc" aria-label="Permalink to &quot;**D. Cosmos-Based Chains (Osmosis, Terra, Cosmos Hub, etc.)**&quot;">​</a></h5><ul><li>Cosmos chains use a <strong>gas limit × gas price</strong> model similar to EVM chains.</li><li>However, the <strong>gas limit varies</strong> based on the complexity of the transaction.</li></ul><p>✅ <strong>How We Calculate Fees:</strong></p><ol><li>Fetch the gas price from Redis.</li><li>Multiply it by the predefined <strong>gas limit</strong> for the specific Cosmos chain.</li><li>Convert the fee into the desired token.</li></ol><h5 id="e-near-protocol" tabindex="-1"><strong>E. Near Protocol</strong> <a class="header-anchor" href="#e-near-protocol" aria-label="Permalink to &quot;**E. Near Protocol**&quot;">​</a></h5><ul><li>Near’s gas fees are based on a <strong>fixed gas unit model</strong>.</li><li>The base fee is calculated using <strong>Tgas (teragas)</strong>, where <strong>1 Tgas = 0.0001 Ⓝ NEAR</strong>.</li></ul><p>✅ <strong>How We Calculate Fees:</strong></p><ol><li>Multiply the gas price by <strong>Near’s predefined gas limit</strong> (e.g., <strong>150 Tgas</strong> for simple transactions).</li><li>Convert to the desired token.</li></ol><h5 id="f-multi-chain-protocols-thorchain-mayachain" tabindex="-1"><strong>F. Multi-Chain Protocols (ThorChain, MayaChain)</strong> <a class="header-anchor" href="#f-multi-chain-protocols-thorchain-mayachain" aria-label="Permalink to &quot;**F. Multi-Chain Protocols (ThorChain, MayaChain)**&quot;">​</a></h5><ul><li>These protocols have a <strong>fixed native transaction fee</strong>.</li><li>The fee amount is the same regardless of transaction complexity.</li></ul><p>✅ <strong>How We Calculate Fees:</strong></p><ol><li>Fetch the fixed <strong>native transaction fee</strong> from Redis.</li><li>Convert to the desired token.</li></ol><h3 id="_4-fee-conversion-to-other-tokens" tabindex="-1"><strong>4. Fee Conversion to Other Tokens</strong> <a class="header-anchor" href="#_4-fee-conversion-to-other-tokens" aria-label="Permalink to &quot;**4. Fee Conversion to Other Tokens**&quot;">​</a></h3><p>Since fees are usually quoted in the blockchain’s native currency, they may need to be converted into another token.</p><ul><li>Formula:<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Converted Fee = Raw Fee (native token) * Exchange Rate (Target Token Price)</span></span></code></pre></div></li><li>Example:</li><li>If the Ethereum gas fee is <strong>0.001 ETH</strong> and <strong>ETH = $2,500</strong>, the fee in USDC:<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>0.001 × 2500 = 2.5 USDC</span></span></code></pre></div></li></ul><p>✅ <strong>How We Convert Fees:</strong></p><ol><li>Fetch exchange rates for the given tokens.</li><li>Convert the calculated fee into the desired token.</li></ol><h3 id="_5-error-handling" tabindex="-1"><strong>5. Error Handling</strong> <a class="header-anchor" href="#_5-error-handling" aria-label="Permalink to &quot;**5. Error Handling**&quot;">​</a></h3><ul><li>If <strong>gas price data</strong> is unavailable → return an error (<code>Gas price not found</code>).</li><li>If <strong>gas limit is missing</strong> → return an error (<code>Gas limit not found</code>).</li><li>If <strong>the chain is unsupported</strong> → return an error (<code>Unsupported chain</code>).</li></ul><h3 id="_6-summary" tabindex="-1"><strong>6. Summary</strong> <a class="header-anchor" href="#_6-summary" aria-label="Permalink to &quot;**6. Summary**&quot;">​</a></h3><ul><li><strong>Fees are calculated using real-time or pre-defined gas prices</strong>.</li><li><strong>Redis is the main data store</strong>, populated by the <strong>fees-service</strong>.</li><li><strong>Update intervals vary</strong>, with EVM chains getting the most frequent updates (every 10 seconds).</li></ul><table><thead><tr><th><strong>Blockchain Type</strong></th><th><strong>Fee Model</strong></th><th><strong>Formula</strong></th></tr></thead><tbody><tr><td><strong>EVM (Ethereum, BSC, Polygon, etc.)</strong></td><td>Gas Limit × Gas Price</td><td><code>Gas Used × Gas Price</code></td></tr><tr><td><strong>Bitcoin, Litecoin, Dogecoin (UTXO)</strong></td><td>Fee per byte</td><td><code>Transaction Size × Fee Rate</code></td></tr><tr><td><strong>Solana</strong></td><td>Fixed Fee</td><td><code>Fixed amount per transaction</code></td></tr><tr><td><strong>Cosmos (Osmosis, Terra, etc.)</strong></td><td>Gas Limit × Gas Price</td><td><code>Gas Used × Gas Price</code></td></tr><tr><td><strong>Near Protocol</strong></td><td>Fixed Gas Units</td><td><code>Gas Used × Gas Price (Tgas)</code></td></tr><tr><td><strong>Multi-Chain (ThorChain, MayaChain)</strong></td><td>Fixed Fee</td><td><code>Fixed amount per transaction</code></td></tr></tbody></table><hr><p>This document provides a complete overview of <strong>gas fees and business logic within the Gas Tank Platform</strong>. 🚀</p>',56),i=[n];function r(l,c,d,h,g,p){return a(),t("div",null,i)}const f=e(o,[["render",r]]);export{m as __pageData,f as default};
