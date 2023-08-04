"use client";

import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const link = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'Portfolio',
        url: '/portfolio',
    },
    {
        id: 3,
        title: 'Blog',
        url: '/blog',
    },
    {
        id: 4,
        title: 'About',
        url: '/about',
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact',
    }
]
function Navbar() {
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
                <button className={styles.logout} onClick={console.log("user logged out")}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar
