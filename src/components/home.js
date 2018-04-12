import React from 'react';
import {Link} from 'react-router-dom';

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
          <li><Link to="/scene/sceneId">Funky Chicken Scene</Link></li>
          <li><Link to="/scene/sceneId">R&J Act 2 Scene 1</Link></li>
          <li><Link to="/scene/sceneId">Wicked: Popular</Link></li>
          <li><Link to="/scene/sceneId">Who's Afraid of Virginia Woolf</Link></li>
        </ul>
        </main>
      </div>
    );
  }
}
