import { FC, useState } from 'react'
import styles from './ui.module.scss'
import { NavBar } from '@/features/NavBar/ui/ui'

interface props {

}

export const Header: FC<props> = ({}) => {
  
  return (<>
    {/*// TODO add NAVBAR LOGO RAINBOW*/}
    <NavBar/>
    <h1>HEADER</h1>
  </>)
}
