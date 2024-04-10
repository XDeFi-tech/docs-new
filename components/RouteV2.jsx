import React, { useState } from "react";
import LoadingIcon from "./LoadingIcon";
import PlayIcon from "./PlayIcon";

export default function RouteV2() {
  const GRAPHQL_ENDPOINT = "https://gql-router.xdefi.services/graphql";
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  const query = `
  query RouteV2($srcToken: String!, $destToken: String!, $slippage: String!, $addresses: [AddressRouteInputTypeV2!]!, $destAddress: String!, $amountSource: String, $infiniteApproval: Boolean) {
    routingV2 {
      routeV2(srcToken: $srcToken, destToken: $destToken, slippage: $slippage, addresses: $addresses, destAddress: $destAddress, amountSource: $amountSource, infiniteApproval: $infiniteApproval) {
        addresses {
          chain
          address
        }
        destAddress
        priceRate
        priceRateText
        slippage
        priceImpact
        amountIn
        tradesRoute {
          provider {
            id
          }
          amountIn
          amountOut
          minAmountReceived
          assetIn {
            id
          }
          assetOut {
            id
          }
          fee {
            networkFeeDollar
            networkFeeAsset
            inboundFeeDollar
            inboundFeeAsset
            swapFee
            feeRateTransaction
            xdefiSwapFee
            xdefiSwapFeeDollar
          }
          priceRateUsdAssetOut
          priceRateUsdAssetIn
          tradeType
        }
        gasPrices
        approvalInfiniteFlag
        errorBuildingRoute
      }
    }
  }`;
  const vars = {
    srcToken: "AVAX.0x63a72806098bd3d9520cc43356dd78afe5d386d9",
    destToken: "AVAX.0xc7198437980c041c805a1edcba50c1ce5db95118",
    slippage: "1",
    addresses: [
      {
        chain: "AVAX",
        address: "0x5329ebC5903bE1Ca544762191343F60EDb5C9Ca3",
      },
    ],
    destAddress: "0x5329ebC5903bE1Ca544762191343F60EDb5C9Ca3",
    amountSource: "0.23",
    infiniteApproval: null,
  };

  const fetchRouteV2 = async () => {
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
          onClick={fetchRouteV2}
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
