import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AboutMe from './Components/AboutMe/AboutMe';
import NavBar from './Components/NavBar/NavBar';
import Proyects from './Components/Proyects/Proyects';
import Technologies from './Components/Technologies/Technologies';

function App() {
  return (
    <BrowserRouter>
    <Route path="/" render={() => <NavBar />} />
    <Switch >
      <Route path="/aboutme" render={() => <AboutMe/>} />
      <Route path="/technologies" render={() => <Technologies />} />  
      <Route path="/proyects" render={() => <Proyects />} />    
    </Switch>
    </BrowserRouter>
  );
}

export default App;
