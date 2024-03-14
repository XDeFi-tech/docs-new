import React, { useState, useEffect } from "react";
import LoadingIcon from "./LoadingIcon";
import PlayIcon from "./PlayIcon";
import moment from "moment";

export default function DailyVolume() {
  const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  const query = `
  query Volume($startDate: String!) {
    routingV2 {
      dailyVolume(startDate: $startDate) {
        date
        volume
      }
    }
  }`;

  const vars = {
    startDate: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
  };
  const fetchDailyVolume = async () => {
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
    fetchDailyVolume();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={fetchDailyVolume}
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
