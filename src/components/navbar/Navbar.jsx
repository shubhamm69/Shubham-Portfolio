"use client";

import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';

const link = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'Projects',
        url: '/projects',
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
    },
    // {
    //     id: 6,
    //     title: 'Dashboard',
    //     url: '/dashboard',
    // }
]
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
