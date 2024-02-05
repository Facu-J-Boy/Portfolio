import React from 'react';
import styles from './ProyectCard.module.css';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { BsFileEarmarkCode } from 'react-icons/bs';

const ProyectCard = ({
  name,
  time,
  technologies,
  description,
  images,
  buttons,
}) => {
  return (
    <div className={styles.proyectCard}>
      <div className={styles.header}>
        <h1>{name}</h1>
        <span>{time}</span>
      </div>
      <ul className={styles.technologies}>
        {technologies.map((e, index) => {
          return <li key={index}>{e}</li>;
        })}
      </ul>
      <p>{description}</p>
      <div className={styles.image}>
        <img src={images} alt="imagen" />
      </div>
      <div className={styles.buttonZone}>
        {buttons.map((e, index) => (
          <a key={index} href={e.url}>
            <button>
              {`${e.text}   `}
              <div style={{ marginLeft: '5px' }}>
                {e.icon === 'arrow' && (
                  <BsBoxArrowUpRight size={16} />
                )}
                {e.icon === 'code' && <BsFileEarmarkCode size={16} />}
              </div>
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProyectCard;
