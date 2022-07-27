import { ethers } from 'ethers';
import { MerkleTree } from 'merkletreejs';

let whitelistAddress = [
  '0x2FCf7A2bBb08088CcF2e2080c611D3BEC910EbB6',
  '0xbd7D0FA5266aEBf2A073Db62a86d6C790f12a9A7',
  '0x09066A0B0D8cb0030A8B2CaFD7aB0E40f5AB4837',
  '0x504370060B9d5433679e557621ee31a3B960C157',
  '0xeA090721E72aCe074b1d644e730153E9dDD45acA',
  '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
  '0x2304056D7Fb4337CdED86b46Fd5587a10dF0B313',
];

const leafNodes = whitelistAddress.map((addr) => ethers.utils.keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, ethers.utils.keccak256, {
  sortPairs: true,
});

const rootHash = merkleTree.getRoot().toString('hex');

export default function checkWhitelist(address: string) {
  const hashedAddress = ethers.utils.keccak256(address);

  const proof = merkleTree.getHexProof(hashedAddress);
  return merkleTree.verify(proof, hashedAddress, rootHash);
}

export function getMerkleProof(address: string) {
  const hashedAddress = ethers.utils.keccak256(address);

  return merkleTree.getHexProof(hashedAddress);
}
