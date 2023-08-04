import React from 'react'
import styles from './page.module.css'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function Dashboard() {
    return (
        <div className={styles.container}>
            dashbord
        </div>
    )
}

export default Dashboard
