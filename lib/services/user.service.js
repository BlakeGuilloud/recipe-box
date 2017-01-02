'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findByUserName = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var findByUserName = exports.findByUserName = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(shuttle) {
    var username, user;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = shuttle.data.username;
            user = void 0;
            _context.prev = 2;
            _context.next = 5;
            return _user2.default.findOne({ username: username });

          case 5:
            user = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](2);
            return _context.abrupt('return', _promise2.default.reject(_context.t0));

          case 11:
            if (!user) {
              _context.next = 13;
              break;
            }

            return _context.abrupt('return', _promise2.default.reject(new _tael.ConflictingRecordError('A user with username: \'' + username + '\' already exists')));

          case 13:
            return _context.abrupt('return', _promise2.default.resolve(shuttle));

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 8]]);
  }));

  return function findByUserName(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

var _tael = require('tael');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }