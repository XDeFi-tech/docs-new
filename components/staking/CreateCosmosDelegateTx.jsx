import React, { useState, useEffect } from "react";
import LoadingIcon from "../LoadingIcon";
import PlayIcon from "../PlayIcon";
import { cosmosSupportedAssets as assetSupported } from "../common";

const CreateCosmosDelegateTx = () => {
  const GRAPHQL_ENDPOINT = "https://gql-router.dev.xdefiservices.com/graphql";
  const validators = ["Meria", "StakeLab", "Custom"];

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const [assetSelected, setAssetSelected] = useState(undefined);
  const [asset, setAsset] = useState(undefined);
  const [amount, setAmount] = useState(undefined);
  const [delegatorAddress, setDelegatorAddress] = useState("");
  const [delegatorPubkeyHex, setDelegatorPubkeyHex] = useState("");
  const [memo, setMemo] = useState("");
  const [gasLimit, setGasLimit] = useState(undefined);
  const [validator, setValidator] = useState(null);
  const [validatorAddress, setValidatorAddress] = useState("");

  const resetForm = () => {
    setAmount(undefined);
    setDelegatorAddress("");
    setDelegatorPubkeyHex("");
    setMemo("");
    setGasLimit(undefined);
    setValidator(null);
    setValidatorAddress("");
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

  useEffect(() => {
    setValidatorAddress("");
  }, [validator]);

  const testQuery = async () => {
    setLoading(true);
    setResponse({});

    if (!asset) {
      alert("Please select a asset!");
      setLoading(false);
      return;
    }

    if (
      !amount ||
      !delegatorAddress ||
      !delegatorPubkeyHex ||
      !memo ||
      !gasLimit ||
      !validator ||
      (validator === "Custom" && !validatorAddress)
    ) {
      alert("Please enter all the required fields!");
      setLoading(false);
      return;
    }

    const query = `query CreateCosmosDelegateTx($delegationInput: CosmosDelegationInput!, $validatorAddress: String, $provider: Providers) {
      staking {
        createCosmosDelegateTx(
          delegationInput: $delegationInput
          provider: $provider
          validatorAddress: $validatorAddress
        )
      }
    }`;

    let vars = {
      delegationInput: {
        asset: asset.key,
        amount: amount,
        delegatorAddress: delegatorAddress,
        delegatorPubkeyHex: delegatorPubkeyHex,
        memo: memo,
        gasLimit: gasLimit,
      },
      provider: validator,
    };

    if (validator === "Custom") {
      vars = {
        delegationInput: {
          asset: asset.key,
          amount: amount,
          delegatorAddress: delegatorAddress,
          delegatorPubkeyHex: delegatorPubkeyHex,
          memo: memo,
          gasLimit: gasLimit,
        },
        provider: null,
        validatorAddress: validatorAddress,
      };
    }

    await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apollographql-client-name": "docs-staking-api",
        "apollographql-client-version": "v1.0",
      },
      body: JSON.stringify({
        query,
        variables: vars,
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
        <div className="flex items-center gap-10">
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
                {assetSupported.map((chain) => (
                  <option key={chain.key} value={chain.key}>
                    {chain.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="w-[180px]">Validator:</div>
              <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit">
                <select
                  id="validator-select"
                  name="validator-select"
                  className="w-[205px] bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  onChange={(e) => setValidator(e.target.value)}
                >
                  <option value={undefined}>Select a validator</option>
                  {validators.map((validator) => (
                    <option key={validator} value={validator}>
                      {validator}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {validator === "Custom" && (
              <div className="flex items-center gap-4">
                <div className="w-[180px]">Validator Address:</div>
                <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit">
                  <input
                    type="text"
                    id="validatorAddress"
                    name="validatorAddress"
                    value={validatorAddress}
                    className="bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter Delegator Address"
                    onChange={(e) => setValidatorAddress(e.target.value)}
                  />
                </div>
              </div>
            )}
            <div className="flex items-center gap-4 justify-around">
              <div className="w-[180px]">Amount:</div>
              <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit">
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={amount}
                  className="bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter amount"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[180px]">Delegator Address:</div>
              <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit">
                <input
                  type="text"
                  id="delegatorAddress"
                  name="delegatorAddress"
                  value={delegatorAddress}
                  className="bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter delegator address"
                  onChange={(e) => setDelegatorAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[180px]">Delegator Pubkey Hex:</div>
              <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit">
                <input
                  type="text"
                  id="delegatorPubkeyHex"
                  name="delegatorPubkeyHex"
                  value={delegatorPubkeyHex}
                  className="bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter a delegator pubkey hex"
                  onChange={(e) => setDelegatorPubkeyHex(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[180px]">Sender Pubkey Hex:</div>
              <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit">
                <input
                  type="text"
                  id="memo"
                  name="memo"
                  value={memo}
                  className="bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter a sender pubkey hex"
                  onChange={(e) => setMemo(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[180px]">Gas limit:</div>
              <div className="border border-[#e2e2e3] dark:border-[#2e2e32] hover:border-[#3451b2] rounded-lg overflow-hidden w-fit">
                <input
                  type="number"
                  id="gasLimit"
                  name="gasLimit"
                  value={gasLimit}
                  className="bg-gray-50 text-gray-900 px-2 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
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
      <div className="my-4 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]">
        <div className="px-5 border-b border-[#e2e2e3] dark:border-black">
          <span className="inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]">
            Response
          </span>
        </div>
        <pre className="p-5">{JSON.stringify(response, null, 2)}</pre>
      </div>
    </>
  );
};

export default CreateCosmosDelegateTx;
