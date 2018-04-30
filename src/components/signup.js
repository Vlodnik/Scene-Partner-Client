import React from 'react';
import { reduxForm, Field } from 'redux-form';

import LandingNav from './landing-nav';

import './signup.css';

export class Signup extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div>
        <LandingNav />
        <main>
          <form id="account-creation" onSubmit={this.props.handleSubmit(values =>
              this.onSubmit(values)
            )}>
            <h2>Create your account</h2>
            <Field
              name="new-user"
              id="new-user"
              type="text"
              component="input"
              placeholder="Username"
              required
            />
            <Field
              name="new-pass"
              id="new-pass"
              type="password"
              component="input"
              placeholder="Password"
              required
            />
            <Field
              name="pass-confirm"
              id="pass-confirm"
              type="password"
              component="input"
              placeholder="Confirm password"
              required
            />
            <button
              id="create"
              type="submit"
              disabled={
                this.props.pristine || this.props.submitting
              }
            >
              Continue
            </button>
          </form>
        </main>
      </div>
    );
  }
}

export default reduxForm({
  form: 'signup'
})(Signup);
