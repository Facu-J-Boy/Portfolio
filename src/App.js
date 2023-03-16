import { Route, BrowserRouter } from 'react-router-dom';
import AboutMe from './Components/AboutMe/AboutMe';
import NavBar from './Components/NavBar/NavBar';
import Technologies from './Components/Technologies/Technologies';

function App() {
  return (
    <BrowserRouter>
    <Route path="/" render={() => <NavBar />} />
    <div >
      <Route path="/aboutme" render={() => <AboutMe/>} />
      <Route path="/technologies" render={() => <Technologies />} />      
    </div>
    </BrowserRouter>
  );
}

export default App;
