import { combineReducers } from 'redux';
import AuthReducer from './Auth';
import GoalsReducer from './Goals';
import HabitsReducer from './Goals';

const AllReducers = combineReducers({
  AuthReducer, GoalsReducer, HabitsReducer,
});

export default AllReducers;
