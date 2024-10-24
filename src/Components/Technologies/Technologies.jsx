import React from 'react';
import styles from './Technologies.module.css';
import app from '../../App.module.css';
import TechSkills from './TechSkills';
import { BsWrench } from 'react-icons/bs';
import Skills from '../Skills/Skills';

const Technologies = () => {
  return (
    <div className={styles.technologies}>
      <h1 className={app.title}>
        <BsWrench size={35} />
        Tecnologías
      </h1>
      <div className={styles.habilities}>
        <div className={styles.section}>
          <Skills skills={TechSkills} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
