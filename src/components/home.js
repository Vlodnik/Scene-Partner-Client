import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getScenes, changeScene } from '../actions/scenes';

import HomeNav from './home-nav';

import './home.css';

export class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(getScenes(this.props.authToken));
  }

  changeScene() {
    this.props.dispatch(changeScene(null));
  }

  render() {
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

    if(this.props.loading) {
      return (
        <div>
          <HomeNav />
          <main id="home-main">
            <img
              className="loading"
              alt="Loading gif."
              src="https://s3.amazonaws.com/scene-partner-images/loading3.gif">
            </img>
          </main>
        </div>
      );
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

function mapStateToProps(state) {
  return {
    loading: state.sp.loading,
    scenes: state.sp.scenes,
    authToken: state.auth.authToken,
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(Home);
