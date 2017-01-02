import express from 'express';
import passport from '../middleware/passport';

import {
  login,
  logout,
  registerUser,
} from '../controllers/auth.controller';

const router = express.Router();


router.post('/login', passport.authenticate('local'), login);
router.delete('/logout', logout);
router.post('/register', registerUser);

module.exports = router;
