import { useState } from 'react';
import styles from './ExperienceCard.module.css';

const ExperienceCard = ({
  title,
  role,
  description,
  time,
  image,
}) => {
  const [openImage, setOpenImage] = useState(false);

  return (
    <div className={styles.experienceCard}>
      <h1>{title}</h1>
      <div className={styles.subtitle}>
        <span className={styles.role}>{role}</span>
        <span className={styles.time}>{time}</span>
      </div>
      <p>{description}</p>
      <div className={styles.footer}>
        <button onClick={() => setOpenImage(true)}>
          Certificado
        </button>
      </div>
      {openImage && (
        <div
          onClick={() => setOpenImage(false)}
          className={styles.certificate}
        >
          <img src={image} alt="certificado" />
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
