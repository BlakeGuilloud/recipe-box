import { handleActions } from 'redux-actions';
import * as RecipeActionTypes from '../constants/RecipeActionTypes';

const recipeReducer = handleActions({
  [RecipeActionTypes.RECEIVE_RECIPES]: (state, action) => {
    console.log('action', action);
    return ({
      ...state,
      recipes: action.payload,
    })
  }
}, {
  recipes: [],
});

export default recipeReducer;
