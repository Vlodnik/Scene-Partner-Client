import React from 'react';
import Options from './options';
import NewLine from './new-line';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <Options />
        <NewLine />
      </main>
    );
  }
}
