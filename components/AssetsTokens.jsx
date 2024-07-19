import React, { useState } from "react";
import LoadingIcon from "./LoadingIcon";
import PlayIcon from "./PlayIcon";

const AssetsTokens = () => {
  const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  const query = `
  query Tokens($page: ConnectionArgs!, $after: DateTime, $afterPrice: DateTime, $filter: TokenFilter) {
    assets {
      tokens(page: $page, after: $after, afterPrice: $afterPrice, filter: $filter) {
        pageData {
          count
          limit
          offset
        }
        page {
          pageInfo {
            endCursor
            hasNextPage
          }
          edges {
            node {
              id
              name
              symbol
              icon
              marketCap
              price {
                amount
                scalingFactor
              }
              contracts {
                symbol
                scalingFactor
                address
                chain
                id
              }
            }
          }
        }
      }
    }
  }`;

  const vars = {
    page: {
      first: 5,
      before: null,
      after: null,
      last: null,
    },
    after: null,
    afterPrice: null,
    filter: {
      address: null,
      chains: null,
      ids: null,
      symbols: null,
    },
  };

  const getAssetsTokens = async () => {
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

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={getAssetsTokens}
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
        <pre className="p-5 max-h-[600px] overflow-auto">{JSON.stringify(response, null, 2)}</pre>
      </div>
    </>
  );
};

export default AssetsTokens;
