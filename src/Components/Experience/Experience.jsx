import React from 'react';
import styles from './Experience.module.css';
import app from '../../App.module.css';
import { FaBriefcase } from 'react-icons/fa6';
import ExperienceCard from '../Cards/ExperienceCard/ExperienceCard';
import experienceList from './ExperienceList';

const Experience = () => {
  return (
    <div className={styles.experience}>
      <h1 className={app.title}>
        <FaBriefcase size={35} />
        Experiencia
      </h1>
      <div>
        {experienceList.map((e, index) => {
          return (
            <ExperienceCard
              key={index}
              title={e.title}
              role={e.role}
              time={e.time}
              description={e.description}
              image={e.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
