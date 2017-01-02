import { handleActions } from 'redux-actions';
import * as RecipeActionTypes from '../constants/RecipeActionTypes';

const recipeReducer = handleActions({
  [RecipeActionTypes.RECEIVE_RECIPES]: (state, action) => {
    return ({
      ...state,
    })
  }
}, {
  recipes: [],
});

export default recipeReducer;
