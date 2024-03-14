import React, { useState, useEffect } from "react";
import LoadingIcon from "./LoadingIcon";
import PlayIcon from "./PlayIcon";

export default function ChainV2GraphQL() {
  const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  const query = `
  query ChainV2($name: String!) {
    routingV2 {
      chainV2(name: $name) {
        name
        tokens {
          asset {
            contract
            symbol
          }
        }
      }
    }
  }`;
  const vars = {
    name: "ETH",
  };
  const fetchChainV2 = async () => {
    setLoading(true);
    setResponse({});

    await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

  useEffect(() => {
    fetchChainV2();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={fetchChainV2}
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
          <span className="inline-block border-b-2 border-[#3451b2] dark:border-[#a8b1ff] text-[14px] leading-[48px]">Response</span>
        </div>
        <pre className="p-5">
          {JSON.stringify(response, null, 2)}
        </pre>
      </div>
    </>
  );
}
