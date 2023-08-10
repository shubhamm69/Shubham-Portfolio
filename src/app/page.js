import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/button/Button';
import ExperienceTimeline from '@/components/experienceTimeline/ExperienceTimeline';
import Services from '@/components/services/Services';

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Hey,<br /> I am Shubham
          </h1>
          <p className={styles.desc}>I am a Web and Mobile app development specialist with a passion for crafting user-friendly applications that deliver exceptional experiences. My expertise lies in building dynamic web platforms and cutting-edge mobile applications.</p>
          <Button url="/projects" text="See my work" />
        </div>
        <div className={styles.item}>
          <Image src="/hero.png" alt="" width={500} height={500} className={styles.img} />
        </div>
      </div>
      <Services />
      <ExperienceTimeline />
    </div>
  );
}
