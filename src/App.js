import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import Settings from './Settings'
import Display from './Display'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route path="/settings" component={Settings}>
          </Route>
          <Route path="/display" component={Display}>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
