import React from 'react';
import ProgressBar from './ProgressBar';
import Wallet from './Wallet';

function Header() {
  return (
    <>
      <Wallet />
      <div className="flex justify-end mt-5 mb-10">
        <ProgressBar />
      </div>
    </>
  );
}

export default Header;
