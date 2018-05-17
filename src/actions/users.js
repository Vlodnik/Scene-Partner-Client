import { SubmissionError } from 'redux-form';
import { REACT_APP_BASE_URL } from '../config';
const { normalizeResponseErrors } = require('./utils');

export function createAccount(user) {
  return function(dispatch) {
    return fetch(`${ REACT_APP_BASE_URL }/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        return normalizeResponseErrors(res);
      })
      .then(res => {
        return res.json();
      })
      .catch(err => {
        const { reason, message, location } = err;
        if(reason === 'ValidationError') {
          return Promise.reject(
            new SubmissionError({
              [location]: message
            })
          );
        }
      });
  }
}
