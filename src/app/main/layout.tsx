import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import { ReactNode } from 'react'

export default function Layout ({ children }: { children: ReactNode }) {
  return (<>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>)
}