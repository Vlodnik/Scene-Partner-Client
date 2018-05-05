import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { getScenes } from '../actions/scenes';

import HomeNav from './home-nav';

import './home.css';

export class Home extends React.Component {
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
    if(scenes.length > 0) {
      bannerText = 'Choose a scene';
    } else {
      bannerText = 'Welcome'
    }

    return (
      <div>
        <HomeNav />
        <main>
        <header role="banner">
          <h1>{bannerText}</h1>
        </header>
        <ul id="scenes">
          {scenes}
        </ul>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    scenes: state.sp.scenes,
    authToken: state.auth.authToken
  }
}

export default connect(mapStateToProps)(Home);
