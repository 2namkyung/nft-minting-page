import React, { memo } from 'react';

type PropTypes = {
  openseaLink: string;
  etherscanLink: string;
};

const BlockInfoLink = ({ openseaLink, etherscanLink }: PropTypes) => {
  function opensea() {
    window.open(openseaLink);
  }

  function etherscan() {
    window.open(etherscanLink);
  }
  return (
    <>
      <div className="text-xs text-center text-gray-400 mb-4">
        정확한 현재 블록 정보는 아래 링크를 참고 바랍니다.
        <div>for accurate current block information,</div>
        <div>please refer to the link below.</div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-lg mr-2"
          onClick={etherscan}
        >
          Etherscan
        </button>
        <button
          type="button"
          className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-lg"
          onClick={opensea}
        >
          OPENSEA
        </button>
      </div>
    </>
  );
};

export default memo(BlockInfoLink);
