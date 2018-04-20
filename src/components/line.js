import React from 'react';
import { connect } from 'react-redux';

import { readLine } from '../actions';

import './line.css';

export class Line extends React.Component {
  readLine(text) {
    this.props.dispatch(readLine(text));
  }

  render() {
    const { character, text } = this.props;

    return (
      <div>
        <h2 className="char-name">{character}</h2>
        <button className="line-text" onClick={this.readLine(text)}>{text}</button>
      </div>
    );
  }
}

export default connect()(Line);
