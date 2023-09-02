import React, { FC } from 'react'
import styles from './ui.module.scss'

interface props {

}

export const Footer: FC<props> = () => {
  return (<footer className={styles.wrap}>
    <div>
      <span className={styles.logoWrap}></span>
      <h3> Open New Year's gifts @2023</h3>
    </div>
    <div className={styles.socials}>
    </div>
  </footer>)
}