import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm = from './login-form';

export function LoginPage(props) {
  if(props.loggedIn) {
    return <Redirect to="/home" />
  }
  return (
    <LoginForm />
  );
}

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.currentUser !== null
  }
}

export default connect(mapStateToProps)(LoginPage);
