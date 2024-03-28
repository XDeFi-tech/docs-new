# Indexers API

## Overall

XDEFI provide GraphQL API for developers to interact with the XDEFI Wallet. Some services that can be accessed through the API are: get balance, get gas fee, and get transaction. Make sure to install the XDEFI Wallet extension.

The base URL for all API endpoints is: `https://gql-router.xdefiservices.com/graphql`.

_Note_: In this guide, we choose `bitcoin` chain as an example. Check the [GraphQL schema](https://gql-router.xdefiservices.com/graphql) for more information about the available chains and their fields.

## Get Balance

[Query GraphQL directly here](https://gql-router.xdefiservices.com/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoBCAhgDZVJQIDOAFACRVhh7NPpEBlFHgCWSAOYBCAJRFgAHSREiAIxEooEMXMXLlK2vUatO3Xvw5ceTJrIVK9y09aa7HRKnAgxUOh%2B6IAN1pcN0cAXzC9KhtyPwDlKAALKjEox01UPCooFHS9MAQoEThaV393ETB85RKqcQQaoiRPRorHAAdRRniEpy8fPPb3Jg6qPABrGjE2vuUYDrAqFAQwAHkkJuUCBHGABW6EAGEUiVm5gHcEBAmDkUYT%2BgatoiYoWjFxADEclAg8F5eVBJO4PU7PYaOUqTchHKgdABK9AmLwAZmBAi8lgRQcdwec%2BksRDQCAAVbJgT4ANQgNHgBISRJJABkIBcsakSQAJETiJIvWg0UklBCs9mQ6I0IUinl8pqRCVMAhwFS0pooAgdBnKBURNwKhUgAA0IGCoioKhozAwIHsynkIGcvAd-AdKigDqIAHovUQAJrePBECiko4eKy8IjaAAaABEAKJfACSRAA6oLyIpwsaQB0IEwUKjpnyUGstdkUCIIEgBFBRB00JgQOEgA)

In the example below, we will retrieve your balance of Bitcoin in the XDEFI Wallet.

::: code-group

```js [Example]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefiservices.com/graphql";
const query = `query GetBalances($address: String!) {
  bitcoin {
    balances(address: $address) {
      address
      amount {
        value
      }
      asset {
        chain
        contract
        decimals
        id
        image
        name
        symbol
        type
        price {
          amount
          scalingFactor
          sparkline
          yearPriceChange
          weekPriceChange
          updatedOn
          monthPriceChange
          marketCapRank
          fdv
          dayPriceChange
          dailyTradingVolume
          dailyLow
          dailyHigh
          allTimeLow
          allTimeHigh
        }
      }
    }
  }
}`;

const testQuery = async () => {
  if (!window.xfi || !window.xfi.bitcoin) {
    alert(
      "XDEFI Wallet not detected! Please install the XDEFI Wallet extension.",
    );
    return;
  } else {
    await window.xfi.bitcoin.request(
      { method: "request_accounts", params: [] },
      (error, accounts) => {
        fetch(GRAPHQL_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables: {
              address: accounts[0],
            },
          }),
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            // Do something with the result
          });
      },
    );
  }
};

testQuery();
```

:::

<div ref="refGetBalance"/>

## Get Transaction V2

[Query GraphQL directly here](https://gql-router.xdefiservices.com/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoAqeAhkgM7VQoCWE9AagEwAUAJNWDB4EdOuiIBlFHmZIA5gEIANEV4AHanIQA5eACN84gJKplqjVonMAXgmOmAlEWAAdJESJ7mKKBFnO3Dw9pWgYmVg4eASERMVVo4VEVCx19Q3NNVLgDPGTMq1txdXybBCdXdyCPPWoAG1ooBABhAAtaLQDKqo8ANzrcQO6AX0GqvVroAGtdbPxRoIAzBARO7qC%2B2oGuoJHtjza6FvmPWTUYFDpVtaIE2OOg6jgIGFQr66INrffdtZ-u55QZwub26t1E9w8j2erwq716-QQEKIfyqKKCdBQ1BQMDo9xYiAxjzU8z%2BuyGICUID6Mmo4xEGBAsKILhAYNxGGZID0UBZKgA9HyiABNZ54IgAIQoTRugkSl38AA0ACIAUQAYkYiAB1Oq1ciDFkpGY5FniACMSgNIBSBURHLNAAY3OTKWoIBiFrVmHIWigAPJqfBYiISKAyNRoTAgIZAA)

In the example below, we will retrieve your transaction history of Bitcoin in the XDEFI Wallet.

::: code-group

```js [Example]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefiservices.com/graphql";
const query = `query GetTransactionsV2($address: String!, $pageNumber: Int!, $pageSize: Int!) {
  bitcoin {
    transactionsV2(address: $address, pageNumber: $pageNumber, pageSize: $pageSize) {
      balanceChange {
        value
      }
      blockNumber
      fee {
        value
      }
      hash
      inputs {
        address
        amount {
          value
        }
      }
      outputs {
        address
        amount {
          value
        }
      }
      status
      timestamp
    }
  }
}`;

const testQuery = async () => {
  if (!window.xfi || !window.xfi.bitcoin) {
    alert(
      "XDEFI Wallet not detected! Please install the XDEFI Wallet extension.",
    );
    return;
  } else {
    await window.xfi.bitcoin.request(
      { method: "request_accounts", params: [] },
      (error, accounts) => {
        fetch(GRAPHQL_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables: {
              address: accounts[0],
              pageNumber: 1,
              pageSize: 10,
            },
          }),
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            // Do something with the result
          });
      },
    );
  }
};

testQuery();
```

:::

<div ref="refGetTransactionsV2"/>

## Get Transaction V3

[Query GraphQL directly here](https://gql-router.xdefiservices.com/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABACp4CGSAzuVCgJYTUBqAzABQAk5YYeCVKuiIBlFHnpIA5gEIANEU4AzeniophASVTzF5JSnzCxE6QEoiwADpIiRAEb0UUCJMs27d8ZRp1GLDh4%2BASE9Xn5BBRU1DUVo9QV9QzxhbgN8C2tbTzsEMCkBd2ycuyQIMAQikpL7cgAbSigEAGEAC0oCquqSgDd63A9uuwBfQaH7OugAawA5eHt8Me6lBEqsoZy%2BuoHi7tHd6vaqVqXqyQAHGBQqLo2iIIiqU%2B7yOAgYVFu7oi2d76J9ndARt3ihLtcvkMHiFntVXu9Put-j9%2BghYSVgUNMd11OQUDAngcSgxELi4Od0dicrA1BA8M8qURzuQCtolBBIZ4jjMEAAPFAABRZaKJdiOAv4PUYBKFBQZS2B%2B2GIDkID6EnIEwEGBASKsIGhgn1wn19ig%2BoUAHpLUQAJrvPBEABCJGa93CISIbgAGgARACiADFNEQAOr1OoIFCDfXxaMYIgARjkMYN6XpCaQMDqdRsytV5wg6iUdXoUlaKAA8ud8Hj-CIoBJzmhMCBhkA)

In the example below, we will retrieve your transaction history of Bitcoin in the XDEFI Wallet.

::: code-group

```js [Example]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefiservices.com/graphql";
const query = `query TransactionsV3($address: String!, $first: Int!, $after: String) {
  bitcoin {
    transactionsV3(address: $address, first: $first, after: $after) {
      edges {
        node {
          balanceChange {
            value
          }
          blockNumber
          fee {
            value
          }
          hash
          inputs {
            address
            amount {
              value
            }
          }
          outputs {
            address
            amount {
              value
            }
          }
          status
          timestamp
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
}`;

const testQuery = async () => {
  if (!window.xfi || !window.xfi.bitcoin) {
    alert(
      "XDEFI Wallet not detected! Please install the XDEFI Wallet extension.",
    );
    setLoading(false);
    return;
  } else {
    await window.xfi.bitcoin.request(
      { method: "request_accounts", params: [] },
      (error, accounts) => {
        fetch(GRAPHQL_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables: {
              address: accounts[0],
              first: 1,
              after: null,
            },
          }),
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            // Do something with the result
          });
      },
    );
  }
};

testQuery();
```

:::

<div ref="refGetTransactionsV3"/>

## Get Gas Fee

[Query GraphQL directly here](https://gql-router.xdefiservices.com/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIokCGAzgGIIJHAA6SRRARgJYpQRdsWbdkQBmDJqxEiAFlwDmMqdKIAbCAHdl0xGC7xtRAL7KTSIyAA0IAG6U8XSh1UJqGEFZAAHCNRSjVBRkUAHkvfEoULggkAGUoBy80TBAjIA)

In the example below gas fee for Bitcoin will be retrieved.

::: code-group

```js [Example]
const GRAPHQL_ENDPOINT = "https://gql-router.xdefiservices.com/graphql";
const query = `query GetGasFee {
  bitcoin {
    fee {
      high
      low
      medium
    }
  }
}`;

const testQuery = async () => {
  await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      // Do something with the result
    });
};

testQuery();
```

<div ref="refGetGasFee"/>

<script setup>
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { ref, onMounted } from 'vue'

import GetBalance from '../components/GetBalance.jsx'
import GetTransactionsV2 from '../components/GetTransactionsV2.jsx'
import GetTransactionsV3 from '../components/GetTransactionsV3.jsx'
import GetGasFee from '../components/GetGasFee.jsx'

const refGetBalance = ref()
const refGetTransactionsV2 = ref()
const refGetTransactionsV3 = ref()
const refGetGasFee = ref()
onMounted(() => {
  const rootGetBalance = createRoot(refGetBalance.value)
  rootGetBalance.render(createElement(GetBalance, {}, null))
  const rootGetTransactionsV2 = createRoot(refGetTransactionsV2.value)
  rootGetTransactionsV2.render(createElement(GetTransactionsV2, {}, null))
  const rootGetTransactionsV3 = createRoot(refGetTransactionsV3.value)
  rootGetTransactionsV3.render(createElement(GetTransactionsV3, {}, null))
  const rootGetGasFee = createRoot(refGetGasFee.value)
  rootGetGasFee.render(createElement(GetGasFee, {}, null))
})
</script>
