import React, { useState, useEffect } from "react";
import LoadingIcon from "../LoadingIcon";
import PlayIcon from "../PlayIcon";
import { cosmosSupportedAssets as assetSupported } from "../common";

const CreateStrideLiquidStakingTx = () => {
  const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const [assetSelected, setAssetSelected] = useState(undefined);
  const [asset, setAsset] = useState(undefined);
  const [recieverStrideAddr, setRecieverStrideAddr] = useState("");
  const [amount, setAmount] = useState("");
  const [senderAddr, setSenderAddr] = useState("");
  const [senderPubkeyHex, setSenderPubkeyHex] = useState("");
  const [timeoutHeight, setTimeoutHeight] = useState("");
  const [gasLimit, setGasLimit] = useState("");

  const resetForm = () => {
    setRecieverStrideAddr("");
    setAmount("");
    setSenderAddr("");
    setSenderPubkeyHex("");
    setTimeoutHeight("");
    setGasLimit("");
  };

  useEffect(() => {
    if (!assetSelected) {
      setAsset(undefined);
    } else {
      assetSupported.find((asset) => {
        if (asset.key === assetSelected) {
          setAsset(asset);
        }
      });
    }
    resetForm();
    setResponse({});
  }, [assetSelected]);

  const testQuery = async () => {
    setLoading(true);
    setResponse({});

    if (!asset) {
      alert("Please select a asset!");
      setLoading(false);
      return;
    }

    if (
      !recieverStrideAddr ||
      !amount ||
      !senderAddr ||
      !senderPubkeyHex ||
      !timeoutHeight ||
      !gasLimit
    ) {
      alert("Please enter all the required fields!");
      setLoading(false);
      return;
    }

    const query = `query CreateStrideLiquidStakingTx($input: StrideStakingInput!) {
      staking {
      createStrideLiquidStakingTx(input: $input)
      }
    }`;

    await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apollographql-client-name": "docs-staking-api",
        "apollographql-client-version": "v1.0",
      },
      body: JSON.stringify({
        query,
        variables: {
          input: {
            recieverStrideAddr: recieverStrideAddr,
            amount: amount,
            senderAddr: senderAddr,
            senderPubkeyHex: senderPubkeyHex,
            asset: asset.key,
            timeoutHeight: timeoutHeight,
            gasLimit: gasLimit,
          },
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        setResponse(result);
      })
      .catch((error) => {
        setResponse(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-10 max-sm:flex-col max-sm:items-start max-sm:gap-4">
          <div className="flex items-center gap-4">
            <span>Asset:</span>
            <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#05C92F] rounded-lg overflow-hidden w-fit">
              <select
                id="asset-select"
                name="asset-select"
                className="bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                onChange={(e) => setAssetSelected(e.target.value)}
              >
                <option value={undefined}>Select a asset</option>
                {assetSupported.map((chain) => (
                  <option key={chain.key} value={chain.key}>
                    {chain.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 max-sm:gap-4">
            <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
              <div className="sm:w-[180px]">Reciever Stride Addres:</div>
              <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#05C92F] rounded-lg overflow-hidden w-fit">
                <input
                  type="text"
                  id="recieverStrideAddr"
                  name="recieverStrideAddr"
                  value={recieverStrideAddr}
                  className="max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter an address"
                  onChange={(e) => setRecieverStrideAddr(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
              <div className="sm:w-[180px]">Amount:</div>
              <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#05C92F] rounded-lg overflow-hidden w-fit">
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={amount}
                  className="max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter amount"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
              <div className="sm:w-[180px]">Sender Address:</div>
              <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#05C92F] rounded-lg overflow-hidden w-fit">
                <input
                  type="text"
                  id="senderAddr"
                  name="senderAddr"
                  value={senderAddr}
                  className="max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter an address"
                  onChange={(e) => setSenderAddr(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
              <div className="sm:w-[180px]">Sender Pubkey Hex:</div>
              <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#05C92F] rounded-lg overflow-hidden w-fit">
                <input
                  type="text"
                  id="senderPubkeyHex"
                  name="senderPubkeyHex"
                  value={senderPubkeyHex}
                  className="max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter a pubkey hex"
                  onChange={(e) => setSenderPubkeyHex(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
              <div className="sm:w-[180px]">Timeout Height:</div>
              <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#05C92F] rounded-lg overflow-hidden w-fit">
                <input
                  type="number"
                  id="timeoutHeight"
                  name="timeoutHeight"
                  value={timeoutHeight}
                  className="max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter timeout height"
                  onChange={(e) => setTimeoutHeight(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
              <div className="sm:w-[180px]">Gas limit:</div>
              <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#05C92F] rounded-lg overflow-hidden w-fit">
                <input
                  type="number"
                  id="gasLimit"
                  name="gasLimit"
                  value={gasLimit}
                  className="max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter gas limit"
                  onChange={(e) => setGasLimit(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={testQuery}
          className="flex justify-center items-center gap-2 bg-[#05C92F] text-[#001405] px-4 py-2 border-solid border-[1px] border-[#001405] rounded-full"
          disabled={loading}
        >
          {loading ? (
            <>
              <LoadingIcon />
              Fetching...
            </>
          ) : (
            <>
              <PlayIcon />
              Test the query
            </>
          )}
        </button>
      </div>
      <div className="my-4 rounded-lg bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]">
        <div className="px-5 border-b border-[#e2e2e3] dark:border-black">
          <span className="inline-block border-b-2 border-[#05C92F] text-[14px] leading-[48px]">
            Response
          </span>
        </div>
        <pre className="p-5 max-h-[600px] overflow-auto">
          {JSON.stringify(response, null, 2)}
        </pre>
      </div>
    </>
  );
};

export default CreateStrideLiquidStakingTx;
