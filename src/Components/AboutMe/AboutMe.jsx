import React from 'react';
import styles from './AboutMe.module.css';
import info from './info';
import profile from './profile/profile.jpg';

const AboutMe = () => {
  return (
    <div div className={styles.aboutMe}>
      {/* <h1 id="aboutMe-title">SOBRE MI</h1> */}
      {/* <div className="component-aboutMe"> */}
      {/* <h1>¿Quien soy?</h1> */}
      <div className={styles.info}>
        <h1>{info.name}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Mollitia quas pariatur nihil, amet provident quibusdam
          dolores autem, accusamus reprehenderit, doloremque
          assumenda! Iure obcaecati odio illo. Repellat labore facere
          non. Iusto?
        </p>
      </div>
      {/* <p>{info.info}</p> */}
      <div className={styles.imageContainer}>
        <img src={profile} alt="Facundo Boy" />
      </div>
      {/* </div> */}
    </div>
  );
};

export default AboutMe;
