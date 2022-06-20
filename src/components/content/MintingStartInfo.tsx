import React, { useEffect, useState } from 'react';

import { getStartBlockNumber } from 'src/contracts/contract';

export default function MintingStartInfo() {
  const [startAt, setStartAt] = useState<string>('');

  useEffect(() => {
    (async () => {
      const startBlockNumber = await getStartBlockNumber();

      setStartAt(startBlockNumber.toString());
    })();
  }, []);

  return (
    <>
      <div className="text-violet-300 mb-2">MINTING STARTS AT</div>
      <div className="flex justify-center mb-10">
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
        <div className="text-xl font-extrabold"># {startAt}</div>
      </div>
      <div className="text-xs text-center text-gray-400 mb-4">
        정확한 현재 블록 정보는 아래 링크를 참고 바랍니다.
        <div>for accurate current block information,</div>
        <div>please refer to the link below.</div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-lg mr-2"
        >
          Etherscan
        </button>
        <button
          type="button"
          className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Rinkeby
        </button>
      </div>
    </>
  );
}
