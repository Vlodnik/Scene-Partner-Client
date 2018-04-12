import React from 'react';
import {Link} from 'react-router-dom';

import LandingBurger from './landing-hamburger';

import './nav-bar.css';

export default class LandingNav extends React.Component {
  render() {
    return (
      <nav>
        <h2 id="home"><Link to="/">Scene Partner</Link></h2>
        <LandingBurger />
      </nav>
    );
  }
}
