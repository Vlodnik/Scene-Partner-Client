import React from 'react';
import './options.css'

export default class Options extends React.Component {
  render() {
    const characters = this.props.lines.map(function(line, index) {
      return line.character;
    });
    console.log(characters);

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
          <input id={`${index}`} type="radio" name="option" value={char}></input>
          <label>Hear {possessive} cues</label>
        </div>
      );
    });

    return (
      <form id="options">
        <input id="all" type="radio" name="option" value="all" defaultChecked />
        <label htmlFor="all">Hear all lines</label>
        {characterOptions}
      </form>
    );
  }
}

// <input id="default" type="radio" name="option" value="default" defaultChecked />
// <label htmlFor="default">Hear cues only</label>
