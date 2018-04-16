import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeScene } from '../actions';

import HomeNav from './home-nav';

import './home.css';

export class Home extends React.Component {
  changeScene(sceneId) {
    this.props.dispatch(changeScene(sceneId));
  }

  render() {
    const scenes = this.props.scenes.map((scene, index) => {
      if(scene.editing === false) {
        return (
          <li onClick={() => this.changeScene(scene.id)} key={index}>
            <Link to={`/scene/${scene.id}`}>{scene.title}</Link>
          </li>
        );
      } else {
        return (
          <li onClick={() => this.changeScene(scene.id)} key={index}>
            <Link to={`/scene-editing/${scene.id}`}>{scene.title}</Link>
          </li>
        );
      }
    });

    return (
      <div>
        <HomeNav />
        <main>
        <header role="banner">
          <h1>Choose a scene</h1>
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
    scenes: state.scenes
  }
}

export default connect(mapStateToProps)(Home);

// <li><Link to="/scene/sceneId">Funky Chicken Scene</Link></li>
// <li><Link to="/scene/sceneId">R&J Act 2 Scene 1</Link></li>
// <li><Link to="/scene/sceneId">Wicked: Popular</Link></li>
// <li><Link to="/scene/sceneId">Who's Afraid of Virginia Woolf</Link></li>
