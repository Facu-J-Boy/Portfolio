import React from 'react';
import styles from './AboutMe.module.css';
import profile from './profile/profile.jpg';

const AboutMe = () => {
  return (
    <div div className={styles.aboutMe}>
      <div className={styles.info}>
        <div className={styles.imageContainer}>
          <img src={profile} alt="Facundo Boy" />
        </div>
        <div className={styles.title}>
          <h1>Facundo Boy</h1>
          <h3>Desarrollador web</h3>
        </div>
      </div>
      <p>
        Desarrollador enfocado en React y TypeScript para la creación
        de interfaces de usuario dinámicas. Mi experiencia se extiende
        al desarrollo de API's CRUD utilizando Node.js, con bases de
        datos SQL y NoSQL para el backend. Apasionado por construir
        soluciones eficientes y modernas, estoy listo para aportar a
        proyectos que busquen innovación y calidad técnica.
      </p>
    </div>
  );
};

export default AboutMe;
