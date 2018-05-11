import React from 'react';
import { connect } from 'react-redux';

import { readLine } from '../actions/scenes';

import './line.css';

export class Line extends React.Component {
  readLine(text, lineId) {
    this.props.dispatch(readLine(text, lineId));
  }

  render() {
    const { character, text, lineId, colorIndex } = this.props;

    return (
      <div>
        <h2 className="char-name">{character}</h2>
        <button className={`line-text color-${ colorIndex }`} onClick={() => this.readLine(text, lineId)}>{text}</button>
      </div>
    );
  }
}

export default connect()(Line);
