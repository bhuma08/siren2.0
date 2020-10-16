import { combineReducers } from 'redux';
import AuthReducer from './Auth';
import GoalsReducer from './Goals';

const AllReducers = combineReducers({
  AuthReducer, GoalsReducer,
});

export default AllReducers;
