import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './AuthReducer';
import recipeReducer from './RecipeReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  recipe: recipeReducer,
  routing: routerReducer,
});

export default rootReducer;
