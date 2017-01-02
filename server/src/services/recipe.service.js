import Recipe from '../models/recipe.model';

export async function getRecipes(userId) {
  let recipes;

  try {
    recipes = await Recipe.find({ userId });
  } catch (err) {
    return Promise.reject(err);
  }

  return Promise.resolve(recipes);
}

export async function postRecipe(data) {
  let newRecipe;

  try {
    newRecipe = await Recipe.create(data);
  } catch (err) {
    return Promise.reject(err);
  }

  return Promise.resolve(newRecipe);
}
