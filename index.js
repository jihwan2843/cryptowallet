import { ethers } from "ethers";
import axios from "axios";
import crypto from "crypto";
import dotenv from "dotenv";
import {
  POLYGON_PROVIDER,
  ETHEREUM_PROVIDER,
  SEPOLIA_PROVIDER,
} from "./daemon.js";

dotenv.config();

//const provider = new ethers.InfuraProvider("matic");
//const provider = new ethers.InfuraProvider("sepolia");

//const provider = new ethers.AlchemyProvider("matic");
//const provider = new ethers.AlchemyProvider("sepolia");

const testAddr1 = process.env.TestAddr1;
const testAddr2 = process.env.TestAddr2;
const pvk1 = process.env.PVK1;
const apiKey = process.env.CoinGeckoAPIKey;
const balance = [{}];

const main = () => {};

main();
