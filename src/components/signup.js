import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import {
  required,
  nonEmpty,
  isTrimmed,
  correctLength,
  matches
} from '../validators';

import LandingNav from './landing-nav';
import Input from './input';

import './signup.css';

const passLength = correctLength({ min: 8, max: 72 });
const matchesPass = matches('new-pass');

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
              component={Input}
              placeholder="Username"
              validate={[required, nonEmpty, isTrimmed]}
            />
            <Field
              name="new-pass"
              id="new-pass"
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
})(Signup);
