import { SubmissionError } from 'redux-form';
import { REACT_APP_BASE_URL } from '../config';
const { normalizeResponseErrors } = require('./utils');

export function login(username, password) {
  return function(dispatch) {
    dispatch(requestLogin());
    return fetch(`${ REACT_APP_BASE_URL }/users/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(res => {
      return normalizeResponseErrors(res);
    })
    .then(res => {
      return res.json();
    })
    .then(res => {
      dispatch(loginSuccess(res.authToken, username))
    })
    .catch(err => {
      console.log(err);
      dispatch(loginError(err));

      let message;
      if(err.code === 401) {
        message = 'Incorrect username or password';
      } else {
        message = 'Unable to login'
      }

      return Promise.reject(
        new SubmissionError({
          _error: message
        })
      );
    });
  }
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export function requestLogin() {
  return {
    type: LOGIN_REQUEST
  }
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function loginSuccess(authToken, currentUser) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      authToken,
      currentUser
    }
  }
}

export const LOGIN_ERROR = 'LOGIN_ERROR';
export function loginError(err) {
  return {
    type: LOGIN_ERROR,
    payload: {
      err
    }
  }
}

export const LOGOUT = 'LOGOUT';
export function logout() {
  return {
    type: LOGOUT
  }
}
