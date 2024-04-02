import React, { useState, useEffect } from "react";
import LoadingIcon from "./LoadingIcon";
import PlayIcon from "./PlayIcon";
import { chainsSupported } from "./common";

const GetGasFee = () => {
  const GRAPHQL_ENDPOINT = "https://gql-router.xdefiservices.com/graphql";
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [chainSelected, setChainSelected] = useState(undefined);
  const [chain, setChain] = useState(undefined);

  useEffect(() => {
    if (!chainSelected) {
      setChain(undefined);
    } else {
      chainsSupported.find((chain) => {
        if (chain.key === chainSelected) {
          setChain(chain);
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

    let query = "";

    switch (chain.key) {
      case "ethereum":
      case "cantoEVM":
      case "cronosEVM":
      case "gnosis":
        query = `query GetFee {
          ${chain.key} {
            fee {
              defaultGasPrice
              high {
                maxFeePerGas
                baseFeePerGas
                priorityFeePerGas
              }
              low {
                baseFeePerGas
                maxFeePerGas
                priorityFeePerGas
              }
              medium {
                baseFeePerGas
                maxFeePerGas
                priorityFeePerGas
              }
            }
          }
        }`;
        break;
      default:
        query = `query GetGasFee {
          ${chain.key} {
            fee {
              high
              low
              medium
            }
          }
        }`;
        break;
    }

    await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apollographql-client-name": "docs-indexers-api",
        "apollographql-client-version": "v1.0",
      },
      body: JSON.stringify({
        query,
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
              {chainsSupported.map((chain) => (
                <option key={chain.key} value={chain.key}>
                  {chain.label}
                  {chain.baseChain && <> ({chain.baseChain})</>}
                </option>
              ))}
            </select>
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

export default GetGasFee;
