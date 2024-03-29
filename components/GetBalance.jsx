import React, { useState } from "react";
import LoadingIcon from "./LoadingIcon";
import PlayIcon from "./PlayIcon";

const GetBalance = () => {
  const GRAPHQL_ENDPOINT = "https://gql-router.xdefiservices.com/graphql";
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});

  const getBalanceCosmosBaseChain = async (chain, address) => {
    const query = `query GetBalances($address: String!, $tokenAddresses: [String!]) {
      ${chain.key} {
        balances(address: $address, tokenAddresses: $tokenAddresses) {
          address
          amount {
            value
          }
        }
      }
    }`;

    await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          address: address,
          tokenAddresses: null,
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

  const getBalanceEVMChain = async (chain, address) => {
    const query = `query GetBalances($address: String!, $first: Int, $after: String) {
      ${chain.key} {
        balances(address: $address, first: $first, after: $after) {
          address
          amount {
            value
          }
        }
      }
    }`;

    await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          address: address,
          first: 1,
          after: null,
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

  const getBalanceDefaultChain = async (chain, address) => {
    const query = `query GetBalances($address: String!) {
      ${chain.key} {
        balances(address: $address) {
          address
          amount {
            value
          }
        }
      }
    }`;

    await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          address: address,
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

  const testQuery = async () => {
    setLoading(true);
    setResponse({});

    const chain = JSON.parse(localStorage.getItem("chain"));
    const address = localStorage.getItem("address");

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

    switch (chain.baseChain) {
      case "CosmosChain":
        getBalanceCosmosBaseChain(chain, address);
        break;
      case "EVM":
        getBalanceEVMChain(chain, address);
        break;
      default:
        getBalanceDefaultChain(chain, address);
        break;
    }
  };

  return (
    <>
      <div className="flex justify-center">
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

export default GetBalance;
