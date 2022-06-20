import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const INFURA_WS_URL = import.meta.env.VITE_INFURA_WS;

const wsProvider: ethers.providers.WebSocketProvider =
  new ethers.providers.WebSocketProvider(INFURA_WS_URL);

export default function CurrentBlock() {
  const [loading, setLoading] = useState<boolean>(true);
  const [blockNumber, setBlockNumber] = useState<number>(0);

  useEffect(() => {
    async function getBlock() {
      const number = await wsProvider.getBlockNumber();
      setBlockNumber(number);
      setLoading(false);
    }

    wsProvider.on('block', (number) => {
      setBlockNumber(number);
    });

    getBlock();

    return () => {
      wsProvider.off('block', () => {
        setLoading(true);
      });
    };
  }, []);

  return (
    <>
      <div className="text-violet-300 mb-2">CURRENT BLOCK</div>
      <div className="flex justify-center mb-4">
        <svg
          className="w-8 h-8 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
        {!loading && (
          <div className="text-xl text-violet-400 font-extrabold animate-pulse">
            # {blockNumber}
          </div>
        )}
      </div>
    </>
  );
}
