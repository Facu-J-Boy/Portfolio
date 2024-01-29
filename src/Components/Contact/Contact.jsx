import React from 'react';
import styles from './Contact.module.css';
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineFileDownload } from 'react-icons/md';

const Contact = () => {
  const cv = './Facundo Boy.pdf';
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
      <a href={cv} download>
        <button style={{ color: '#333', border: 'solid 1px #333' }}>
          <MdOutlineFileDownload /> CV
        </button>
      </a>
    </div>
  );
};

export default Contact;
