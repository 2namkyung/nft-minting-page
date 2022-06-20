import { ethers } from 'ethers';
import Contract from './NFTEvent.json';

const INFURA_URL = import.meta.env.VITE_INFURA_URL;
const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;
const PRIVATE_KEY = import.meta.env.VITE_METAMASK_KEY;

const provider: ethers.providers.Web3Provider =
  new ethers.providers.Web3Provider(window.ethereum);

const signer = provider.getSigner();
const contract = new ethers.Contract(CONTRACT_ADDRESS, Contract.abi, signer);

const rpcProvider: ethers.providers.JsonRpcProvider =
  new ethers.providers.JsonRpcProvider(INFURA_URL);

const wallet = new ethers.Wallet(PRIVATE_KEY, rpcProvider);

const rpcCallContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  Contract.abi,
  wallet,
);

export async function minting(requestCount: number, value: string) {
  try {
    await contract.createToken(requestCount, {
      value: ethers.utils.parseEther(value),
    });
  } catch (error) {
    return error;
  }
}

export async function getMintPrice() {
  try {
    return await rpcCallContract.getMintPrice();
  } catch (error) {
    return error;
  }
}

export async function getStartBlockNumber() {
  try {
    return await rpcCallContract.getStartBlockNumber();
  } catch (error) {
    return error;
  }
}

export async function getRemainingNFT() {
  try {
    return await rpcCallContract.totalArray();
  } catch (error) {
    return error;
  }
}
