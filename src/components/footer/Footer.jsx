import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

function Footer() {
    return (
        <div className= {styles.container}>
            <div>©2023 made with love ~Shubham Singh, All rights reserved</div>
            <div className={styles.social}> 
            <Image src="/1.png" className={styles.icon}alt="Facebook" width={24} height={24} />
            <Image src="/2.png" className={styles.icon}alt="Instagram" width={24} height={24} />
            <Image src="/3.png" className={styles.icon}alt="Twitter" width={24} height={24} />
            <Image src="/4.png" className={styles.icon}alt="Youtube" width={24} height={24} />
            </div>
        </div>
    )
}

export default Footer
