import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import insureSceneId from './insure-scene-id';

import { addLine, toggleEditing, updateScene } from '../actions/scenes';

import HomeNav from './home-nav';
import NewLine from './new-line';
import EditingLine from './editing-line';

import shortid from 'shortid';

import './edit-scene.css';

export class EditScene extends React.Component {
  toggleEditing() {
    const updateObj = {
      id: this.props.match.params.id,
      editing: false
    };
    this.props.dispatch(toggleEditing());
    this.props.dispatch(updateScene(updateObj, this.props.authToken));
  }

  addLine(character, text) {
    const newLine = {
      key: shortid.generate(),
      character,
      text,
      saved: 'Save'
    };
    const updateObj = {
      lines: [...this.props.lines, newLine],
      id: this.props.sceneId
    };
    this.props.dispatch(addLine(updateObj, this.props.authToken, this.props.sceneId, newLine));
  }

  render() {
    if(this.props.redirect) {
      return <Redirect to="/home" />
    }

    const lines = this.props.lines.map(function(line, index) {
      return (
        <li key={line.key}>
          <EditingLine index={index} {...line} />
        </li>
      );
    });

    let runSceneProps = {
      id: 'run-scene',
      onClick: () => this.toggleEditing(),
    };

    let runSceneButton;
    if(lines.length > 0) {
      runSceneButton = (
        <button {...runSceneProps}>
          <Link to={`/scene/${this.props.sceneId}`}>
            Run scene
          </Link>
        </button>
      );
    } else {
      runSceneProps.disabled = 'disabled';
      runSceneButton = (
        <button {...runSceneProps}>
        </button>
      );
    }

    return (
      <div>
        <HomeNav />
        <main>
          <ul id="editing-lines">
            {lines}
          </ul>
          <NewLine
            onAddLine={(character, line) => this.addLine(character, line)}
          />
          <div id="run-scene-parent">
            {runSceneButton}
          </div>
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
  if(scene) {
    return {
      title: scene.title,
      lines: scene.lines,
      sceneId: sp.currentSceneId,
      editing: true,
      authToken: state.auth.authToken
    }
  } else {
    return {
      lines: [],
      redirect: true
    }
  }
}

export default connect(mapStateToProps)(insureSceneId(EditScene));
