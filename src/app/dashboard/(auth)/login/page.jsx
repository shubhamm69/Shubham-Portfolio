"use client";

import React from 'react'
import styles from './page.module.css'
import { signIn } from 'next-auth/react';

function Login() {
    return (
        <div className={styles.container}>
            <button
                onClick={() => signIn('google')}
                className={styles.button}>
                Login with google
            </button>
        </div>
    )
}

export default Login
