import React from 'react';
import styles from './page.module.css';
import Button from '@/components/button/Button';
import Image from 'next/image';
import { items } from './data.js';

const getData = (cat) => {
    const data = items[cat];
    return data || [];
};

function Category({ params }) {
    const data = getData(params.category);
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.Category}</h1>
            {data.map((item, index) => (
                <div
                    className={`${styles.item} ${index % 2 === 0 ? styles.oddItem : styles.evenItem}`}
                    key={item.id}
                >
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                        <div className={styles.buttonContainer}>
                            <Button text="See more" url="#" />
                        </div>
                    </div>
                    <div className={styles.imgContainer}>
                        <Image className={styles.img} src={item.image} alt={item.title} layout="fill" objectFit="cover" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Category;
