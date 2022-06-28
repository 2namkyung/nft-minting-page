import { ethers } from 'ethers';
import Contract from './ERC721A.json';

const INFURA_URL = import.meta.env.VITE_INFURA_URL;
const CONTRACT_ADDRESS = import.meta.env.VITE_ERC721A_CONTRACT_ADDRESS;

const rpcProvider: ethers.providers.JsonRpcProvider =
  new ethers.providers.JsonRpcProvider(INFURA_URL);

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

export async function getMintStartBlock() {
  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    Contract.abi,
    rpcProvider,
  );

  try {
    const startBlockNumber = await contract.getMintStartBlock();
    return startBlockNumber.toString();
  } catch (error: any) {
    return error.message;
  }
}

export async function minting(requestCount: number) {
  const contract = getContract();
  try {
    await contract.mint(requestCount);
  } catch (error) {
    return error;
  }
}
