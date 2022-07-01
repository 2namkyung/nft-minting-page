import React from 'react';
import ProgressBar from './ProgressBar';
import RainbowWallet from './RainbowWallet';

function Header() {
  return (
    <>
      <div className="flex justify-end">
        <RainbowWallet />
      </div>
      <div className="flex justify-end mt-5 mb-10">{/* <ProgressBar /> */}</div>
    </>
  );
}

export default Header;
