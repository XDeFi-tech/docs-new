import React, { useState } from "react";
import LoadingIcon from "./LoadingIcon";
import PlayIcon from "./PlayIcon";

export default function TokenV2() {
  const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  const query = `
  query TokenV2($tokenV2Id: String!) {
    routingV2 {
      tokenV2(id: $tokenV2Id) {
        id
        asset {
          id
          name
          symbol
          chain
          contract
          image
        }
      }
    }
  }`;

  const vars = {
    tokenV2Id: "ac9437fb-4429-4240-b8f9-077dd7fe0a4f",
  };
  const fetchTokenV2 = async () => {
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
          onClick={fetchTokenV2}
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
}
