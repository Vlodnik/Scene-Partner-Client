import React from 'react';

import './line.css';

export default function Line(props) {
  console.log(props.character, props.text);
  return (
    <div>
      <h2 className="char-name">{props.character}</h2>
      <button className="line-text">{props.text}</button>
    </div>
  );
}