import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'

function Category({ params }) {
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.Category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                    <Button text="See more" url="#"/>
                </div>
                <div className={styles.imgContainer}>
                    <Image 
                    className={styles.img}
                    src="https://images.unsplash.com/photo-1690972909011-09fbbf8ab29c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="test" fill={true}/>
                </div>
            </div>
        </div>
    )
}

export default Category
