import React from 'react';
import styles from './Technologies.module.css';
import TechSkills from './TechSkills';
import { BsWrench } from 'react-icons/bs';

const Technologies = () => {
  return (
    <div className={styles.technologies}>
      <h1>
        <BsWrench /> Tecnologias
      </h1>
      <div className={styles.habilities}>
        <div className={styles.section}>
          <h3>Lenguajes</h3>
          <ul>
            {TechSkills.lenguajes.map((e, index) => {
              return <li key={index}>{e}</li>;
            })}
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Frameworks</h3>
          <ul>
            {TechSkills.frameworks.map((e, index) => {
              return <li key={index}>{e}</li>;
            })}
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Base de datos</h3>
          <ul>
            {TechSkills.database.map((e, index) => {
              return <li key={index}>{e}</li>;
            })}
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Herramientas</h3>
          <ul>
            {TechSkills.tools.map((e, index) => {
              return <li key={index}>{e}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
