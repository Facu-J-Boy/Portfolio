import React from 'react';
import styles from './Proyects.module.css';
import app from '../../App.module.css';
import ProyectCard from '../ProyectCard/ProyectCard';
import allProyects from './AllProyects';
import { FaCode } from 'react-icons/fa';

const Proyects = () => {
  return (
    <div className={styles.proyects}>
      <h1 className={app.title}>
        <FaCode size={35} />
        Proyectos
      </h1>
      <div className={styles.allProyects}>
        {allProyects.map((e, index) => {
          return (
            <ProyectCard
              key={index}
              name={e.name}
              time={e.time}
              technologies={e.technologies}
              description={e.description}
              images={e.images}
              buttons={e.buttons}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Proyects;
