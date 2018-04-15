import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { addScene } from '../actions';

import HomeNav from './home-nav';

import './new-scene.css';

export class NewScene extends React.Component {
  addScene(e) {
    e.preventDefault();
    const title = this.title.value.trim();
    this.props.dispatch(addScene(title));
    this.title.value = '';
  }

  render() {
    if(this.props.currentSceneId) {
      return <Redirect to={`/scene/${this.props.currentSceneId}`} />;
    }
    return (
      <div>
        <HomeNav />
        <main>
          <form id="new-scene" onSubmit={(e) => this.addScene(e)}>
            <input
              id="new-scene-name"
              type="text"
              ref={input => this.title = input}
              placeholder="Enter scene name"
              required
            />
          <button id="create-scene" type="submit">Create scene</button>
          </form>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentSceneId: state.currentSceneId,
    scenes: state.scenes,
  };
}

export default connect(mapStateToProps)(NewScene);