import React from 'react';
import styles from './Skills.module.css';

const Skills = ({ skills }) => {
  return (
    <div className={styles.container}>
      {skills.map((e, index) => {
        return (
          <span
            key={index}
            style={{
              border: `solid 2px ${e.color}`,
            }}
          >
            <div className={styles.imageContainer}>
              <img src={e.icon} alt="" />
            </div>
            {e.name}
          </span>
        );
      })}
    </div>
  );
};

export default Skills;
