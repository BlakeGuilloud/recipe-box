import { handleActions } from 'redux-actions';
import * as AuthActionTypes from '../constants/AuthActionTypes';

const authReducer = handleActions({
  [AuthActionTypes.SET_USER]: (state, action) => {
    return ({
      ...state,
      currentUser: action.payload
    })
  }
}, {
  currentUser: null
});

export default authReducer;
