import Image from 'next/image'
import styles from './page.module.scss'
import React from 'react'
import Layout from '@/app/main/layout'

export default function Home () {
  return (<>
    <Layout>
      <main className={styles.main}>
        <div className={styles.description}>
          HELLO CHRISTMAS TREE
        </div>
      </main>
    </Layout>
  </>)
}
