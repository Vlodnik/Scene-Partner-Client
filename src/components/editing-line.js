import React from 'react';

import './editing-line.css';

export default function EditingLine(props) {
  return (
    <div>
      <input
        id="editing-character"
        type="text"
        value={props.character}
      />
      <input
        id="editing-text"
        type="text"
        value={props.text}
      />
    </div>
  );
}
