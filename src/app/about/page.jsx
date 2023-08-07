import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

function About() {
    return (
        <div className={styles.container}>

            <div className={styles.imgContainer}>
                <Image className={styles.img} src="https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" fill={true} alt="A very cool image just like me" />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}> Digital Storytellers</h1>
                    <h2 className={styles.imgSubtitle}>HandCrafting award winning digital experience</h2>
                </div>
            </div>
            {/* <div className={styles.content}>
                <h1>About</h1>
                <p>
                    I am a full stack developer with 2 years of experience in web development. I have worked on various projects using React, Node, Express, MongoDB, MySQL, etc. I have also worked on various projects using Python, C++, Java, etc. I am a quick learner and I am always ready to learn new technologies.
                </p>
                <h1>Education</h1>
                <p>
                    I have completed my B.Tech in Computer Science and Engineering from IIT Roorkee in 2020. I have completed my 12th from DAV Public School, BSEB, Patna in 2016. I have completed my 10th from DAV Public School, BSEB, Patna in 2014.
                </p>
                <h1>Skills</h1>
                <p>
                    I have worked on various projects using React, Node, Express, MongoDB, MySQL, etc. I have also worked on various projects using Python, C++, Java, etc. I am a quick learner and I am always ready to learn new technologies.
                </p>
            </div> */}
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who are we?</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perspiciatis alias omnis, culpa iste sit fugiat tempora minus
                        <br />
                        assumenda rem consequatur? Sapiente necessitatibus molestias odit error labore, veritatis facere reprehenderit eaque nobis repellat nam?
                        <br />
                        Minima, nisi. Minima obcaecati aut quidem incidunt laboriosam doloremque libero, quod perferendis exercitationem et aspernatur tempore nemo, accusantium alias sunt sint possimus?
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What do we do?</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perspiciatis alias omnis, culpa iste sit fugiat tempora minus
                        <br />
                        assumenda rem consequatur? Sapiente necessitatibus molestias odit error labore, veritatis facere reprehenderit eaque nobis repellat nam?
                        <br />
                        -Minima, nisi. Minima obcaecati
                        <br />
                        -ut quidem incidunt laboriosam
                        <br />
                        -ut quidem incidunt laboriosam
                        <br />
                    </p>
                    <Button url="/contact" text="Contact"/>
                </div>
            </div>
        </div>
    )
}

export default About
