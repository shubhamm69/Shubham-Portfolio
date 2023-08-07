import React from 'react'
import styles from './layout.module.css' 

function layout({ children }) {
    return (
        <div> 
            <h1 className={styles.mainTitle}>My Works</h1>
            {children}
        </div>
    )
}

export default layout
