import React from 'react';
import styles from './Proyects.module.css';
import ProyectCard from '../ProyectCard/ProyectCard';
import allProyects from './AllProyects';
import { FaCode } from 'react-icons/fa';

const Proyects = () => {
  return (
    <div className={styles.proyects}>
      <h1>
        <FaCode /> Proyectos
      </h1>
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
