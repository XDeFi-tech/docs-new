import React, { useState, useEffect } from "react";
import LoadingIcon from "./LoadingIcon";
import PlayIcon from "./PlayIcon";
import { chainsSupported } from "./common";

const GetUTXOs = () => {
  const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [chainSelected, setChainSelected] = useState(undefined);
  const [chain, setChain] = useState(undefined);
  const [address, setAddress] = useState("");

  const chainsList = chainsSupported.filter((chain) => chain.UTXO);

  useEffect(() => {
    if (!chainSelected) {
      setChain(undefined);
      setAddress("");
    } else {
      chainsList.find((chain) => {
        if (chain.key === chainSelected) {
          setChain(chain);
          setAddress(chain.exampleAddress || "");
        }
      });
    }
    setResponse({});
  }, [chainSelected]);

  const testQuery = async () => {
    setLoading(true);
    setResponse({});

    if (!chain) {
      alert("Please select a chain first!");
      setLoading(false);
      return;
    }

    if (!address) {
      alert("Please enter an address!");
      setLoading(false);
      return;
    }

    const query = `query GetUnspentTxOutputsV5($address: String!, $page: Int!) {
      bitcoin {
        unspentTxOutputsV5(address: $address, page: $page) {
          oIndex
          oTxHash
          value {
            value
          }
          scriptHex
          oTxHex
          isCoinbase
          address
        }
      }
    }`;

    await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apollographql-client-name": "docs-indexers-api",
        "apollographql-client-version": "v1.0",
      },
      body: JSON.stringify({
        query,
        variables: {
          address: address,
          page: 1,
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
              {chainsList.map((chain) => (
                <option key={chain.key} value={chain.key}>
                  {chain.label}
                  {chain.baseChain && <> ({chain.baseChain})</>}
                </option>
              ))}
            </select>
          </div>
        </div>
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

export default GetUTXOs;
