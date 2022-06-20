import React from 'react';
import CurrentBlock from './CurrentBlock';
import MintingStartInfo from './MintingStartInfo';

function BlockInfo() {
  return (
    <div className="w-full m-auto lg:w-2/5 lg:border-r-2 pr-3 text-center">
      <div className="text-3xl text-violet-600 font-extrabold mb-5">
        PUBLIC SALE
      </div>
      <CurrentBlock />
      <MintingStartInfo />
    </div>
  );
}

export default BlockInfo;
