import React from 'react';

export default class Input extends React.Component {
  render() {
    const Element = this.props.element || 'input';

    let error;
    if(this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">{this.props.meta.error}</div>
    }

    let warning;
    if(this.props.meta.touched && this.props.meta.warning) {
      warning = <div className="form-warning">{this.props.meta.warning}</div>
    }

    return (
      <div className="form-inputs">
        <label htmlFor={this.props.input.name}>
          {error}
          {warning}
        </label>
        <Element
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          ref={input => (this.input = input)}
        >
          {this.props.children}
        </Element>
      </div>
    );
  }
}
