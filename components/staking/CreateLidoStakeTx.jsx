import React, { useState, useEffect } from "react";
import LoadingIcon from "../LoadingIcon";
import PlayIcon from "../PlayIcon";
import { otherSupportedAssets as assetSupported } from "../common";

const CreateLidoStakeTx = () => {
  const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const [assetSelected, setAssetSelected] = useState(undefined);
  const [asset, setAsset] = useState(undefined);
  const [address, setAddress] = useState("");
  const [stakeValue, setStakeValue] = useState(undefined);
  const [nonce, setNonce] = useState(undefined);

  const resetForm = () => {
    setAddress("");
    setStakeValue(undefined);
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

    if (!address || !stakeValue || !nonce) {
      alert("Please enter all the required fields!");
      setLoading(false);
      return;
    }

    const query = `query CreateLidoStakeTx($input: LidoStakingInput!) {
      staking {
        createLidoStakeTx(input: $input) {
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
            address: address,
            stakeValue: Number(stakeValue),
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
            <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#05C92F] rounded-lg overflow-hidden w-fit">
              <select
                id="asset-select"
                name="asset-select"
                className="bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                onChange={(e) => setAssetSelected(e.target.value)}
              >
                <option value={undefined}>Select a asset</option>
                <option value={"ETH"}>ETH</option>
                <option value={"MATIC_ERC20"}>MATIC_ERC20</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 max-sm:gap-4">
            <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
              <div className="sm:w-[180px]">Address:</div>
              <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#05C92F] rounded-lg overflow-hidden w-fit">
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={address}
                  className="max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter an address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
              <div className="sm:w-[180px]">Stake Value:</div>
              <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#05C92F] rounded-lg overflow-hidden w-fit">
                <input
                  type="number"
                  id="stakeValue"
                  name="stakeValue"
                  value={stakeValue}
                  className="max-sm:w-[300px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter stake value"
                  onChange={(e) => setStakeValue(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
              <div className="sm:w-[180px]">Nonce:</div>
              <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#05C92F] rounded-lg overflow-hidden w-fit">
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

export default CreateLidoStakeTx;
