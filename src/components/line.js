import React from 'react';
import { connect } from 'react-redux';

import { readLine } from '../actions';

import './line.css';

export class Line extends React.Component {
  readLine(text, id) {
    this.props.dispatch(readLine(text, id));
  }

  render() {
    const { character, text, id } = this.props;

    return (
      <div>
        <h2 className="char-name">{character}</h2>
        <button className="line-text" onClick={() => this.readLine(text, id)}>{text}</button>
      </div>
    );
  }
}

export default connect()(Line);
