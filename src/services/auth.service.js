import User from '../models/user.model';

export async function registerUser(data) {
  let newUser;

  try {
    newUser = await User.create(data);
  } catch (err) {
    return Promise.reject(err);
  }

  return Promise.resolve(newUser);
}

export async function login(data) {
  
}
