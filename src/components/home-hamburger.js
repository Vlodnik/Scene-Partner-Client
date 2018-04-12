import React from 'react';
import {Link} from 'react-router-dom';

import './hamburger.css';

export default class HomeBurger extends React.Component {
  toggleMenu(e) {
    e.preventDefault();
    document.getElementById('dropdown').classList.toggle('is-active');
  }

  render() {
    return (
      <div>
        <button id="hamburger" onClick={(e) => this.toggleMenu(e)}>
          <div className="burger-button"></div>
          <div className="burger-button"></div>
          <div className="burger-button"></div>
        </button>
        <ul id="dropdown" className="hamburger-menu">
          <li><Link to="/scene">New scene</Link></li>
          <li><Link to="/">Log out</Link></li>
        </ul>
      </div>
    );
  }
}
