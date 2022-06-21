import React from 'react';
import { act, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import Wallet from './Wallet';
import { RecoilRoot } from 'recoil';

const WALLET_ADDRESS = '0xeA090721E72aCe074b1d644e730153E9dDD45acA';
const SIGNED_MESSAGE =
  '0xa2162955fbfbac44ad895441a3501465861435d6615053a64fc9622d98061f1556e47c6655d0ea02df00ed6f6050298eea381b4c46f8148ecb617b32695bdc451c';

const WINDOW_ETHEREUM = {
  isMetaMask: true,
  selectedAddress: WALLET_ADDRESS,
  chainId: '0x4',
  request: async (request: { method: string; params?: Array<unknown> }) => {
    if (['eth_accounts', 'eth_requestAccounts'].includes(request.method)) {
      return [WALLET_ADDRESS];
    } else if (['personal_sign'].includes(request.method)) {
      return SIGNED_MESSAGE;
    }

    throw Error(`Unknown Request: ${request.method}`);
  },

  _state: {
    accounts: [WALLET_ADDRESS],
    isConnected: true,
    isUnlocked: true,
    initialized: true,
    isPermanentlyDisconnected: false,
  },

  on: (event: string) => (params?: any) => {
    if (event === 'accountsChanged') {
      return [WALLET_ADDRESS];
    }

    if (event === 'chainChanged') {
      return '0x4';
    }
  },
};

window.ethereum = WINDOW_ETHEREUM;

afterEach(() => {
  window.ethereum = { ...WINDOW_ETHEREUM };
});

describe('<Wallet />', () => {
  it('Check Wallet Connect, Metamask address', async () => {
    render(
      <RecoilRoot>
        <Wallet />
      </RecoilRoot>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    await act(async () => {
      user.click(button);
    });

    const element = screen.getByTestId('wallet_button');

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(WALLET_ADDRESS);
  });
});
