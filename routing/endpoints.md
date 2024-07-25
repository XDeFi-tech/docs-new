# Endpoints

[[toc]]

In this page, we list the main API public endpoints.

::: info
For the sake of avoiding redundancy, some endpoints, returning the same data or serving the same functions as our Graph QL API, are not listed here.
:::

## chains/

Returns a list of supported chains (i.e. chains you can swap assets within or chains you can bridge to). List of supported chain as of Q2 2023:

```bash
[
  "BNB",
  "BTC",
  "BCH",
  "LTC",
  "ETH",
  "THOR",
  "DOGE",
  "BSC",
  "POLYGON",
  "FTM",
  "AVAX",
  "ARBITRUM",
  "AURORA",
  "NEAR",
  "SOL",
  "COSMOS",
  "OSMOSIS"
]
```

## tokens/mainnet/all/

Returns a list of all supported tokens in the following format:

```bash
"id": "7f38d14d-169c-4a4c-97ba-6e1fa4a77d8a",
"chain": "POLYGON",
"symbol": "EASY",
"label": "EASY",
"name": "POLYGON.EASY",
"address": "0xdb3b3b147a030f032633f6c4bebf9a2fb5a882b5",
"list_providers": [
  "b86510b8-a730-44cd-977e-748df4fddc08"
],
"decimal": 18
```

::: info

- `id` is an internal uid for a given crypto asset
- `chain` is one of the supported chains found in endpoint chains/
- `name` is the token name in the chain.symbol format
- `list_providers` contains provider ids, found in providers/ endpoint (see below)
  :::

## providers/

List of available providers for swapping and bridging:

```bash
{
  "id": "9cbdfbc0-c5b7-4814-b8cb-04d0b083b3a6",
  "name": "Thorchain",
  "time": "60",
  "icon": "https://miro.medium.com/max/3150/1*KkoJRE6ICrE70mNegVeY_Q.png"
}
```

::: info

- `id` is an internal uid
- `name` is the provider's name
- `time` is the typical duration of for a swap/bridge to complete for a given a provider
- `icon` is a url to the provider's logo
  :::

## graphql/

Entry point to our Graph QL schema (see [Routing Graph QL API](./routing-graph-ql-api) section for more details).
