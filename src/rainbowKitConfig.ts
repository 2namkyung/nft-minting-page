import '@rainbow-me/rainbowkit/styles.css';

import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient } from 'wagmi';

import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';

const infuraId = import.meta.env.VITE_INFURA_API_KEY;

export const { chains, provider } = configureChains(
  [chain.goerli, chain.mainnet],
  [infuraProvider({ infuraId })],
);

export const { connectors } = getDefaultWallets({
  appName: 'Mint App',
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
