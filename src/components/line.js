import React from 'react';
import { connect } from 'react-redux';

import { readLine, readLineSuccess } from '../actions/scenes';

import './line.css';

export class Line extends React.Component {
  readExample(lineId) {
    this.props.dispatch(readLineSuccess(`https://scene-partner-mp3s.s3.amazonaws.com/${ lineId }.mp3`));
  }

  readLine(text, lineId) {
    this.props.dispatch(readLine(text, lineId, this.props.authToken));
  }

  render() {
    const { character, text, lineId, colorIndex } = this.props;

    let clickFunction;
    if(this.props.example) {
      clickFunction = () => this.readExample(lineId);
    } else {
      clickFunction = () => this.readLine(text, lineId);
    }

    return (
      <div>
        <h2 className="char-name">{character}</h2>
        <button className={`line-text color-${ colorIndex }`} onClick={clickFunction}>{text}</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authToken: state.auth.authToken
  }
}

export default connect(mapStateToProps)(Line);
