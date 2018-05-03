import React from 'react';
import {Link} from 'react-router-dom';

import LandingNav from './landing-nav';

import './landing.css';

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <LandingNav />
        <main>
          <header role="banner">
            <h1>Hear your cues aloud so you can memorize your lines.</h1>
            <Link to="/signup"><button id="sign-up">Get started</button></Link>
          </header>
          <section>
            <h2>Run lines with your device</h2>
            <h3>
              Need to run lines when nobody's around? Scene Partner lets your
              hear your cues spoken by your device, so you can keep learning
              outside of rehearsal.
            </h3>
          </section>
          <section>
            <h2>Easily enter new scenes</h2>
            <h3>
              Navigate through our intuitive interface. Just choose "new line"
              or "new cue," and then enter the line! Once you're done, hit the
              "Scene complete" button at the bottom of the page.
            </h3>
          </section>
          <section>
            <h2>Wanna give it a try?</h2>
            <h3>
              Try running lines right now! Just click the first cue line to hear
              it, then hit space to check your line.
            </h3>
            <button type="submit" name="button">
              INIGO: You're using Bonnetti's Defense against me, ah?
            </button>
          </section>
        </main>
      </div>
    );
  }
}
