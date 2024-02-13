import React, { useState } from 'react';
import styles from './Contact.module.css';
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineFileDownload } from 'react-icons/md';
import { MdRemoveRedEye } from 'react-icons/md';
import Modal from './Modal';

const Contact = () => {
  const cv = './Facundo Boy.pdf';

  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.contact}>
      <a href={`${process.env.REACT_APP_LINKEDIN_URL}`}>
        <button
          style={{ color: '#0e76a8', border: 'solid 1px #0e76a8' }}
        >
          <FaLinkedin /> Linkedin
        </button>
      </a>
      <a href={`${process.env.REACT_APP_GITHUB_URL}`}>
        <button
          style={{ color: '#171515', border: 'solid 1px #171515' }}
        >
          <BsGithub /> GitHub
        </button>
      </a>
      <div className={styles.cvZone}>
        <span style={{ color: '#333', border: 'none' }}>CV:</span>
        <button onClick={() => setShowModal(!showModal)}>
          <MdRemoveRedEye />
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
          </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
