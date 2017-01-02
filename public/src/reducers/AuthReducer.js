import { handleActions } from 'redux-actions';
import * as AuthActionTypes from '../constants/AuthActionTypes';

const authReducer = handleActions({
  [AuthActionTypes.SET_USER]: (state, action) => {
    console.log('action paylaod', action.payload);
    return ({
      ...state,
      currentUser: action.payload._id,
    })
  }
}, {
  currentUser: null
});

export default authReducer;
