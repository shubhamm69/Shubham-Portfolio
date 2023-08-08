"use client";
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import styles from './ServiceCard.module.css';
import Image from 'next/image';
import { fadeIn } from '@/utils/motion';

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className={styles.tilt}>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className={styles.gradientShadow}
            >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className={styles.contentContainer}
            >
                <Image
                    src={icon}
                    alt='web-development'
                    className={styles.icon}
                />

                <h3 className={styles.title}>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

export default ServiceCard;
