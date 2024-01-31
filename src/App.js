import styles from './App.module.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import Technologies from './Components/Technologies/Technologies';
import Proyects from './Components/Proyects/Proyects';
import Mail from './Components/Mail/Mail';

function App() {
  return (
    <div className={styles.container}>
      <AboutMe />
      <Contact />
      <Mail />
      <Technologies />
      <Proyects />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
