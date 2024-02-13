import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';

const Modal = ({ cv }) => {
  return (
    <>
      <Viewer fileUrl={cv} />
    </>
  );
};

export default Modal;
