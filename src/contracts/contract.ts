import { ethers } from 'ethers';
import { getMerkleProof } from 'utils/checkWhitelist';
import Contract from './contract.json';

const INFURA_URL = import.meta.env.VITE_INFURA_URL;
const CONTRACT_ADDRESS = Contract.contractAddress;

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

export async function privateMint(address: string) {
  const merkleProof = getMerkleProof(address);

  const contract = getContract();

  try {
    await contract.privateMint(merkleProof);
  } catch (error) {
    return error;
  }
}

export async function publicMint(requestCount: number) {
  const contract = getContract();

  try {
    await contract.publicMint(requestCount, {
      value: ethers.utils.parseEther((requestCount * 0.008).toString()),
    });
  } catch (error) {
    return error;
  }
}

export async function getPublicMintStartBlock() {
  try {
    return await callContract.mintStartBlock();
  } catch (error) {
    return error;
  }
}

export async function getPublicMintPrice() {
  try {
    return await callContract.mintPrice();
  } catch (error) {
    return error;
  }
}

export async function getPublicMintLimitAmount() {
  try {
    return await callContract.mintLimitAmount();
  } catch (error) {
    return error;
  }
}
