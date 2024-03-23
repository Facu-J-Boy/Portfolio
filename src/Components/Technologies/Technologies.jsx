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
          <h3>Lenguajes</h3>
          <Skills skills={TechSkills.lenguajes} />
        </div>
        <div className={styles.section}>
          <h3>Frameworks</h3>
          <Skills skills={TechSkills.frameworks} />
        </div>
        <div className={styles.section}>
          <h3>ORM</h3>
          <Skills skills={TechSkills.ORM} />
        </div>
        <div className={styles.section}>
          <h3>Base de datos</h3>
          <Skills skills={TechSkills.database} />
        </div>
        <div className={styles.section}>
          <h3>Herramientas</h3>
          <Skills skills={TechSkills.tools} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
