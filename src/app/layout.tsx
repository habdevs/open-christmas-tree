import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// TODO uncoments wagmi rainbowkit @habdevs
// import '@rainbow-me/rainbowkit/styles.css';
// import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
// import { configureChains, createConfig, WagmiConfig } from 'wagmi';
// import { polygon } from 'wagmi/chains';
// import { alchemyProvider } from 'wagmi/providers/alchemy';
// import { publicProvider } from 'wagmi/providers/public';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

// TODO uncoments Provider @habdevs
// const { chains, publicClient } = configureChains(
//   [polygon],
//   [alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY! })],
// );
//
// const { connectors } = getDefaultWallets({
//   appName: 'My Christmas Tree',
//   chains,
//   projectId: '',
// });
//
// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
// });

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Open-Christmas-tree',
  description: "Open New Year's gifts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*<PROVIDER.ADD>*/}
        {/*<WagmiConfig config={wagmiConfig}>*/}
        {/*  <RainbowKitProvider chains={chains}>*/}
        <Header />
        {children}
        {/*</PROVIDER.ADD>*/}
        <Footer />
        {/*  </RainbowKitProvider>*/}
        {/*</WagmiConfig>*/}
      </body>
    </html>
  );
}
