import User from '../models/User.model';
// import bcrypt from 'bcrypt';
// const salt = bcrypt.genSaltSync(10);

export async function getUserByUsername(username) {
  let user;
  try {
    user = await User.findOne({ username });
  } catch (err) {

  }

  if (!user) console.log('NO USER WITH THAT SUSERNAME');

  return Promise.resolve(user);
}

// export function hashPassword(user) {
//
//   user.password = bcrypt.hashSync(user.password, salt);
//
//   return user;
// }
