import { combineReducers } from "redux";
// manages form data in redux
import { reducer as formReducer } from "redux-form";

// reducers
import authReducer from "./authReducer";
import streamsReducer from "./streamsReducer";

export default combineReducers({
	auth: authReducer,
	streams: streamsReducer,
	form: formReducer,
});
