import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeScene } from '../actions/scenes';

import HomeNav from './home-nav';

import './home.css';

export class Home extends React.Component {
  changeScene() {
    this.props.dispatch(changeScene(null));
  }

  render() {
    console.log(this.props.authToken);
    console.log(this.props.authToken, this.props.currentUser);

    const scenes = this.props.scenes.map((scene, index) => {
      if(scene.editing === false) {
        return (
          <li key={scene.id}>
            <Link to={`/scene/${scene.id}`}>{scene.title}</Link>
          </li>
        );
      } else {
        return (
          <li key={scene.id}>
            <Link to={`/scene-editing/${scene.id}`}>{scene.title}</Link>
          </li>
        );
      }
    });

    let bannerText;
    let buttonText;
    if(scenes.length > 0) {
      bannerText = 'Choose a scene';
      buttonText = 'New scene';
    } else {
      bannerText = 'Welcome!'
      buttonText = 'Make a scene';
    }

    return (
      <div>
        <HomeNav />
        <main id="home-main">
        <header id="home-header" role="banner">
          <h1>{bannerText}</h1>
        </header>
        <ul id="scenes">
          {scenes}
        </ul>
        <button id="new-scene-button" onClick={() => this.changeScene()}>
          <Link to="/new-scene">{buttonText}</Link>
        </button>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    scenes: state.sp.scenes,
    authToken: state.auth.authToken,
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(Home);
