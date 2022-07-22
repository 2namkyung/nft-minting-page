import { ethers } from 'ethers';

const INFURA_WS_URL = import.meta.env.VITE_INFURA_WS;
const INFURA_URL = import.meta.env.VITE_INFURA_URL;

export const wsProvider: ethers.providers.WebSocketProvider =
  new ethers.providers.WebSocketProvider(INFURA_WS_URL);

export const rpcProvider: ethers.providers.JsonRpcProvider =
  new ethers.providers.JsonRpcProvider(INFURA_URL);
