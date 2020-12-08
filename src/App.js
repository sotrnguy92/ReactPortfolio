import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio";
import Contact  from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
      <Router>
          <Navbar/>
          <div className="App">
              <Route path='/' component={AboutMe} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/contact' component={Contact} />
          </div>
      </Router>
  );
}

export default App;
