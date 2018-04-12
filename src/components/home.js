import React from 'react';

import HomeNav from './home-nav';

import './home.css';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeNav />
        <main>
        <header role="banner">
          <h1>Choose a scene</h1>
        </header>
        <ul id="scenes">
          <li>Funky Chicken Scene</li>
          <li>R&J Act 2 Scene 1</li>
          <li>Wicked: Popular</li>
          <li>Who's Afraid of Virginia Woolf</li>
        </ul>
        </main>
      </div>
    );
  }
}
