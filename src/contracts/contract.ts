import { ethers } from 'ethers';
import Contract from './NFTEvent.json';

const INFURA_URL = import.meta.env.VITE_INFURA_URL;
const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

const rpcProvider: ethers.providers.JsonRpcProvider =
  new ethers.providers.JsonRpcProvider(INFURA_URL);

const callContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  Contract.abi,
  rpcProvider,
);

function getProviderAndSigner() {
  const { ethereum } = window;

  let provider;
  let signer;

  if (ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
  }

  return { provider, signer };
}

function getContract() {
  const { signer } = getProviderAndSigner();

  return new ethers.Contract(CONTRACT_ADDRESS, Contract.abi, signer);
}

export async function minting(requestCount: number, value: string) {
  const contract = getContract();
  try {
    await contract.createToken(requestCount, {
      value: ethers.utils.parseEther(value),
    });
  } catch (error) {
    return error;
  }
}

export async function getMintPrice(): Promise<string> {
  try {
    const wei = await callContract.getMintPrice();
    return ethers.utils.formatEther(wei);
  } catch (error: any) {
    return error.message;
  }
}

export async function getStartBlockNumber(): Promise<string> {
  try {
    const startBlockNumber = await callContract.getStartBlockNumber();
    return startBlockNumber.toString();
  } catch (error: any) {
    return error.message;
  }
}

export async function getRemainingNFT() {
  try {
    const remainingNftCount = await callContract.totalArray();
    return remainingNftCount.toNumber();
  } catch (error) {
    return error;
  }
}
