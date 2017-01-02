import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './AuthReducer';

console.log('authReducer, authReducer', authReducer);
const rootReducer = combineReducers({
  auth: authReducer,
  routing: routerReducer,
});

export default rootReducer;
