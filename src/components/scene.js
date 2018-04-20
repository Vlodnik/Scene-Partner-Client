import React from 'react';
import { connect } from 'react-redux';
import insureSceneId from './insure-scene-id';

import { selectCharacter } from '../actions';

import HomeNav from './home-nav';
import Options from './options';
import Line from './line';

import './scene.css';

export class Scene extends React.Component {
  selectCharacter(character, sceneId) {
    this.props.dispatch(selectCharacter(character, sceneId));
  }

  render() {
    // console.log(this.props)
    const { userCharacter, sceneId } = this.props;

    const lines = this.props.lines.map((line, index) =>
      <li key={line.id}>
        <Line {...line} />
      </li>
    );

    return (
      <div>
        <HomeNav />
        <main>
          <Options
            lines={this.props.lines}
          />
          <ul id="lines">
            {lines}
          </ul>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const sceneId = props.match.params.id;
  const scene = state.scenes.find(obj => {
    return obj.id === sceneId;
  });
  return {
    lines: scene.lines,
    userCharacter: scene.userCharacter,
    sceneId: state.currentSceneId
  }
}

export default connect(mapStateToProps)(insureSceneId(Scene));
