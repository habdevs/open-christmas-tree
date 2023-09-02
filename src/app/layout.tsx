import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@rainbow-me/rainbowkit/styles.css'
import {
  getDefaultWallets, RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import {
  mainnet, polygon, optimism, arbitrum, base, zora,
} from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora], [
    alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }), publicProvider()])

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App', projectId: 'YOUR_PROJECT_ID', chains,
})

const wagmiConfig = createConfig({
  autoConnect: true, connectors, publicClient,
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Open-Christmas-tree', description: 'Open New Year\'s gifts',
}

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (<html lang="en">
    <body className={inter.className}>
    {/*<PROVIDER.ADD>*/}
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        {children}
        {/*</PROVIDER.ADD>*/}
      </RainbowKitProvider>
    </WagmiConfig>
    </body>
    </html>)
}
