import React, { useState, useEffect } from "react";
import { chainsSupported } from "./common.js";

const IndexerAPIComponent = () => {
  const [chainSelected, setChainSelected] = useState(undefined);

  useEffect(() => {
    if (!chainSelected) {
      localStorage.removeItem("chain");
    } else {
      chainsSupported.find((chain) => {
        if (chain.key === chainSelected) {
          localStorage.setItem("chain", JSON.stringify(chain));
        }
      });
    }
  }, [chainSelected]);

  return (
    <>
      <div className="flex items-center gap-4">
        <span>Please select a chain to interact with the XDEFI Wallet:</span>
        <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit">
          <select
            id="chain-select"
            name="chain-select"
            className="bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            onChange={(e) => setChainSelected(e.target.value)}
          >
            <option value={undefined}>Select a chain</option>
            {chainsSupported.map((chain) => (
              <option key={chain.key} value={chain.key}>
                {chain.label}
                {chain.baseChain && <> ({chain.baseChain})</>}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default IndexerAPIComponent;
