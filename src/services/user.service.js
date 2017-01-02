import User from '../models/user.model';
import { ConflictingRecordError } from 'tael';

export async function findByUserName(shuttle) {
  const username = shuttle.data.username;
  let user;

  try {
    user = await User.findOne({ username });
  } catch (err) {
    return Promise.reject(err);
  }

  if (user) return Promise.reject(new ConflictingRecordError(`A user with username: '${username}' already exists`))

  return Promise.resolve(shuttle);
}
