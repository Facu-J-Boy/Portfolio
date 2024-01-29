import React from 'react';
import styles from './ProyectCard.module.css';
import { FaArrowRight } from 'react-icons/fa';

const ProyectCard = ({ name, technologies, images, url }) => {
  return (
    <div className={styles.proyectCard}>
      <h1>{name}</h1>
      <ul className={styles.technologies}>
        {technologies.map((e, index) => {
          return <li key={index}>{e}</li>;
        })}
      </ul>
      <div className={styles.image}>
        {/* {images.map((el, index) => ( */}
        <img src={images[0]} alt="imagen" />
        {/* // ))} */}
      </div>
      <a href={url}>
        <button>
          ver
          <FaArrowRight size={15} />
        </button>
      </a>
    </div>
  );
};

export default ProyectCard;
