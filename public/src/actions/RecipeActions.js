import axios from 'axios';
import { createAction } from 'redux-actions';
import * as RecipeActionTypes from '../constants/RecipeActionTypes';

export const receiveRecipes = createAction(RecipeActionTypes.RECEIVE_RECIPES);

export function fetchRecipes() {
  const userId = localStorage.getItem('currentUser');
  return dispatch =>
    axios.post('/api/user/recipes', { userId })
      .then((response) => {
        console.log('response', response);
        dispatch(receiveRecipes(response.data));
      })
      .catch((err) => {
        console.log('error: ', err);
      });
}
