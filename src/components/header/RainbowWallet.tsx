import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import walletState, { WalletInfo } from 'recoil/wallet';

import { ConnectButton } from '@rainbow-me/rainbowkit';

function RainbowWallet() {
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
          setWallet({ address: '', chainId: '', isUnlocked: false });
          return;
        }

        setWallet({ ...wallet, address: accounts[0] });
      });

      ethereum.on('chainChanged', (chainId: string) => {
        setWallet({ ...wallet, chainId });
      });
    }
  }, [wallet]);

  return <ConnectButton />;
}

export default RainbowWallet;
