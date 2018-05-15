import React from 'react';
import { connect } from 'react-redux';

import { changeLine, updateScene, deleteLine } from '../actions/scenes';

import './editing-line.css';

export class EditingLine extends React.Component {
  changeLine(e) {
    e.preventDefault();
    const characterValue = this.characterField.value;
    const textValue = this.textField.value;
    const updateObj = {
      id: this.props.sceneId,
      lines: this.props.lines,
      editing: true
    };

    // this.props.dispatch(updateLineSuccess(this.props.index));
    // setTimeout(() => this.props.dispatch(clearSaveMessage(this.props.index)), 1500);

    this.props.dispatch(
      changeLine(characterValue, textValue, this.props.index, this.props.sceneId)
    );

    this.props.dispatch(
      updateScene(updateObj, this.props.authToken, this.props.index)
    );
  }

  deleteLine(e) {
    e.preventDefault(e);
    let updatedLines = this.props.lines.filter((line, index) => {
      if(index === this.props.index) {
        return false;
      }
      return true;
    });

    const updateObj = {
      id: this.props.sceneId,
      lines: updatedLines,
      editing: true
    };

    this.props.dispatch(
      deleteLine(this.props.index, this.props.sceneId)
    );

    this.props.dispatch(
      updateScene(updateObj, this.props.authToken)
    );
  }

  render() {
    let saveMessage;
    if(this.props.saved === 'Saved!') {
      saveMessage = 'Saved!';
    } else if (this.props.saved === 'Error!') {
      saveMessage = 'Error!';
    } else {
      saveMessage = 'Save';
    }

    if(saveMessage )

    return (
      <form className="editing-line" onSubmit={(e) => this.changeLine(e)}>
        <input
          required
          className="editing-character"
          type="text"
          ref={input => this.characterField = input}
          defaultValue={this.props.character}
        />
        <textarea
          required
          className="editing-text"
          type="text"
          ref={input => this.textField = input}
          defaultValue={this.props.text}>
        </textarea>
        <button
          className="save"
          type="submit">
          {this.props.saved}
        </button>
        <button
          className="delete"
          onClick={(e) => this.deleteLine(e)}>
          Delete
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  const scene = state.sp.scenes.find(scene => {
    return scene.id === state.sp.currentSceneId;
  })

  if(scene) {
    return {
      sceneId: state.sp.currentSceneId,
      lines: scene.lines,
      authToken: state.auth.authToken
    }
  } else {
    return {
      sceneId: state.sp.currentSceneId,
      lines: [],
      authToken: state.auth.authToken
    }
  }
}

export default connect(mapStateToProps)(EditingLine);
