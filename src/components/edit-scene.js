import React from 'react';
import { connect } from 'react-redux';
import insureSceneId from './insure-scene-id';

import { addLine } from '../actions/scenes';

import HomeNav from './home-nav';
import NewLine from './new-line';
import EditingLine from './editing-line';

import './edit-scene.css';

export class EditScene extends React.Component {
  addLine(character, line, sceneId) {
    this.props.dispatch(addLine(character, line, sceneId));
  }

  render() {
    const { sceneId } = this.props;

    const lines = this.props.lines.map(function(line, index) {
      return (
        <li key={line.id}>
          <EditingLine index={index} {...line} />
        </li>
      );
    });

    return (
      <div>
        <HomeNav />
        <main>
          <ul id="editing-lines">
            {lines}
          </ul>
          <NewLine
            onAddLine={(character, line) => this.addLine(character, line, sceneId)}
          />
        </main>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const sp = state.sp;
  const sceneId = props.match.params.id;
  const scene = sp.scenes.find(obj => {
    return obj.id === sceneId;
  });
  return {
    lines: scene.lines,
    sceneId: sp.currentSceneId,
    editing: sp.editing
  }
}

export default connect(mapStateToProps)(insureSceneId(EditScene));
