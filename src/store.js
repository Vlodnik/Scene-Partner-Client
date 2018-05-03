import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import authReducer from './reducers/auth';
import scenePartnerReducer from './reducers/scenes';

export default createStore(combineReducers({
    form: formReducer,
    auth: authReducer,
    sp: scenePartnerReducer
  }),
  applyMiddleware(thunk));
