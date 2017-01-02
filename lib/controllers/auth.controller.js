'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.login = login;
exports.registerUser = registerUser;

var _tael = require('tael');

var _shuttle = require('./shuttle');

var _shuttle2 = _interopRequireDefault(_shuttle);

var _auth = require('../services/auth.service');

var AuthService = _interopRequireWildcard(_auth);

var _user = require('../services/user.service');

var UserService = _interopRequireWildcard(_user);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function login(req, res) {
  return _promise2.default.resolve(_shuttle2.default.liftRequest(req)).then(_shuttle2.default.liftFunction(AuthService.login, 'data.username')).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}

function registerUser(req, res) {
  return _promise2.default.resolve(_shuttle2.default.liftRequest(req)).then(UserService.findByUserName).then(_shuttle2.default.liftFunction(AuthService.registerUser, 'data')).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}