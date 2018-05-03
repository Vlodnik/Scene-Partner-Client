import { REACT_APP_BASE_URL } from '../config';
const { normalizeResponseErrors } = require('./utils');

export function login(username, password) {
  return function(dispatch) {
    return fetch(`${ REACT_APP_BASE_URL }/users/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    
  }
}
