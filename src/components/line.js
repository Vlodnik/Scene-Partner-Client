import React from 'react';
import { connect } from 'react-redux';

// import { readLineSuccess } from '../actions/scenes';

import './line.css';

export class Line extends React.Component {
  // readLine(text, lineId) {
  //   this.props.dispatch(readLine(text, lineId, this.props.authToken));
  // }
  readLine(url) {
    const audio = new Audio(url);
    audio.play();
  }

  render() {
    const { character, text, colorIndex } = this.props;

    if(this.props.loading) {
      return (
        <div>
          <h2 className="char-name">{character}</h2>
          <img alt="Loading gif." src="https://s3.amazonaws.com/scene-partner-images/loading.gif" />
        </div>
      );
    }
    return (
      <div>
        <h2 className="char-name">{character}</h2>
        <button
          className={`line-text color-${ colorIndex }`}
          onClick={() => this.readLine(this.props.url)}
        >
          {text}
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authToken: state.auth.authToken,
    loading: state.sp.loading
  }
}

export default connect(mapStateToProps)(Line);
