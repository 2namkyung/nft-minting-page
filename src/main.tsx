import { MetaMaskProvider } from 'metamask-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <MetaMaskProvider>
        <App />
      </MetaMaskProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
