import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import todos from "./todos";
import auth from "./auth";

export default combineReducers({
  form: formReducer,
  todos,
  auth,
});
