import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleEditing, changeScene } from '../actions';

import './hamburger.css';

export class HomeBurger extends React.Component {
  toggleMenu(e) {
    e.preventDefault();
    document.getElementById('dropdown').classList.toggle('is-active');
  }

  toggleEditing() {
    this.props.dispatch(toggleEditing());
  }

  changeScene() {
    this.props.dispatch(changeScene(null));
  }

  render() {
    const { currentSceneId, editing } = this.props;

    if(currentSceneId !== null && !(editing)) {
      return (
        <div>
          <button id="hamburger" onClick={(e) => this.toggleMenu(e)}>
            <div className="burger-button"></div>
            <div className="burger-button"></div>
            <div className="burger-button"></div>
          </button>
          <ul id="dropdown" className="hamburger-menu">
            <li onClick={() => this.toggleEditing()}>
              <Link to={`/scene-editing/${currentSceneId}`}>Edit scene</Link>
            </li>
            <li onClick={() => this.changeScene()}>
              <Link to="/new-scene">New scene</Link>
            </li>
            <li>
              <Link to="/">Log out</Link>
            </li>
          </ul>
        </div>
      );
    } else if(currentSceneId !== null && editing) {
      return (
        <div>
          <button id="hamburger" onClick={(e) => this.toggleMenu(e)}>
            <div className="burger-button"></div>
            <div className="burger-button"></div>
            <div className="burger-button"></div>
          </button>
          <ul id="dropdown" className="hamburger-menu">
            <li onClick={() => this.toggleEditing()}>
              <Link to={`/scene/${currentSceneId}`}>Run scene</Link>
            </li>
            <li onClick={() => this.changeScene()}>
              <Link to="/new-scene">New scene</Link>
            </li>
            <li>
              <Link to="/">Log out</Link>
            </li>
          </ul>
        </div>
      );
    }
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

function mapStateToProps(state) {
  if(state.currentSceneId !== null) {
    const currentScene = state.scenes.find(scene => scene.id === state.currentSceneId);
    console.log(currentScene);
    const editing = currentScene.editing;
    console.log('in HomeBurger, editing is: ' + editing);

    return {
      currentSceneId: state.currentSceneId,
      editing
    }
  }
  return {
    currentSceneId: state.currentSceneId
  }
}

export default connect(mapStateToProps)(HomeBurger);
