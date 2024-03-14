import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    fetchTokenV2();
  }, []);

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
              Fetch
            </>
          )}
        </button>
      </div>
      <pre className="my-4 p-5 rounded-lg max-h-[600px] overflow-auto bg-[#F6F6F7] text-[#24292E] dark:bg-[#161618] dark:text-[#E1E4E8]">
        {JSON.stringify(response, null, 2)}
      </pre>
    </>
  );
}
