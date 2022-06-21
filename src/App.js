
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';

import './App.css';
import Footer from './component/navBar/Footer/Footer';
import NavBar from './component/navBar/NavBar';
import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import { Route, Switch, Router} from 'react-router-dom'
import {BrowserRouter as  Router, Route, Switch } from "react-router-dom";
import Contact from './pages/Contact/Contact';




function App() {
  return (<>
    <div className="App">
   
      <Router>
      <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          {/* <Route path="/contact" exact component={Contact} /> */}
        </Switch>
        <Footer />
      </Router>
   
    </div>
    </>
  );
}

export default App;
// export {Switch} from 'react-router-dom';
