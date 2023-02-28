import * as dotenv from "dotenv"
import { HardhatUserConfig } from "hardhat/types/config";
dotenv.config();
require ("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

if (!process.env.PRIVATE_KEY) throw new Error("PRIVATE_KEY is required")

module.exports = {
  solidity: "0.8.17",

 networks:  {
    goerli: {
      url: process.env.ALCHEMY_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      goerli : "BFJ7KDYTECV5NQDRSPWKKRXMXIVVZ8IPEP"
    }
  }
};

