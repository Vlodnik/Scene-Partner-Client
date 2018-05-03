import * as actions from '../actions/auth';

const initialState = {
  authToken: null,
  currentUser: null,
  loading: false,
  error: null
}

export default function authReducer(state=initialState, action) {
  if(action.type === actions.LOGIN_REQUEST) {
    return Object.assign({}, state, { loading: true, error: null });
  } else if(action.type === actions.LOGIN_SUCCESS) {
    return Object.assign({}, state, {
      authToken: action.payload.authToken,
      currentUser: action.payload.currentUser,
      loading: false
    });
  } else if(action.type === actions.LOGIN_ERROR) {
    return Object.assign({}, state, {loading: false, error: action.payload.err});
  } else if(action.type === actions.LOGOUT) {
    return Object.assign({}, state, { authToken: null, currentUser: null });
  }
  return state;
}
