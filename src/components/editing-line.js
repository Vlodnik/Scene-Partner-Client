import React from 'react';
import { connect } from 'react-redux';

import { changeLine, deleteLine } from '../actions';

import './editing-line.css';

export class EditingLine extends React.Component {
  changeLine(e) {
    e.preventDefault();
    const characterValue = this.characterField.value;
    const textValue = this.textField.value;

    this.props.dispatch(
      changeLine(characterValue, textValue, this.props.index, this.props.currentSceneId)
    );
  }

  deleteLine(e) {
    e.preventDefault(e);
    this.props.dispatch(
      deleteLine(this.props.index, this.props.currentSceneId)
    );
  }

  render() {
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
          Save
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
  return {
    currentSceneId: state.sp.currentSceneId
  }
}

export default connect(mapStateToProps)(EditingLine);
