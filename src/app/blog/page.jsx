import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Blog() {
  return (
    <div>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src="https://images.unsplash.com/photo-1690972909011-09fbbf8ab29c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="test" width={400} height={250} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div> 
      </Link>
    </div>
  )
}

export default Blog
