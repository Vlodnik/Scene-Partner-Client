import React from 'react';

import LandingNav from './landing-nav';

import './signup.css';

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <LandingNav />
        <main>
          <form id="account-creation">
            <h2>Create your account</h2>
            <input id="new-user" type="text" placeholder="Username" required />
            <input id="new-pass" type="password" placeholder="Password" required />
            <input id="pass-confirm" type="password" placeholder="Confirm password" required />
            <button id="create" type="submit">Continue</button>
          </form>
        </main>
      </div>
    );
  }
}
