import authReducer from '../../reducers/auth';
import * as actions from '../../actions/auth';

describe('authReducer', function() {
  it('Should set initial state when nothing is passed in', function() {
    const state = authReducer(undefined, { type: null });
    expect(state).toEqual({
      authToken: null,
      currentUser: null,
      loading: false,
      error: null
    });
  });

  it('Should set loading on loginRequest', function() {
    const state = authReducer(undefined, actions.loginRequest());
    expect(state.loading).toEqual(true);
    expect(state.error).toEqual(null);
  });

  it('Should assign currentUser on loginSuccess', function() {
    let state = { currentUser: null, loading: true }
    state = authReducer(undefined, actions.loginSuccess('Miss Vanjie'));
    expect(state.currentUser).toEqual('Miss Vanjie');
    expect(state.loading).toEqual(false);
  });

  it('Should set error on loginError', function() {
    const error = 'A terrible error';
    const state = authReducer(undefined, actions.loginError(error));
    expect(state.error).toEqual(error);
  });

  it('Should set authToken on setAuthToken', function() {
    const testToken = 'jwt';
    const state = authReducer(undefined, actions.setAuthToken(testToken));
    expect(state.authToken).toEqual(testToken);
  });

  it('Should clear the authToken on clearAuth', function() {
    let state = { authToken: 'jwt', currentUser: 'Miss Vanjie' };
    state = authReducer(state, actions.clearAuth());
    expect(state.authToken).toEqual(null);
    expect(state.currentUser).toEqual(null);
  });
});
