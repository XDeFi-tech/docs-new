import React, { useState } from "react";
import LoadingIcon from "./LoadingIcon";
import PlayIcon from "./PlayIcon";
import * as pkg from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const { gql, ApolloClient, InMemoryCache } = pkg;

const SubscriptionServices = () => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const wsLink = new GraphQLWsLink(
    createClient({
      url: "wss://subscription-service.dev.xdefi.services/graphql",
    }),
  );

  const query = gql`
    subscription Subscription($ids: [String!]) {
      price(ids: $ids) {
        chain
        id
        price {
          amount
        }
        symbol
        type
        name
        contracts {
          address
          chain
          symbol
          scalingFactor
          defiProtocol {
            icon
            chain
            name
          }
          id
        }
        icon
        externalData
        marketCap
        scalingFactor
      }
    }
  `;

  const vars = {
    ids: [],
  };

  const subscriptionServices = async () => {
    if (loading) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setResponse({});

    const client = new ApolloClient({
      link: wsLink,
      cache: new InMemoryCache(),
    });

    client
      .subscribe({
        query,
        variables: vars,
      })
      .subscribe({
        next: (data) => {
          setResponse(data);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.log("completed");
        },
      });
  };

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={subscriptionServices}
          className="flex justify-center items-center gap-2 bg-[#05C92F] text-[#001405] px-4 py-2 border-solid border-[1px] border-[#001405] rounded-full"
        >
          {loading ? (
            <>
              <LoadingIcon />
              Listening...
            </>
          ) : (
            <>
              <PlayIcon />
              Subscription
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
        <pre className="p-5 max-h-[600px] overflow-auto">
          {JSON.stringify(response, null, 2)}
        </pre>
      </div>
    </>
  );
};

export default SubscriptionServices;
