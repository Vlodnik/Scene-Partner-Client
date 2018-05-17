import { SubmissionError } from 'redux-form';
import { REACT_APP_BASE_URL } from '../config';
import jwtDecode from 'jwt-decode';
import { saveAuthToken, clearAuthToken } from '../local-storage';
import { normalizeResponseErrors } from './utils';

export function login(username, password) {
  return function(dispatch) {
    dispatch(loginRequest());
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
      storeAuthInfo(res.authToken, dispatch);
    })
    .catch(err => {
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

export function storeAuthInfo(authToken, dispatch) {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(loginSuccess(decodedToken.user));
  saveAuthToken(authToken);
}

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export function setAuthToken(authToken) {
  return {
    type: SET_AUTH_TOKEN,
    payload: {
      authToken
    }
  }
}

export function refreshAuthToken() {
  return function(dispatch, getState) {
    const authToken = getState().auth.authToken;
    return fetch(`${ REACT_APP_BASE_URL }/users/refresh`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${ authToken }`
      }
    })
      .then(res => {
        return normalizeResponseErrors(res);
      })
      .then(res => {
        return res.json();
      })
      .then(res => {
        storeAuthInfo(res.authToken, dispatch);
      })
      .catch(err => {
        dispatch(loginError(err));
        dispatch(clearAuth());
        clearAuthToken();
      });
  }
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  }
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export function loginSuccess(currentUser) {
  return {
    type: LOGIN_SUCCESS,
    payload: {
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

export const CLEAR_AUTH = 'CLEAR_AUTH';
export function clearAuth() {
  return {
    type: CLEAR_AUTH
  }
}

export function logout() {
  return function(dispatch) {
    dispatch(clearAuth());
    clearAuthToken();
  }
}
