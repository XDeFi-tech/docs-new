import{_ as t,c as a,o as n,U as s}from"./chunks/framework.qmyuZkAz.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":" | Ctrl Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"gas-tank/gas-tank-platform.md","filePath":"gas-tank/gas-tank-platform.md","lastUpdated":1742900885000}'),e={name:"gas-tank/gas-tank-platform.md"},r=s('<h2 id="gas-tank-platform-actions" tabindex="-1"><strong>Gas Tank Platform Actions</strong> <a class="header-anchor" href="#gas-tank-platform-actions" aria-label="Permalink to &quot;**Gas Tank Platform Actions**&quot;">​</a></h2><h3 id="_1-overview" tabindex="-1"><strong>1. Overview</strong> <a class="header-anchor" href="#_1-overview" aria-label="Permalink to &quot;**1. Overview**&quot;">​</a></h3><p>The Gas Tank platform provides users with an efficient way to manage their balances across multiple blockchain networks. It allows users to:</p><ul><li><strong>Deposit funds</strong> into Gas Tank for future use.</li><li><strong>Withdraw or transfer tokens</strong> to an on-chain address.</li><li><strong>Consume (Send Gas)</strong> to exchange stored tokens for native gas fees.</li><li><strong>Perform internal transfers &amp; migrations</strong> between Gas Tank accounts.</li></ul><p>Gas Tank ensures seamless cross-chain operations while managing transaction execution, fee coverage, and user balance tracking.</p><hr><h3 id="_2-deposit-in-gas-tank-platform" tabindex="-1"><strong>2. Deposit in Gas Tank Platform</strong> <a class="header-anchor" href="#_2-deposit-in-gas-tank-platform" aria-label="Permalink to &quot;**2. Deposit in Gas Tank Platform**&quot;">​</a></h3><p>A <strong>Deposit</strong> is the process of moving user funds into the Gas Tank system. This is done via a <strong>Permit + Transfer From</strong> transaction, allowing the Gas Tank to manage user balances for future transactions.</p><h4 id="key-points" tabindex="-1"><strong>Key Points</strong> <a class="header-anchor" href="#key-points" aria-label="Permalink to &quot;**Key Points**&quot;">​</a></h4><p>✅ <strong>Deposits are completely free for users</strong> – <strong>CTRL Wallet</strong> covers all gas fees.<br> ✅ <strong>A deposit consists of two transactions</strong> – <strong>Permit + Transfer From</strong>.<br> ✅ <strong>Deposited funds become available after confirmation</strong>.</p><h4 id="supported-deposit-chains-tokens" tabindex="-1"><strong>Supported Deposit Chains &amp; Tokens</strong> <a class="header-anchor" href="#supported-deposit-chains-tokens" aria-label="Permalink to &quot;**Supported Deposit Chains &amp; Tokens**&quot;">​</a></h4><table><thead><tr><th>Chain</th><th>Supported Tokens</th></tr></thead><tbody><tr><td>Ethereum</td><td>USDC, CTRL</td></tr><tr><td>Avalanche</td><td>USDC</td></tr><tr><td>Polygon</td><td>USDC</td></tr><tr><td>Optimism</td><td>USDC</td></tr><tr><td>Arbitrum</td><td>USDC</td></tr><tr><td>Fantom</td><td>axlUSDC</td></tr><tr><td>Base</td><td>USDC</td></tr></tbody></table><h4 id="deposit-process" tabindex="-1"><strong>Deposit Process</strong> <a class="header-anchor" href="#deposit-process" aria-label="Permalink to &quot;**Deposit Process**&quot;">​</a></h4><ol><li><strong>User selects a chain and token</strong> from the supported list.</li><li><strong>User signs a Permit transaction</strong>, allowing Gas Tank to spend the selected token.</li><li><strong>Gas Tank backend creates a Balance Update Queue (BUQ) task</strong> to process the deposit.</li><li><strong>Workers execute the deposit</strong>: <ul><li><strong>Step 1:</strong> Execute the <strong>Permit</strong> transaction and verify token allowance.</li><li><strong>Step 2:</strong> Execute the <strong>Transfer From</strong> transaction, moving funds to Gas Tank.</li><li><strong>Step 3:</strong> Store deposited funds as <strong>pending balance</strong>.</li></ul></li><li><strong>Confirmation Worker verifies the deposit</strong>: <ul><li>Once confirmed on-chain, pending balance is converted into <strong>available balance</strong>.</li></ul></li><li><strong>Users can now spend their Gas Tank balance</strong> for withdrawals or gas consumption.</li></ol><p>🚨 <strong>Note:</strong> Transactions may fail due to various reasons (e.g., insufficient allowance, network issues). Error handling is covered in a separate section.</p><hr><h3 id="_3-withdraw-transfer-in-gas-tank-platform" tabindex="-1"><strong>3. Withdraw/Transfer in Gas Tank Platform</strong> <a class="header-anchor" href="#_3-withdraw-transfer-in-gas-tank-platform" aria-label="Permalink to &quot;**3. Withdraw/Transfer in Gas Tank Platform**&quot;">​</a></h3><p>A <strong>Withdrawal</strong> allows users to transfer their funds from the Gas Tank back to an on-chain address. <strong>Users must pay gas fees</strong>, which are deducted from their Gas Tank balance.</p><h4 id="key-points-1" tabindex="-1"><strong>Key Points</strong> <a class="header-anchor" href="#key-points-1" aria-label="Permalink to &quot;**Key Points**&quot;">​</a></h4><p>✅ <strong>Users pay gas fees for withdrawals</strong> (calculated based on destination chain).<br> ✅ <strong>Supports cross-chain withdrawals</strong> in the latest version.<br> ✅ <strong>Only deposit-supported chains and tokens can be withdrawn</strong>.</p><h4 id="understanding-withdrawals" tabindex="-1"><strong>Understanding Withdrawals</strong> <a class="header-anchor" href="#understanding-withdrawals" aria-label="Permalink to &quot;**Understanding Withdrawals**&quot;">​</a></h4><p>Before withdrawing, users should understand:</p><ul><li><strong>How deposits work and how balances are stored</strong>.</li><li><strong>How transaction fees are deducted from Gas Tank balances</strong>.</li></ul><h4 id="withdrawal-process" tabindex="-1"><strong>Withdrawal Process</strong> <a class="header-anchor" href="#withdrawal-process" aria-label="Permalink to &quot;**Withdrawal Process**&quot;">​</a></h4><ol><li><strong>User requests a withdrawal</strong>: <ul><li>Selects the <strong>destination chain</strong> and <strong>desired token</strong>.</li><li>Specifies the <strong>amount to withdraw</strong>.</li></ul></li><li><strong>Gas Tank calculates the transaction fee</strong>: <ul><li>Determines the <strong>native gas fee</strong> required.</li><li>Converts it into one of the <strong>user’s available Gas Tank tokens (USDC, CTRL, axlUSDC)</strong>.</li><li>If the user <strong>does not have enough balance</strong>, the transaction fails.</li></ul></li><li><strong>Gas Tank backend creates a withdrawal task</strong>.</li><li><strong>Worker executes the withdrawal transaction</strong>.</li><li><strong>User receives their funds</strong> on the destination blockchain.</li></ol><h4 id="withdrawal-versions" tabindex="-1"><strong>Withdrawal Versions</strong> <a class="header-anchor" href="#withdrawal-versions" aria-label="Permalink to &quot;**Withdrawal Versions**&quot;">​</a></h4><table><thead><tr><th>Version</th><th>Endpoint</th><th>Features</th></tr></thead><tbody><tr><td><strong>V1 - Withdraw (Deprecated)</strong></td><td><code>/balances/withdraw</code></td><td>Only allows withdrawing tokens from the <strong>same chain</strong> as the deposit. Example: If a user deposits <strong>CTRL on Ethereum</strong>, they can only withdraw <strong>CTRL on Ethereum</strong>.</td></tr><tr><td><strong>V2 - Transfer (Active)</strong></td><td><code>/v2/balances/consume</code></td><td>Why is it called &quot;Consume&quot; instead of &quot;Withdraw&quot;? This version combines Withdrawals and Gas Sending (Consume) into one endpoint. Supports <strong>cross-chain withdrawals</strong>. Works like a <strong>Swap</strong>, allowing users to withdraw to different chains.</td></tr></tbody></table><p>🚨 <strong>Note:</strong> If the Gas Tank lacks native gas on the destination chain, the transaction will fail.</p><hr><h3 id="_4-consume-send-gas-in-gas-tank-platform" tabindex="-1"><strong>4. Consume (Send Gas) in Gas Tank Platform</strong> <a class="header-anchor" href="#_4-consume-send-gas-in-gas-tank-platform" aria-label="Permalink to &quot;**4. Consume (Send Gas) in Gas Tank Platform**&quot;">​</a></h3><p><strong>Consume (Send Gas)</strong> allows users to exchange their <strong>Gas Tank tokens (CTRL, USDC, axlUSDC)</strong> for <strong>native gas tokens</strong> on <strong>40+ supported chains</strong>.</p><h4 id="key-points-2" tabindex="-1"><strong>Key Points</strong> <a class="header-anchor" href="#key-points-2" aria-label="Permalink to &quot;**Key Points**&quot;">​</a></h4><p>✅ <strong>Users can get native gas coins</strong> to fund on-chain transactions.<br> ✅ <strong>Supports EVM, UTXO, Cosmos, Solana, Near, ThorChain, Tron, etc.</strong><br> ✅ <strong>Transaction fees apply</strong> (similar to withdrawals).</p><h4 id="consume-process" tabindex="-1"><strong>Consume Process</strong> <a class="header-anchor" href="#consume-process" aria-label="Permalink to &quot;**Consume Process**&quot;">​</a></h4><ol><li><strong>User selects the destination chain</strong> where they need native gas.</li><li><strong>Gas Tank checks available balance</strong> and calculates transaction cost.</li><li><strong>System converts user’s Gas Tank balance (USDC, CTRL, axlUSDC) into native gas tokens</strong>.</li><li><strong>Worker executes the gas transfer transaction</strong>.</li><li><strong>User receives the native token</strong> on the destination chain.</li></ol><p>🚨 <strong>Note:</strong> If the destination chain lacks sufficient native tokens, the transaction will fail.</p><hr><h3 id="_5-internal-transfer-migration" tabindex="-1"><strong>5. Internal Transfer &amp; Migration</strong> <a class="header-anchor" href="#_5-internal-transfer-migration" aria-label="Permalink to &quot;**5. Internal Transfer &amp; Migration**&quot;">​</a></h3><p>These actions allow users to <strong>move balances between Gas Tank accounts</strong> without performing an on-chain transaction. <strong>Internal transfers are free</strong>.</p><h4 id="internal-transfer" tabindex="-1"><strong>Internal Transfer</strong> <a class="header-anchor" href="#internal-transfer" aria-label="Permalink to &quot;**Internal Transfer**&quot;">​</a></h4><ul><li><strong>Endpoint:</strong> <code>/balances/internal_transfer</code></li><li><strong>Allows users to:</strong><ul><li>Select <strong>chain, token, amount, and destination address</strong>.</li><li><strong>Sign a message</strong> to authorize Gas Tank to execute the transfer.</li><li><strong>Transfer is processed instantly</strong> (since it’s internal).</li></ul></li></ul><h4 id="internal-migration" tabindex="-1"><strong>Internal Migration</strong> <a class="header-anchor" href="#internal-migration" aria-label="Permalink to &quot;**Internal Migration**&quot;">​</a></h4><ul><li><strong>Endpoint:</strong> <code>/balances/internal-migration</code></li><li><strong>Allows users to:</strong><ul><li>Migrate their entire balance from <strong>Wallet A → Wallet B</strong> within Gas Tank.</li><li><strong>Gas Tank automatically calculates the full balance</strong> and prepares the migration.</li><li><strong>After execution, all balances are transferred</strong>, and Wallet A’s balance is set to <strong>zero</strong>.</li></ul></li></ul><p>🚨 <strong>Note:</strong> Internal transfers/migrations <strong>do not require blockchain transactions</strong> and <strong>are always free</strong>.</p><hr><h3 id="_6-execution-processing" tabindex="-1"><strong>6. Execution &amp; Processing</strong> <a class="header-anchor" href="#_6-execution-processing" aria-label="Permalink to &quot;**6. Execution &amp; Processing**&quot;">​</a></h3><p>Regardless of the action type (Deposit, Withdraw, Consume, Internal Transfer):</p><ul><li><strong>A Balance Update Queue (BUQ) is created</strong>, returning a <strong>BUQ ID</strong>.</li><li><strong>Tasks are added to the queue</strong> and processed by workers.</li><li><strong>Execution time depends on the destination chain</strong> (chain for Deposits, destination chain for Withdraws/Consumes).</li><li><strong>Multiple actions can be executed simultaneously</strong>, ensuring efficient user balance management.</li></ul><hr><h3 id="_7-summary" tabindex="-1"><strong>7. Summary</strong> <a class="header-anchor" href="#_7-summary" aria-label="Permalink to &quot;**7. Summary**&quot;">​</a></h3><table><thead><tr><th>Action</th><th>Free for Users?</th><th>Requires Blockchain Transaction?</th><th>Paid by User?</th></tr></thead><tbody><tr><td><strong>Deposit</strong></td><td>✅ Yes</td><td>✅ Yes (Permit + Transfer)</td><td>❌ No (Paid by CTRL Wallet)</td></tr><tr><td><strong>Withdrawal (Transfer)</strong></td><td>❌ No</td><td>✅ Yes</td><td>✅ Yes (Gas Fee Deducted)</td></tr><tr><td><strong>Consume (Send Gas)</strong></td><td>❌ No</td><td>✅ Yes</td><td>✅ Yes (Gas Fee Deducted)</td></tr><tr><td><strong>Internal Transfer</strong></td><td>✅ Yes</td><td>❌ No</td><td>❌ No</td></tr><tr><td><strong>Internal Migration</strong></td><td>✅ Yes</td><td>❌ No</td><td>❌ No</td></tr></tbody></table><hr><p>This document provides a <strong>detailed yet easy-to-read</strong> overview of <strong>Gas Tank actions</strong> including Deposits, Withdrawals, Consume, and Internal Transfers. 🚀</p>',53),o=[r];function i(l,d,g,h,c,u){return n(),a("div",null,o)}const m=t(e,[["render",i]]);export{f as __pageData,m as default};
