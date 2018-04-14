import React from 'react';
import {connect} from 'react-redux';

import HomeNav from './home-nav';
import Options from './options';
import NewLine from './new-line';
import Line from './line';

import './scene.css';

export class Scene extends React.Component {
  render() {
    const lines = this.props.lines.map((line, index) =>
      <li key={index}>
        <Line {...line} />
      </li>
    );

    return (
      <div>
        <HomeNav />
        <main>
          <Options lines={this.props.lines} />
          <ul id="lines">
            {lines}
          </ul>
          <NewLine />
        </main>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const sceneId = Number(props.match.params.id);
  const scene = state.scenes.find(obj => {
    return obj.id === sceneId;
  });
  return {
    lines: scene.lines
  }
}

export default connect(mapStateToProps)(Scene);
