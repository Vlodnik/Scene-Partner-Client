import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeScene } from '../actions';

import './hamburger.css';

export class HomeBurger extends React.Component {
  toggleMenu(e) {
    e.preventDefault();
    document.getElementById('dropdown').classList.toggle('is-active');
  }

  changeScene() {
    this.props.dispatch(changeScene(null));
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
          <li onClick={() => this.changeScene()}>
            <Link to="/new-scene">New scene</Link>
          </li>
          <li><Link to="/">Log out</Link></li>
        </ul>
      </div>
    );
  }
}

export default connect()(HomeBurger);
