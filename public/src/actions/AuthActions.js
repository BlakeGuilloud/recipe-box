import axios from 'axios';
import { createAction } from 'redux-actions';
import * as AuthActionTypes from '../constants/AuthActionTypes';


export const setUser = createAction(AuthActionTypes.SET_USER);

export function login(payload) {
  return dispatch =>
    axios.post('/login', payload)
      .then((response) => {
        console.log('response', response);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
}
