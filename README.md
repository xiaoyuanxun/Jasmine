<h3 align="left">Repository for Jasmine</h3>

![image](https://github.com/xiaoyuanxun/Jasmine/assets/53613219/0df3f056-a8cb-411b-b7d6-0fa8c9784298)

<div align="center" id="top">
  <p align="left">
    A decentralised NFT application hosted on the Internet Computer Blockchain (ICP)
  </p>
  <p align="left">
    -- TongJi University Metaverse Web3 Lab
  </p>
   <p align="left">
    -- Metaverse Web3 Lab@CASER, HKUST 
  </p>
  
</div>


## About Jasmine

Dapp Demo address: [Jasmine.app](https://jasmine.app).  
https://jjuzy-piaaa-aaaan-qau4q-cai.icp0.io/

Jasmine allows readers, writers and Web3 enthusiasts, to create and enjoy community created content, read or write stories and create or sell NFTs along with other features.

## Basic Concepts
1. ### What is the Internet Computer (ICP)?
A new cryptocurrency technology that allows developers to build applications on top of it. It is faster and cheaper than other programmable blockchain alternatives.

2. ### What are canisters?
Canisters are special smart contracts that run WebAssembly. Smart contracts are programs stored on a blockchain that run when predetermined conditions are met. Our files of code are uploaded into canisters and powered by the ICP blockchain.

3. ### What is Motoko?
Motoko is a new programming language designed for the Internet Computer - it is a type-safe language for creating backend smart contracts on ICP and bears a resemblance to Rust and C++. To learn more about the language, check out the SDK.

If you're using Visual Studio Code it is recommended to use the Motoko extension.

### The Tech Stack

* [React.js](https://reactjs.org/)  -- The library for web and native user interfaces.
* [Motoko](https://internetcomputer.org/docs/current/developer-docs/build/languages/motoko/)  -- The Motoko programming language is a new, modern and type safe language for developers who want to build the next generation of distributed applications to run on the Internet Computer blockchain network. 
* [DFX](https://internetcomputer.org/docs/current/references/cli-reference/dfx-parent/) -- The DFINITY command-line execution environment (dfx) is the primary tool for creating, deploying, and managing the dapps you develop for the IC.

### ICP Toolchain

* [CanDB](https://github.com/canscale/CanDB)    -- a flexible, performant, and horizontally scalable non-relational multi-canister data storage framework built for the Internet Computer.
* [Anvil Protocol](https://docs.nftanvil.com/docs/sdk/js)  -- A communication protocol wish to be autonomous, zero maintenance, self-sustainable web3 microservices made to last million+ years.
* [User Geek](https://usergeek.app/)   -- the first decentralised product analytics tool
built on the DFINITY Internet Computer.
* [Internet Identity](https://internetcomputer.org/docs/current/tokenomics/identity-auth/what-is-ic-identity/)  -- Blockchain DID base on ICP

### Other Tools

 * [React Redux](https://react-redux.js.org/)   -- official React UI bindings layer for Redux.
* [Chakra UI](https://chakra-ui.com/)          -- a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.
* [Vessel](https://github.com/dfinity/vessel)  -- the original package manager for Motoko programming language.

## Design Approach

Jasmine is built on top of the ICP blockchain - meaning the frontend and backend are both hosted on the blockchain. 

We use a variety of tools, web2 and web3 alike. The codebase has been opensourced to hopefully be used for educational purposes for any other developers building dapps on the ICP blockchain. 

This project was kickstarted with the `dfx new` command. 

1. ### Frontend

We try to take a modern approach to the frontend in terms of using modern React practices such as functional components and hooks aswell as implementing the most popular React state management library: Redux. The idea is to make as many readable dynamic components as possible taking a "less is more" approach. 

We are adament that the dapp works and looks nice across all device screens so we use Chakra UI for most of the UI design and CSS, This allows custom and fast development of the UI aswell as responsive components.

2. ### Backend

Our backend is a mix between in house smart contracts written in Motoko aswell as using frontend api's to call external smart contracts on the ICP blockchain. We call features and tools from other Motoko packages using Vessel - a Motoko package manager. 

Some of our Motoko backend is calling the Anvil Protocols smart contracts - covering our whole NFT integration. 

For our story integration we use CanDB, a flexible, performant, and horizontally scalable non-relational multi-canister database built for the Internet Computer. 

All of this makes Jasmine a multi-canister dapp.

## ICP Blockchain、Anvil Protocol、CanDB and APIs

- `ICP blockchain`  -- The ICP blockchain allows us to create "canisters" which can serve your applications code (a canister is just a smart contract which in turn is just code on a blockchain), We use canisters to host both our frontend and backend. 

- `Authentication` -- Our dapps authentication uses [Internet Identity](https://internetcomputer.org/docs/current/tokenomics/identity-auth/what-is-ic-identity/) which is currently an ICP specific authentication system, it is secure and powered by cryptography and allows users to create anonymous user IDs and wallets. 

- `Anvil Protocol`  -- We have integrated the Anvil Protocol which allows us to achieve NFT integration aswell as providing us with a variety of tools, including `vessel` and `npm` packages. Our marketplace, inventory and ICP wallet are all powered by the Anvil Protocol. 

- `CanDB`  -- We have integrated the Motoko library CanDB and using this we designed a data model that lets us give each author (anyone who posts a story on the platform) a unique canister that they can own. This makes Jasmine a highly scalable dapp that sticks purely to blockchain infrastructure. 

- `UserGeek`  -- We use UserGeek for analytics which allows us to obtain stats on unique users who use our dapp, as well as things like how many users purchased NFTs. All information is anonymous.

## How To Build and Run

First make sure you have the following packages installed:

- [ICP SDK](https://internetcomputer.org/docs/current/developer-docs/setup/install/)
   -- To install the IC SDK, run the following command
  ```bash
  sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
  ```

- [Vessel](https://github.com/dfinity/vessel)
   -- Download a copy of the vessel binary from the release page
  ```bash
  https://github.com/dfinity/vessel/releases
  ```
Download the project source code and the enter the working directory
```bash
git clone https://github.com/xiaoyuanxun/Jasmine.git
cd Jasmine
```
Next, run the following cli command
```bash
./start.sh
```
And then， the dfx command will deploy Smartcontract to canister
```bash
echo "Starting DFX server..."
dfx stop >/dev/null 2>&1
dfx start --clean --background >/dev/null 2>&1 || { echo "error starting server!"; exit 1; }
echo "Launching Canisters..."
# dfx deploy >/dev/null 2>&1 || { echo "error deploying canisters!"; exit 1; }
dfx deploy index >/dev/null 2>&1 || { echo "error deploying index canister!"; exit 1; }
dfx deploy ito >/dev/null 2>&1 || { echo "error deploying ito canister!"; exit 1; }
dfx deploy jasmine_dapp_assets >/dev/null 2>&1 || { echo "error deploying frontend canister!"; exit 1; }
echo "App Started Successfully!"
```

This project follows the all-contributors specification. 
 <p align="left"> Contributions of any kind is welcome! </p>

## Troubleshooting
You may encounter trouble with Vessel package，try this test command
 ```bash
  vessel --version
 ```
if the Vessel package is installed successful，it will return the result
```bash
 vessel 0.6.4
```
And then use the install command to download dependency
```bash
 vessel install
```
Obtain help information with command
```bash
 vessel --Help
```
When you encounter compiling problem, use follow commands to check the network with github.com and authorized right to connect. We offen try `dfx deploy `command several times before sucess. 
```bash
  ssh -T git@github.com
  ssh-add ~/.ssh/id_rsa
```
 
#### Jasmine Dapp Running Screen
 
![img](https://github.com/xiaoyuanxun/Jasmine/blob/main/src/Jasmine_dapp_assets/assets/Jasmine@demo.png)
  
> Jasmine Dapp to be continue ......
  
Have a good time while you hacking Jasmine project! 
<p>If you any question, keep in touch with us. Any suggestion will be welcom!<p>

## License
Jasmine is distributed under the terms of the Apache License (Version 2.0).

See LICENSE for details.

<p align="right">(<a href="#top">back to top</a>)</p>
