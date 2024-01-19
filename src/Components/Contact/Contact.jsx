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
        <FaLinkedin size={30} />
      </a>
      <a href={`${process.env.REACT_APP_GITHUB_URL}`}>
        <BsGithub size={30} />
      </a>
      <a href={cv} download>
        <MdOutlineFileDownload size={30} />
      </a>
    </div>
  );
};

export default Contact;
