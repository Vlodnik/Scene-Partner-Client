import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeScene } from '../actions/scenes';

import HomeBurger from './home-hamburger';

import './nav-bar.css';

export class HomeNav extends React.Component {
  changeScene() {
    this.props.dispatch(changeScene(null));
  }

  render() {
    return (
      <nav>
        <h2 id="home" onClick={() => this.changeScene()}>
          <Link to="/home">Scene Partner</Link>
        </h2>
        <HomeBurger />
      </nav>
    );
  }
}

export default connect()(HomeNav);
