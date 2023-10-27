import { combineReducers } from "redux";
import authedUserReducer from "./authedUser";
import usersReducer from "./users";
import tweetsReducer from "./tweets";

export default combineReducers({
  authedUserReducer,
  tweetsReducer,
  usersReducer,
});
