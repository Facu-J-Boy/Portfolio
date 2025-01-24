import styles from './App.module.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import Technologies from './Components/Technologies/Technologies';
import Experience from './Components/Experience/Experience';
import Proyects from './Components/Proyects/Proyects';
import Mail from './Components/Mail/Mail';

import { Worker } from '@react-pdf-viewer/core';

function App() {
  return (
    <div className={styles.container}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <AboutMe />
        <Contact />
        <Mail />
        <Technologies />
        <Experience />
        <Proyects />
        <br />
        <br />
      </Worker>
    </div>
  );
}

export default App;
