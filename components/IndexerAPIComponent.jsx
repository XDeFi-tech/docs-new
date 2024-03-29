import React, { useState, useEffect } from "react";
import { chainsSupported } from "./common.js";

const IndexerAPIComponent = () => {
  const [chainSelected, setChainSelected] = useState(undefined);
  const [address, setAddress] = useState("");

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
    setAddress("");
  }, [chainSelected]);

  useEffect(() => {
    localStorage.setItem("address", address);
  }, [address]);

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-4">
        <span>Chain:</span>
        <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit">
          <select
            id="chain-select"
            name="chain-select"
            className="bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
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
      {chainSelected && (
        <div className="flex items-center gap-4">
          <span>Address:</span>
          <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit">
            <input
              type="text"
              id="address"
              name="Address"
              value={address}
              className="bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
              placeholder="Enter an address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default IndexerAPIComponent;
