import React from 'react';
import './options.css'

export default class Options extends React.Component {
  render() {
    return (
      <form id="options">
        <input id="default" type="radio" name="option" value="default" defaultChecked />
        <label htmlFor="default">Hear cues only</label>
        <input id="all" type="radio" name="option" value="all" />
        <label htmlFor="all">Hear all lines</label>
      </form>
    );
  }
}
