import React from "react";

const DetectWallet = ({network}) => {
  const detectWallet = async () => {
    if (
      (typeof window.ethereum !== "undefined" && window.ethereum._XDEFI) ||
      window.xfi
    ) {
      switch (network) {
        case "ethereum":
          await window.ethereum
            .request({ method: "eth_accounts" })
            .then((result) => {
              alert("XDEFI Wallet detected!\nAddress: " + result[0]);
              return;
            })
            .catch((err) => {
              alert("Error connecting wallet:", err);
              return;
            });
          break;
        default:
          alert("Network not supported!");
          return;
      }
    } else {
      alert("XDEFI Wallet not detected!");
    }
  };

  return (
    <div className="flex justify-center">
      <button
        className="flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded"
        onClick={detectWallet}
      >
        Detect Wallet
      </button>
    </div>
  );
};

export default DetectWallet;
