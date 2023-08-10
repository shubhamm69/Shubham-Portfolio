"use client";
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import styles from './services.module.css';
import Image from 'next/image';
import { fadeIn, textVariant } from '@/utils/motion';
import { SectionWrapper } from "../hoc/hoc";
import { services } from '@/constants/constants';


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

const Services = () => {
    return (
        <motion.div variants={textVariant()}>
            <h2 className={styles.titleheading}>
                OverView
            </h2>
            <p className={styles.descheading}>
                I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services.!
            </p>
            <div className={styles.serviceCards}>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} className={styles.serviceCard} />
                ))}
            </div>
        </motion.div>
    )
}

export default SectionWrapper(Services, "services");
