import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './AuthReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  routing:  routerReducer,
});

export default rootReducer;
