import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeScene, deleteScene } from '../actions/scenes';
import { logout } from '../actions/auth';

import './hamburger.css';

export class HomeBurger extends React.Component {
  toggleMenu(e) {
    e.preventDefault();
    document.getElementById('dropdown').classList.toggle('is-active');
  }

  changeScene() {
    this.props.dispatch(changeScene(null));
  }

  deleteScene() {
    this.props.dispatch(changeScene(null));
    this.props.dispatch(deleteScene(this.props.currentSceneId, this.props.authToken));
  }

  logout() {
    this.props.dispatch(logout());
  }

  render() {
    const { currentSceneId, editing } = this.props;
    console.log(currentSceneId, this.props.authToken);

    if(currentSceneId !== null && !(editing)) {
      return (
        <div>
          <button id="hamburger" onClick={(e) => this.toggleMenu(e)}>
            <div className="burger-button"></div>
            <div className="burger-button"></div>
            <div className="burger-button"></div>
          </button>
          <ul id="dropdown" className="hamburger-menu">
            <li onClick={() => this.changeScene()}>
              <Link to="/home">Home</Link>
            </li>
            <li onClick={() => this.changeScene()}>
              <Link to="/new-scene">New scene</Link>
            </li>
            <li onClick={() => this.logout()}>
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
            <li onClick={() => this.changeScene()}>
              <Link to="/home">Home</Link>
            </li>
            <li onClick={() => this.changeScene()}>
              <Link to="/new-scene">New scene</Link>
            </li>
            <li onClick={() => this.deleteScene()}>
              <Link to="/home">Delete scene</Link>
            </li>
            <li onClick={() => this.logout()}>
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
          <li onClick={() => this.logout()}>
            <Link to="/">Log out</Link>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const sp = state.sp;

  if(sp.currentSceneId !== null) {
    const currentScene = sp.scenes.find(scene => scene.id === sp.currentSceneId);
    let editing;
    if(currentScene) {
      editing = currentScene.editing;
    }
    return {
      authToken: state.auth.authToken,
      currentSceneId: sp.currentSceneId,
      editing
    }
  }
  return {
    authToken: state.auth.authToken,
    currentSceneId: sp.currentSceneId
  }
}

export default connect(mapStateToProps)(HomeBurger);
