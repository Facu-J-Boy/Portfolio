import React, { useState } from 'react';
import styles from './Contact.module.css';
import { MdOutlineFileDownload } from 'react-icons/md';
import { FaRegFileAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';

import Modal from './Modal';

const Contact = () => {
  const cv = './Facundo Boy.pdf';

  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.contact}>
      <a href="https://www.linkedin.com/in/facundo-boy-b7a368248/">
        <button>
          <FaLinkedin />
        </button>
      </a>
      <a href="https://github.com/Facu-J-Boy">
        <button>
          <FaGithub />
        </button>
      </a>
      <button onClick={() => setShowModal(!showModal)}>
        <FaRegFileAlt />
      </button>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalButtons}>
            <a href={cv} download>
              <button>
                <MdOutlineFileDownload />
              </button>
            </a>
            <button onClick={() => setShowModal(!showModal)}>
              <IoMdCloseCircle />
            </button>
          </div>
          <Modal cv={cv} />
        </div>
      )}
    </div>
  );
};

export default Contact;
