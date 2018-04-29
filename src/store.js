import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import { scenePartnerReducer } from './reducers';

export default createStore(combineReducers({
    form: formReducer,
    sp: scenePartnerReducer
  }),
  applyMiddleware(thunk));
