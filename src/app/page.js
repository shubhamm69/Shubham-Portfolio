import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/button/Button';
import ServiceCard from '@/components/ServiceCard/page';
import { services } from './constants/constants';

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Hey, I am Shubham Singh
          </h1>
          <p className={styles.desc}>I am a Web and Mobile app development specialist with a passion for crafting user-friendly applications that deliver exceptional experiences. My expertise lies in building dynamic web platforms and cutting-edge mobile applications.</p>
          <Button url="/projects" text="See my work" />
        </div>
        <div className={styles.item}>
          <Image src="/hero.png" alt="" width={500} height={500} className={styles.img} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Introduction
          </h1>
          <p className={styles.desc}>I am a Web and Mobile app development specialist with a passion for crafting user-friendly applications that deliver exceptional experiences. My expertise lies in building dynamic web platforms and cutting-edge mobile applications.</p>
          <div className={styles.serviceCards}>
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} className={styles.serviceCard} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
