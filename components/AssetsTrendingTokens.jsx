import React, { useState } from 'react';
import LoadingIcon from './LoadingIcon';
import PlayIcon from './PlayIcon';

const AssetsTrendingTokens = (
  { type }
) => {
  const GRAPHQL_ENDPOINT = 'https://gql-router.xdefi.services/graphql';
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  const topMarketCapQuery = `query TopMarketCap {
    assets {
      topMarketCap {
        assetId
        chains
        name
        price {
          amount
          scalingFactor
          marketCapRank
          dailyHigh
          dailyLow
          allTimeLow
          allTimeHigh
        }
        symbol
        type
      }
    }
  }`;

  const gainerQuery = `query Gainers {
    assets {
      gainers {
        assetId
        chains
        name
        price {
          amount
          scalingFactor
          dailyHigh
          dailyLow
          allTimeLow
          allTimeHigh
        }
        symbol
        type
      }
    }
  }`;

  const loserQuery = `query Losers {
    assets {
      losers {
        assetId
        chains
        name
        price {
          amount
          scalingFactor
          dailyHigh
          dailyLow
          allTimeLow
          allTimeHigh
        }
        symbol
        type
      }
    }
  }`;

  const getAssetsTrendingTokens = async () => {
    let query = ``

    switch (type) {
      case 'gainers':
        query = gainerQuery;
        break;
      case 'losers':
        query = loserQuery;
        break;
      default:
        query = topMarketCapQuery;
        break;
    
    }

    setLoading(true);
    setResponse({});

    await fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
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
          onClick={getAssetsTrendingTokens}
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

export default AssetsTrendingTokens;
