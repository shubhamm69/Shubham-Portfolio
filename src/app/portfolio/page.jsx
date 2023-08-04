import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

function Portfolio() {
    return (
        <div className={styles.container}>
            <h1 className={styles.selectTitle}>Select a project</h1>
            <div className={styles.items}>
                <Link href="/portfolio/illustrations" className={styles.item} >
                    <span className={styles.itemTitle}>Project 1</span> 
                </Link>
                <Link href="/portfolio/websites" className={styles.item} >
                    <span className={styles.itemTitle}>Project 1</span>
                </Link>
                <Link href="/portfolio/apps" className={styles.item} >
                    <span className={styles.itemTitle}>Project 1</span>
                </Link>
            </div>
        </div>
    )
}

export default Portfolio
