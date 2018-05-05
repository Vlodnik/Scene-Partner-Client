import React from 'react';
import { connect } from 'react-redux';
import insureSceneId from './insure-scene-id';

import { addLine, updateScene } from '../actions/scenes';

import HomeNav from './home-nav';
import NewLine from './new-line';
import EditingLine from './editing-line';

import './edit-scene.css';

export class EditScene extends React.Component {
  componentDidUpdate() {
    const updateObj = {
      id: this.props.sceneId,
      title: this.props.title,
      lines: this.props.lines,
      editing: true
    };
    this.props.dispatch(
      updateScene(updateObj, this.props.authToken)
    );
  }

    // console.log(prevProps.lines === this.props.lines);
    // console.log(prevState, prevProps, this.props);
    //
    // function arraysOfObjectsEqual(val1, val2) {
    //   if(val1.length !== val2.length) {
    //     return false;
    //   }
    //   let areEqual = true;
    //   val1.forEach((obj, index) => {
    //     for(let prop in obj) {
    //       console.log(obj[prop], val2[index][prop]);
    //       if(obj[prop] !== val2[index][prop]) {
    //         areEqual = false;
    //       }
    //     }
    //   })
    //   return areEqual;
    // }
    //
    // console.log(arraysOfObjectsEqual(prevProps.lines, this.props.lines));

  addLine(character, line, sceneId) {
    this.props.dispatch(addLine(this.props.authToken, character, line, sceneId));
  }

  render() {
    const { sceneId } = this.props;

    const lines = this.props.lines.map(function(line, index) {
      return (
        <li key={line.key}>
          <EditingLine index={index} {...line} />
        </li>
      );
    });

    return (
      <div>
        <HomeNav />
        <main>
          <ul id="editing-lines">
            {lines}
          </ul>
          <NewLine
            onAddLine={(character, line) => this.addLine(character, line, sceneId)}
          />
        </main>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const sp = state.sp;
  const sceneId = props.match.params.id;
  const scene = sp.scenes.find(obj => {
    return obj.id === sceneId;
  });
  return {
    title: scene.title,
    lines: scene.lines,
    sceneId: sp.currentSceneId,
    editing: true,
    authToken: state.auth.authToken
  }
}

export default connect(mapStateToProps)(insureSceneId(EditScene));
