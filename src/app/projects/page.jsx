import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

function projects() {
    return (
        <div className={styles.container}>
            <h1 className={styles.selectTitle}>Select a project</h1>
            <div className={styles.items}>
                <Link href="/projects/designs" className={styles.item} >
                    <span className={styles.itemTitle}>Design</span> 
                </Link>
                <Link href="/projects/websites" className={styles.item} >
                    <span className={styles.itemTitle}>Web Dev</span>
                </Link>
                <Link href="/projects/applications" className={styles.item} >
                    <span className={styles.itemTitle}>App Dev</span>
                </Link>
            </div>
        </div>
    )
}

export default projects
