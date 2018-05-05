import React from 'react';
import {Link} from 'react-router-dom';

import LandingNav from './landing-nav';
import Line from './line';

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
              Navigate through our intuitive interface. To make a new scene, hit
              the New Scene button and enter your lines. Your changes are saved
              automatically, so all you have to do when you're done is hit Run
              Scene to start running lines with Scene Partner.
            </h3>
          </section>
          <section>
            <h2>Wanna give it a try?</h2>
            <h3>
              Try running lines right now! Just click the first cue line to hear
              it, then hit space to check your line.
            </h3>
            <Line
              id="X1"
              character="INIGO"
              text="You're using Bonnetti's Defense against me, ah?"
            />
            <Line
              id="X2"
              character="MAN-IN-BLACK"
              text="I thought it fitting considering the rocky terrain."
            />
            <Line
              id="X3"
              character="INIGO"
              text="Naturally, you must suspect me to attack with Capa Ferro?"
            />
            <Line
              id="X4"
              character="MAN-IN-BLACK"
              text="Naturally, but I find that Thibault cancels out Capa Ferro. Don't you?"
            />
            <Line
              id="X5"
              character="INIGO"
              text="Unless the enemy has studied his Agrippa...which I have."
            />
          </section>
        </main>
      </div>
    );
  }
}
