"use client";
import React from 'react';
import styles from './page.module.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function Dashboard() {
    const router = useRouter();
    const session = useSession();
    if (session.status === 'loading') {
        return <p>Loading...</p>
    }
    if (session.status === 'unauthenticated') {
        router?.push('/dashboard/login');
    }
    if (session.status === 'authenticated') {
        return (
            <div className={styles.container}>
                dashboard
            </div>
        )
    }
}

export default Dashboard;
