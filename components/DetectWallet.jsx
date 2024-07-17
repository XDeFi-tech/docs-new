import React, { useState } from "react";

const DetectWallet = ({ chainId, subChainId }) => {
  const [address, setAddress] = useState(undefined);

  const detectWallet = async () => {
    if (window.xfi) {
      if (!window.xfi[chainId]) {
        alert("Ctrl Wallet not connected to the correct network!");
        return;
      }
      if (chainId === "ethereum") {
        await window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => setAddress(accounts[0]));
        return;
      }
      if (subChainId) {
        await window.xfi.keplr.enable(subChainId);
        const offlineSigner = window.keplr.getOfflineSigner(subChainId);
        await offlineSigner
          .getAccounts()
          .then((accounts) => setAddress(accounts[0].address))
          .catch((error) => console.log(error));
        return;
      }
      await window.xfi[chainId].request(
        { method: "request_accounts", params: [] },
        (error, accounts) => setAddress(accounts[0]),
      );
    } else {
      alert("Ctrl Wallet not detected!");
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <button
          className="flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded"
          onClick={detectWallet}
        >
          Detect Wallet
        </button>
      </div>
      {address && (
        <div className="my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]">
          <div className="px-5 border-b border-[#e2e2e3] dark:border-black">
            <span className="inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]">
              Address
            </span>
          </div>
          <pre className="p-5 max-h-[600px] overflow-auto">{address}</pre>
        </div>
      )}
    </>
  );
};

export default DetectWallet;
