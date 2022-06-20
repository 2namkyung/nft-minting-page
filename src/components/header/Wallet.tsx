import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import walletState, { WalletInfo } from 'src/recoil/wallet';

function Wallet() {
  const [wallet, setWallet] = useRecoilState<WalletInfo>(walletState);

  useEffect(() => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log('not Installed');
      return;
    }

    const address = ethereum.selectedAddress;
    const chainId = ethereum.chainId;
    const isUnlocked = ethereum._state.isUnlocked;

    setWallet({ address, chainId, isUnlocked });
  }, []);

  useEffect(() => {
    const { ethereum } = window;
    if (ethereum) {
      ethereum.on('accountsChanged', (accounts: Array<string>) => {
        if (accounts.length === 0) {
          setWallet({ address: null, chainId: '', isUnlocked: false });
          return;
        }

        setWallet({ ...wallet, address: accounts[0] });
      });

      ethereum.on('chainChanged', (chainId: string) => {
        setWallet({ ...wallet, chainId });
      });
    }
  }, [wallet]);

  async function connect() {
    const { ethereum } = window;

    try {
      if (ethereum) {
        const accounts = await ethereum.request({
          method: 'eth_requestAccounts',
        });
        const address = accounts[0];
        const chainId = ethereum.chainId;
        const isUnlocked = ethereum._state.isUnlocked;

        setWallet({ address, chainId, isUnlocked });
      }
    } catch (error) {
      return error;
    }
  }

  return (
    <div className="flex justify-end">
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        onClick={connect}
      >
        {wallet.address === null || '' ? 'Connect Wallet' : 'Connected'}
      </button>
    </div>
  );
}

export default Wallet;
