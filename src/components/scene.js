import React from 'react';

import HomeNav from './home-nav';
import Options from './options';
import NewLine from './new-line';

import './scene.css';

export default class Scene extends React.Component {
  render() {
    return (
      <div>
        <HomeNav />
        <main>
          <Options />
          <NewLine />
        </main>
      </div>
    );
  }
}
