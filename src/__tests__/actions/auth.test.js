import * as actions from '../../actions/auth';
import { REACT_APP_BASE_URL } from '../../config';
jest.mock('../../local-storage');
const jwt = require('jsonwebtoken')

function createAuthToken() {
  return jwt.sign({user: 'me', password: 'password'}, '42', {
    subject: 'me',
    expiresIn: '1d',
    algorithm: 'HS256'
  });
};

describe('login', function() {
  it('Should make a POST fetch with login data', function() {
    const testToken = createAuthToken();
    const spyFetch = jest.fn().mockImplementation(() => {
      const p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          Id: 'idString',
          json: () => new Promise((resolve, reject) => {
            resolve({ authToken: testToken })
          })
        });
      });
      return p;
    });
    global.fetch = spyFetch;
    const dispatch = jest.fn();

    const username = 'Suzanne';
    const password = 'password';

    const returnedFunction = actions.login(username, password);

    expect.hasAssertions();
    return returnedFunction(dispatch).then(data => {
      expect(spyFetch.mock.calls[0][0]).toEqual(`${ REACT_APP_BASE_URL }/users/login`);
      expect(spyFetch.mock.calls[0][1].method).toEqual('POST');
      expect(JSON.parse(spyFetch.mock.calls[0][1].body).username).toEqual(username);
      expect(JSON.parse(spyFetch.mock.calls[0][1].body).password).toEqual(password);
      expect(dispatch.mock.calls[0][0].type).toEqual(actions.LOGIN_REQUEST);
      expect(dispatch.mock.calls[1][0].type).toEqual(actions.SET_AUTH_TOKEN);
      expect(dispatch.mock.calls[1][0].payload.authToken).toEqual(testToken);
      expect(dispatch.mock.calls[2][0].type).toEqual(actions.LOGIN_SUCCESS);
      expect(dispatch.mock.calls[2][0].payload.currentUser).toEqual('me');
    });
  });
});

describe('storeAuthInfo', function() {
  it('Dispatches the correct actions with authToken data', function() {
    const testToken = createAuthToken();
    const dispatch = jest.fn();

    const action = actions.storeAuthInfo(testToken, dispatch);

    expect(dispatch.mock.calls[0][0].type).toEqual(actions.SET_AUTH_TOKEN);
    expect(dispatch.mock.calls[0][0].payload.authToken).toEqual(testToken);
    expect(dispatch.mock.calls[1][0].type).toEqual(actions.LOGIN_SUCCESS);
    expect(dispatch.mock.calls[1][0].payload.currentUser).toEqual('me');
  });
});

describe('setAuthToken', function() {
  it('Dispatches the action', function() {
    const action = actions.setAuthToken('jwt');

    expect(action.type).toEqual(actions.SET_AUTH_TOKEN);
    expect(action.payload.authToken).toEqual('jwt');
  });
});

describe('loginRequest', function() {
  it('Dispatches the action', function() {
    const action = actions.loginRequest();
    expect(action.type).toEqual(actions.LOGIN_REQUEST);
  });
});

describe('loginSuccess', function() {
  it('Dispatches the action', function() {
    const action = actions.loginSuccess('Smedley');
    expect(action.type).toEqual(actions.LOGIN_SUCCESS);
    expect(action.payload.currentUser).toEqual('Smedley');
  });
});

describe('loginError', function() {
  it('Dispatches the action', function() {
    const action = actions.loginError('err');
    expect(action.type).toEqual(actions.LOGIN_ERROR);
    expect(action.payload.err).toEqual('err');
  });
});

describe('refreshAuthToken', function() {
  const testToken = createAuthToken();
  const spyFetch = jest.fn().mockImplementation(() => {
    const p = new Promise((resolve, reject) => {
      resolve({
        ok: true,
        Id: 'idString',
        json: () => new Promise((resolve, reject) => {
          resolve({ authToken: testToken })
        })
      });
    });
    return p;
  });
  global.fetch = spyFetch;
  const dispatch = jest.fn();
  function getState() {
    return { auth: { authToken: testToken } };
  }

  const returnedFunction = actions.refreshAuthToken(dispatch);

  expect.hasAssertions();
  return returnedFunction(dispatch, getState).then(data => {
    expect(spyFetch.mock.calls[0][0]).toEqual(`${ REACT_APP_BASE_URL }/users/refresh`);
    expect(spyFetch.mock.calls[0][1].method).toEqual('POST');
    expect(spyFetch.mock.calls[0][1].headers.Authorization).toEqual(`Bearer ${ testToken }`);
  });
});

describe('clearAuth', function() {
  it('Dispatches the action', function() {
    const action = actions.clearAuth();
    expect(action.type).toEqual(actions.CLEAR_AUTH);
  })
});

describe('logout', function() {
  it('Dispatches clearAuth', function() {
    const dispatch = jest.fn();
    const returnedFunction = actions.logout(dispatch);
    returnedFunction(dispatch);

    expect(dispatch.mock.calls[0][0].type).toEqual(actions.CLEAR_AUTH);
  });
});
