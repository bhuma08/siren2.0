import auth from "./auth";
import goals from "./goals";
import {combineReducers} from 'redux';

const goalsApp = combineReducers({
  goals, auth,
})

export default goalsApp;