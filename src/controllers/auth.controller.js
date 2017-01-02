import { SendSuccess, SendError } from 'tael';
import Shuttle from './shuttle';
import * as AuthService from '../services/auth.service';
import * as UserService from '../services/user.service';

export function login(req, res) {
  return Promise.resolve(Shuttle.liftRequest(req))
    .then(Shuttle.liftFunction(AuthService.login, 'data.username'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function registerUser(req, res) {
  return Promise.resolve(Shuttle.liftRequest(req))
    .then(UserService.findByUserName)
    .then(Shuttle.liftFunction(AuthService.registerUser, 'data'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}
