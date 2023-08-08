// pages/about.js
import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';

function About() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        src="https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        fill={true}
                        alt="A very cool image just like me"
                    />
                    <div className={styles.imgText}>
                        <h1 className={styles.imgTitle}>About Me</h1>
                        <h2 className={styles.imgSubtitle}>Passionate Software Developer</h2>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <div className={styles.item}>
                        <h1 className={styles.title}>Who am I?</h1>
                        <p className={styles.desc}>
                            {`Hi there! I'm Shubham Singh, a passionate software developer dedicated to crafting exceptional
                            digital experiences through code. With a strong foundation in computer science and a drive to
                            learn, I've been on a journey of turning ideas into innovative solutions that make a positive
                            impact. I am currently pursuing a Bachelor's degree in Computer Science with speacialisation in Artificial Intelligence and Machine Learnign from the Vellore Insitiute of Technology.`}
                        </p>
                        <Button url="/contact" text="Contact me" />
                    </div>
                    <div className={styles.item}>
                        <h1 className={styles.title}>What do I do?</h1>
                        <p className={styles.desc}>
                            {`As a software developer, I specialize in turning ßcomplex problems into elegant and efficient solutions.
                            My expertise spans a variety of technologies and frameworks, from front-end development using React and Next.js
                            to back-end systems powered by Node.js and databases like MongoDB and MySQL. Along with being a web developer and
                            app developer, I'm also a designer who creates clean UI designs and brings them to life through code.
                            I believe in the power of clean code, user-centric design, and continuous learning, which drive me to create
                            software that is both functional and delightful to use. With a commitment to crafting seamless user experiences,
                            I handle everything from design to deployment, ensuring that the final product meets both functional and
                            aesthetic standards.`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
