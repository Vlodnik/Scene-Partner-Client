import React from 'react';
import './new-line.css';

export default class NewLine extends React.Component {
  render() {
    return (
      <form id="new-line">
        <input id="character" type="text" placeholder="Character name" required />
        <textarea id="line" type="text" placeholder="Enter line here" required></textarea>
        <button id="add-line" type="submit">Add line</button>
      </form>
    );
  }
}
