import React from 'react';
import { connect } from 'react-redux';

// import { someActionHere } from '../actions';

import './line.css';

export class Line extends React.Component {
  render() {
    return (
      <div>
        <h2 className="char-name">{this.props.character}</h2>
        <button className="line-text">{this.props.text}</button>
      </div>
    );
  }
}

export default connect()(Line);
