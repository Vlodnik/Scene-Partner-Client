import React from 'react';
import {Link} from 'react-router-dom';

import HomeBurger from './home-hamburger';

import './nav-bar.css';

export default class HomeNav extends React.Component {
  render() {
    return (
      <nav>
        <h2 id="home"><Link to="/home">Scene Partner</Link></h2>
        <HomeBurger />
      </nav>
    );
  }
}
