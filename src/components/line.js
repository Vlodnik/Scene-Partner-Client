import React from 'react';
import {connect} from 'react-redux';

import './line.css';

export default function Line(props) {
  return (
    <div>
      {props.text}
    </div>
  );
}
