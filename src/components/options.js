import React from 'react';
import './options.css'

export default class Options extends React.Component {
  render() {
    const { lines, onSelectCharacter } = this.props;

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

    const characterOptions = uniqueCharacters.map(function(char, index) {
      const possessive = char + `'s`;
      return (
        <div key={index}>
          <input
            id={char}
            type="radio"
            name="option"
            value={char}
            onChange={() => onSelectCharacter(char)}
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
          onChange={() => onSelectCharacter('all')}
          defaultChecked
        />
        <label htmlFor="all">Hear all lines</label>
        {characterOptions}
      </form>
    );
  }
}
