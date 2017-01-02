'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _recipe = require('../controllers/recipe.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/user/recipes', _recipe.getRecipes);
router.post('/recipes', _recipe.postRecipe);

module.exports = router;