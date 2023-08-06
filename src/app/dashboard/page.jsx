"use client";
import React from 'react';
import styles from './page.module.css';
import { useSession } from 'next-auth/react';

function Dashboard() {

    const session = useSession();
    return (
        <div className={styles.container}>
            dashboard
        </div>
    );
}

export default Dashboard;
