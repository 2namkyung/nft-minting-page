import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chains, wagmiClient } from 'rainbowKitConfig';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { WagmiConfig } from 'wagmi';
import App from './App';
import '@rainbow-me/rainbowkit/styles.css';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.css';
import './styles/transition.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  </RecoilRoot>,
);
