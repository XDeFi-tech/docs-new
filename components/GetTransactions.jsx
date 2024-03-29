import React, { useState } from "react";
import LoadingIcon from "./LoadingIcon";
import PlayIcon from "./PlayIcon";

const GetTransactions = ({ chain }) => {
  const GRAPHQL_ENDPOINT = "https://gql-router.xdefiservices.com/graphql";
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  const getTransactionCosmosBaseChain = async (chain) => {
    const query = `query GetTransactions($address: String!, $first: Int, $after: String) {
      ${chain.key} {
        transactions(address: $address, first: $first, after: $after) {
          edges {
            node {
              blockHeight
              hash
              signers
              status
              timestamp
              transfers {
                amount {
                  value
                }
                fromAddress
                toAddress
              }
            }
          }
          pageInfo {
            hasPreviousPage
            hasNextPage
          }
        }
      }
    }`;

    await window.xfi.keplr.enable(chain.chainId);
    const offlineSigner = await window.xfi.keplr.getOfflineSigner(
      chain.chainId,
    );
    const accounts = await offlineSigner.getAccounts();
    await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          address: accounts[0].address,
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

  const getTransactionEVMChain = async (chain) => {
    const query = `query GetTransactions($address: String!, $first: Int, $after: String) {
      ${chain.key} {
        transactions(address: $address, first: $first, after: $after) {
          edges {
            node {
              blockNumber
              hash
              status
              timestamp
              transfers {
                amount {
                  value
                }
                fromAddress
                toAddress
              }
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
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
          address: window.ethereum.accounts[0],
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

  const getTransactionDefaultChain = async (chain) => {
    const query = `query GetTransactions($address: String!, $first: Int!, $after: String) {
      ${chain.key} {
        transactionsV3(address: $address, first: $first, after: $after) {
          edges {
            node {
              blockNumber
              hash
              status
              timestamp
              inputs {
                amount {
                  value
                }
                address
              }
              outputs {
                amount {
                  value
                }
                address
              }
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
      }
    }`;

    await window.xfi[chain.key].request(
      { method: "request_accounts", params: [] },
      (error, accounts) => {
        fetch(GRAPHQL_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables: {
              address: accounts[0],
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
      },
    );
  };

  const testQuery = async () => {
    setLoading(true);
    setResponse({});

    if (!window.xfi) {
      alert(
        "XDEFI Wallet not detected! Please install the XDEFI Wallet extension.",
      );
      setLoading(false);
      return;
    } else {
      const chain = JSON.parse(localStorage.getItem("chain"));
      if (!chain) {
        alert("Please select a chain first!");
        setLoading(false);
        return;
      }
      switch (chain.baseChain) {
        case "CosmosChain":
          getTransactionCosmosBaseChain(chain);
          break;
        case "EVM":
          getTransactionEVMChain(chain);
          break;
        default:
          getTransactionDefaultChain(chain);
          break;
      }
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

export default GetTransactions;
