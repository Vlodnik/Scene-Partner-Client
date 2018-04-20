import React from 'react';
import { connect } from 'react-redux';

import { selectCharacter } from '../actions';

import './options.css'

export class Options extends React.Component {
  selectCharacter(character, sceneId) {
    this.props.dispatch(selectCharacter(character, sceneId));
  }

  render() {
    const { lines, sceneId } = this.props;

    const characters = lines.map(function(line, index) {
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

    const characterOptions = uniqueCharacters.map((char, index) => {
      const possessive = char + `'s`;
      return (
        <div key={index}>
          <input
            id={char}
            type="radio"
            name="option"
            value={char}
            onChange={() => this.selectCharacter(char, sceneId)}
          />
        <label htmlFor={char}>Hear {possessive} cues</label>
        </div>
      );
    });

    return (
      <form id="options">
        <input
          id="all"
          type="radio"
          name="option"
          value="all"
          onChange={() => this.selectCharacter('all', sceneId)}
          defaultChecked
        />
        <label htmlFor="all">Hear all lines</label>
        {characterOptions}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    sceneId: state.currentSceneId
  }
}

export default connect(mapStateToProps)(Options);
