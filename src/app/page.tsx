import Image from 'next/image';
import styles from './page.module.scss';
import React from 'react';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>HELLO CHRISTMAS TREE</div>
      </main>
    </>
  );
}
