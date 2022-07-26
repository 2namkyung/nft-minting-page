import { ethers } from 'ethers';
import { MerkleTree } from 'merkletreejs';

let whitelistAddress = [
  '0x5B38Da6a701c568545dCfcB03FcB875f56beddC4',
  '0x9729352a088bCBcaDfa404F1E4B4BbBeD339b571',
  '0x504370060B9d5433679e557621ee31a3B960C157',
  '0xeA090721E72aCe074b1d644e730153E9dDD45acA',
  '0x58809e052CF2eC8e6269CF7908E5683867a047a3',
  '0x7896F7bBd711d5cb70A7Ba282627692bDc73207c',
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
