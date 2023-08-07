import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

export const metadata = {
    title: 'Shubham | Contact page',
    description: 'Contact me page for shubham',
}  
function Contact() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lets Connect?</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image className={styles.image} src="/contact.png" alt="" fill={true} />
                </div>
                <form className={styles.form}>
                    <input className={styles.input} type="text" placeholder="Name" />
                    <input className={styles.input} type="text" placeholder="Email" />
                    <textarea className={styles.textarea} placeholder="Message" rows="10" cols="30"/>
                    <Button text="Send" url="#"/>
                </form>
            </div>
        </div>
    )
}

export default Contact