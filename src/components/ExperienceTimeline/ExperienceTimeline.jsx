"use client";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from "next/image";
import { experiences } from "@/constants/constants";
import styles from './ExperienceTimeline.module.css';
import {motion} from "framer-motion";
import { textVariant } from "@/utils/motion";
import { SectionWrapper } from "../hoc/hoc";


const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#53c28b",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid #53c28b" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <Image
                        src={experience.icon}
                        alt={experience.company_name}
                        className={styles.image}
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-[24px] font-bold'>{experience.title}</h3>
                <p
                    className=' text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className=' text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const ExperienceTimeline = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={styles.title}>
                    Work Experience.
                </h2>
                <p className={styles.desc}>
                    What I have done so far
                </p>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(ExperienceTimeline, "ExperienceTimeline");
