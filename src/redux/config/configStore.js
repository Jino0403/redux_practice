import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";
import counter from "../modules/counter";

const rootReducer = combineReducers({
  counter,
  todos,
});
const store = createStore(rootReducer);

export default store;
