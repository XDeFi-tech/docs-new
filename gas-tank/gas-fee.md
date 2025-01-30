## **Gas Fee Calculation Across Different Blockchains**

### **1. Overview**
Gas fees represent the cost required to execute transactions on a blockchain. The calculation depends on the blockchain type, gas price, gas limits, and the size of the transaction. This document outlines how gas fees are determined for different types of blockchains.

We use our **fees-service**, a worker-based service that fetches gas prices from blockchain RPC nodes for EVM, UTXO, and other chain types. For Cosmos-based chains, we use a fixed gas price list from the **[chain-registry](https://github.com/cosmos/chain-registry)** package on GitHub.

Gas prices are stored in **Redis**, which serves as a central store for our system. The **fees-service** updates gas prices approximately every **10 seconds** in production.
All fee calculations fetch the latest gas price data from **Redis** and apply chain-specific logic to determine transaction costs.

---

### **2. Gas Tank Platform Business Logic**

##### **Deposit Fees**
- **Deposits are completely free for users.**
- The **Gas Tank Platform (CTRL Wallet)** covers all deposit fees.
- Deposits are supported on the following chains:
    - **Ethereum** (USDC, CTRL)
    - **Avalanche** (USDC)
    - **Polygon** (USDC)
    - **Optimism** (USDC)
    - **Arbitrum** (USDC)
    - **Fantom** (axlUSDC)
    - **Base** (USDC)
- Each deposit consists of **two separate transactions**:
    1. **Permit transaction** – Allows spending of tokens.
    2. **Transfer transaction** – Moves funds into the Gas Tank.
- **CTRL Wallet pays for both transactions**, allowing deposits even if the user has no native tokens on the deposit chain.

##### **Withdrawal & Consume (Send Gas) Fees**
- **Withdrawals and gas consumption (sending gas) are not free**.
- **Users must have sufficient balance** in the Gas Tank to cover transaction fees.
- The system supports USDC, CTRL, and axlUSDC as balance types.
- **Fee Calculation Steps:**
    1. Determine the **transaction fee** for the destination chain.
    2. Convert the fee to a supported token (USDC, CTRL, axlUSDC).
    3. Check if the user has enough balance to cover the fee.
    4. Execute the transaction on the destination chain.
    5. Deduct the transaction fee from the user's Gas Tank balance.

##### **Internal Transfers & Migrations**
- **Internal transfers and wallet migrations are completely free**.
- These actions **do not involve blockchain transactions** and are processed entirely within the Gas Tank Platform.
- No fees are required, as no on-chain transactions occur.

---


### **3. Fee Calculation by Chain Type**

##### **A. EVM-Based Blockchains (Ethereum, Polygon, BSC, etc.)**
EVM-based chains follow two main fee models:

###### **1. EIP-1559 Fee Model (Ethereum, Polygon, Arbitrum, Optimism, etc.)**
- Uses **Base Fee + Priority Tip**.
- The total fee is calculated as:
  ```
  Total Fee = Gas Used × (Max Fee Per Gas + Priority Tip)
  ```
- The `maxFeePerGas` and `priorityTip` values are dynamically adjusted based on network demand.

###### **2. Legacy Gas Price Model (BSC, zkSync, Aurora, etc.)**
- Uses a simple formula:
  ```
  Total Fee = Gas Used × Gas Price
  ```
- The `gasPrice` is a fixed amount set by the network or suggested by wallets.

✅ **How We Calculate Fees:**
1. Fetch the latest gas price from Redis.
2. Multiply the gas price by the chain’s predefined **gas limit** (e.g., 21,000 for ETH transfers).
3. Convert the fee into the desired token.

##### **B. UTXO-Based Blockchains (Bitcoin, Litecoin, Dogecoin, etc.)**
UTXO-based chains use a different fee model where fees depend on the **size** of the transaction in bytes rather than computational effort.

- **Formula:**
  ```
  Total Fee = Transaction Size × Fee Rate (per byte)
  ```
- Example:
- If a Bitcoin transaction is **226 bytes** and the fee rate is **50 satoshis/byte**, the total fee is:
  ```
  226 × 50 = 11,300 satoshis (or 0.000113 BTC)
  ```

✅ **How We Calculate Fees:**
1. Fetch the fee rate (satoshis per byte) from Redis.
2. Multiply by the standard transaction size (e.g., **226 bytes for Bitcoin**).
3. Convert the fee into the desired token.

##### **C. Solana**
- Solana uses a **fixed fee model** where transaction fees are predefined by the network.
- Solana fees are generally very low (e.g., 0.000005 SOL per transaction).

✅ **How We Calculate Fees:**
1. Fetch the standard Solana transaction fee from Redis.
2. Convert it into the desired token if necessary.

##### **D. Cosmos-Based Chains (Osmosis, Terra, Cosmos Hub, etc.)**
- Cosmos chains use a **gas limit × gas price** model similar to EVM chains.
- However, the **gas limit varies** based on the complexity of the transaction.

✅ **How We Calculate Fees:**
1. Fetch the gas price from Redis.
2. Multiply it by the predefined **gas limit** for the specific Cosmos chain.
3. Convert the fee into the desired token.

##### **E. Near Protocol**
- Near’s gas fees are based on a **fixed gas unit model**.
- The base fee is calculated using **Tgas (teragas)**, where **1 Tgas = 0.0001 Ⓝ NEAR**.

✅ **How We Calculate Fees:**
1. Multiply the gas price by **Near’s predefined gas limit** (e.g., **150 Tgas** for simple transactions).
2. Convert to the desired token.

##### **F. Multi-Chain Protocols (ThorChain, MayaChain)**
- These protocols have a **fixed native transaction fee**.
- The fee amount is the same regardless of transaction complexity.

✅ **How We Calculate Fees:**
1. Fetch the fixed **native transaction fee** from Redis.
2. Convert to the desired token.

### **4. Fee Conversion to Other Tokens**
Since fees are usually quoted in the blockchain’s native currency, they may need to be converted into another token.

- Formula:
  ```
  Converted Fee = Raw Fee (native token) * Exchange Rate (Target Token Price)
  ```
- Example:
- If the Ethereum gas fee is **0.001 ETH** and **ETH = $2,500**, the fee in USDC:
  ```
  0.001 × 2500 = 2.5 USDC
  ```

✅ **How We Convert Fees:**
1. Fetch exchange rates for the given tokens.
2. Convert the calculated fee into the desired token.

### **5. Error Handling**
- If **gas price data** is unavailable → return an error (`Gas price not found`).
- If **gas limit is missing** → return an error (`Gas limit not found`).
- If **the chain is unsupported** → return an error (`Unsupported chain`).

### **6. Summary**
- **Fees are calculated using real-time or pre-defined gas prices**.
- **Redis is the main data store**, populated by the **fees-service**.
- **Update intervals vary**, with EVM chains getting the most frequent updates (every 10 seconds).

| **Blockchain Type**  | **Fee Model** | **Formula** |
|----------------------|--------------|------------|
| **EVM (Ethereum, BSC, Polygon, etc.)** | Gas Limit × Gas Price | `Gas Used × Gas Price` |
| **Bitcoin, Litecoin, Dogecoin (UTXO)** | Fee per byte | `Transaction Size × Fee Rate` |
| **Solana** | Fixed Fee | `Fixed amount per transaction` |
| **Cosmos (Osmosis, Terra, etc.)** | Gas Limit × Gas Price | `Gas Used × Gas Price` |
| **Near Protocol** | Fixed Gas Units | `Gas Used × Gas Price (Tgas)` |
| **Multi-Chain (ThorChain, MayaChain)** | Fixed Fee | `Fixed amount per transaction` |

---

This document provides a complete overview of **gas fees and business logic within the Gas Tank Platform**. 🚀
