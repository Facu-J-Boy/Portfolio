import React from 'react';
import styles from './ProyectCard.module.css';

const ProyectCard = ({ name, technologies, images, url }) => {
  return (
    <div className={styles.proyectCard}>
      <h1>{name}</h1>
      <ul className={styles.technologies}>
        {technologies.map((e, index) => {
          return <li key={index}>{e}</li>;
        })}
      </ul>
      <div className={styles.sliderContainer}>
        {/* {images.map((el, index) => ( */}
        <img src={images[0]} alt="imagen" />
        {/* // ))} */}
      </div>
      <a href={url}>
        <button>
          <span>Ver</span>
        </button>
      </a>
    </div>
  );
};

export default ProyectCard;
