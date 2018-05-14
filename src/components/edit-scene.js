import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import insureSceneId from './insure-scene-id';

import { addLine, updateScene, toggleEditing } from '../actions/scenes';

import HomeNav from './home-nav';
import NewLine from './new-line';
import EditingLine from './editing-line';

import './edit-scene.css';

export class EditScene extends React.Component {
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   const changedLine = prevProps.lines.find((line, index) => {
  //     console.log(line.character, line.text);
  //     console.log(this.props.lines[index].character, this.props.lines[index].text);
  //     if(line.character !== this.props.lines[index].character) {
  //       console.log('found character change');
  //       return true;
  //     } else if(line.text !== this.props.lines[index].text) {
  //       console.log('found a line change');
  //       return true;
  //     }
  //     return false;
  //   });
  //   if(changedLine) {
  //     return changedLine;
  //   }
  //   return null;
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const updateObj = {
      id: this.props.sceneId,
      title: this.props.title,
      lines: this.props.lines,
      editing: true
    };
    this.props.dispatch(
      updateScene(updateObj, this.props.authToken)
    );
  }

  toggleEditing() {
    this.props.dispatch(toggleEditing());
  }

  addLine(character, line, sceneId) {
    this.props.dispatch(addLine(this.props.authToken, character, line, sceneId));
  }

  render() {
    if(this.props.lines.length === 0) {
      return <Redirect to="/home" />
    }

    const { sceneId, saved } = this.props;

    let savedMessage;
    if(saved) {
      savedMessage = (
        <h2 id="save-mes">Saved!</h2>
      );
    } else {
      savedMessage = (
        <h2 id="save-mes">Error</h2>
      );
    }

    // function hideSaveMes() {
    //   const message = document.getElementById('save-mes');
    //   message.setAttribute('hidden', true);
    // }
    //
    // window.setTimeout(hideSaveMes(), 1000);

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
          {savedMessage}
          <ul id="editing-lines">
            {lines}
          </ul>
          <NewLine
            onAddLine={(character, line) => this.addLine(character, line, sceneId)}
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
      saved: sp.saved,
      authToken: state.auth.authToken
    }
  } else {
    return {
      lines: []
    }
  }
}

export default connect(mapStateToProps)(insureSceneId(EditScene));
