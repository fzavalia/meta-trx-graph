# Meta Transaction Subgraph

https://thegraph.com/explorer/subgraph/fzavalia/meta-trx-matic-mainnet

The purpose of this graph is to track and count all meta transactions executed on the different contracts that support meta transactions defined under "matic" in https://contracts.decentraland.org/addresses.json.

## Getting Started

Install dependencies with `npm ci`.

Generate code with `npm run codegen`.

## Deploy

Run `npm run auth` and provide the required deploy key to be able to deploy.

Deploy the subgraph with `npm run deploy`.

## Notes

Most datasets are defined with a start block of `32800000`, that is ~30 days before the current date 09/10/2022 because the information required is only needed for a month in the past. (Like to query how many meta transactions were sent the last 30 days)

The collection factory is defined with its deployment start block because it is in charge of instantiating collection templates. Not doing so will make it so the graph misses a lot of events from those collections that might be recent as they were never instantiated.
