import React, { useState, useEffect } from "react";
import LoadingIcon from "./LoadingIcon";
import PlayIcon from "./PlayIcon";

export default function AddressCheckV2() {
  const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  const query = `
  query AddressCheckV2($address: AddressRouteInputTypeV2!) {
    routingV2 {
      addressCheckV2(address: $address) {
        isValid
        address
        chain
      }
    }
  }`;

  const vars = {
    address: {
      address: "0x7045916CEEFf58547E80E31d2c60ae5F67D63027",
      chain: "ETH",
    },
  };
  const fetchAddressCheckV2 = async () => {
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
    fetchAddressCheckV2();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={fetchAddressCheckV2}
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
