import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import authReducer from './reducers/auth';
import scenePartnerReducer from './reducers/scenes';

import { loadAuthToken } from './local-storage';
import { setAuthToken, refreshAuthToken } from './actions/auth';

const store = createStore(combineReducers({
    form: formReducer,
    auth: authReducer,
    sp: scenePartnerReducer
  }),
  applyMiddleware(thunk));

const authToken = loadAuthToken();
if(authToken) {
  const jwt = authToken;
  store.dispatch(setAuthToken(jwt));
  store.dispatch(refreshAuthToken());
}

export default store;
