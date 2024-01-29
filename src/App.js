import AboutMe from './Components/AboutMe/AboutMe';
import Proyects from './Components/Proyects/Proyects';
import Technologies from './Components/Technologies/Technologies';
import styles from './App.module.css';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className={styles.container}>
      <AboutMe />
      <Contact />
      <Technologies />
      <Proyects />
    </div>
  );
}

export default App;
