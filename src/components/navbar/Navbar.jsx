"use client";

import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';
import { link } from '../../app/constants/constants'

function Navbar() {
    const session = useSession();

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Shubham</Link>
            <div className={styles.links}>
                <DarkModeToggle />
                {link.map((link) => (
                    <Link key={link.id} href={link.url} className={styles.link}>
                        {link.title}
                    </Link>
                ))}
                {
                    session.status === 'authenticated' && (
                        <button className={styles.logout} onClick={signOut}>Logout</button>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
