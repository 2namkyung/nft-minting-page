import { memo } from 'react';
import Loading from './Loading';

type PropTypes = {
  blockNumber: number;
};

function CurrentBlock({ blockNumber }: PropTypes) {
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
        {blockNumber === 0 ? (
          <Loading />
        ) : (
          <div className="text-xl text-violet-400 font-extrabold animate-pulse">
            # {blockNumber}
          </div>
        )}
      </div>
    </>
  );
}

export default memo(CurrentBlock);
