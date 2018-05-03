import * as actions from '../actions';

const initialState = {
  authToken: null,
  currentUser: null,
  loading: false,
  error: null
}

export default function authReducer(state=initialState, action) {
  return state;
}
