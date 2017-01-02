import passport from 'passport';
import LocalStrategy from 'passport-local';
import bcrypt from 'bcryptjs';
import * as userService from '../db/services/user.service';

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    const user = await userService.getUserByUsername(username);
    if (bcrypt.compareSync(password, user.password) === true) {
      return done(null, { userId: user._id });
    }

    return done(null, false);
  } catch (err) {
    if (err.statusCode && err.statusCode === 404) {
      return done(null, false);
    }

    return done(err);
  }
}));

passport.serializeUser((userInfo, done) => {
  done(null, userInfo);
});

passport.deserializeUser(async (userInfo, done) => {
  done(null, userInfo);
});

export default passport;
