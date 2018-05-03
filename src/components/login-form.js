import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { required, nonEmpty } from '../validators';

import { login } from '../actions/auth';

import LandingNav from './landing-nav';
import Input from './input';

import './signup-form.css';

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.user, values.pass));
  }

  render() {
    let error;
    if(this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }

    return (
      <div>
        <LandingNav />
        <main>
          <form
            id="login-form"
            onSubmit={this.props.handleSubmit(values =>
              this.onSubmit(values)
          )}>
            <h2>Log into your account</h2>
            {error}
            <Field
              name="user"
              id="user"
              type="text"
              component={Input}
              placeholder="Username"
              validate={[required, nonEmpty]}
            />
            <Field
              name="pass"
              id="pass"
              type="password"
              component={Input}
              placeholder="Password"
              validate={[required, nonEmpty]}
            />
            <button
              id="login"
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
  form: 'login',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('login', 'user'))
})(LoginForm);
