import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.contactInfo}>
                <div className={styles.contactDetails}>
                    <div className={styles.contactItem}>
                        ☎️ +91 9205727966
                    </div>
                    <div className={styles.contactItem}>
                        📨 outoftheboxshubham@gmail.com
                    </div>
                    <div className={styles.contactItem}>
                        📍 Delhi, India
                    </div>
                </div>
                <div className={styles.social}>
                    <Image src="/1.png" className={styles.icon} alt="Facebook" width={24} height={24} />
                    <Image src="/2.png" className={styles.icon} alt="Instagram" width={24} height={24} />
                    <Image src="/3.png" className={styles.icon} alt="Twitter" width={24} height={24} />
                    <Image src="/4.png" className={styles.icon} alt="Youtube" width={24} height={24} />
                </div>
            </div>
            <div className={styles.designedBy}>
                Designed with ❤️ By Shubham Singh
            </div>
        </footer>
    );
}

export default Footer;
