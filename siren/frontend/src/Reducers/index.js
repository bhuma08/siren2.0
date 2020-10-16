import auth from "./auth";
import Reducer from'./Reducer';
import {combineReducers} from 'redux';

const goalsApp = combineReducers({
  Reducer, auth,
})

export default goalsApp;