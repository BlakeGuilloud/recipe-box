import express from 'express';

import {
  getRecipes,
  postRecipe,
} from '../controllers/recipe.controller';

const router = express.Router();

router.post('/user/recipes', getRecipes);
router.post('/recipes', postRecipe);

module.exports = router;
