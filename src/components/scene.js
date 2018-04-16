import React from 'react';
// import {bindActionCreators} from 'redux'; THIS IS ANOTHER WAY TO DISPATCH ACTIONS
import { connect } from 'react-redux';

import { selectCharacter, addLine } from '../actions';

import HomeNav from './home-nav';
import Options from './options';
import Line from './line';

import './scene.css';

export class Scene extends React.Component {
  selectCharacter(character, sceneId) {
    this.props.dispatch(selectCharacter(character, sceneId));
  }

  addLine(character, line, sceneId) {
    this.props.dispatch(addLine(character, line, sceneId));
  }

  render() {
    const { sceneId } = this.props;

    const lines = this.props.lines.map((line, index) =>
      <li key={index}>
        <Line {...line} />
      </li>
    );

    return (
      <div>
        <HomeNav />
        <main>
          <Options
            lines={this.props.lines}
            onSelectCharacter={(character) => this.selectCharacter(character, sceneId)}
          />
          <ul id="lines">
            {lines}
          </ul>
          {/*<NewLine
            onAddLine={(character, line) => this.addLine(character, line, sceneId)}
          />*/}
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
    lines: scene.lines,
    sceneId
  }
}

// THIS IS ANOTHER WAY TO DISPATCH ACTIONS
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { selectCharacter, addLine }, dispatch);
// }

export default connect(mapStateToProps)(Scene);
