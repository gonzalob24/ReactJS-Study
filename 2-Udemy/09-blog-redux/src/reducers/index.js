import { combineReducers } from "redux";

// reducers will each be in their own file
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

// If i pass an empty reducer I will get an error, I can return anything but undefined
export default combineReducers({
	posts: postsReducer,
	users: usersReducer,
});
