import React from 'react';
import BlockInfo from './BlockInfo';
import Minting from './Minting';

function Content() {
  return (
    <div className="w-full flex flex-wrap border rounded border-violet-600 h-auto p-5 shadow-lg shadow-violet-500/50">
      <BlockInfo />
      <Minting />
    </div>
  );
}

export default Content;
