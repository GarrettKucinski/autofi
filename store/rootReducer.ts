import { combineReducers } from "redux";
import commentsReducer from "./reducers/commentsReducer";
import postsReducer from "./reducers/postsReducer";

export default combineReducers({
  comments: commentsReducer,
  posts: postsReducer
});
