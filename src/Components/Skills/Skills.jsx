import React from 'react';
import styles from './Skills.module.css';

const Skills = ({ skills }) => {
  return (
    <div className={styles.container}>
      <ul>
        {skills.map((e, index) => {
          return (
            <li
              key={index}
              style={{
                border: `solid 2px ${e.color}`,
              }}
            >
              <div className={styles.imageContainer}>
                <img src={e.icon} alt="" />
              </div>
              {e.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
