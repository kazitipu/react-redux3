import { combineReducers } from "redux";
import { postReduer } from "./postReducer";
import { userReducer } from "./userReducer";

export const reducers = combineReducers({
  posts: postReduer,
  userList: userReducer,
});
