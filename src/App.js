import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Comparison from './components/Comparison';
import Summary from './components/Summary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/countries/summary">
              <Summary />
            </Route>
            <Route path="/countries/:countries/status/:status">
              <Comparison />
            </Route>
            <Route path="/">
              <Link to="/countries/summary">Summary</Link>
              <Link to="/countries/us;italy;spain;belgium;china/status/confirmed">Comparison</Link>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
