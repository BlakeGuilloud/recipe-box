'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postRecipe = exports.getRecipes = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getRecipes = exports.getRecipes = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(userId) {
    var recipes;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            recipes = void 0;
            _context.prev = 1;
            _context.next = 4;
            return _recipe2.default.find({ userId: userId });

          case 4:
            recipes = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](1);
            return _context.abrupt('return', _promise2.default.reject(_context.t0));

          case 10:
            return _context.abrupt('return', _promise2.default.resolve(recipes));

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 7]]);
  }));

  return function getRecipes(_x) {
    return _ref.apply(this, arguments);
  };
}();

var postRecipe = exports.postRecipe = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(data) {
    var newRecipe;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            newRecipe = void 0;
            _context2.prev = 1;
            _context2.next = 4;
            return _recipe2.default.create(data);

          case 4:
            newRecipe = _context2.sent;
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](1);
            return _context2.abrupt('return', _promise2.default.reject(_context2.t0));

          case 10:
            return _context2.abrupt('return', _promise2.default.resolve(newRecipe));

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[1, 7]]);
  }));

  return function postRecipe(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var _recipe = require('../models/recipe.model');

var _recipe2 = _interopRequireDefault(_recipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }