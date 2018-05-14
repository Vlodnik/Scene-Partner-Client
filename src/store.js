import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import jwtDecode from 'jwt-decode';

import authReducer from './reducers/auth';
import scenePartnerReducer from './reducers/scenes';

import { loadAuthToken } from './local-storage';
import { setAuthToken, loginSuccess, refreshAuthToken } from './actions/auth';

const store = createStore(combineReducers({
    form: formReducer,
    auth: authReducer,
    sp: scenePartnerReducer
  }),
  applyMiddleware(thunk));

const authToken = loadAuthToken();
if(authToken) {
  const decodedToken = jwtDecode(authToken);
  store.dispatch(setAuthToken(authToken));
  store.dispatch(loginSuccess(decodedToken.user));
  store.dispatch(refreshAuthToken());
}

export default store;
