import { SendSuccess, SendError } from 'tael';
import Shuttle from './shuttle';
import * as RecipeService from '../services/recipe.service';

export function getRecipes(req, res) {
  return Promise.resolve(Shuttle.liftRequest(req))
    .then(Shuttle.liftFunction(RecipeService.getRecipes, 'data.userId'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function postRecipe(req, res) {
  return Promise.resolve(Shuttle.liftRequest(req))
    .then(Shuttle.liftFunction(RecipeService.postRecipe, 'data'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}
