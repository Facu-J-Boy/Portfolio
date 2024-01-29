import React from 'react';
import styles from './Proyects.module.css';
import ProyectCard from '../ProyectCard/ProyectCard';
import allProyects from './AllProyects';

const Proyects = () => {
  return (
    <div className={styles.proyects}>
      {/* <div className="component-proyect"> */}
      <div className={styles.allProyects}>
        {allProyects.map((e, index) => {
          return (
            <ProyectCard
              key={index}
              name={e.name}
              technologies={e.technologies}
              images={e.images}
              url={e.url}
            />
          );
        })}
      </div>
    </div>
    // </div>
  );
};

export default Proyects;
