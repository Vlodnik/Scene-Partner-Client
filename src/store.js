import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { scenePartnerReducer } from './reducers';

export default createStore(scenePartnerReducer, applyMiddleware(thunk));
