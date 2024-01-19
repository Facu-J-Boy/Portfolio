import React from 'react';
import './AboutMe.css';
import info from './info';
import profile from './profile/profile.jpg';

const AboutMe = () => {
  return (
    <>
      <h1 id="aboutMe-title">SOBRE MI</h1>
      <div className="component-aboutMe">
        <h1>¿Quien soy?</h1>
        {/* <p>
          Mi nombre es Facundo Boy, soy de Argentina y soy fullstack
          developer, graduado del Bootcamp de Henry, tengo experiencia
          con Javascript, React.js, Redux, HTML, CSS, express,
          sequelize y postgreSQL. Estoy en busca de mi primer trabajo
          como programador con ganas de aportar en nuevos proyectos,
          aprender más, mejorar mis habilidades y conocer gente,
          tambien cuento con experiencia trabajando en equipo con
          metodología scrum.
        </p>
        <h1>¿Qué hago?</h1>
        <p>
          Actualmente realizo proyectos para seguir mejorando mis
          habilidades como programador aprendiendo nuevas tecnologías.
        </p> */}
        <p>{info.info}</p>
        <div>
          <img src={profile} alt="Facundo Boy" />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
