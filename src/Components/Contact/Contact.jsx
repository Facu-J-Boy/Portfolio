import React, { useState } from 'react';
import styles from './Contact.module.css';
import { MdOutlineFileDownload } from 'react-icons/md';
import { MdRemoveRedEye } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import Modal from './Modal';

const Contact = () => {
  const cv = './Facundo Boy.pdf';

  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.contact}>
      <a href="https://www.linkedin.com/in/facundo-boy-b7a368248/">
        <button>
          <FaLinkedin style={{ marginRight: '5px' }} />
          Linkedin
        </button>
      </a>
      <a href="https://github.com/Facu-J-Boy">
        <button>
          <FaGithub style={{ marginRight: '5px' }} />
          GitHub
        </button>
      </a>
      <div className={styles.cvZone}>
        <span style={{ color: '#fff', border: 'none' }}>CV:</span>
        <button onClick={() => setShowModal(!showModal)}>
          <MdRemoveRedEye />
          Ver
        </button>
        {showModal && (
          <div className={styles.modal}>
            <button onClick={() => setShowModal(!showModal)}>
              X
            </button>
            <Modal cv={cv} />
          </div>
        )}
        <a href={cv} download>
          <button>
            <MdOutlineFileDownload />
            Descargar
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
