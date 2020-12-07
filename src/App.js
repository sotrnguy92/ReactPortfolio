import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Navbar/>
          <div className="App">
              <Route exact path='/' component={AboutMe} />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/contact' component={Contact} />
          </div>
      </Router>
  );
}

export default App;
