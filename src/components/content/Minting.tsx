import React, { useCallback, useState } from 'react';

import Ether from '@img/ethereum-eth-logo.svg';
import { minting } from 'contracts/erc721A';

function Minting() {
  const [amount, setAmount] = useState<number>(1);

  async function mint() {
    await minting(amount);
  }

  const increase = useCallback(() => {
    setAmount((prevAmount: number) => {
      if (prevAmount >= 5) {
        return prevAmount;
      }

      return prevAmount + 1;
    });
  }, [amount]);

  const decrease = useCallback(() => {
    setAmount((prevAmount: number) => {
      if (prevAmount <= 1) {
        return prevAmount;
      }

      return prevAmount - 1;
    });
  }, [amount]);

  return (
    <div className="w-80 m-auto lg:w-3/5 lg:m-0 pt-14 lg:px-14">
      <div className="text-violet-400 font-extrabold mb-2">PRICE</div>
      <div className="flex w-full mb-4">
        <img className="h-8 mr-2" src={Ether} alt="" />
        <div className="text-2xl font-extrabold">FREE ETH</div>
      </div>
      <div className="lg:flex mb-14">
        <div className="flex justify-between p-2 lg:w-1/2">
          <div className="text-violet-400 font-extrabold">Per Transaction</div>
          <div className="font-extrabold">5 개</div>
        </div>
        <div className="flex justify-between p-2 lg:w-1/2">
          <div className="text-violet-400 font-extrabold">Per Wallet</div>
          <div className="font-extrabold">Unlimited</div>
        </div>
      </div>
      <div className="flex justify-between p-2 mb-4">
        <div className="text-violet-400 font-extrabold">Amount</div>
        <div className="flex">
          <button
            type="button"
            className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={decrease}
          >
            -
          </button>
          <div className="flex items-center px-2">{amount}</div>
          <button
            type="button"
            className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={increase}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="w-full bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-lg disabled:bg-gray-500"
          onClick={mint}
        >
          Minting
        </button>
      </div>
    </div>
  );
}

export default Minting;
