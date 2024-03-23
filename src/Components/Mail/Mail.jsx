import React, { useState } from 'react';
import styles from './Mail.module.css';
import app from '../../App.module.css';
import { TbMailFilled } from 'react-icons/tb';
import { LuSendHorizonal } from 'react-icons/lu';
import { MdOutlineContentCopy } from 'react-icons/md';

const Mail = () => {
  const mail = 'boyfacundo45@gmail.com';

  const [copiado, setCopiado] = useState(false);

  const sendMail = () => {
    const enlaceCorreo = `mailto:${mail}`;
    window.location.href = enlaceCorreo;
  };

  const copyMail = async () => {
    try {
      await navigator.clipboard.writeText(mail);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000); // Restablecer la etiqueta después de 2 segundos
    } catch (error) {
      console.error('Error al copiar al portapapeles:', error);
      alert('No se pudo copiar el correo al portapapeles');
    }
  };

  return (
    <div className={styles.mail}>
      <h1 className={app.title}>
        <TbMailFilled size={35} />
        Mail
      </h1>
      <div className={styles.mailInput}>
        <input type="text" readOnly value={mail} />
        <button onClick={sendMail}>
          <LuSendHorizonal />
        </button>
        <button onClick={copyMail}>
          <MdOutlineContentCopy />
        </button>
        {copiado && <span className={styles.etiqueta}>Copiado</span>}
      </div>
    </div>
  );
};

export default Mail;
