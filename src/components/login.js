import React from 'react';

import LandingNav from './landing-nav';

import './signup.css';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <LandingNav />
        <main>
          <form id="login-form">
            <h2>Log into your account</h2>
            <input id="user" type="text" placeholder="Username" required />
            <input id="pass" type="password" placeholder="Password" required />
            <button id="login" type="submit">Continue</button>
          </form>
        </main>
      </div>
    );
  }
}
