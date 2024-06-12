import React, { useState, useEffect } from "react";
import LoadingIcon from "../LoadingIcon";
import PlayIcon from "../PlayIcon";
import { otherSupportedAssets as assetSupported } from "../common";

const CreateErc20ApproveTx = () => {
  const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const [assetSelected, setAssetSelected] = useState(undefined);
  const [asset, setAsset] = useState(undefined);
  const [fromAddress, setFromAddress] = useState("");
  const [spenderAddress, setSpenderAddress] = useState("");
  const [amount, setAmount] = useState(undefined);
  const [nonce, setNonce] = useState(undefined);

  const resetForm = () => {
    setFromAddress("");
    setSpenderAddress("");
    setAmount(undefined);
    setNonce(undefined);
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

    if (!fromAddress || !spenderAddress || !amount || !nonce) {
      alert("Please enter all the required fields!");
      setLoading(false);
      return;
    }

    const query = `query createErc20ApproveTx($input: Erc20ApproveInput!) {
      staking {
        createErc20ApproveTx(input: $input) {
          chainId
          data
          fromAddress
          nonce
          toAddress
          value
        }
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
            asset: asset.key,
            fromAddress: fromAddress,
            spenderAddress: spenderAddress,
            amount: Number(amount),
            nonce: Number(nonce),
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
            <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit">
              <select
                id="asset-select"
                name="asset-select"
                className="bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                onChange={(e) => setAssetSelected(e.target.value)}
              >
                <option value={undefined}>Select a asset</option>
                <option value={"MATIC_ERC20"}>MATIC_ERC20</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 max-sm:gap-4">
            <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
              <div className="sm:w-[180px]">From Address:</div>
              <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit">
                <input
                  type="text"
                  id="fromAddress"
                  name="fromAddress"
                  value={fromAddress}
                  className="max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter an address"
                  onChange={(e) => setFromAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
              <div className="sm:w-[180px]">Spender Address:</div>
              <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit">
                <input
                  type="text"
                  id="spenderAddress"
                  name="spenderAddress"
                  value={spenderAddress}
                  className="max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter an spender address"
                  onChange={(e) => setSpenderAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
              <div className="sm:w-[180px]">Amount:</div>
              <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit">
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
              <div className="sm:w-[180px]">Nonce:</div>
              <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit">
                <input
                  type="number"
                  id="nonce"
                  name="nonce"
                  value={nonce}
                  className="max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter nonce"
                  onChange={(e) => setNonce(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={testQuery}
          className="flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded"
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
          <span className="inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]">
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

export default CreateErc20ApproveTx;
