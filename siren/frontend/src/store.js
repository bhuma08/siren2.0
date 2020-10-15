import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import goalsApp from "./Reducers";

const store = createStore(goalsApp, composeWithDevTools(applyMiddleware(thunk)));

export default store;
