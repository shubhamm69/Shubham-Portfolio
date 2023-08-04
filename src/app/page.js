import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>Better deisgn for you deigital products</h1>
          <p className={styles.desc}>Turning your idea into Reality. We bring together the teams form the global tech industry</p>
          <button className={styles.button}>Get Started</button>
        </div>
        <div className={styles.item}>
          <Image src="/hero.png" alt="" width={500} height={500} className={styles.img} />
        </div>
      </div>
    </div>
  );
}
