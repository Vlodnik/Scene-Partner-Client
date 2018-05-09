import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import {
  required,
  nonEmpty,
  isTrimmed,
  correctLength,
  matches
} from '../validators';

import { createAccount } from '../actions/users';
import { login } from '../actions/auth';

import LandingNav from './landing-nav';
import Input from './input';

import './signup-form.css';

const passLength = correctLength({ min: 8, max: 72 });
const matchesPass = matches('password');

export class SignupForm extends React.Component {
  onSubmit(values) {
    console.log(values);
    const { username, password } = values;
    const user = { username, password };
    return this.props
      .dispatch(createAccount(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <div>
        <LandingNav />
        <main className="login-parent">
          <form id="account-creation" onSubmit={this.props.handleSubmit(values =>
              this.onSubmit(values)
            )}>
            <h2>Create your account</h2>
            <Field
              name="username"
              id="username"
              type="text"
              component={Input}
              placeholder="Username"
              validate={[required, nonEmpty, isTrimmed]}
            />
            <Field
              name="password"
              id="password"
              type="password"
              component={Input}
              placeholder="Password"
              validate={[required, nonEmpty, isTrimmed, passLength]}
            />
            <Field
              name="pass-confirm"
              id="pass-confirm"
              type="password"
              component={Input}
              placeholder="Confirm password"
              validate={[required, nonEmpty, isTrimmed, passLength, matchesPass]}
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
  form: 'signup',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('signup', Object.keys(errors)[0]))
})(SignupForm);
