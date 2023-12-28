# Routing overview

Comprehensive description of the routing service and its endpoints

## Introduction

This project provides a multi-step process to request and execute cross-chain swaps via a REST API.

First, given a pair tokenA/tokenB, with assets belonging to the same chain or separate chains, an optimal route is found to swap from tokenA to tokenB. Once the route is found, the necessary transaction data are returned for signing and execution.

## Connecting to the API

Before connecting to the API, one needs to go through the XDEFI VPN to access it or to whitelist the IP address.
API endpoints share the same root URL: .
To check the health status of the API just send a GET request to the above URL:
