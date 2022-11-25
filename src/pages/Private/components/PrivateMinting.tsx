import CheckWhitelist from 'components/CheckWhitelist';
import { privateMint } from 'contracts/contract';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import walletState from 'recoil/wallet';
import checkWhitelist from 'utils/checkWhitelist';
import Ether from '/img/ethereum-eth-logo.svg';

function PrivateMinting() {
  const wallet = useRecoilValue(walletState);

  const [isWhitelist, setIsWhitelist] = useState<boolean>(false);

  useEffect(() => {
    if (wallet?.address !== '') {
      const check = checkWhitelist(wallet?.address);
      setIsWhitelist(check);
    }
  }, [wallet]);

  async function mint() {
    console.log(wallet.address);
    await privateMint(wallet.address);
  }

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
          <div className="font-extrabold">1 개</div>
        </div>
        <div className="flex justify-between p-2 lg:w-1/2">
          <div className="text-violet-400 font-extrabold">Per Wallet</div>
          <div className="font-extrabold">Limited</div>
        </div>
      </div>
      <div className="flex justify-between p-2 mb-4">
        <div className="text-violet-400 font-extrabold">Check Whitelist</div>
        <CheckWhitelist isWhitelist={isWhitelist} />
      </div>

      <div>
        <button
          type="button"
          className="w-full bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-lg disabled:bg-gray-500"
          disabled={!isWhitelist}
          onClick={mint}
        >
          Minting
        </button>
      </div>
    </div>
  );
}

export default PrivateMinting;
