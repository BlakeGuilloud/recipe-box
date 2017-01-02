'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.getRecipes = getRecipes;
exports.postRecipe = postRecipe;

var _tael = require('tael');

var _shuttle = require('./shuttle');

var _shuttle2 = _interopRequireDefault(_shuttle);

var _recipe = require('../services/recipe.service');

var RecipeService = _interopRequireWildcard(_recipe);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRecipes(req, res) {
  return _promise2.default.resolve(_shuttle2.default.liftRequest(req)).then(_shuttle2.default.liftFunction(RecipeService.getRecipes, 'data.userId')).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}

function postRecipe(req, res) {
  return _promise2.default.resolve(_shuttle2.default.liftRequest(req)).then(_shuttle2.default.liftFunction(RecipeService.postRecipe, 'data')).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}