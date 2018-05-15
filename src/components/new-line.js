import React from 'react';
import './new-line.css';

export default class NewLine extends React.Component {
  handleLine(e) {
    e.preventDefault();
    const character = this.character.value.toUpperCase().trim();
    const text = this.line.value;
    this.props.onAddLine(character, text);
    this.character.value = '';
    this.line.value = '';
  }

  render() {
    return (
      <form id="new-line" onSubmit={(e) => this.handleLine(e)}>
        <input
          id="character"
          type="text"
          ref={input => this.character = input}
          placeholder="Character"
          required
        />
        <textarea
          id="line"
          type="text"
          ref={text => this.line = text}
          placeholder="Enter new line here"
          required
        ></textarea>
        <button id="add-line" type="submit">Add line</button>
      </form>
    );
  }
}
