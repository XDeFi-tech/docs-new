## **Gas Tank Platform Actions**

### **1. Overview**
The Gas Tank platform provides users with an efficient way to manage their balances across multiple blockchain networks. It allows users to:
- **Deposit funds** into Gas Tank for future use.
- **Withdraw or transfer tokens** to an on-chain address.
- **Consume (Send Gas)** to exchange stored tokens for native gas fees.
- **Perform internal transfers & migrations** between Gas Tank accounts.

Gas Tank ensures seamless cross-chain operations while managing transaction execution, fee coverage, and user balance tracking.

---

### **2. Deposit in Gas Tank Platform**
A **Deposit** is the process of moving user funds into the Gas Tank system. This is done via a **Permit + Transfer From** transaction, allowing the Gas Tank to manage user balances for future transactions.

#### **Key Points**
✅ **Deposits are completely free for users** – **CTRL Wallet** covers all gas fees.  
✅ **A deposit consists of two transactions** – **Permit + Transfer From**.  
✅ **Deposited funds become available after confirmation**.

#### **Supported Deposit Chains & Tokens**
| Chain       | Supported Tokens |
|------------|----------------|
| Ethereum   | USDC, CTRL |
| Avalanche  | USDC |
| Polygon    | USDC |
| Optimism   | USDC |
| Arbitrum   | USDC |
| Fantom     | axlUSDC |
| Base       | USDC |

#### **Deposit Process**
1. **User selects a chain and token** from the supported list.
2. **User signs a Permit transaction**, allowing Gas Tank to spend the selected token.
3. **Gas Tank backend creates a Balance Update Queue (BUQ) task** to process the deposit.
4. **Workers execute the deposit**:
    - **Step 1:** Execute the **Permit** transaction and verify token allowance.
    - **Step 2:** Execute the **Transfer From** transaction, moving funds to Gas Tank.
    - **Step 3:** Store deposited funds as **pending balance**.
5. **Confirmation Worker verifies the deposit**:
    - Once confirmed on-chain, pending balance is converted into **available balance**.
6. **Users can now spend their Gas Tank balance** for withdrawals or gas consumption.

🚨 **Note:** Transactions may fail due to various reasons (e.g., insufficient allowance, network issues). Error handling is covered in a separate section.

---

### **3. Withdraw/Transfer in Gas Tank Platform**
A **Withdrawal** allows users to transfer their funds from the Gas Tank back to an on-chain address. **Users must pay gas fees**, which are deducted from their Gas Tank balance.

#### **Key Points**
✅ **Users pay gas fees for withdrawals** (calculated based on destination chain).  
✅ **Supports cross-chain withdrawals** in the latest version.  
✅ **Only deposit-supported chains and tokens can be withdrawn**.

#### **Understanding Withdrawals**
Before withdrawing, users should understand:
- **How deposits work and how balances are stored**.
- **How transaction fees are deducted from Gas Tank balances**.

#### **Withdrawal Process**
1. **User requests a withdrawal**:
    - Selects the **destination chain** and **desired token**.
    - Specifies the **amount to withdraw**.
2. **Gas Tank calculates the transaction fee**:
    - Determines the **native gas fee** required.
    - Converts it into one of the **user’s available Gas Tank tokens (USDC, CTRL, axlUSDC)**.
    - If the user **does not have enough balance**, the transaction fails.
3. **Gas Tank backend creates a withdrawal task**.
4. **Worker executes the withdrawal transaction**.
5. **User receives their funds** on the destination blockchain.

#### **Withdrawal Versions**
| Version | Endpoint | Features                                                                                                                                                                                                                                                                                                                                    |
|---------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **V1 - Withdraw (Deprecated)** | `/balances/withdraw` | Only allows withdrawing tokens from the **same chain** as the deposit. Example: If a user deposits **CTRL on Ethereum**, they can only withdraw **CTRL on Ethereum**.                                                                                                                                                                       |
| **V2 - Transfer (Active)** | `/v2/balances/consume` | Why is it called "Consume" instead of "Withdraw"? This version combines Withdrawals and Gas Sending (Consume) into one endpoint. Supports **cross-chain withdrawals**. Works like a **Swap**, allowing users to withdraw to different chains. |

🚨 **Note:** If the Gas Tank lacks native gas on the destination chain, the transaction will fail.

---

### **4. Consume (Send Gas) in Gas Tank Platform**
**Consume (Send Gas)** allows users to exchange their **Gas Tank tokens (CTRL, USDC, axlUSDC)** for **native gas tokens** on **40+ supported chains**.

#### **Key Points**
✅ **Users can get native gas coins** to fund on-chain transactions.  
✅ **Supports EVM, UTXO, Cosmos, Solana, ThorChain, Tron, etc.**  
✅ **Transaction fees apply** (similar to withdrawals).

#### **Consume Process**
1. **User selects the destination chain** where they need native gas.
2. **Gas Tank checks available balance** and calculates transaction cost.
3. **System converts user’s Gas Tank balance (USDC, CTRL, axlUSDC) into native gas tokens**.
4. **Worker executes the gas transfer transaction**.
5. **User receives the native token** on the destination chain.

🚨 **Note:** If the destination chain lacks sufficient native tokens, the transaction will fail.

---

### **5. Internal Transfer & Migration**
These actions allow users to **move balances between Gas Tank accounts** without performing an on-chain transaction. **Internal transfers are free**.

#### **Internal Transfer**
- **Endpoint:** `/balances/internal_transfer`
- **Allows users to:**
    - Select **chain, token, amount, and destination address**.
    - **Sign a message** to authorize Gas Tank to execute the transfer.
    - **Transfer is processed instantly** (since it’s internal).

#### **Internal Migration**
- **Endpoint:** `/balances/internal-migration`
- **Allows users to:**
    - Migrate their entire balance from **Wallet A → Wallet B** within Gas Tank.
    - **Gas Tank automatically calculates the full balance** and prepares the migration.
    - **After execution, all balances are transferred**, and Wallet A’s balance is set to **zero**.

🚨 **Note:** Internal transfers/migrations **do not require blockchain transactions** and **are always free**.

---

### **6. Execution & Processing**
Regardless of the action type (Deposit, Withdraw, Consume, Internal Transfer):
- **A Balance Update Queue (BUQ) is created**, returning a **BUQ ID**.
- **Tasks are added to the queue** and processed by workers.
- **Execution time depends on the destination chain** (chain for Deposits, destination chain for Withdraws/Consumes).
- **Multiple actions can be executed simultaneously**, ensuring efficient user balance management.

---

### **7. Summary**
| Action                 | Free for Users? | Requires Blockchain Transaction? | Paid by User? |
|------------------------|---------------|--------------------------------|--------------|
| **Deposit**           | ✅ Yes         | ✅ Yes (Permit + Transfer)   | ❌ No (Paid by CTRL Wallet) |
| **Withdrawal (Transfer)** | ❌ No | ✅ Yes | ✅ Yes (Gas Fee Deducted) |
| **Consume (Send Gas)** | ❌ No | ✅ Yes | ✅ Yes (Gas Fee Deducted) |
| **Internal Transfer**  | ✅ Yes         | ❌ No                         | ❌ No |
| **Internal Migration** | ✅ Yes         | ❌ No                         | ❌ No |

---

This document provides a **detailed yet easy-to-read** overview of **Gas Tank actions** including Deposits, Withdrawals, Consume, and Internal Transfers. 🚀

