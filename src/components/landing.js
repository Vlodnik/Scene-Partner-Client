import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login } from '../actions/auth';

import LandingNav from './landing-nav';
import Line from './line';

import './landing.css';

export class Landing extends React.Component {
  render() {
    if(this.props.loggedIn) {
      return <Redirect to="/home" />
    }

    return (
      <div>
        <LandingNav />
        <main>
          <header id="landing-header" role="banner">
            <div id="hero-layer">
              <h1>Hear your cues <span>read aloud</span></h1>
              <h2>Run lines without a partner</h2>
              <Link to="/signup" className="sign"><button className="sign-up">Get started</button></Link>
              <p
                id="demo"
                onClick={() => this.props.dispatch(
                  login('Demo', 'password')
                )}
              >
                Try our demo account
              </p>
            </div>
          </header>
          <section className="feature">
            <div className="feature-text">
              <h2>Run lines with your device</h2>
              <h3>
                Need to run lines when nobody's around? Scene Partner lets your
                hear your cues spoken by your device.
              </h3>
            </div>
            <img alt="Different devices." src="https://s3.amazonaws.com/scene-partner-images/devices.png"></img>
          </section>
          <section id="writing-bg" className="feature">
            <div className="feature-text">
              <h2>Intuitive interface</h2>
              <h3>
                Create new scenes easily, or modify existing ones.
              </h3>
            </div>
          </section>
          <section id="example" className="feature">
            <h2>Wanna give it a try?</h2>
            <h3>
              Try running lines right now! Just click the line to hear
              it spoken aloud.
            </h3>
            <ul className="lines">
              <li>
                <Line
                  lineId="X1"
                  url="https://scene-partner-mp3s.s3.amazonaws.com/X1.mp3"
                  character="INIGO"
                  text="You're using Bonnetti's Defense against me, ah?"
                  colorIndex="0"
                />
              </li>
              <li>
                <Line
                  lineId="X2"
                  url="https://scene-partner-mp3s.s3.amazonaws.com/X2.mp3"
                  character="MAN-IN-BLACK"
                  text="I thought it fitting considering the rocky terrain."
                  colorIndex="1"
                />
              </li>
              <li>
                <Line
                  lineId="X32"
                  url="https://scene-partner-mp3s.s3.amazonaws.com/X32.mp3"
                  character="INIGO"
                  text="Naturally, you must expect me to attack with Capa Ferro?"
                  colorIndex="0"
                />
              </li>
              <li>
                <Line
                  lineId="X4"
                  url="https://scene-partner-mp3s.s3.amazonaws.com/X4.mp3"
                  character="MAN-IN-BLACK"
                  text="Naturally, but I find that Thibault cancels out Capa Ferro. Don't you?"
                  colorIndex="1"
                />
              </li>
              <li>
                <Line
                  lineId="X5"
                  url="https://scene-partner-mp3s.s3.amazonaws.com/X5.mp3"
                  character="INIGO"
                  text="Unless the enemy has studied his Agrippa... which I have."
                  colorIndex="0"
                />
              </li>
            </ul>
            <Link to="/signup" className="sign"><button className="sign-up">Get started</button></Link>
          </section>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.currentUser !== null
  }
}

export default connect(mapStateToProps)(Landing);
