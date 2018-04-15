import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './landing';
import Signup from './signup';
import Login from './login';
import Home from './home';
// import NewScene from './new-scene';
import Scene from './scene';
import Footer from './footer';

import './app.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route path="/home" component={Home} />
            {/*<Route exact path="/scene/new" component={NewScene} />*/}
            <Route path="/scene/:id" component={Scene} />
          <Footer />
        </div>
      </Router>
    );
  }
}
