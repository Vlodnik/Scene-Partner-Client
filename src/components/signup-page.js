import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import SignupForm from './signup-form';

export function SignupPage(props) {
  if(props.loggedIn) {
    return <Redirect to="/home" />;
  }
  return (
    <SignupForm />
  );
}

function mapStateToProps(state) {
  return {
    loggedIn: state.sp.currentUser !== null
  }
}

export default connect(mapStateToProps)(SignupPage);
