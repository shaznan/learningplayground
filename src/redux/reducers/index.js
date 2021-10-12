import { combineReducers } from "redux";
import postReducer from "./postReducer";

//root-reducer
export default combineReducers({
  posts: postReducer,
});
