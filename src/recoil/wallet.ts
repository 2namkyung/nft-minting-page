import { atom } from 'recoil';

export type WalletInfo = {
  address: string;
  isUnlocked: boolean;
  chainId: string;
};

const walletState = atom<WalletInfo>({
  key: 'walletState',
  default: {
    address: '',
    isUnlocked: false,
    chainId: '',
  },
});

export default walletState;
