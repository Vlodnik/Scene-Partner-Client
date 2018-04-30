import React from 'react';

export default class Input extends React.Component {
  render() {
    const Element = this.props.element || 'input';

    let error;
    console.log(this.props);
    if(this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">{this.props.meta.error}</div>
    }

    let warning;
    if(this.props.meta.touched && this.props.meta.warning) {
      warning = <div className="form-warning">{this.props.meta.warning}</div>
    }

    return (
      console.log(this.props);
      <Element
        {...this.props.input}
        id={this.props.input.name}
        type={this.props.input.type}
        ref={input => (this.input = input)}
      >
        {this.props.children}
      </Element>
    );
  }
}
