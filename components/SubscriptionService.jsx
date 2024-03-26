import React, { useState, useEffect } from "react";
import LoadingIcon from "./LoadingIcon";
import PlayIcon from "./PlayIcon";

const SubscriptionServices = () => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  const socket = new WebSocket(
    "wss://subscription-service.dev.xdefi.services/graphql",
  );

  const query = `subscription Subscription($ids: [String!]) {
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
  }`;

  const vars = {
    ids: [],
  };

  const generateID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const subscriptionServices = async () => {
    if (loading) {
      socket.close();
      setLoading(false);
      return;
    }
    setLoading(true);
    setResponse({});

    socket.send(
      JSON.stringify({
        type: "connection_init",
        payload: {},
      }),
    );

    socket.send(
      JSON.stringify({
        type: "subscribe",
        id: generateID(),
        payload: {
          operationName: "Subscription",
          httpMultipartParams: {
            includeCookies: true,
          },
          query,
          variables: vars,
        },
      }),
    );
    // socket.onopen = async () => {
    // };
  };

  useEffect(() => {
    socket.onmessage = (message) => {
      setResponse(message.payload.data);
      setLoading(false);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={subscriptionServices}
          className="flex justify-center items-center gap-2 bg-[#2770CB] text-white px-2 py-1 rounded"
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

export default SubscriptionServices;
