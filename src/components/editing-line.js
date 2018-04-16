import React from 'react';
import { connect } from 'react-redux';

import { changeLine } from '../actions';

import './editing-line.css';

export class EditingLine extends React.Component {
  // changeCharacter(text) {
  //   this.props.dispatch(
  //     changeCharacter(text, this.props.index, this.props.currentSceneId)
  //   );
  // }
  //
  // changeLine(text) {
  //   this.props.dispatch(
  //     changeLine(text, this.props.index, this.props.currentSceneId)
  //   );
  // }
  changeLine(e) {
    e.preventDefault();
    const characterValue = this.characterField.value;
    const textValue = this.textField.value;

    this.props.dispatch(
      changeLine(characterValue, textValue, this.props.index, this.props.currentSceneId)
    );
  }

  render() {
    return (
      <form onSubmit={(e) => this.changeLine(e)}>
        <input
          id="editing-character"
          type="text"
          ref={input => this.characterField = input}
          defaultValue={this.props.character}
        />
        <input
          id="editing-text"
          type="text"
          ref={input => this.textField = input}
          defaultValue={this.props.text}
        />
      <button className="save" type="submit">Save</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentSceneId: state.currentSceneId
  }
}

export default connect(mapStateToProps)(EditingLine);
