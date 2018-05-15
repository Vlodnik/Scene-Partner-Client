import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import insureSceneId from './insure-scene-id';

import { updateScene, selectCharacter, toggleEditing } from '../actions/scenes';

import HomeNav from './home-nav';
// import Options from './options';
import Line from './line';

import './scene.css';

export class Scene extends React.Component {
  selectCharacter(character, sceneId) {
    this.props.dispatch(selectCharacter(character, sceneId));
  }

  toggleEditing() {
    this.props.dispatch(toggleEditing());
  }

  render() {
    console.log(this.props.lines);
    if(this.props.lines.length === 0) {
      return <Redirect to="/home" />
    }

    const characters = this.props.lines.map(function(line, index) {
      return line.character;
    });

    let charactersSoFar = [];
    const uniqueCharacters = characters.filter(function(char, index) {
      if(charactersSoFar.find(el => el === char)) {
        return false;
      } else {
        charactersSoFar.push(char);
        return true;
      }
    });

    const colorLines = this.props.lines.map(function(line) {
      let colorIndex = uniqueCharacters.findIndex(char => char === line.character);
      while(colorIndex > 3) {
        colorIndex -= 4;
      }
      line.colorIndex = colorIndex;
      return line;
    });

    const lines = colorLines.map((line, index) =>
      <li key={line.key}>
        <Line {...line} lineId={line.key} />
      </li>
    );

    return (
      <div>
        <HomeNav />
        <main>
          {/*<Options
            lines={this.props.lines}
          />*/}
          <ul className="lines">
            {lines}
          </ul>
          <button id="edit-scene" onClick={() => this.toggleEditing()}>
            <Link to={`/scene-editing/${this.props.sceneId}`}>
              Edit scene
            </Link>
          </button>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const sceneId = props.match.params.id;
  const scene = state.sp.scenes.find(obj => {
    return obj.id === sceneId;
  });
  console.log(scene);
  if(scene) {
    return {
      lines: scene.lines,
      userCharacter: scene.userCharacter,
      sceneId: state.sp.currentSceneId,
      editing: scene.editing,
      authToken: state.auth.authToken
    }
  } else {
    return {
      lines: []
    }
  }
}

export default connect(mapStateToProps)(insureSceneId(Scene));
