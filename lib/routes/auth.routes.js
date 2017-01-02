'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _auth = require('../controllers/auth.controller');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/login', _auth.login);
router.post('/register', _auth.registerUser);

module.exports = router;